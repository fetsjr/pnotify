import PNotify from"./PNotify.js";function data(){return Object.assign({_notice:null,_options:{}},PNotify.modules.NonBlock.defaults)}var methods={initModule(t){this.set(t),this.doNonBlockClass()},update(){this.doNonBlockClass()},doNonBlockClass(){this.get("nonblock")?this.get("_notice").addModuleClass("nonblock"):this.get("_notice").removeModuleClass("nonblock")}};function setup(t){t.key="NonBlock",t.defaults={nonblock:!1},t.init=(o=>new t({target:document.body,data:{_notice:o}})),PNotify.modules.NonBlock=t}function create_main_fragment(t,o){return{c:noop,m:noop,p:noop,u:noop,d:noop}}function PNotifyNonBlock(t){init(this,t),this._state=assign(data(),t.data),this._fragment=create_main_fragment(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function noop(){}function init(t,o){t._observers={pre:blankObject(),post:blankObject()},t._handlers=blankObject(),t._bind=o._bind,t.options=o,t.root=o.root||t,t.store=t.root.store||o.store}function assign(t){for(var o,e,n=1,s=arguments.length;n<s;n++)for(o in e=arguments[n])t[o]=e[o];return t}function destroy(t){this.destroy=noop,this.fire("destroy"),this.set=this.get=noop,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function get(t){return t?this._state[t]:this._state}function fire(t,o){var e=t in this._handlers&&this._handlers[t].slice();if(e)for(var n=0;n<e.length;n+=1)e[n].call(this,o)}function observe(t,o,e){var n=e&&e.defer?this._observers.post:this._observers.pre;return(n[t]||(n[t]=[])).push(o),e&&!1===e.init||(o.__calling=!0,o.call(this,this._state[t]),o.__calling=!1),{cancel:function(){var e=n[t].indexOf(o);~e&&n[t].splice(e,1)}}}function on(t,o){if("teardown"===t)return this.on("destroy",o);var e=this._handlers[t]||(this._handlers[t]=[]);return e.push(o),{cancel:function(){var t=e.indexOf(o);~t&&e.splice(t,1)}}}function set(t){this._set(assign({},t)),this.root._lock||(this.root._lock=!0,callAll(this.root._beforecreate),callAll(this.root._oncreate),callAll(this.root._aftercreate),this.root._lock=!1)}function _set(t){var o=this._state,e={},n=!1;for(var s in t)this._differs(t[s],o[s])&&(e[s]=n=!0);n&&(this._state=assign({},o,t),this._recompute(e,this._state),this._bind&&this._bind(e,this._state),this._fragment&&(dispatchObservers(this,this._observers.pre,e,this._state,o),this._fragment.p(e,this._state),dispatchObservers(this,this._observers.post,e,this._state,o)))}function _mount(t,o){this._fragment.m(t,o)}function _unmount(){this._fragment&&this._fragment.u()}function _differs(t,o){return t!=t?o==o:t!==o||t&&"object"==typeof t||"function"==typeof t}function blankObject(){return Object.create(null)}function callAll(t){for(;t&&t.length;)t.shift()()}function dispatchObservers(t,o,e,n,s){for(var i in o)if(e[i]){var r=n[i],a=s[i],l=o[i];if(l)for(var c=0;c<l.length;c+=1){var f=l[c];f.__calling||(f.__calling=!0,f.call(t,r,a),f.__calling=!1)}}}assign(PNotifyNonBlock.prototype,methods,{destroy:destroy,get:get,fire:fire,observe:observe,on:on,set:set,teardown:destroy,_set:_set,_mount:_mount,_unmount:_unmount,_differs:_differs}),PNotifyNonBlock.prototype._recompute=noop,setup(PNotifyNonBlock);export default PNotifyNonBlock;
//# sourceMappingURL=PNotifyNonBlock.js.map