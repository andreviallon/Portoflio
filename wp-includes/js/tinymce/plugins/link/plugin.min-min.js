!function(){var t={},e=function(e){for(var n=t[e],i=n.deps,r=n.defn,a=i.length,l=new Array(a),u=0;u<a;++u)l[u]=o(i[u]);var s=r.apply(null,l);if(void 0===s)throw"module ["+e+"] returned undefined";n.instance=s},n=function(e,n,o){if("string"!=typeof e)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+e;if(void 0===o)throw"no definition function for "+e;t[e]={deps:n,defn:o,instance:void 0}},o=function(n){var o=t[n];if(void 0===o)throw"module ["+n+"] was undefined";return void 0===o.instance&&e(n),o.instance},i=function(t,e){for(var n=t.length,i=new Array(n),r=0;r<n;++r)i.push(o(t[r]));e.apply(null,e)};({}).bolt={module:{api:{define:n,require:i,demand:o}}};var r=n,a=function(t,e){r(t,[],function(){return e})};a("4",tinymce.util.Tools.resolve),r("1",["4"],function(t){return t("tinymce.PluginManager")}),r("5",["4"],function(t){return t("tinymce.util.VK")}),r("a",["4"],function(t){return t("tinymce.util.Delay")}),r("b",["4"],function(t){return t("tinymce.util.Tools")}),r("c",["4"],function(t){return t("tinymce.util.XHR")}),r("9",[],function(){var t=function(t){return"boolean"==typeof t.link_assume_external_targets&&t.link_assume_external_targets},e=function(t){return"boolean"==typeof t.link_context_toolbar&&t.link_context_toolbar},n=function(t){return t.link_list},o=function(t){return"string"==typeof t.default_link_target},i=function(t){return t.default_link_target},r=function(t){return t.target_list},a=function(t,e){t.settings.target_list=e},l=function(t){return!1!==r(t)},u=function(t){return t.rel_list},s=function(t){return void 0!==u(t)},c=function(t){return t.link_class_list};return{assumeExternalTargets:t,hasContextToolbar:e,getLinkList:n,hasDefaultLinkTarget:o,getDefaultLinkTarget:i,getTargetList:r,setTargetList:a,shouldShowTargetList:l,getRelList:u,hasRelList:s,getLinkClassList:c,hasLinkClassList:function(t){return void 0!==c(t)},shouldShowLinkTitle:function(t){return!1!==t.link_title},allowUnsafeLinkTarget:function(t){return"boolean"==typeof t.allow_unsafe_link_target&&t.allow_unsafe_link_target}}}),a("d",RegExp),r("8",["b","9","d"],function(t,e,n){var o=function(e,n){var o=["noopener"],i=e?e.split(/\s+/):[],r=function(e){return t.trim(e.sort().join(" "))},a=function(t){return t=l(t),t.length?t.concat(o):o},l=function(e){return e.filter(function(e){return-1===t.inArray(o,e)})};return i=n?a(i):l(i),i.length?r(i):null},i=function(t){return t.replace(/\uFEFF/g,"")},r=function(t,e){return e=e||t.selection.getStart(),c(e)?t.dom.select("a[href]",e)[0]:t.dom.getParent(e,"a[href]")},a=function(t,e){var n=e?e.innerText||e.textContent:t.getContent({format:"text"});return i(n)},l=function(t){return t&&"A"===t.nodeName&&t.href},u=function(e){return t.grep(e,l).length>0},s=function(t){return!(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||-1==t.indexOf("href=")))},c=function(t){return t&&"FIGURE"===t.nodeName&&/\bimage\b/i.test(t.className)},f=function(t,e){var n,o;(o=t.dom.select("img",e)[0])&&(n=t.dom.getParents(o,"a[href]",e)[0])&&(n.parentNode.insertBefore(o,n),t.dom.remove(n))},d=function(t,e,n){var o,i;(i=t.dom.select("img",e)[0])&&(o=t.dom.create("a",n),i.parentNode.insertBefore(o,i),o.appendChild(i))};return{link:function(t,n){return function(i){t.undoManager.transact(function(){var a=t.selection.getNode(),l=r(t,a),u={href:i.href,target:i.target?i.target:null,rel:i.rel?i.rel:null,class:i.class?i.class:null,title:i.title?i.title:null};e.hasRelList(t.settings)||!1!==e.allowUnsafeLinkTarget(t.settings)||(u.rel=o(u.rel,"_blank"==u.target)),i.href===n.href&&(n.attach(),n={}),l?(t.focus(),i.hasOwnProperty("text")&&("innerText"in l?l.innerText=i.text:l.textContent=i.text),t.dom.setAttribs(l,u),t.selection.select(l),t.undoManager.add()):c(a)?d(t,a,u):i.hasOwnProperty("text")?t.insertContent(t.dom.createHTML("a",u,t.dom.encode(i.text))):t.execCommand("mceInsertLink",!1,u)})}},unlink:function(t){return function(){t.undoManager.transact(function(){var e=t.selection.getNode();c(e)?f(t,e):t.execCommand("unlink")})}},isLink:l,hasLinks:u,isOnlyTextSelected:s,getAnchorElement:r,getAnchorText:a,toggleTargetRules:o}}),r("6",["a","b","c","8","9"],function(t,e,n,o,i){var r={},a=function(t,e){var o=i.getLinkList(t.settings);"string"==typeof o?n.send({url:o,success:function(n){e(t,JSON.parse(n))}}):"function"==typeof o?o(function(n){e(t,n)}):e(t,o)},l=function(t,n,o){var i=function(t,o){return o=o||[],e.each(t,function(t){var e={text:t.text||t.title};t.menu?e.menu=i(t.menu):(e.value=t.value,n&&n(e)),o.push(e)}),o};return i(t,o||[])},u=function(e,n,o){var i=e.selection.getRng();t.setEditorTimeout(e,function(){e.windowManager.confirm(n,function(t){e.selection.setRng(i),o(t)})})},s=function(t,n){var a,s,c,f,d,g,h,v,m,p,k,x={},b=t.selection,L=t.dom,y=function(t){var e=c.find("#text");(!e.value()||t.lastControl&&e.value()==t.lastControl.text())&&e.value(t.control.text()),c.find("#href").value(t.control.value())},T=function(n){var o=[];if(e.each(t.dom.select("a:not([href])"),function(t){var e=t.name||t.id;e&&o.push({text:e,value:"#"+e,selected:-1!=n.indexOf("#"+e)})}),o.length)return o.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:o,onselect:y}},w=function(){s||!f||x.text||this.parent().parent().find("#text")[0].value(this.value())},C=function(n){var o=n.meta||{};g&&g.value(t.convertURL(this.value(),"href")),e.each(n.meta,function(t,e){var n=c.find("#"+e);"text"===e?0===s.length&&(n.value(t),x.text=t):n.value(t)}),o.attach&&(r={href:this.value(),attach:o.attach}),o.text||w.call(this)},_=function(t){t.meta=c.toJSON()};f=o.isOnlyTextSelected(b.getContent()),a=o.getAnchorElement(t),x.text=s=o.getAnchorText(t.selection,a),x.href=a?L.getAttrib(a,"href"):"",a?x.target=L.getAttrib(a,"target"):i.hasDefaultLinkTarget(t.settings)&&(x.target=i.getDefaultLinkTarget(t.settings)),(k=L.getAttrib(a,"rel"))&&(x.rel=k),(k=L.getAttrib(a,"class"))&&(x.class=k),(k=L.getAttrib(a,"title"))&&(x.title=k),f&&(d={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){x.text=this.value()}}),n&&(g={type:"listbox",label:"Link list",values:l(n,function(e){e.value=t.convertURL(e.value||e.url,"href")},[{text:"None",value:""}]),onselect:y,value:t.convertURL(x.href,"href"),onPostRender:function(){g=this}}),i.shouldShowTargetList(t.settings)&&(void 0===i.getTargetList(t.settings)&&i.setTargetList(t,[{text:"None",value:""},{text:"New window",value:"_blank"}]),v={name:"target",type:"listbox",label:"Target",values:l(i.getTargetList(t.settings))}),i.hasRelList(t.settings)&&(h={name:"rel",type:"listbox",label:"Rel",values:l(i.getRelList(t.settings),function(e){!1===i.allowUnsafeLinkTarget(t.settings)&&(e.value=o.toggleTargetRules(e.value,"_blank"===x.target))})}),i.hasLinkClassList(t.settings)&&(m={name:"class",type:"listbox",label:"Class",values:l(i.getLinkClassList(t.settings),function(e){e.value&&(e.textStyle=function(){return t.formatter.getCssText({inline:"a",classes:[e.value]})})})}),i.shouldShowLinkTitle(t.settings)&&(p={name:"title",type:"textbox",label:"Title",value:x.title}),c=t.windowManager.open({title:"Insert link",data:x,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:C,onkeyup:w,onbeforecall:_},d,p,T(x.href),g,h,v,m],onSubmit:function(n){var a=i.assumeExternalTargets(t.settings),l=o.link(t,r),c=o.unlink(t),d=e.extend({},x,n.data),g=d.href;return g?(f&&d.text!==s||delete d.text,g.indexOf("@")>0&&-1==g.indexOf("//")&&-1==g.indexOf("mailto:")?void u(t,"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(t){t&&(d.href="mailto:"+g),l(d)}):!0===a&&!/^\w+:/i.test(g)||!1===a&&/^\s*www[\.|\d\.]/i.test(g)?void u(t,"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(t){t&&(d.href="http://"+g),l(d)}):void l(d)):void c()}})};return{open:function(t){a(t,s)}}}),r("e",["4"],function(t){return t("tinymce.dom.DOMUtils")}),r("f",["4"],function(t){return t("tinymce.Env")}),r("7",["e","f"],function(t,e){var n=function(t,e){document.body.appendChild(t),t.dispatchEvent(e),document.body.removeChild(t)};return{open:function(o){if(!e.ie||e.ie>10){var i=document.createElement("a");i.target="_blank",i.href=o,i.rel="noreferrer noopener";var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n(i,r)}else{var a=window.open("","_blank");if(a){a.opener=null;var l=a.document;l.open(),l.write('<meta http-equiv="refresh" content="0; url='+t.DOM.encode(o)+'">'),l.close()}}}}}),r("2",["5","6","7","8","9"],function(t,e,n,o,i){var r=function(t,e){return t.dom.getParent(e,"a[href]")},a=function(t){return r(t,t.selection.getStart())},l=function(t){var e=t.getAttribute("data-mce-href");return e||t.getAttribute("href")},u=function(t){var e=t.plugins.contextmenu;return!!e&&e.isContextMenuVisible()},s=function(t){return!0===t.altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey},c=function(t,e){if(e){var o=l(e);if(/^#/.test(o)){var i=t.$(o);i.length&&t.selection.scrollIntoView(i[0],!0)}else n.open(e.href)}};return{openDialog:function(t){return function(){e.open(t)}},gotoSelectedLink:function(t){return function(){c(t,a(t))}},leftClickedOnAHref:function(t){return function(e){var n,r,a;return!!(i.hasContextToolbar(t.settings)&&!u(t)&&o.isLink(e)&&(n=t.selection,r=n.getRng(),a=r.startContainer,3==a.nodeType&&n.isCollapsed()&&r.startOffset>0&&r.startOffset<a.data.length))}},setupGotoLinks:function(e){e.on("click",function(n){var o=r(e,n.target);o&&t.metaKeyPressed(n)&&(n.preventDefault(),c(e,o))}),e.on("keydown",function(t){var n=a(e);n&&13===t.keyCode&&s(t)&&(t.preventDefault(),c(e,n))})},toggleActiveState:function(t){return function(){var e=this;t.on("nodechange",function(n){e.active(!t.readonly&&!!o.getAnchorElement(t,n.element))})}},toggleViewLinkState:function(t){return function(){var e=this,n=function(t){o.hasLinks(t.parents)?e.show():e.hide()};o.hasLinks(t.dom.getParents(t.selection.getStart()))||e.hide(),t.on("nodechange",n),e.on("remove",function(){t.off("nodechange",n)})}}}}),r("3",["2","8"],function(t,e){return{setupButtons:function(n){n.addButton("link",{icon:"link",tooltip:"Insert/edit link",shortcut:"Meta+K",onclick:t.openDialog(n),onpostrender:t.toggleActiveState(n)}),n.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onclick:e.unlink(n),onpostrender:t.toggleActiveState(n)}),n.addContextToolbar&&n.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:t.gotoSelectedLink(n)})},setupMenuItems:function(e){e.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:t.gotoSelectedLink(e),onPostRender:t.toggleViewLinkState(e),prependToContext:!0}),e.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:t.openDialog(e),stateSelector:"a[href]",context:"insert",prependToContext:!0})},setupContextToolbars:function(e){e.addContextToolbar&&e.addContextToolbar(t.leftClickedOnAHref(e),"openlink | link unlink")}}}),r("0",["1","2","3"],function(t,e,n){return t.add("link",function(t){n.setupButtons(t),n.setupMenuItems(t),n.setupContextToolbars(t),e.setupGotoLinks(t),t.addShortcut("Meta+K","",e.openDialog(t)),t.addCommand("mceLink",e.openDialog(t))}),function(){}}),o("0")()}();