module.exports=function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=6)}([function(e,r){e.exports=require("boundless-dialog")},function(e,r){e.exports=require("boundless-portal")},function(e,r){e.exports=require("boundless-utils-object-intersection")},function(e,r){e.exports=require("boundless-utils-omit-keys")},function(e,r){e.exports=require("classnames")},function(e,r){e.exports=require("react")},function(e,r,t){"use strict";function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function s(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=t(5),p=(t.n(a),t(4)),u=t.n(p),i=t(0),l=t.n(i),c=t(1),f=t.n(c),y=t(2),d=t.n(y),m=t(3),b=t.n(m),P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),v=function(e){function r(){return o(this,r),n(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return s(r,e),h(r,[{key:"render",value:function(){var e=this,o=this.props;return t.i(a.createElement)(f.a,o.portalProps,t.i(a.createElement)("div",P({},b()(o,r.internalKeys),{ref:function(r){return e.$modal=r},className:u()("b-modal-wrapper",o.className)}),t.i(a.createElement)("div",P({},o.maskProps,{className:u()("b-modal-mask",o.maskProps.className)})),t.i(a.createElement)(l.a,P({},d()(o,l.a.defaultProps),o.modalProps,{className:u()("b-modal",o.modalProps.className)}),o.children)))}}]),r}(a.PureComponent);v.propTypes=P({},l.a.propTypes,{maskProps:a.PropTypes.shape({"*":a.PropTypes.any}),modalProps:a.PropTypes.shape({"*":a.PropTypes.any}),portalProps:a.PropTypes.shape(f.a.propTypes)}),v.defaultProps=P({},l.a.defaultProps,{captureFocus:!0,maskProps:{},modalProps:{},portalProps:{}}),v.internalKeys=Object.keys(v.defaultProps),r.default=v}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDJiZjA5NDlmOGEwNjliMTJiMmVmIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qczJcIjpcImJvdW5kbGVzcy1kaWFsb2dcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzMlwiOlwiYm91bmRsZXNzLXBvcnRhbFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJib3VuZGxlc3MtdXRpbHMtb2JqZWN0LWludGVyc2VjdGlvblwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJib3VuZGxlc3MtdXRpbHMtb21pdC1rZXlzXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzMlwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvYm91bmRsZXNzLW1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaW5zdGFsbGVkTW9kdWxlcyIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwidmFsdWUiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJuIiwiX19lc01vZHVsZSIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInJlcXVpcmUiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ3cml0YWJsZSIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18iLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fIiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NsYXNzbmFtZXNfX19kZWZhdWx0IiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc19kaWFsb2dfXyIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfZGlhbG9nX19fZGVmYXVsdCIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19ib3VuZGxlc3NfcG9ydGFsX18iLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfYm91bmRsZXNzX3BvcnRhbF9fX2RlZmF1bHQiLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfYm91bmRsZXNzX3V0aWxzX29iamVjdF9pbnRlcnNlY3Rpb25fXyIsIl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9ib3VuZGxlc3NfdXRpbHNfb2JqZWN0X2ludGVyc2VjdGlvbl9fX2RlZmF1bHQiLCJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfYm91bmRsZXNzX3V0aWxzX29taXRfa2V5c19fIiwiX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfX19kZWZhdWx0IiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiTW9kYWwiLCJfUHVyZUNvbXBvbmVudCIsInRoaXMiLCJnZXRQcm90b3R5cGVPZiIsImFwcGx5IiwiX3RoaXMyIiwiYSIsInBvcnRhbFByb3BzIiwiaW50ZXJuYWxLZXlzIiwicmVmIiwibm9kZSIsIiRtb2RhbCIsImNsYXNzTmFtZSIsIm1hc2tQcm9wcyIsImRlZmF1bHRQcm9wcyIsIm1vZGFsUHJvcHMiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsInNoYXBlIiwiKiIsImFueSIsImNhcHR1cmVGb2N1cyIsImtleXMiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPQyxRQUNFLFNBQVVDLEdDR25CLFFBQUFDLEdBQUFDLEdBR0EsR0FBQUMsRUFBQUQsR0FDQSxNQUFBQyxHQUFBRCxHQUFBSCxPQUdBLElBQUFELEdBQUFLLEVBQUFELElBQ0FFLEVBQUFGLEVBQ0FHLEdBQUEsRUFDQU4sV0FVQSxPQU5BQyxHQUFBRSxHQUFBSSxLQUFBUixFQUFBQyxRQUFBRCxJQUFBQyxRQUFBRSxHQUdBSCxFQUFBTyxHQUFBLEVBR0FQLEVBQUFDLFFBdkJBLEdBQUFJLEtBK0RBLE9BbkNBRixHQUFBTSxFQUFBUCxFQUdBQyxFQUFBTyxFQUFBTCxFQUdBRixFQUFBRyxFQUFBLFNBQUFLLEdBQTJDLE1BQUFBLElBRzNDUixFQUFBUyxFQUFBLFNBQUFYLEVBQUFZLEVBQUFDLEdBQ0FYLEVBQUFZLEVBQUFkLEVBQUFZLElBQ0FHLE9BQUFDLGVBQUFoQixFQUFBWSxHQUNBSyxjQUFBLEVBQ0FDLFlBQUEsRUFDQUMsSUFBQU4sS0FNQVgsRUFBQWtCLEVBQUEsU0FBQXJCLEdBQ0EsR0FBQWMsR0FBQWQsS0FBQXNCLFdBQ0EsV0FBMkIsTUFBQXRCLEdBQUEsU0FDM0IsV0FBaUMsTUFBQUEsR0FFakMsT0FEQUcsR0FBQVMsRUFBQUUsRUFBQSxJQUFBQSxHQUNBQSxHQUlBWCxFQUFBWSxFQUFBLFNBQUFRLEVBQUFDLEdBQXNELE1BQUFSLFFBQUFTLFVBQUFDLGVBQUFsQixLQUFBZSxFQUFBQyxJQUd0RHJCLEVBQUF3QixFQUFBLEdBR0F4QixJQUFBeUIs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bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvdW5kbGVzcy1kaWFsb2dcIik7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib3VuZGxlc3MtcG9ydGFsXCIpO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm91bmRsZXNzLXV0aWxzLW9iamVjdC1pbnRlcnNlY3Rpb25cIik7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib3VuZGxlc3MtdXRpbHMtb21pdC1rZXlzXCIpO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jbGFzc25hbWVzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jbGFzc25hbWVzX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfYm91bmRsZXNzX2RpYWxvZ19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfYm91bmRsZXNzX2RpYWxvZ19fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2JvdW5kbGVzc19kaWFsb2dfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX2JvdW5kbGVzc19wb3J0YWxfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX2JvdW5kbGVzc19wb3J0YWxfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19ib3VuZGxlc3NfcG9ydGFsX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9ib3VuZGxlc3NfdXRpbHNfb2JqZWN0X2ludGVyc2VjdGlvbl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfYm91bmRsZXNzX3V0aWxzX29iamVjdF9pbnRlcnNlY3Rpb25fX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9ib3VuZGxlc3NfdXRpbHNfb2JqZWN0X2ludGVyc2VjdGlvbl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfYm91bmRsZXNzX3V0aWxzX29taXRfa2V5c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfYm91bmRsZXNzX3V0aWxzX29taXRfa2V5c19fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X2JvdW5kbGVzc191dGlsc19vbWl0X2tleXNfXyk7XG52YXIgX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odGFyZ2V0KXtmb3IodmFyIGk9MTtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXt2YXIgc291cmNlPWFyZ3VtZW50c1tpXTtmb3IodmFyIGtleSBpbiBzb3VyY2Upe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2Usa2V5KSl7dGFyZ2V0W2tleV09c291cmNlW2tleV07fX19cmV0dXJuIHRhcmdldDt9O3ZhciBfY3JlYXRlQ2xhc3M9ZnVuY3Rpb24oKXtmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCxwcm9wcyl7Zm9yKHZhciBpPTA7aTxwcm9wcy5sZW5ndGg7aSsrKXt2YXIgZGVzY3JpcHRvcj1wcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGU9ZGVzY3JpcHRvci5lbnVtZXJhYmxlfHxmYWxzZTtkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZT10cnVlO2lmKFwidmFsdWVcImluIGRlc2NyaXB0b3IpZGVzY3JpcHRvci53cml0YWJsZT10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcik7fX1yZXR1cm4gZnVuY3Rpb24oQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7aWYocHJvdG9Qcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKTtpZihzdGF0aWNQcm9wcylkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fTt9KCk7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO319ZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZixjYWxsKXtpZighc2VsZil7dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO31yZXR1cm4gY2FsbCYmKHR5cGVvZiBjYWxsPT09XCJvYmplY3RcInx8dHlwZW9mIGNhbGw9PT1cImZ1bmN0aW9uXCIpP2NhbGw6c2VsZjt9ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLHN1cGVyQ2xhc3Mpe2lmKHR5cGVvZiBzdXBlckNsYXNzIT09XCJmdW5jdGlvblwiJiZzdXBlckNsYXNzIT09bnVsbCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHN1cGVyQ2xhc3MpO31zdWJDbGFzcy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzJiZzdXBlckNsYXNzLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnN1YkNsYXNzLGVudW1lcmFibGU6ZmFsc2Usd3JpdGFibGU6dHJ1ZSxjb25maWd1cmFibGU6dHJ1ZX19KTtpZihzdXBlckNsYXNzKU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3Msc3VwZXJDbGFzcyk6c3ViQ2xhc3MuX19wcm90b19fPXN1cGVyQ2xhc3M7fXZhciBNb2RhbD1mdW5jdGlvbihfUHVyZUNvbXBvbmVudCl7X2luaGVyaXRzKE1vZGFsLF9QdXJlQ29tcG9uZW50KTtmdW5jdGlvbiBNb2RhbCgpe19jbGFzc0NhbGxDaGVjayh0aGlzLE1vZGFsKTtyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywoTW9kYWwuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpO31fY3JlYXRlQ2xhc3MoTW9kYWwsW3trZXk6J3JlbmRlcicsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF90aGlzMj10aGlzO3ZhciBwcm9wcz10aGlzLnByb3BzO3JldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJjcmVhdGVFbGVtZW50XCJdKShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfYm91bmRsZXNzX3BvcnRhbF9fX2RlZmF1bHQuYSxwcm9wcy5wb3J0YWxQcm9wcyxfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJjcmVhdGVFbGVtZW50XCJdKSgnZGl2JyxfZXh0ZW5kcyh7fSxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfYm91bmRsZXNzX3V0aWxzX29taXRfa2V5c19fX2RlZmF1bHQoKShwcm9wcyxNb2RhbC5pbnRlcm5hbEtleXMpLHtyZWY6ZnVuY3Rpb24gcmVmKG5vZGUpe3JldHVybiBfdGhpczIuJG1vZGFsPW5vZGU7fSxjbGFzc05hbWU6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NsYXNzbmFtZXNfX19kZWZhdWx0KCkoJ2ItbW9kYWwtd3JhcHBlcicscHJvcHMuY2xhc3NOYW1lKX0pLF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcImNyZWF0ZUVsZW1lbnRcIl0pKCdkaXYnLF9leHRlbmRzKHt9LHByb3BzLm1hc2tQcm9wcyx7Y2xhc3NOYW1lOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jbGFzc25hbWVzX19fZGVmYXVsdCgpKCdiLW1vZGFsLW1hc2snLHByb3BzLm1hc2tQcm9wcy5jbGFzc05hbWUpfSkpLF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcImNyZWF0ZUVsZW1lbnRcIl0pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfZGlhbG9nX19fZGVmYXVsdC5hLF9leHRlbmRzKHt9LF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9ib3VuZGxlc3NfdXRpbHNfb2JqZWN0X2ludGVyc2VjdGlvbl9fX2RlZmF1bHQoKShwcm9wcyxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfYm91bmRsZXNzX2RpYWxvZ19fX2RlZmF1bHQuYS5kZWZhdWx0UHJvcHMpLHByb3BzLm1vZGFsUHJvcHMse2NsYXNzTmFtZTpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY2xhc3NuYW1lc19fX2RlZmF1bHQoKSgnYi1tb2RhbCcscHJvcHMubW9kYWxQcm9wcy5jbGFzc05hbWUpfSkscHJvcHMuY2hpbGRyZW4pKSk7fX1dKTtyZXR1cm4gTW9kYWw7fShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlB1cmVDb21wb25lbnRcIl0pO01vZGFsLnByb3BUeXBlcz1fZXh0ZW5kcyh7fSxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfYm91bmRsZXNzX2RpYWxvZ19fX2RlZmF1bHQuYS5wcm9wVHlwZXMse21hc2tQcm9wczpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlByb3BUeXBlc1wiXS5zaGFwZSh7JyonOl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fW1wiUHJvcFR5cGVzXCJdLmFueX0pLG1vZGFsUHJvcHM6X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19bXCJQcm9wVHlwZXNcIl0uc2hhcGUoeycqJzpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlByb3BUeXBlc1wiXS5hbnl9KSxwb3J0YWxQcm9wczpfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX1tcIlByb3BUeXBlc1wiXS5zaGFwZShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfYm91bmRsZXNzX3BvcnRhbF9fX2RlZmF1bHQuYS5wcm9wVHlwZXMpfSk7TW9kYWwuZGVmYXVsdFByb3BzPV9leHRlbmRzKHt9LF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9ib3VuZGxlc3NfZGlhbG9nX19fZGVmYXVsdC5hLmRlZmF1bHRQcm9wcyx7Y2FwdHVyZUZvY3VzOnRydWUsbWFza1Byb3BzOnt9LG1vZGFsUHJvcHM6e30scG9ydGFsUHJvcHM6e319KTtNb2RhbC5pbnRlcm5hbEtleXM9T2JqZWN0LmtleXMoTW9kYWwuZGVmYXVsdFByb3BzKTsvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gTW9kYWw7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXguanMiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYmYwOTQ5ZjhhMDY5YjEyYjJlZiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvdW5kbGVzcy1kaWFsb2dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJib3VuZGxlc3MtZGlhbG9nXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvdW5kbGVzcy1wb3J0YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJib3VuZGxlc3MtcG9ydGFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvdW5kbGVzcy11dGlscy1vYmplY3QtaW50ZXJzZWN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzMlwiOlwiYm91bmRsZXNzLXV0aWxzLW9iamVjdC1pbnRlcnNlY3Rpb25cIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm91bmRsZXNzLXV0aWxzLW9taXQta2V5c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qczJcIjpcImJvdW5kbGVzcy11dGlscy1vbWl0LWtleXNcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanMyXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnQsIFByb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2JvdW5kbGVzcy1kaWFsb2cnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdib3VuZGxlc3MtcG9ydGFsJztcbmltcG9ydCBleHRyYWN0Q2hpbGRQcm9wcyBmcm9tICdib3VuZGxlc3MtdXRpbHMtb2JqZWN0LWludGVyc2VjdGlvbic7XG5pbXBvcnQgb21pdCBmcm9tICdib3VuZGxlc3MtdXRpbHMtb21pdC1rZXlzJztcblxuLyoqXG5Nb2RhbCBpcyBhbiBlbmhhbmNlbWVudCB1cG9uIFtEaWFsb2ddKGh0dHBzOi8vZ2l0aHViLmNvbS9lbmlnbWEtaW8vYm91bmRsZXNzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2JvdW5kbGVzcy1kaWFsb2cpLiBUeXBpY2FsbHksIGEgbWFza2luZyBsYXllciBpcyBwcm92aWRlZCB0byBvYnNjdXJlIHRoZSByZXN0IG9mIHRoZSBwYWdlIGluIHNvbWUgZmFzaGlvbiwgd2hpbGUgYWxzbyBibG9ja2luZyBvdXRzaWRlIGNsaWNrIGFuZCBrZXlzdHJva2UgYWNjZXNzIHVudGlsIHRoZSBtb2RhbCBpcyBkaXNtaXNzZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgLi4uRGlhbG9nLnByb3BUeXBlcyxcblxuICAgICAgICBtYXNrUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGFueSBbUmVhY3Qtc3VwcG9ydGVkIGF0dHJpYnV0ZV0oaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90YWdzLWFuZC1hdHRyaWJ1dGVzLmh0bWwjaHRtbC1hdHRyaWJ1dGVzKVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnKic6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIH0pLFxuXG4gICAgICAgIG1vZGFsUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGFueSBbUmVhY3Qtc3VwcG9ydGVkIGF0dHJpYnV0ZV0oaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90YWdzLWFuZC1hdHRyaWJ1dGVzLmh0bWwjaHRtbC1hdHRyaWJ1dGVzKVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnKic6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHBvcnRhbFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoUG9ydGFsLnByb3BUeXBlcyksXG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgLi4uRGlhbG9nLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgY2FwdHVyZUZvY3VzOiB0cnVlLFxuICAgICAgICBtYXNrUHJvcHM6IHt9LFxuICAgICAgICBtb2RhbFByb3BzOiB7fSxcbiAgICAgICAgcG9ydGFsUHJvcHM6IHt9LFxuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcm5hbEtleXMgPSBPYmplY3Qua2V5cyhNb2RhbC5kZWZhdWx0UHJvcHMpXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UG9ydGFsIHsuLi5wcm9wcy5wb3J0YWxQcm9wc30+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICB7Li4ub21pdChwcm9wcywgTW9kYWwuaW50ZXJuYWxLZXlzKX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXsobm9kZSkgPT4gKHRoaXMuJG1vZGFsID0gbm9kZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2ItbW9kYWwtd3JhcHBlcicsIHByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHMubWFza1Byb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnYi1tb2RhbC1tYXNrJywgcHJvcHMubWFza1Byb3BzLmNsYXNzTmFtZSl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmV4dHJhY3RDaGlsZFByb3BzKHByb3BzLCBEaWFsb2cuZGVmYXVsdFByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5tb2RhbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnYi1tb2RhbCcsIHByb3BzLm1vZGFsUHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvYm91bmRsZXNzLW1vZGFsL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==