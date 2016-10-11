/**
 * Used to create an ES5-compatible standalone build, and so it's possible to `require('enigma-uikit')``
 * and directly use a component like: `require('enigma-uikit').UIButton`
 */

global.UIKit = {};
global.UIKit.UIUtils = {};

module.exports = {
    UIArrowKeyNavigation: (global.UIKit.UIArrowKeyNavigation = require('./UIArrowKeyNavigation').default),
    UIButton: (global.UIKit.UIButton = require('./UIButton').default),
    UICheckbox: (global.UIKit.UICheckbox = require('./UICheckbox').default),
    UICheckboxGroup: (global.UIKit.UICheckboxGroup = require('./UICheckboxGroup').default),
    UIDialog: (global.UIKit.UIDialog = require('./UIDialog').default),
    UIFittedText: (global.UIKit.UIFittedText = require('./UIFittedText').default),
    UIImage: (global.UIKit.UIImage = require('./UIImage').default),
    UIModal: (global.UIKit.UIModal = require('./UIModal').default),
    UIPagination: (global.UIKit.UIPagination = require('./UIPagination').default),
    UIPopover: (global.UIKit.UIPopover = require('./UIPopover').default),
    UIProgress: (global.UIKit.UIProgress = require('./UIProgress').default),
    UIProgressiveDisclosure: (global.UIKit.UIProgressiveDisclosure = require('./UIProgressiveDisclosure').default),
    UIRadio: (global.UIKit.UIRadio = require('./UIRadio').default),
    UISegmentedControl: (global.UIKit.UISegmentedControl = require('./UISegmentedControl').default),
    UITokenizedInput: (global.UIKit.UITokenizedInput = require('./UITokenizedInput').default),
    UITextualInput: (global.UIKit.UITextualInput = require('./UITextualInput').default),
    UITooltip: (global.UIKit.UITooltip = require('./UITooltip').default),
    UITypeaheadInput: (global.UIKit.UITypeaheadInput = require('./UITypeaheadInput').default),
    UIUtils: {
        extractChildProps: (global.UIKit.UIUtils.extractChildProps = require('./UIUtils/extractChildProps').default),
        notify: (global.UIKit.UIUtils.notify = require('./UIUtils/notify').default),
        transformProperty: (global.UIKit.UIUtils.transformProperty = require('./UIUtils/transformProperty').default),
        uuid: (global.UIKit.UIUtils.uuid = require('./UIUtils/uuid').default),
    },
};
