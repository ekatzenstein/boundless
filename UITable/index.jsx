import UIView from '../UIView';
import Row from './row';
import React from 'react';
import transformProp from '../UIUtils/transform';
import {chain, each, indexOf, map, merge, noop} from 'lodash';

/**
 * 1) Initial render w/ one row of cells
 * 2) Capture cell widths
 * 3) apply widths to column definitions
 * 4) render pass 2 w/ column heads and the rest of the cells
 */

class UITable extends UIView {
    initialState() {
        return {
            chokeRender: true,
            rows: [{
                data: this.props.getRow(0),
                y: 0
            }],
            columns: this.props.columns.slice(0)
        };
    }

    captureDimensions() {
        let firstRow = this.body.getElementsByClassName('ui-table-row')[0];
        let firstRowCells = firstRow.getElementsByClassName('ui-table-cell');

        this.cellHeight = firstRowCells[0].clientHeight;

        let containerHeight = React.findDOMNode(this).clientHeight;
        let numRowsToRender = Math.ceil((containerHeight * 1.2) / this.cellHeight);

        this.rowStartIndex = 0;
        this.rowEndIndex = numRowsToRender;

        this.xBound = React.findDOMNode(this).clientWidth - firstRow.clientWidth;

        this.yUpperBound = 0;
        this.yLowerBound = containerHeight - (numRowsToRender * this.cellHeight);

        this.setState({
            chokeRender: false,
            columns: map(this.state.columns, function discoverWidth(column, index) {
                return merge({
                    width: Math.ceil(firstRowCells[index].getBoundingClientRect().width)
                }, column);
            }),
            rows: map(new Array(numRowsToRender), (/*ignore*/x, index) => {
                return {
                    data: this.props.getRow(index),
                    y: this.cellHeight * index
                };
            })
        });
    }

    componentDidMount() {
        this.xCurrent = this.yCurrent = 0;
        this.body = React.findDOMNode(this.refs.body);

        this.captureDimensions();
    }

    handleScrollDown(yNext) {
        let maxIndex = this.props.totalRows;

        if (yNext < this.yLowerBound
            && this.rowEndIndex < maxIndex) {
            /* Scrolling down, so we want to move the lowest Y value to the yLowerBound and request
            the next row. Scale appropriately if a big delta and migrate as many rows as are necessary. */

            let nRowsToShift = Math.ceil((Math.abs(yNext - this.yLowerBound)) / this.cellHeight);

            if (nRowsToShift + this.rowEndIndex > maxIndex) {
                /* more rows than there is data available, truncate */
                nRowsToShift = maxIndex - this.rowEndIndex;
            }

            if (nRowsToShift > 0) {
                let rowsModified = this.state.rows.slice(0);
                let numRowsAvailable = rowsModified.length;

                if (nRowsToShift > numRowsAvailable) {
                    /* a very large scroll delta, calculate where the boundaries should be */
                    let updatedBound = (nRowsToShift - numRowsAvailable) * this.cellHeight;

                    this.yUpperBound -= updatedBound;
                    this.yLowerBound -= updatedBound;

                    this.rowStartIndex += nRowsToShift - numRowsAvailable;
                    this.rowEndIndex += nRowsToShift - numRowsAvailable;

                    nRowsToShift = numRowsAvailable;
                }

                if (nRowsToShift > 0) {
                    /* Find the lowest y-value rows and migrate them to the end of the heap */
                    let rowsSorted = chain(rowsModified).sortByOrder('y', 'asc').take(nRowsToShift).value();
                    let nextIndex;

                    each(rowsSorted, (row, arrIndex) => {
                        nextIndex = this.rowEndIndex + arrIndex;
                        rowsModified[indexOf(rowsModified, row)] = {
                            data: this.props.getRow(nextIndex),
                            y: nextIndex * this.cellHeight
                        };
                    });

                    this.rowStartIndex += nRowsToShift;
                    this.rowEndIndex += nRowsToShift;

                    this.yUpperBound -= nRowsToShift * this.cellHeight;
                    this.yLowerBound -= nRowsToShift * this.cellHeight;

                    this.setState({rows: rowsModified});
                }
            }
        }
    }

    handleScrollUp(yNext) {
        if (yNext > this.yUpperBound
            && this.rowStartIndex > 0) {
            /* Scrolling up, so we want to move the highest Y value to the yUpperBound and request
            the previous row. Scale appropriately if a big delta and migrate as many rows as are necessary. */

            let nRowsToShift = Math.ceil((Math.abs(yNext - this.yUpperBound)) / this.cellHeight);

            if (this.rowStartIndex - nRowsToShift < 0) {
                nRowsToShift = this.rowStartIndex;
            }

            if (nRowsToShift > 0) {
                let rowsModified = this.state.rows.slice(0);
                let numRowsAvailable = rowsModified.length;

                if (nRowsToShift > numRowsAvailable) {
                    /* a very large scroll delta, calculate where the boundaries should be */
                    let updatedBound = (nRowsToShift - numRowsAvailable) * this.cellHeight;

                    this.rowStartIndex -= nRowsToShift - numRowsAvailable;
                    this.rowEndIndex -= nRowsToShift - numRowsAvailable;

                    this.yUpperBound += updatedBound;
                    this.yLowerBound += updatedBound;

                    nRowsToShift = numRowsAvailable;
                }

                if (nRowsToShift > 0) {
                    /* Find the highest y-value rows and migrate them to the top of the heap */
                    let rowsSorted = chain(rowsModified).sortByOrder('y', 'desc').take(nRowsToShift).value();
                    let prevIndex;

                    each(rowsSorted, (row, arrIndex) => {
                        prevIndex = this.rowStartIndex - arrIndex - 1;
                        rowsModified[indexOf(rowsModified, row)] = {
                            data: this.props.getRow(prevIndex),
                            y: prevIndex * this.cellHeight
                        };
                    });

                    this.rowStartIndex -= nRowsToShift;
                    this.rowEndIndex -= nRowsToShift;

                    this.yUpperBound += nRowsToShift * this.cellHeight;
                    this.yLowerBound += nRowsToShift * this.cellHeight;

                    this.setState({rows: rowsModified});
                }
            }
        }
    }

    normalizeCoordinate(next, bound) {
        if (next > 0) {
            return 0;
        } else if (next < bound) {
            return bound;
        }

        return next;
    }

    applyTranslations(xNext, yNext) {
        if (xNext !== this.xCurrent) {
            this.head.style[transformProp] = `translate3d(${xNext}px, 0px, 0px)`;
        }

        this.body.style[transformProp] = `translate3d(${xNext}px, ${yNext}px, 0px)`;

        this.xCurrent = xNext;
        this.yCurrent = yNext;
    }

    handleMoveIntent(event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.deltaX === this.xCurrent
            && event.deltaY === this.yCurrent) {
            return;
        }

        if (!this.head) {
            this.head = React.findDOMNode(this.refs.head);
        } // header doesn't get rendered until the second pass

        let yNext = this.yCurrent - event.deltaY;

        if (yNext < this.yCurrent) {
            this.handleScrollDown(yNext);
        } else if (yNext > this.yCurrent) {
            this.handleScrollUp(yNext);
        }

        let xNext = this.xCurrent - event.deltaX;

        this.applyTranslations(
            this.normalizeCoordinate(xNext, this.xBound),
            this.normalizeCoordinate(yNext, this.yLowerBound)
        );
    }

    renderRows() {
        return map(this.state.rows, (row, index) => {
            return (
                <Row key={index}
                     columns={this.state.columns}
                     data={row.data}
                     y={row.y} />
            );
        });
    }

    renderBody() {
        return (
            <div ref='body'
                 className='ui-table-body'>
                {this.renderRows()}
            </div>
        );
    }

    renderHead() {
        if (!this.state.chokeRender) {
            let moddedData = {};

            this.state.columns.forEach(function pareDown(definition) {
                moddedData[definition.mapping] = definition.title;
            });

            return (
                <div ref='head' className='ui-table-header'>
                    <Row columns={this.state.columns}
                         data={moddedData} />
                </div>
            );
        }
    }

    // renderScrollbars() {
    //     return (
    //         <div>
    //             <div className='ui-table-x-scroller'>
    //                 <div ref='xNub'
    //                      className='ui-table-x-scroller-nub'
    //                      style={{
    //                         width: this.state.xNubSize,
    //                         [transformProp]: `translateX(${this.state.xProgress})`
    //                      }} />
    //             </div>
    //             <div className='ui-table-y-scroller'>
    //                 <div ref='yNub'
    //                      className='ui-table-y-scroller-nub'
    //                      style={{
    //                         height: this.state.yNubSize,
    //                         [transformProp]: `translateY(${this.state.yProgress})`
    //                      }} />
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className='ui-table-wrapper'
                 onWheel={this.handleMoveIntent.bind(this)}>
                <div ref='table'
                       className='ui-table'>
                    {this.renderHead()}
                    {this.renderBody()}
                </div>
            </div>
        );
    }
}

UITable.propTypes = {
    className: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.string),
        React.PropTypes.string
    ]),
    columns: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            mapping: React.PropTypes.string,
            resizable: React.PropTypes.bool,
            title: React.PropTypes.string,
            width: React.PropTypes.number
        })
    ),
    getRow: React.PropTypes.func
};

UITable.defaultProps = {
    columns: [],
    getRow: noop
};

export default UITable;
