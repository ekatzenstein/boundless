webpackJsonp([1],{489:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(545),u=n.n(i),l=n(544),a=n.n(l),s=n(178),f=n.n(s),p=n(541),h=n.n(p),d=n(0),v=(n.n(d),n(100)),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=function(e){function t(){var e,n,c,i;o(this,t);for(var u=arguments.length,l=Array(u),a=0;a<u;a++)l[a]=arguments[a];return n=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),c.state={items:[{inputProps:{checked:!1,name:"likes-science"},label:"Science"},{inputProps:{checked:!1,name:"likes-math"},label:"Mathematics"},{inputProps:{checked:!1,name:"likes-tech"},label:"Technology"},{inputProps:{checked:!1,name:"likes-art"},label:"Art"},{inputProps:{checked:!1,name:"likes-sports"},label:"Sports"}]},c.handleAllChecked=function(){c.mutateAll({inputProps:{checked:!0}})},c.handleAllUnchecked=function(){c.mutateAll({inputProps:{checked:!1}})},c.handleChildChecked=function(e){c.mutateOne(e,{inputProps:{checked:!0}})},c.handleChildUnchecked=function(e){c.mutateOne(e,{inputProps:{checked:!1}})},i=n,r(c,i)}return c(t,e),b(t,[{key:"mutateAll",value:function(e){this.setState({items:f()(this.state.items,function(t){return a()({},t,e)})})}},{key:"mutateOne",value:function(e,t){this.setState({items:f()(this.state.items,function(n){return n.inputProps.name!==e?n:a()({},n,t)})})}},{key:"renderFeedback",value:function(){if(u()(this.state.items,{inputProps:{checked:!0}})){var e=f()(h()(this.state.items,{inputProps:{checked:!0}}),"label"),t=e.length-1;return n.i(d.createElement)("p",null,"You said you like: ",1===e.length?e[0]:[e.slice(0,t).join(", "),"and",e.slice(t)].join(" "),".")}}},{key:"render",value:function(){return n.i(d.createElement)("div",null,n.i(d.createElement)("p",null,"What subjects are you interested in?"),n.i(d.createElement)(v.default,{className:"checkbox-group-demo",items:this.state.items,selectAll:v.default.selectAll.AFTER,selectAllProps:{label:"All of the above"},onAllChecked:this.handleAllChecked,onAllUnchecked:this.handleAllUnchecked,onChildChecked:this.handleChildChecked,onChildUnchecked:this.handleChildUnchecked}),n.i(d.createElement)("br",null),this.renderFeedback())}}]),t}(d.PureComponent);t.default=y,y.__docgenInfo={description:""}},518:function(e,t,n){function o(e){return c(e)&&r(e)}var r=n(15),c=n(14);e.exports=o},523:function(e,t,n){function o(e,t,n){(void 0===n||c(e[t],n))&&(void 0!==n||t in e)||r(e,t,n)}var r=n(174),c=n(36);e.exports=o},529:function(e,t,n){function o(e,t){var n=[];return r(e,function(e,o,r){t(e,o,r)&&n.push(e)}),n}var r=n(173);e.exports=o},530:function(e,t,n){function o(e,t,n,s,f){e!==t&&i(t,function(i,a){if(l(i))f||(f=new r),u(e,t,a,n,o,s,f);else{var p=s?s(e[a],i,a+"",e,t,f):void 0;void 0===p&&(p=i),c(e,a,p)}},a)}var r=n(93),c=n(523),i=n(186),u=n(531),l=n(8),a=n(177);e.exports=o},531:function(e,t,n){function o(e,t,n,o,m,k,x){var P=e[n],g=t[n],O=x.get(g);if(O)return void r(e,n,O);var j=k?k(P,g,n+"",e,t,x):void 0,w=void 0===j;if(w){var A=s(g),C=!A&&p(g),_=!A&&!C&&b(g);j=g,A||C||_?s(P)?j=P:f(P)?j=u(P):C?(w=!1,j=c(g,!0)):_?(w=!1,j=i(g,!0)):j=[]:v(g)||a(g)?(j=P,a(P)?j=y(P):(!d(P)||o&&h(P))&&(j=l(g))):w=!1}w&&(x.set(g,j),m(j,g,o,k,x),x.delete(g)),r(e,n,j)}var r=n(523),c=n(535),i=n(536),u=n(95),l=n(539),a=n(55),s=n(5),f=n(518),p=n(97),h=n(98),d=n(8),v=n(543),b=n(99),y=n(546);e.exports=o},532:function(e,t,n){function o(e,t){var n;return r(e,function(e,o,r){return!(n=t(e,o,r))}),!!n}var r=n(173);e.exports=o},534:function(e,t,n){function o(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}var r=n(180);e.exports=o},535:function(e,t,n){(function(e){function o(e,t){if(t)return e.slice();var n=e.length,o=s?s(n):new e.constructor(n);return e.copy(o),o}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(6),i="object"==r(t)&&t&&!t.nodeType&&t,u=i&&"object"==r(e)&&e&&!e.nodeType&&e,l=u&&u.exports===i,a=l?c.Buffer:void 0,s=a?a.allocUnsafe:void 0;e.exports=o}).call(t,n(56)(e))},536:function(e,t,n){function o(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var r=n(534);e.exports=o},537:function(e,t,n){function o(e,t,n,o){var i=!n;n||(n={});for(var u=-1,l=t.length;++u<l;){var a=t[u],s=o?o(n[a],e[a],a,n,e):void 0;void 0===s&&(s=e[a]),i?c(n,a,s):r(n,a,s)}return n}var r=n(185),c=n(174);e.exports=o},538:function(e,t,n){function o(e){return r(function(t,n){var o=-1,r=n.length,i=r>1?n[r-1]:void 0,u=r>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(r--,i):void 0,u&&c(n[0],n[1],u)&&(i=r<3?void 0:i,r=1),t=Object(t);++o<r;){var l=n[o];l&&e(t,l,o,i)}return t})}var r=n(91),c=n(176);e.exports=o},539:function(e,t,n){function o(e){return"function"!=typeof e.constructor||i(e)?{}:r(c(e))}var r=n(54),c=n(175),i=n(96);e.exports=o},541:function(e,t,n){function o(e,t){return(u(e)?r:c)(e,i(t,3))}var r=n(182),c=n(529),i=n(52),u=n(5);e.exports=o},543:function(e,t,n){function o(e){if(!i(e)||r(e)!=u)return!1;var t=c(e);if(null===t)return!0;var n=f.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==p}var r=n(18),c=n(175),i=n(14),u="[object Object]",l=Function.prototype,a=Object.prototype,s=l.toString,f=a.hasOwnProperty,p=s.call(Object);e.exports=o},544:function(e,t,n){var o=n(530),r=n(538),c=r(function(e,t,n){o(e,t,n)});e.exports=c},545:function(e,t,n){function o(e,t,n){var o=u(e)?r:i;return n&&l(e,t,n)&&(t=void 0),o(e,c(t,3))}var r=n(184),c=n(52),i=n(532),u=n(5),l=n(176);e.exports=o},546:function(e,t,n){function o(e){return r(e,c(e))}var r=n(537),c=n(177);e.exports=o}});