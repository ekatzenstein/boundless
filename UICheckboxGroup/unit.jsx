/* eslint no-unused-expressions:0 */

import UICheckboxGroup from './index.jsx';
import React from 'react';
import _ from 'lodash';

describe('UICheckboxGroup', () => {
    const sandbox = sinon.sandbox.create();
    const items = [{
        label: 'Male',
        name: 'gender-male',
        checked: false
    }, {
        label: 'Female',
        name: 'gender-female',
        checked: false
    }, {
        label: 'Other',
        name: 'gender-other',
        checked: false
    }];

    const checkedItems = items.map((item) => {
        return _.merge({}, item, {checked: true});
    });

    const mixedItems = items.map((item, index) => {
        return _.merge({}, item, {checked: !!(index % 2)});
    });

    afterEach(() => {
        React.unmountComponentAtNode(document.body);
        sandbox.restore();
    });

    describe('accepts', () => {
        it('an array of properly structured items', () => {
            const group = React.render(<UICheckboxGroup items={items} />, document.body);
            const node = React.findDOMNode(group);

            expect(node).to.not.be.null;
        });
    });

    describe('select all', () => {
        it('should not render if `showSelectAll` is falsy', () => {
            const group = React.render(<UICheckboxGroup items={items} />, document.body);

            expect(group.refs.selectAll).to.be.undefined;
        });

        it('should render if `showSelectAll` is truthy', () => {
            const group = React.render(<UICheckboxGroup items={items} showSelectAll={true} />, document.body);
            const node = React.findDOMNode(group.refs.selectAll);

            expect(node).to.not.be.null;
        });

        it('should render in the first position by default', () => {
            const group = React.render(<UICheckboxGroup items={items} showSelectAll={true} />, document.body);
            const node = React.findDOMNode(group.refs.selectAll);

            expect(node.parentNode.children[0]).to.equal(node);
        });

        it('should render in the last position if passed the appropriate `selectAllPosition`', () => {
            const group = React.render(
                <UICheckboxGroup
                    items={items}
                    showSelectAll={true}
                    selectAllPosition={UICheckboxGroup.Constants.SELECT_ALL_AFTER} />, document.body
            );

            const node = React.findDOMNode(group.refs.selectAll);

            expect(node.parentNode.children[3]).to.equal(node);
        });

        it('should check all children', () => {
            const stub = sandbox.stub();
            const group = React.render(
                <UICheckboxGroup
                    items={items}
                    showSelectAll={true}
                    onAllChecked={stub} />,
                document.body
            );

            group.refs.selectAll.handleChange();

            expect(stub).to.have.been.calledOnce;
        });

        it('should uncheck all children', () => {
            const stub = sandbox.stub();
            const group = React.render(
                <UICheckboxGroup
                    items={checkedItems}
                    showSelectAll={true}
                    onAllUnchecked={stub} />,
                document.body
            );

            group.refs.selectAll.handleChange();

            expect(stub).to.have.been.calledOnce;
        });

        it('should be indeterminate if children are in different checked states', () => {
            const group = React.render(
                <UICheckboxGroup
                    items={mixedItems}
                    showSelectAll={true} />,
                document.body
            );

            expect(group.refs.selectAll.props.indeterminate).to.be.true;
        });

        it('should make all children checked if clicked in indeterminate state', () => {
            const stub = sandbox.stub();
            const group = React.render(
                <UICheckboxGroup
                    items={mixedItems}
                    showSelectAll={true}
                    onAllChecked={stub} />,
                document.body
            );

            group.refs.selectAll.handleChange();

            expect(stub).to.have.been.calledOnce;
        });
    });
});