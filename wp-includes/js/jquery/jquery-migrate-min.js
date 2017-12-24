!function(e,t,r){function n(r){var n=t.console;a[r]||(a[r]=!0,e.migrateWarnings.push(r),n&&n.warn&&!e.migrateMute&&(n.warn("JQMIGRATE: "+r),e.migrateTrace&&n.trace&&n.trace()))}function o(t,r,o,a){if(Object.defineProperty)try{return void Object.defineProperty(t,r,{configurable:!0,enumerable:!0,get:function(){return n(a),o},set:function(e){n(a),o=e}})}catch(e){}e._definePropertyBroken=!0,t[r]=o}e.migrateVersion="1.4.1";var a={};e.migrateWarnings=[],t.console&&t.console.log&&t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion),void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){a={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&n("jQuery is not compatible with Quirks Mode");var i=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,c=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},u=e.attrHooks.value&&e.attrHooks.value.set||function(){},d=/^(?:input|button)$/i,l=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;o(e,"attrFn",i||{},"jQuery.attrFn is deprecated"),e.attr=function(t,r,o,a){var c=r.toLowerCase(),u=t&&t.nodeType;return a&&(s.length<4&&n("jQuery.fn.attr( props, pass ) is deprecated"),t&&!l.test(u)&&(i?r in i:e.isFunction(e.fn[r])))?e(t)[r](o):("type"===r&&void 0!==o&&d.test(t.nodeName)&&t.parentNode&&n("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var n,o=e.prop(t,r);return!0===o||"boolean"!=typeof o&&(n=t.getAttributeNode(r))&&!1!==n.nodeValue?r.toLowerCase():void 0},set:function(t,r,n){var o;return!1===r?e.removeAttr(t,n):(o=e.propFix[n]||n,o in t&&(t[o]=!0),t.setAttribute(n,n.toLowerCase())),n}},f.test(c)&&n("jQuery.fn.attr('"+c+"') might use property instead of attribute")),s.call(e,t,r,o))},e.attrHooks.value={get:function(e,t){var r=(e.nodeName||"").toLowerCase();return"button"===r?c.apply(this,arguments):("input"!==r&&"option"!==r&&n("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var r=(e.nodeName||"").toLowerCase();if("button"===r)return u.apply(this,arguments);"input"!==r&&"option"!==r&&n("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t}};var h,v,g=e.fn.init,y=e.find,m=e.parseJSON,b=/^\s*</,w=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,j=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,x=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,r,o){var a,i;return t&&"string"==typeof t&&!e.isPlainObject(r)&&(a=x.exec(e.trim(t)))&&a[0]&&(b.test(t)||n("$(html) HTML strings must start with '<' character"),a[3]&&n("$(html) HTML text after last tag is ignored"),"#"===a[0].charAt(0)&&(n("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),r&&r.context&&r.context.nodeType&&(r=r.context),e.parseHTML)?g.call(this,e.parseHTML(a[2],r&&r.ownerDocument||r||document,!0),r,o):(i=g.apply(this,arguments),t&&void 0!==t.selector?(i.selector=t.selector,i.context=t.context):(i.selector="string"==typeof t?t:"",t&&(i.context=t.nodeType?t:r||document)),i)},e.fn.init.prototype=e.fn,e.find=function(e){var t=Array.prototype.slice.call(arguments);if("string"==typeof e&&w.test(e))try{document.querySelector(e)}catch(r){e=e.replace(j,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{document.querySelector(e),n("Attribute selector with '#' must be quoted: "+t[0]),t[0]=e}catch(e){n("Attribute selector with '#' was not fixed: "+t[0])}}return y.apply(this,t)};var k;for(k in y)Object.prototype.hasOwnProperty.call(y,k)&&(e.find[k]=y[k]);e.parseJSON=function(e){return e?m.apply(this,arguments):(n("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(h=e.uaMatch(navigator.userAgent),v={},h.browser&&(v[h.browser]=!0,v.version=h.version),v.chrome?v.webkit=!0:v.webkit&&(v.safari=!0),e.browser=v),o(e,"browser",e.browser,"jQuery.browser is deprecated"),e.boxModel=e.support.boxModel="CSS1Compat"===document.compatMode,o(e,"boxModel",e.boxModel,"jQuery.boxModel is deprecated"),o(e.support,"boxModel",e.support.boxModel,"jQuery.support.boxModel is deprecated"),e.sub=function(){function t(e,r){return new t.fn.init(e,r)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function n(o,a){var i=e.fn.init.call(this,o,a,r);return i instanceof t?i:t(i)},t.fn.init.prototype=t.fn;var r=t(document);return n("jQuery.sub() is deprecated"),t},e.fn.size=function(){return n("jQuery.fn.size() is deprecated; use the .length property"),this.length};var Q=!1;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,r){var n=e.cssHooks[r]&&e.cssHooks[r].get;n&&(e.cssHooks[r].get=function(){var e;return Q=!0,e=n.apply(this,arguments),Q=!1,e})}),e.swap=function(e,t,r,o){var a,i,s={};Q||n("jQuery.swap() is undocumented and deprecated");for(i in t)s[i]=e.style[i],e.style[i]=t[i];a=r.apply(e,o||[]);for(i in t)e.style[i]=s[i];return a},e.ajaxSetup({converters:{"text json":e.parseJSON}});var M=e.fn.data;e.fn.data=function(t){var r,o,a=this[0];return!a||"events"!==t||1!==arguments.length||(r=e.data(a,t),o=e._data(a,t),void 0!==r&&r!==o||void 0===o)?M.apply(this,arguments):(n("Use of jQuery.fn.data('events') is deprecated"),o)};var C=/\/(java|ecma)script/i;e.clean||(e.clean=function(t,r,o,a){r=r||document,r=!r.nodeType&&r[0]||r,r=r.ownerDocument||r,n("jQuery.clean() is deprecated");var i,s,c,u,d=[];if(e.merge(d,e.buildFragment(t,r).childNodes),o)for(c=function(e){if(!e.type||C.test(e.type))return a?a.push(e.parentNode?e.parentNode.removeChild(e):e):o.appendChild(e)},i=0;null!=(s=d[i]);i++)e.nodeName(s,"script")&&c(s)||(o.appendChild(s),void 0!==s.getElementsByTagName&&(u=e.grep(e.merge([],s.getElementsByTagName("script")),c),d.splice.apply(d,[i+1,0].concat(u)),i+=u.length));return d});var S=e.event.add,T=e.event.remove,N=e.event.trigger,H=e.fn.toggle,A=e.fn.live,L=e.fn.die,O=e.fn.load,F="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",R=new RegExp("\\b(?:"+F+")\\b"),E=/(?:^|\s)hover(\.\S+|)\b/,J=function(t){return"string"!=typeof t||e.event.special.hover?t:(E.test(t)&&n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(E,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&o(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,r,o,a){e!==document&&R.test(t)&&n("AJAX events should be attached to document: "+t),S.call(this,e,J(t||""),r,o,a)},e.event.remove=function(e,t,r,n,o){T.call(this,e,J(t)||"",r,n,o)},e.each(["load","unload","error"],function(t,r){e.fn[r]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===r&&"string"==typeof e[0]?O.apply(this,e):(n("jQuery.fn."+r+"() is deprecated"),e.splice(0,0,r),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e.fn.toggle=function(t,r){if(!e.isFunction(t)||!e.isFunction(r))return H.apply(this,arguments);n("jQuery.fn.toggle(handler, handler...) is deprecated");var o=arguments,a=t.guid||e.guid++,i=0,s=function(r){var n=(e._data(this,"lastToggle"+t.guid)||0)%i;return e._data(this,"lastToggle"+t.guid,n+1),r.preventDefault(),o[n].apply(this,arguments)||!1};for(s.guid=a;i<o.length;)o[i++].guid=a;return this.click(s)},e.fn.live=function(t,r,o){return n("jQuery.fn.live() is deprecated"),A?A.apply(this,arguments):(e(this.context).on(t,this.selector,r,o),this)},e.fn.die=function(t,r){return n("jQuery.fn.die() is deprecated"),L?L.apply(this,arguments):(e(this.context).off(t,this.selector||"**",r),this)},e.event.trigger=function(e,t,r,o){return r||R.test(e)||n("Global events are undocumented and deprecated"),N.call(this,e,t,r||document,o)},e.each(F.split("|"),function(t,r){e.event.special[r]={setup:function(){var t=this;return t!==document&&(e.event.add(document,r+"."+e.guid,function(){e.event.trigger(r,Array.prototype.slice.call(arguments,1),t,!0)}),e._data(this,r,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,r+"."+e._data(this,r)),!1}}}),e.event.special.ready={setup:function(){this===document&&n("'ready' event is deprecated")}};var B=e.fn.andSelf||e.fn.addBack,D=e.fn.find;if(e.fn.andSelf=function(){return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),B.apply(this,arguments)},e.fn.find=function(e){var t=D.apply(this,arguments);return t.context=this.context,t.selector=this.selector?this.selector+" "+e:e,t},e.Callbacks){var _=e.Deferred,q=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];e.Deferred=function(t){var r=_(),o=r.promise();return r.pipe=o.pipe=function(){var t=arguments;return n("deferred.pipe() is deprecated"),e.Deferred(function(n){e.each(q,function(a,i){var s=e.isFunction(t[a])&&t[a];r[i[1]](function(){var t=s&&s.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[i[0]+"With"](this===o?n.promise():this,s?[t]:arguments)})}),t=null}).promise()},r.isResolved=function(){return n("deferred.isResolved is deprecated"),"resolved"===r.state()},r.isRejected=function(){return n("deferred.isRejected is deprecated"),"rejected"===r.state()},t&&t.call(r,r),r}}}(jQuery,window);