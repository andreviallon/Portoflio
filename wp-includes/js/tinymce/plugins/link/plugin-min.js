!function(){var t={},e=function(t){for(var e=o(t),n=t.split("."),i=Function("return this;")(),l=0;l<n.length-1;++l)void 0===i[n[l]]&&(i[n[l]]={}),i=i[n[l]];i[n[n.length-1]]=e},n=function(e){for(var n=t[e],i=n.deps,l=n.defn,r=i.length,a=new Array(r),u=0;u<r;++u)a[u]=o(i[u]);var s=l.apply(null,a);if(void 0===s)throw"module ["+e+"] returned undefined";n.instance=s},i=function(e,n,i){if("string"!=typeof e)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+e;if(void 0===i)throw"no definition function for "+e;t[e]={deps:n,defn:i,instance:void 0}},o=function(e){var i=t[e];if(void 0===i)throw"module ["+e+"] was undefined";return void 0===i.instance&&n(e),i.instance},l=function(t,e){for(var n=t.length,i=new Array(n),l=0;l<n;++l)i.push(o(t[l]));e.apply(null,e)};({}).bolt={module:{api:{define:i,require:l,demand:o}}};var r=i,a=l,u=o,s=function(t,e){r(t,[],function(){return e})};s("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),r("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.PluginManager")}),r("tinymce.core.util.VK",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.util.VK")}),r("tinymce.core.util.Delay",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.util.Delay")}),r("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.util.Tools")}),r("tinymce.core.util.XHR",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.util.XHR")}),r("tinymce.plugins.link.core.Settings",[],function(){var t=function(t){return"boolean"==typeof t.link_assume_external_targets&&t.link_assume_external_targets},e=function(t){return"boolean"==typeof t.link_context_toolbar&&t.link_context_toolbar},n=function(t){return t.link_list},i=function(t){return"string"==typeof t.default_link_target},o=function(t){return t.default_link_target},l=function(t){return t.target_list},r=function(t,e){t.settings.target_list=e},a=function(t){return!1!==l(t)},u=function(t){return t.rel_list},s=function(t){return void 0!==u(t)},c=function(t){return t.link_class_list};return{assumeExternalTargets:t,hasContextToolbar:e,getLinkList:n,hasDefaultLinkTarget:i,getDefaultLinkTarget:o,getTargetList:l,setTargetList:r,shouldShowTargetList:a,getRelList:u,hasRelList:s,getLinkClassList:c,hasLinkClassList:function(t){return void 0!==c(t)},shouldShowLinkTitle:function(t){return!1!==t.link_title},allowUnsafeLinkTarget:function(t){return"boolean"==typeof t.allow_unsafe_link_target&&t.allow_unsafe_link_target}}}),s("global!RegExp",RegExp),r("tinymce.plugins.link.core.Utils",["tinymce.core.util.Tools","tinymce.plugins.link.core.Settings","global!RegExp"],function(t,e,n){var i=function(e,n){var i=["noopener"],o=e?e.split(/\s+/):[],l=function(e){return t.trim(e.sort().join(" "))},r=function(t){return t=a(t),t.length?t.concat(i):i},a=function(e){return e.filter(function(e){return-1===t.inArray(i,e)})};return o=n?r(o):a(o),o.length?l(o):null},o=function(t){return t.replace(/\uFEFF/g,"")},l=function(t,e){return e=e||t.selection.getStart(),c(e)?t.dom.select("a[href]",e)[0]:t.dom.getParent(e,"a[href]")},r=function(t,e){var n=e?e.innerText||e.textContent:t.getContent({format:"text"});return o(n)},a=function(t){return t&&"A"===t.nodeName&&t.href},u=function(e){return t.grep(e,a).length>0},s=function(t){return!(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||-1==t.indexOf("href=")))},c=function(t){return t&&"FIGURE"===t.nodeName&&/\bimage\b/i.test(t.className)},f=function(t,e){var n,i;(i=t.dom.select("img",e)[0])&&(n=t.dom.getParents(i,"a[href]",e)[0])&&(n.parentNode.insertBefore(i,n),t.dom.remove(n))},g=function(t,e,n){var i,o;(o=t.dom.select("img",e)[0])&&(i=t.dom.create("a",n),o.parentNode.insertBefore(i,o),i.appendChild(o))};return{link:function(t,n){return function(o){t.undoManager.transact(function(){var r=t.selection.getNode(),a=l(t,r),u={href:o.href,target:o.target?o.target:null,rel:o.rel?o.rel:null,class:o.class?o.class:null,title:o.title?o.title:null};e.hasRelList(t.settings)||!1!==e.allowUnsafeLinkTarget(t.settings)||(u.rel=i(u.rel,"_blank"==u.target)),o.href===n.href&&(n.attach(),n={}),a?(t.focus(),o.hasOwnProperty("text")&&("innerText"in a?a.innerText=o.text:a.textContent=o.text),t.dom.setAttribs(a,u),t.selection.select(a),t.undoManager.add()):c(r)?g(t,r,u):o.hasOwnProperty("text")?t.insertContent(t.dom.createHTML("a",u,t.dom.encode(o.text))):t.execCommand("mceInsertLink",!1,u)})}},unlink:function(t){return function(){t.undoManager.transact(function(){var e=t.selection.getNode();c(e)?f(t,e):t.execCommand("unlink")})}},isLink:a,hasLinks:u,isOnlyTextSelected:s,getAnchorElement:l,getAnchorText:r,toggleTargetRules:i}}),r("tinymce.plugins.link.ui.Dialog",["tinymce.core.util.Delay","tinymce.core.util.Tools","tinymce.core.util.XHR","tinymce.plugins.link.core.Utils","tinymce.plugins.link.core.Settings"],function(t,e,n,i,o){var l={},r=function(t,e){var i=o.getLinkList(t.settings);"string"==typeof i?n.send({url:i,success:function(n){e(t,JSON.parse(n))}}):"function"==typeof i?i(function(n){e(t,n)}):e(t,i)},a=function(t,n,i){var o=function(t,i){return i=i||[],e.each(t,function(t){var e={text:t.text||t.title};t.menu?e.menu=o(t.menu):(e.value=t.value,n&&n(e)),i.push(e)}),i};return o(t,i||[])},u=function(e,n,i){var o=e.selection.getRng();t.setEditorTimeout(e,function(){e.windowManager.confirm(n,function(t){e.selection.setRng(o),i(t)})})},s=function(t,n){var r={},s=t.selection,c=t.dom,f,g,d,m,h,v,p,k,y,x,b,T=function(t){var e=d.find("#text");(!e.value()||t.lastControl&&e.value()==t.lastControl.text())&&e.value(t.control.text()),d.find("#href").value(t.control.value())},L=function(n){var i=[];if(e.each(t.dom.select("a:not([href])"),function(t){var e=t.name||t.id;e&&i.push({text:e,value:"#"+e,selected:-1!=n.indexOf("#"+e)})}),i.length)return i.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:i,onselect:T}},w=function(){g||!m||r.text||this.parent().parent().find("#text")[0].value(this.value())},C=function(n){var i=n.meta||{};v&&v.value(t.convertURL(this.value(),"href")),e.each(n.meta,function(t,e){var n=d.find("#"+e);"text"===e?0===g.length&&(n.value(t),r.text=t):n.value(t)}),i.attach&&(l={href:this.value(),attach:i.attach}),i.text||w.call(this)},_=function(t){t.meta=d.toJSON()};m=i.isOnlyTextSelected(s.getContent()),f=i.getAnchorElement(t),r.text=g=i.getAnchorText(t.selection,f),r.href=f?c.getAttrib(f,"href"):"",f?r.target=c.getAttrib(f,"target"):o.hasDefaultLinkTarget(t.settings)&&(r.target=o.getDefaultLinkTarget(t.settings)),(b=c.getAttrib(f,"rel"))&&(r.rel=b),(b=c.getAttrib(f,"class"))&&(r.class=b),(b=c.getAttrib(f,"title"))&&(r.title=b),m&&(h={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){r.text=this.value()}}),n&&(v={type:"listbox",label:"Link list",values:a(n,function(e){e.value=t.convertURL(e.value||e.url,"href")},[{text:"None",value:""}]),onselect:T,value:t.convertURL(r.href,"href"),onPostRender:function(){v=this}}),o.shouldShowTargetList(t.settings)&&(void 0===o.getTargetList(t.settings)&&o.setTargetList(t,[{text:"None",value:""},{text:"New window",value:"_blank"}]),k={name:"target",type:"listbox",label:"Target",values:a(o.getTargetList(t.settings))}),o.hasRelList(t.settings)&&(p={name:"rel",type:"listbox",label:"Rel",values:a(o.getRelList(t.settings),function(e){!1===o.allowUnsafeLinkTarget(t.settings)&&(e.value=i.toggleTargetRules(e.value,"_blank"===r.target))})}),o.hasLinkClassList(t.settings)&&(y={name:"class",type:"listbox",label:"Class",values:a(o.getLinkClassList(t.settings),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({inline:"a",classes:[e.value]})})})}),o.shouldShowLinkTitle(t.settings)&&(x={name:"title",type:"textbox",label:"Title",value:r.title}),d=t.windowManager.open({title:"Insert link",data:r,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:C,onkeyup:w,onbeforecall:_},h,x,L(r.href),v,p,k,y],onSubmit:function(n){var a=o.assumeExternalTargets(t.settings),s=i.link(t,l),c=i.unlink(t),f=e.extend({},r,n.data),d=f.href;return d?(m&&f.text!==g||delete f.text,d.indexOf("@")>0&&-1==d.indexOf("//")&&-1==d.indexOf("mailto:")?void u(t,"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(t){t&&(f.href="mailto:"+d),s(f)}):!0===a&&!/^\w+:/i.test(d)||!1===a&&/^\s*www[\.|\d\.]/i.test(d)?void u(t,"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){t&&(f.href="http://"+d),s(f)}):void s(f)):void c()}})};return{open:function(t){r(t,s)}}}),r("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.dom.DOMUtils")}),r("tinymce.core.Env",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.Env")}),r("tinymce.plugins.link.core.OpenUrl",["tinymce.core.dom.DOMUtils","tinymce.core.Env"],function(t,e){var n=function(t,e){document.body.appendChild(t),t.dispatchEvent(e),document.body.removeChild(t)};return{open:function(i){if(!e.ie||e.ie>10){var o=document.createElement("a");o.target="_blank",o.href=i,o.rel="noreferrer noopener";var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n(o,l)}else{var r=window.open("","_blank");if(r){r.opener=null;var a=r.document;a.open(),a.write('<meta http-equiv="refresh" content="0; url='+t.DOM.encode(i)+'">'),a.close()}}}}}),r("tinymce.plugins.link.core.Actions",["tinymce.core.util.VK","tinymce.plugins.link.ui.Dialog","tinymce.plugins.link.core.OpenUrl","tinymce.plugins.link.core.Utils","tinymce.plugins.link.core.Settings"],function(t,e,n,i,o){var l=function(t,e){return t.dom.getParent(e,"a[href]")},r=function(t){return l(t,t.selection.getStart())},a=function(t){var e=t.getAttribute("data-mce-href");return e||t.getAttribute("href")},u=function(t){var e=t.plugins.contextmenu;return!!e&&e.isContextMenuVisible()},s=function(t){return!0===t.altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey},c=function(t,e){if(e){var i=a(e);if(/^#/.test(i)){var o=t.$(i);o.length&&t.selection.scrollIntoView(o[0],!0)}else n.open(e.href)}};return{openDialog:function(t){return function(){e.open(t)}},gotoSelectedLink:function(t){return function(){c(t,r(t))}},leftClickedOnAHref:function(t){return function(e){var n,l,r;return!!(o.hasContextToolbar(t.settings)&&!u(t)&&i.isLink(e)&&(n=t.selection,l=n.getRng(),r=l.startContainer,3==r.nodeType&&n.isCollapsed()&&l.startOffset>0&&l.startOffset<r.data.length))}},setupGotoLinks:function(e){e.on("click",function(n){var i=l(e,n.target);i&&t.metaKeyPressed(n)&&(n.preventDefault(),c(e,i))}),e.on("keydown",function(t){var n=r(e);n&&13===t.keyCode&&s(t)&&(t.preventDefault(),c(e,n))})},toggleActiveState:function(t){return function(){var e=this;t.on("nodechange",function(n){e.active(!t.readonly&&!!i.getAnchorElement(t,n.element))})}},toggleViewLinkState:function(t){return function(){var e=this,n=function(t){i.hasLinks(t.parents)?e.show():e.hide()};i.hasLinks(t.dom.getParents(t.selection.getStart()))||e.hide(),t.on("nodechange",n),e.on("remove",function(){t.off("nodechange",n)})}}}}),r("tinymce.plugins.link.ui.Controls",["tinymce.plugins.link.core.Actions","tinymce.plugins.link.core.Utils"],function(t,e){return{setupButtons:function(n){n.addButton("link",{icon:"link",tooltip:"Insert/edit link",shortcut:"Meta+K",onclick:t.openDialog(n),onpostrender:t.toggleActiveState(n)}),n.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onclick:e.unlink(n),onpostrender:t.toggleActiveState(n)}),n.addContextToolbar&&n.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:t.gotoSelectedLink(n)})},setupMenuItems:function(e){e.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:t.gotoSelectedLink(e),onPostRender:t.toggleViewLinkState(e),prependToContext:!0}),e.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:t.openDialog(e),stateSelector:"a[href]",context:"insert",prependToContext:!0})},setupContextToolbars:function(e){e.addContextToolbar&&e.addContextToolbar(t.leftClickedOnAHref(e),"openlink | link unlink")}}}),r("tinymce.plugins.link.Plugin",["tinymce.core.PluginManager","tinymce.plugins.link.core.Actions","tinymce.plugins.link.ui.Controls"],function(t,e,n){return t.add("link",function(t){n.setupButtons(t),n.setupMenuItems(t),n.setupContextToolbars(t),e.setupGotoLinks(t),t.addShortcut("Meta+K","",e.openDialog(t)),t.addCommand("mceLink",e.openDialog(t))}),function(){}}),o("tinymce.plugins.link.Plugin")()}();