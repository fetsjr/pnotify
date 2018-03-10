!function(t,e){if("function"==typeof define&&define.amd)define("PNotifyButtons",["exports","PNotify"],e);else if("undefined"!=typeof exports)e(exports,require("./PNotify"));else{var s={};e(s,t.PNotify),t.PNotifyButtons=s}}(this,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,n=(s=e)&&s.__esModule?s:{default:s};var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t};var r;function c(t){h(t,"svelte-4265543234","")}function l(t,e){var s,n,i=t._showCloser&&a(t,e),o=t._showSticker&&u(t,e);return{c:function(){var t;i&&i.c(),t="\n",s=document.createTextNode(t),o&&o.c(),n=document.createComment("")},m:function(t,e){i&&i.m(t,e),d(s,t,e),o&&o.m(t,e),d(n,t,e)},p:function(t,r){r._showCloser?i?i.p(t,r):((i=a(r,e)).c(),i.m(s.parentNode,s)):i&&(i.u(),i.d(),i=null),r._showSticker?o?o.p(t,r):((o=u(r,e)).c(),o.m(n.parentNode,n)):o&&(o.u(),o.d(),o=null)},u:function(){i&&i.u(),m(s),o&&o.u(),m(n)},d:function(){i&&i.d(),o&&o.d()}}}function a(t,e){var s,n,i,o;function r(t){e.handleCloserClick()}return{c:function(){s=_("div"),n=_("span"),this.h()},h:function(){c(s),c(n),n.className=t._closerClass,s.className=i="ui-pnotify-closer "+(!t.closerHover||t._mouseIsIn?"":"ui-pnotify-buttons-hidden"),h(s,"role","button"),s.tabIndex="0",s.title=o=t.labels.close,v(s,"click",r)},m:function(t,e){d(s,t,e),p(n,s)},p:function(t,e){t._closerClass&&(n.className=e._closerClass),(t.closerHover||t._mouseIsIn)&&i!==(i="ui-pnotify-closer "+(!e.closerHover||e._mouseIsIn?"":"ui-pnotify-buttons-hidden"))&&(s.className=i),t.labels&&o!==(o=e.labels.close)&&(s.title=o)},u:function(){m(s)},d:function(){y(s,"click",r)}}}function u(t,e){var s,n,i,o,r,l;function a(t){e.handleStickerClick()}return{c:function(){s=_("div"),n=_("span"),this.h()},h:function(){c(s),c(n),n.className=i=t._options.hide?t._pinUpClass:t._pinDownClass,s.className=o="ui-pnotify-sticker "+(!t.stickerHover||t._mouseIsIn?"":"ui-pnotify-buttons-hidden"),h(s,"role","button"),h(s,"aria-pressed",r=t._options.hide),s.tabIndex="0",s.title=l=t._options.hide?t.labels.stick:t.labels.unstick,v(s,"click",a)},m:function(t,e){d(s,t,e),p(n,s)},p:function(t,e){(t._options||t._pinUpClass||t._pinDownClass)&&i!==(i=e._options.hide?e._pinUpClass:e._pinDownClass)&&(n.className=i),(t.stickerHover||t._mouseIsIn)&&o!==(o="ui-pnotify-sticker "+(!e.stickerHover||e._mouseIsIn?"":"ui-pnotify-buttons-hidden"))&&(s.className=o),t._options&&r!==(r=e._options.hide)&&h(s,"aria-pressed",r),(t._options||t.labels)&&l!==(l=e._options.hide?e.labels.stick:e.labels.unstick)&&(s.title=l)},u:function(){m(s)},d:function(){y(s,"click",a)}}}function f(t){var e,s,i;s=t,(e=this)._observers={pre:C(),post:C()},e._handlers=C(),e._bind=s._bind,e.options=s,e.root=s.root||e,e.store=e.root.store||s.store,this._state=g(o({_notice:null,_options:{},_mouseIsIn:!1},n.default.modules.Buttons.defaults),t.data),this._recompute({sticker:1,_notice:1,closer:1,classes:1},this._state),document.getElementById("svelte-4265543234-style")||((i=_("style")).id="svelte-4265543234-style",i.textContent=".ui-pnotify-closer[svelte-4265543234],.ui-pnotify-sticker[svelte-4265543234]{float:right;margin-left:.5em;cursor:pointer}[dir=rtl] .ui-pnotify-closer,[dir=rtl] .ui-pnotify-sticker{float:left;margin-right:.5em;margin-left:0}.ui-pnotify-buttons-hidden[svelte-4265543234]{visibility:hidden}",p(i,document.head));var r=function(){this.fire("init",{module:this})}.bind(this);t.root||(this._oncreate=[]),this._fragment=l(this._state,this),this.root._oncreate.push(r),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),b(this._oncreate))}function h(t,e,s){t.setAttribute(e,s)}function _(t){return document.createElement(t)}function p(t,e){e.appendChild(t)}function d(t,e,s){e.insertBefore(t,s)}function m(t){t.parentNode.removeChild(t)}function v(t,e,s){t.addEventListener(e,s,!1)}function y(t,e,s){t.removeEventListener(e,s,!1)}function g(t){for(var e,s,n=1,i=arguments.length;n<i;n++)for(e in s=arguments[n])t[e]=s[e];return t}function b(t){for(;t&&t.length;)t.shift()()}function k(t){this.destroy=w,this.fire("destroy"),this.set=this.get=w,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function C(){return Object.create(null)}function w(){}function I(t,e,s,n,i){for(var o in e)if(s[o]){var r=n[o],c=i[o],l=e[o];if(l)for(var a=0;a<l.length;a+=1){var u=l[a];u.__calling||(u.__calling=!0,u.call(t,r,c),u.__calling=!1)}}}g(f.prototype,{initModule:function(t){var e=this;this.set(t),this.get("_notice").on("mouseenter",function(){return e.set({_mouseIsIn:!0})}),this.get("_notice").on("mouseleave",function(){return e.set({_mouseIsIn:!1})}),this.get("_notice").observe("hide",function(t){if(e.get("sticker")){var s=t?e.get("classes").pinUp:e.get("classes").pinDown;("fontawesome5"===e.get("_notice").get("icons")||"string"==typeof s&&s.match(/(^| )fa[srlb]($| )/))&&(e.set({sticker:!1}),e.set({sticker:!0}))}})},handleStickerClick:function(){var t=this.get("_notice");t.update({hide:!t.get("hide")})},handleCloserClick:function(){this.get("_notice").close(!1),this.set({_mouseIsIn:!1})}},{destroy:k,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var s=t in this._handlers&&this._handlers[t].slice();if(!s)return;for(var n=0;n<s.length;n+=1)s[n].call(this,e)},observe:function(t,e,s){var n=s&&s.defer?this._observers.post:this._observers.pre;(n[t]||(n[t]=[])).push(e),s&&!1===s.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var s=n[t].indexOf(e);~s&&n[t].splice(s,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var s=this._handlers[t]||(this._handlers[t]=[]);return s.push(e),{cancel:function(){var t=s.indexOf(e);~t&&s.splice(t,1)}}},set:function(t){if(this._set(g({},t)),this.root._lock)return;this.root._lock=!0,b(this.root._beforecreate),b(this.root._oncreate),b(this.root._aftercreate),this.root._lock=!1},teardown:k,_set:function(t){var e=this._state,s={},n=!1;for(var i in t)this._differs(t[i],e[i])&&(s[i]=n=!0);if(!n)return;this._state=g({},e,t),this._recompute(s,this._state),this._bind&&this._bind(s,this._state);this._fragment&&(I(this,this._observers.pre,s,this._state,e),this._fragment.p(s,this._state),I(this,this._observers.post,s,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"===(void 0===t?"undefined":i(t))||"function"==typeof t}}),f.prototype._recompute=function(t,e){var s,n,i,o,r,c,l,a,u,f;(t.sticker||t._notice)&&this._differs(e._showSticker,e._showSticker=(s=e.sticker,n=e._notice,s&&!(n&&n.refs.elem.classList.contains("nonblock"))))&&(t._showSticker=!0),(t.closer||t._notice)&&this._differs(e._showCloser,e._showCloser=(i=e.closer,o=e._notice,i&&!(o&&o.refs.elem.classList.contains("nonblock"))))&&(t._showCloser=!0),(t.classes||t._notice)&&(this._differs(e._pinUpClass,e._pinUpClass=(u=e.classes,(f=e._notice)?null===u.pinUp?f.get("_icons").pinUp:u.pinUp:""))&&(t._pinUpClass=!0),this._differs(e._pinDownClass,e._pinDownClass=(l=e.classes,(a=e._notice)?null===l.pinDown?a.get("_icons").pinDown:l.pinDown:""))&&(t._pinDownClass=!0),this._differs(e._closerClass,e._closerClass=(r=e.classes,(c=e._notice)?null===r.closer?c.get("_icons").closer:r.closer:""))&&(t._closerClass=!0))},(r=f).key="Buttons",r.defaults={closer:!0,closerHover:!0,sticker:!0,stickerHover:!0,labels:{close:"Close",stick:"Stick",unstick:"Unstick"},classes:{closer:null,pinUp:null,pinDown:null}},n.default.modules.Buttons=r,n.default.modulesPrependContainer.push(r),o(n.default.icons.brighttheme,{closer:"brighttheme-icon-closer",pinUp:"brighttheme-icon-sticker",pinDown:"brighttheme-icon-sticker brighttheme-icon-stuck"}),o(n.default.icons.bootstrap3,{closer:"glyphicon glyphicon-remove",pinUp:"glyphicon glyphicon-pause",pinDown:"glyphicon glyphicon-play"}),o(n.default.icons.fontawesome4,{closer:"fa fa-times",pinUp:"fa fa-pause",pinDown:"fa fa-play"}),o(n.default.icons.fontawesome5,{closer:"fas fa-times",pinUp:"fas fa-pause",pinDown:"fas fa-play"}),t.default=f});
//# sourceMappingURL=PNotifyButtons.js.map