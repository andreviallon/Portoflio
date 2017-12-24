!function(){var e={},t=function(e){for(var t=o(e),n=e.split("."),i=Function("return this;")(),r=0;r<n.length-1;++r)void 0===i[n[r]]&&(i[n[r]]={}),i=i[n[r]];i[n[n.length-1]]=t},n=function(t){for(var n=e[t],i=n.deps,r=n.defn,a=i.length,l=new Array(a),c=0;c<a;++c)l[c]=o(i[c]);var s=r.apply(null,l);if(void 0===s)throw"module ["+t+"] returned undefined";n.instance=s},i=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===i)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:void 0}},o=function(t){var i=e[t];if(void 0===i)throw"module ["+t+"] was undefined";return void 0===i.instance&&n(t),i.instance},r=function(e,t){for(var n=e.length,i=new Array(n),r=0;r<n;++r)i.push(o(e[r]));t.apply(null,t)};({}).bolt={module:{api:{define:i,require:r,demand:o}}};var a=i,l=r,c=o,s=function(e,t){a(e,[],function(){return t})};s("global!window",window),s("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),a("tinymce.core.AddOnManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.AddOnManager")}),a("tinymce.core.EditorManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.EditorManager")}),a("tinymce.core.Env",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.Env")}),a("tinymce.core.ui.Api",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.ui.Api")}),a("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.DOMUtils")}),a("tinymce.core.ui.Factory",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.ui.Factory")}),a("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Tools")}),a("tinymce.themes.modern.ui.A11y",[],function(){var e=function(e,t){return function(){var n=e.find(t)[0];n&&n.focus(!0)}};return{addKeys:function(t,n){t.shortcuts.add("Alt+F9","",e(n,"menubar")),t.shortcuts.add("Alt+F10,F10","",e(n,"toolbar")),t.shortcuts.add("Alt+F11","",e(n,"elementpath")),n.on("cancel",function(){t.focus()})}}}),a("tinymce.themes.modern.ui.Branding",["tinymce.core.dom.DOMUtils"],function(e){var t=e.DOM,n=function(e,n,i){return function(){var o=e.getContentAreaContainer().querySelector("iframe").offsetWidth,r=Math.max(o-e.getDoc().documentElement.offsetWidth,0);t.setStyle(n,"right",r+"px"),i?t.setStyle(n,"top","-16px"):t.setStyle(n,"bottom","1px")}},i=function(e){return function(){t.hide(e)}},o=function(e,t,i){n(e,t,i)(),e.on("NodeChange ResizeEditor",n(e,t,i))},r=function(e,t,n){n.appendChild(t),o(e,t,!0)},a=function(e,t){e.getContainer().appendChild(t),o(e,t,!1)},l=function(e){e.on("SkinLoaded",function(){var n=t.create("div",{class:"mce-branding-powered-by"}),o=e.getContainer().querySelector(".mce-statusbar");o?r(e,n,o):a(e,n),t.bind(n,"click",i(n))})};return{setup:function(e){!1!==e.settings.branding&&l(e)}}}),a("tinymce.core.util.Delay",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Delay")}),a("tinymce.core.geom.Rect",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.geom.Rect")}),a("tinymce.themes.modern.ui.Toolbar",["tinymce.core.util.Tools","tinymce.core.ui.Factory"],function(e,t){var n=function(n,i,o){var r=[],a;if(i)return e.each(i.split(/[ ,]/),function(e){var i,l=function(){var t=n.selection;e.settings.stateSelector&&t.selectorChanged(e.settings.stateSelector,function(t){e.active(t)},!0),e.settings.disabledStateSelector&&t.selectorChanged(e.settings.disabledStateSelector,function(t){e.disabled(t)})};"|"==e?a=null:(a||(a={type:"buttongroup",items:[]},r.push(a)),n.buttons[e]&&(i=e,e=n.buttons[i],"function"==typeof e&&(e=e()),e.type=e.type||"button",e.size=o,e=t.create(e),a.items.push(e),n.initialized?l():n.on("init",l)))}),{type:"toolbar",layout:"flow",items:r}};return{createToolbar:n,createToolbars:function(t,i){var o=[],r=t.settings,a=function(e){if(e)return o.push(n(t,e,i)),!0};if(e.isArray(r.toolbar)){if(0===r.toolbar.length)return;e.each(r.toolbar,function(e,t){r["toolbar"+(t+1)]=e}),delete r.toolbar}for(var l=1;l<10&&a(r["toolbar"+l]);l++);if(o.length||!1===r.toolbar||a(r.toolbar||"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"),o.length)return{type:"panel",layout:"stack",classes:"toolbar-grp",ariaRoot:!0,ariaRemember:!0,items:o}}}}),a("tinymce.themes.modern.ui.ContextToolbars",["tinymce.core.dom.DOMUtils","tinymce.core.util.Tools","tinymce.core.util.Delay","tinymce.core.ui.Factory","tinymce.core.geom.Rect","tinymce.themes.modern.ui.Toolbar"],function(e,t,n,i,o,r){var a=e.DOM,l=function(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}},c=function(e){t.each(e.contextToolbars,function(e){e.panel&&e.panel.hide()})},s=function(e,t){e.moveTo(t.left,t.top)},u=function(e,n,i){n=n?n.substr(0,2):"",t.each({t:"down",b:"up"},function(t,o){e.classes.toggle("arrow-"+t,i(o,n.substr(0,1)))}),t.each({l:"left",r:"right"},function(t,o){e.classes.toggle("arrow-"+t,i(o,n.substr(1,1)))})},d=function(e,t,n,i,o,r){return r=l({x:t,y:n,w:r.w,h:r.h}),e&&(r=e({elementRect:l(i),contentAreaRect:l(o),panelRect:r})),r};return{addContextualToolbars:function(e){var l,m=e.settings,f=function(){return e.contextToolbars||[]},y=function(t){var n,i,o;return n=a.getPos(e.getContentAreaContainer()),i=e.dom.getRect(t),o=e.dom.getRoot(),"BODY"===o.nodeName&&(i.x-=o.ownerDocument.documentElement.scrollLeft||o.scrollLeft,i.y-=o.ownerDocument.documentElement.scrollTop||o.scrollTop),i.x+=n.x,i.y+=n.y,i},h=function(t,n){var i,r,l,f,h,b,g,p,v=m.inline_toolbar_position_handler;if(!e.removed){if(!t||!t.toolbar.panel)return void c(e);g=["bc-tc","tc-bc","tl-bl","bl-tl","tr-br","br-tr"],h=t.toolbar.panel,n&&h.show(),l=y(t.element),r=a.getRect(h.getEl()),f=a.getRect(e.getContentAreaContainer()||e.getBody()),p=25,"inline"!==a.getStyle(t.element,"display",!0)&&(l.w=t.element.clientWidth,l.h=t.element.clientHeight),e.inline||(f.w=e.getDoc().documentElement.offsetWidth),e.selection.controlSelection.isResizable(t.element)&&l.w<p&&(l=o.inflate(l,0,8)),i=o.findBestRelativePosition(r,l,f,g),l=o.clamp(l,f),i?(b=o.relativePosition(r,l,i),s(h,d(v,b.x,b.y,l,f,r))):(f.h+=r.h,l=o.intersect(f,l),l?(i=o.findBestRelativePosition(r,l,f,["bc-tc","bl-tl","br-tr"]),i?(b=o.relativePosition(r,l,i),s(h,d(v,b.x,b.y,l,f,r))):s(h,d(v,l.x,l.y,l,f,r))):h.hide()),u(h,i,function(e,t){return e===t})}},b=function(t){return function(){var i=function(){e.selection&&h(T(e.selection.getNode()),t)};n.requestAnimationFrame(i)}},g=function(){l||(l=e.selection.getScrollContainer()||e.getWin(),a.bind(l,"scroll",b(!0)),e.on("remove",function(){a.unbind(l,"scroll")}))},p=function(t){var n;if(t.toolbar.panel)return t.toolbar.panel.show(),void h(t);g(),n=i.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:r.createToolbar(e,t.toolbar.items),oncancel:function(){e.focus()}}),t.toolbar.panel=n,n.renderTo(document.body).reflow(),h(t)},v=function(){t.each(f(),function(e){e.panel&&e.panel.hide()})},T=function(t){var n,i,o,r=f();for(o=e.$(t).parents().add(t),n=o.length-1;n>=0;n--)for(i=r.length-1;i>=0;i--)if(r[i].predicate(o[n]))return{toolbar:r[i],element:o[n]};return null};e.on("click keyup setContent ObjectResized",function(t){("setcontent"!==t.type||t.selection)&&n.setEditorTimeout(e,function(){var t;t=T(e.selection.getNode()),t?(v(),p(t)):v()})}),e.on("blur hide contextmenu",v),e.on("ObjectResizeStart",function(){var t=T(e.selection.getNode());t&&t.toolbar.panel&&t.toolbar.panel.hide()}),e.on("ResizeEditor ResizeWindow",b(!0)),e.on("nodeChange",b(!1)),e.on("remove",function(){t.each(f(),function(e){e.panel&&e.panel.remove()}),e.contextToolbars={}}),e.shortcuts.add("ctrl+shift+e > ctrl+shift+p","",function(){var t=T(e.selection.getNode());t&&t.toolbar.panel&&t.toolbar.panel.items()[0].focus()})}}}),a("tinymce.themes.modern.ui.Menubar",["tinymce.core.util.Tools"],function(e){var t={file:{title:"File",items:"newdocument"},edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall"},insert:{title:"Insert",items:"|"},view:{title:"View",items:"visualaid |"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript | formats | removeformat"},table:{title:"Table"},tools:{title:"Tools"}},n=function(e,t){var n;return"|"==t?{text:"|"}:n=e[t]},i=function(i,o,r){var a,l,c,s,u;if(u=e.makeMap((o.removed_menuitems||"").split(/[ ,]/)),o.menu?(l=o.menu[r],s=!0):l=t[r],l){a={text:l.title},c=[],e.each((l.items||"").split(/[ ,]/),function(e){n(i,e)&&!u[e]&&c.push(n(i,e))}),s||e.each(i,function(e){e.context==r&&("before"==e.separator&&c.push({text:"|"}),e.prependToContext?c.unshift(e):c.push(e),"after"==e.separator&&c.push({text:"|"}))});for(var d=0;d<c.length;d++)"|"==c[d].text&&(0!==d&&d!=c.length-1||c.splice(d,1));if(a.menu=c,!a.menu.length)return null}return a};return{createMenuButtons:function(e){var n,o=[],r=e.settings,a=[];if(r.menu)for(n in r.menu)a.push(n);else for(n in t)a.push(n);for(var l="string"==typeof r.menubar?r.menubar.split(/[ ,]/):a,c=0;c<l.length;c++){var s=l[c];s=i(e.menuItems,e.settings,s),s&&o.push(s)}return o}}}),a("tinymce.themes.modern.ui.Resize",["tinymce.core.dom.DOMUtils"],function(e){var t=e.DOM,n=function(e){return{width:e.clientWidth,height:e.clientHeight}},i=function(e,i,o){var r,a,l,c,s=e.settings;r=e.getContainer(),a=e.getContentAreaContainer().firstChild,l=n(r),c=n(a),null!==i&&(i=Math.max(s.min_width||100,i),i=Math.min(s.max_width||65535,i),t.setStyle(r,"width",i+(l.width-c.width)),t.setStyle(a,"width",i)),o=Math.max(s.min_height||100,o),o=Math.min(s.max_height||65535,o),t.setStyle(a,"height",o),e.fire("ResizeEditor")};return{resizeTo:i,resizeBy:function(e,t,n){var o=e.getContentAreaContainer();i(e,o.clientWidth+t,o.clientHeight+n)}}}),a("tinymce.themes.modern.ui.Sidebar",["tinymce.core.util.Tools","tinymce.core.ui.Factory","tinymce.core.Env"],function(e,t,n){var i=function(e){return{element:function(){return e}}},o=function(e,t,n){var o=e.settings[n];o&&o(i(t.getEl("body")))},r=function(t,n,i){e.each(i,function(e){var i=n.items().filter("#"+e.name)[0];i&&i.visible()&&e.name!==t&&(o(e,i,"onhide"),i.visible(!1))})},a=function(e){e.items().each(function(e){e.active(!1)})},l=function(t,n){return e.grep(t,function(e){return e.name===n})[0]},c=function(e,n,i){return function(c){var s=c.control,u=s.parents().filter("panel")[0],d=u.find("#"+n)[0],m=l(i,n);r(n,u,i),a(s.parent()),d&&d.visible()?(o(m,d,"onhide"),d.hide(),s.active(!1)):(d?(d.show(),o(m,d,"onshow")):(d=t.create({type:"container",name:n,layout:"stack",classes:"sidebar-panel",html:""}),u.prepend(d),o(m,d,"onrender"),o(m,d,"onshow")),s.active(!0)),e.fire("ResizeEditor")}},s=function(){return!n.ie||n.ie>=11};return{hasSidebar:function(e){return!(!s()||!e.sidebars)&&e.sidebars.length>0},createSidebar:function(t){return{type:"panel",name:"sidebar",layout:"stack",classes:"sidebar",items:[{type:"toolbar",layout:"stack",classes:"sidebar-toolbar",items:e.map(t.sidebars,function(e){var n=e.settings;return{type:"button",icon:n.icon,image:n.image,tooltip:n.tooltip,onclick:c(t,e.name,t.sidebars)}})}]}}}}),a("tinymce.themes.modern.ui.SkinLoaded",[],function(){return{fireSkinLoaded:function(e){var t=function(){e._skinLoaded=!0,e.fire("SkinLoaded")};return function(){e.initialized?t():e.on("init",t)}}}}),a("tinymce.themes.modern.modes.Iframe",["tinymce.core.dom.DOMUtils","tinymce.core.ui.Factory","tinymce.core.util.Tools","tinymce.themes.modern.ui.A11y","tinymce.themes.modern.ui.Branding","tinymce.themes.modern.ui.ContextToolbars","tinymce.themes.modern.ui.Menubar","tinymce.themes.modern.ui.Resize","tinymce.themes.modern.ui.Sidebar","tinymce.themes.modern.ui.SkinLoaded","tinymce.themes.modern.ui.Toolbar"],function(e,t,n,i,o,r,a,l,c,s,u){var d=e.DOM,m=function(e){return function(t){e.find("*").disabled("readonly"===t.mode)}},f=function(e){return{type:"panel",name:"iframe",layout:"stack",classes:"edit-area",border:e,html:""}},y=function(e){return{type:"panel",layout:"stack",classes:"edit-aria-container",border:"1 0 0 0",items:[f("0"),c.createSidebar(e)]}};return{render:function(e,n,h){var b,g,p,v=e.settings;return h.skinUiCss&&d.styleSheetLoader.load(h.skinUiCss,s.fireSkinLoaded(e)),b=n.panel=t.create({type:"panel",role:"application",classes:"tinymce",style:"visibility: hidden",layout:"stack",border:1,items:[!1===v.menubar?null:{type:"menubar",border:"0 0 1 0",items:a.createMenuButtons(e)},u.createToolbars(e,v.toolbar_items_size),c.hasSidebar(e)?y(e):f("1 0 0 0")]}),!1!==v.resize&&(g={type:"resizehandle",direction:v.resize,onResizeStart:function(){var t=e.getContentAreaContainer().firstChild;p={width:t.clientWidth,height:t.clientHeight}},onResize:function(t){"both"===v.resize?l.resizeTo(e,p.width+t.deltaX,p.height+t.deltaY):l.resizeTo(e,null,p.height+t.deltaY)}}),!1!==v.statusbar&&b.add({type:"panel",name:"statusbar",classes:"statusbar",layout:"flow",border:"1 0 0 0",ariaRoot:!0,items:[{type:"elementpath",editor:e},g]}),e.fire("BeforeRenderUI"),e.on("SwitchMode",m(b)),b.renderBefore(h.targetNode).reflow(),v.readonly&&e.setMode("readonly"),h.width&&d.setStyle(b.getEl(),"width",h.width),e.on("remove",function(){b.remove(),b=null}),i.addKeys(e,b),r.addContextualToolbars(e),o.setup(e),{iframeContainer:b.find("#iframe")[0].getEl(),editorContainer:b.getEl()}}}}),a("tinymce.core.ui.FloatPanel",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.ui.FloatPanel")}),a("tinymce.themes.modern.modes.Inline",["tinymce.core.util.Tools","tinymce.core.ui.Factory","tinymce.core.dom.DOMUtils","tinymce.core.ui.FloatPanel","tinymce.themes.modern.ui.Toolbar","tinymce.themes.modern.ui.Menubar","tinymce.themes.modern.ui.ContextToolbars","tinymce.themes.modern.ui.A11y","tinymce.themes.modern.ui.SkinLoaded"],function(e,t,n,i,o,r,a,l,c){return{render:function(e,s,u){var d,m,f=e.settings,y=n.DOM;f.fixed_toolbar_container&&(m=y.select(f.fixed_toolbar_container)[0]);var h=function(){if(d&&d.moveRel&&d.visible()&&!d._fixed){var t=e.selection.getScrollContainer(),n=e.getBody(),i=0,o=0;if(t){var r=y.getPos(n),a=y.getPos(t);i=Math.max(0,a.x-r.x),o=Math.max(0,a.y-r.y)}d.fixed(!1).moveRel(n,e.rtl?["tr-br","br-tr"]:["tl-bl","bl-tl","tr-br"]).moveBy(i,o)}},b=function(){d&&(d.show(),h(),y.addClass(e.getBody(),"mce-edit-focus"))},g=function(){d&&(d.hide(),i.hideAll(),y.removeClass(e.getBody(),"mce-edit-focus"))},p=function(){if(d)return void(d.visible()||b());d=s.panel=t.create({type:m?"panel":"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!!m,border:1,items:[!1===f.menubar?null:{type:"menubar",border:"0 0 1 0",items:r.createMenuButtons(e)},o.createToolbars(e,f.toolbar_items_size)]}),e.fire("BeforeRenderUI"),d.renderTo(m||document.body).reflow(),l.addKeys(e,d),b(),a.addContextualToolbars(e),e.on("nodeChange",h),e.on("activate",b),e.on("deactivate",g),e.nodeChanged()};return f.content_editable=!0,e.on("focus",function(){u.skinUiCss?y.styleSheetLoader.load(u.skinUiCss,p,p):p()}),e.on("blur hide",g),e.on("remove",function(){d&&(d.remove(),d=null)}),u.skinUiCss&&y.styleSheetLoader.load(u.skinUiCss,c.fireSkinLoaded(e)),{}}}}),a("tinymce.core.ui.Throbber",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.ui.Throbber")}),a("tinymce.themes.modern.ui.ProgressState",["tinymce.core.ui.Throbber"],function(e){return{setup:function(t,n){var i;t.on("ProgressState",function(t){i=i||new e(n.panel.getEl("body")),t.state?i.show(t.time):i.hide()})}}}),a("tinymce.themes.modern.Theme",["global!window","tinymce.core.AddOnManager","tinymce.core.EditorManager","tinymce.core.Env","tinymce.core.ui.Api","tinymce.themes.modern.modes.Iframe","tinymce.themes.modern.modes.Inline","tinymce.themes.modern.ui.ProgressState","tinymce.themes.modern.ui.Resize"],function(e,t,n,i,o,r,a,l,c){var s=t.ThemeManager;o.appendTo(e.tinymce?e.tinymce:{});var u=function(e,t,i){var o=e.settings,c=!1!==o.skin&&(o.skin||"lightgray");if(c){var s=o.skin_url;s=s?e.documentBaseURI.toAbsolute(s):n.baseURL+"/skins/"+c,i.skinUiCss=s+"/skin.min.css",e.contentCSS.push(s+"/content"+(e.inline?".inline":"")+".min.css")}return l.setup(e,t),o.inline?a.render(e,t,i):r.render(e,t,i)};return s.add("modern",function(e){return{renderUI:function(t){return u(e,this,t)},resizeTo:function(t,n){return c.resizeTo(e,t,n)},resizeBy:function(t,n){return c.resizeBy(e,t,n)}}}),function(){}}),o("tinymce.themes.modern.Theme")()}();