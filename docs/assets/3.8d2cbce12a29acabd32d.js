webpackJsonp([3,30],{489:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(531),l=r.n(a),u=r(0),c=(r.n(u),r(34)),f=r(103),p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),m=function(e){function t(){var e,r,n,s;o(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={barProgress:0,meterProgress:0},s=r,i(n,s)}return s(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;l()(this.refs,function(t,r){return e.updateProgress(r)})}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.barTimerHandle),window.clearTimeout(this.meterTimerHandle)}},{key:"updateProgress",value:function(e){var t=this;this.state[e+"Progress"]<100&&(this[e+"TimerHandle"]=window.setTimeout(function(){t.setState(n({},e+"Progress",t.state[e+"Progress"]+1),function(){t.updateProgress(e)})},35))}},{key:"resetProgress",value:function(e){var t=this;window.clearTimeout(this[e+"TimerHandle"]),this.setState(n({},e+"Progress",0),function(){t.updateProgress(e)})}},{key:"render",value:function(){return r.i(u.createElement)("div",{className:"progress-demo spread align-end"},r.i(u.createElement)("figure",null,r.i(u.createElement)("h5",null,"Horizontal Progress Bar"),r.i(u.createElement)(f.default,{ref:"bar","aria-label":this.state.barProgress+"% complete",progress:this.state.barProgress+"%"}),r.i(u.createElement)(c.default,{onPressed:this.resetProgress.bind(this,"bar"),style:{marginTop:"1rem"}},"Reset")),r.i(u.createElement)("figure",null,r.i(u.createElement)("h5",null,"Filling Progress Meter"),r.i(u.createElement)(f.default,{ref:"meter",id:"progress-meter","aria-label":this.state.meterProgress+"% complete",progress:this.state.meterProgress+"%",tweenProperty:"height"}),r.i(u.createElement)(c.default,{onPressed:this.resetProgress.bind(this,"meter"),style:{marginTop:"1rem"}},"Reset")),r.i(u.createElement)("figure",null,r.i(u.createElement)("h5",null,"Indeterminate Progress Bar"),r.i(u.createElement)(f.default,{ref:"indeterminate","aria-label":"Processing..."})))}}]),t}(u.PureComponent);t.default=m,m.__docgenInfo={description:""}},524:function(e,t,r){function n(e){return"function"==typeof e?e:o}var o=r(17);e.exports=n},531:function(e,t,r){e.exports=r(533)},533:function(e,t,r){function n(e,t){var r=a(e)?o:i;return r(e,s(t))}var o=r(182),i=r(174),s=r(524),a=r(5);e.exports=n}});