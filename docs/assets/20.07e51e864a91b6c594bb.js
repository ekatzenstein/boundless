webpackJsonp([20],{498:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(0),u=(o.n(l),o(34)),c=o(101),i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function(e){function t(){var e,o,a,l;n(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return o=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={showModal:!1},a.toggleModal=function(){a.setState({showModal:!a.state.showModal})},l=o,r(a,l)}return a(t,e),i(t,[{key:"renderModal",value:function(){if(this.state.showModal)return o.i(l.createElement)(c.default,{className:"demo-modal"},o.i(l.createElement)("h3",null,"Account Deletion"),o.i(l.createElement)("p",null,"Are you sure you want to remove your account permanently?"),o.i(l.createElement)(u.default,{onPressed:this.toggleModal},"Yes"),o.i(l.createElement)(u.default,{className:"demo-modal-cancel-button",onPressed:this.toggleModal},"No"))}},{key:"render",value:function(){return o.i(l.createElement)("div",null,o.i(l.createElement)(u.default,{ref:"trigger",onPressed:this.toggleModal},"Delete Account"),this.renderModal())}}]),t}(l.PureComponent);t.default=s,s.__docgenInfo={description:"",displayName:"ModalDemo"}}});