!function(){var e={},n=function(e){for(var n=o(e),t=e.split("."),i=Function("return this;")(),r=0;r<t.length-1;++r)void 0===i[t[r]]&&(i[t[r]]={}),i=i[t[r]];i[t[t.length-1]]=n},t=function(n){for(var t=e[n],i=t.deps,r=t.defn,l=i.length,u=new Array(l),c=0;c<l;++c)u[c]=o(i[c]);var a=r.apply(null,u);if(void 0===a)throw"module ["+n+"] returned undefined";t.instance=a},i=function(n,t,i){if("string"!=typeof n)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+n;if(void 0===i)throw"no definition function for "+n;e[n]={deps:t,defn:i,instance:void 0}},o=function(n){var i=e[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&t(n),i.instance},r=function(e,n){for(var t=e.length,i=new Array(t),r=0;r<t;++r)i.push(o(e[r]));n.apply(null,n)};({}).bolt={module:{api:{define:i,require:r,demand:o}}};var l=i,u=r,c=o;(function(e,n){l(e,[],function(){return n})})("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),l("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.PluginManager")}),l("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.DOMUtils")}),l("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Tools")}),l("tinymce.core.EditorManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.EditorManager")}),l("tinymce.core.util.Delay",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Delay")}),l("tinymce.core.Env",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.Env")}),l("tinymce.plugins.tabfocus.Plugin",["tinymce.core.PluginManager","tinymce.core.dom.DOMUtils","tinymce.core.util.Tools","tinymce.core.EditorManager","tinymce.core.util.Delay","tinymce.core.Env"],function(e,n,t,i,o,r){return e.add("tabfocus",function(e){function l(e){9!==e.keyCode||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()}function u(n){function l(o){function r(e){return"BODY"===e.nodeName||"hidden"!=e.type&&"none"!=e.style.display&&"hidden"!=e.style.visibility&&r(e.parentNode)}function l(e){return/INPUT|TEXTAREA|BUTTON/.test(e.tagName)&&i.get(n.id)&&-1!=e.tabIndex&&r(e)}if(a=c.select(":input:enabled,*[tabindex]:not(iframe)"),t.each(a,function(n,t){if(n.id==e.id)return u=t,!1}),o>0){for(s=u+1;s<a.length;s++)if(l(a[s]))return a[s]}else for(s=u-1;s>=0;s--)if(l(a[s]))return a[s];return null}var u,a,f,s;if(!(9!==n.keyCode||n.ctrlKey||n.altKey||n.metaKey||n.isDefaultPrevented())&&(f=t.explode(e.getParam("tab_focus",e.getParam("tabfocus_elements",":prev,:next"))),1==f.length&&(f[1]=f[0],f[0]=":prev"),a=n.shiftKey?":prev"==f[0]?l(-1):c.get(f[0]):":next"==f[1]?l(1):c.get(f[1]))){var d=i.get(a.id||a.name);a.id&&d?d.focus():o.setTimeout(function(){r.webkit||window.focus(),a.focus()},10),n.preventDefault()}}var c=n.DOM;e.on("init",function(){e.inline&&c.setAttrib(e.getBody(),"tabIndex",null),e.on("keyup",l),r.gecko?e.on("keypress keydown",u):e.on("keydown",u)})}),function(){}}),o("tinymce.plugins.tabfocus.Plugin")()}();