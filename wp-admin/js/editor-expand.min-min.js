!function(t,e,o){"use strict";var i=e(t),n=e(document),s=e("#wpadminbar"),f=e("#wpfooter");e(function(){function o(){var t=T.value.length;g&&!g.isHidden()||(g||"tinymce"!==M)&&(t<B?j():parseInt(T.style.height,10)<T.scrollHeight&&(T.style.height=Math.ceil(T.scrollHeight)+"px",d()),B=t)}function a(){var t=i.width();N={windowHeight:i.height(),windowWidth:t,adminBarHeight:t>600?s.outerHeight():0,toolsHeight:H.outerHeight()||0,menuBarHeight:S.outerHeight()||0,visualTopHeight:b.outerHeight()||0,textTopHeight:x.outerHeight()||0,bottomHeight:C.outerHeight()||0,statusBarHeight:O.outerHeight()||0,sideSortablesHeight:z.height()||0},N.menuBarHeight<3&&(N.menuBarHeight=0)}function d(e){if(!A||!A.settings.visible){var s,d,c,u,r,l,p,h,m,T=i.scrollTop(),B=e&&e.type,_="scroll"!==B,W=g&&!g.isHidden(),K=L,X=k.offset().top,M=1,j=w.width();!_&&N.windowHeight||a(),W||"resize"!==B||o(),W?(s=b,d=v,p=N.visualTopHeight):(s=x,d=y,p=N.textTopHeight),(W||s.length)&&(l=s.parent().offset().top,h=d.offset().top,m=d.outerHeight(),r=W?L+p:L+20,r=m>r+5,r?((!R||_)&&T>=l-N.toolsHeight-N.adminBarHeight&&T<=l-N.toolsHeight-N.adminBarHeight+m-K?(R=!0,H.css({position:"fixed",top:N.adminBarHeight,width:j}),W&&S.length&&S.css({position:"fixed",top:N.adminBarHeight+N.toolsHeight,width:j-2-(W?0:s.outerWidth()-s.width())}),s.css({position:"fixed",top:N.adminBarHeight+N.toolsHeight+N.menuBarHeight,width:j-2-(W?0:s.outerWidth()-s.width())})):(R||_)&&(T<=l-N.toolsHeight-N.adminBarHeight?(R=!1,H.css({position:"absolute",top:0,width:j}),W&&S.length&&S.css({position:"absolute",top:0,width:j-2}),s.css({position:"absolute",top:N.menuBarHeight,width:j-2-(W?0:s.outerWidth()-s.width())})):T>=l-N.toolsHeight-N.adminBarHeight+m-K&&(R=!1,H.css({position:"absolute",top:m-K,width:j}),W&&S.length&&S.css({position:"absolute",top:m-K,width:j-2}),s.css({position:"absolute",top:m-K+N.menuBarHeight,width:j-2-(W?0:s.outerWidth()-s.width())}))),(!Y||_&&V)&&T+N.windowHeight<=h+m+N.bottomHeight+N.statusBarHeight+1?e&&e.deltaHeight>0&&e.deltaHeight<100?t.scrollBy(0,e.deltaHeight):W&&V&&(Y=!0,O.css({position:"fixed",bottom:N.bottomHeight,visibility:"",width:j-2}),C.css({position:"fixed",bottom:0,width:j})):(!V&&Y||(Y||_)&&T+N.windowHeight>h+m+N.bottomHeight+N.statusBarHeight-1)&&(Y=!1,O.attr("style",V?"":"visibility: hidden;"),C.attr("style",""))):_&&(H.css({position:"absolute",top:0,width:j}),W&&S.length&&S.css({position:"absolute",top:0,width:j-2}),s.css({position:"absolute",top:N.menuBarHeight,width:j-2-(W?0:s.outerWidth()-s.width())}),O.attr("style",V?"":"visibility: hidden;"),C.attr("style","")),E.width()<300&&N.windowWidth>600&&n.height()>z.height()+X+120&&N.windowHeight<m?(N.sideSortablesHeight+F+I>N.windowHeight||U||D?T+F<=X?(z.attr("style",""),U=D=!1):T>P?U?(U=!1,c=z.offset().top-N.adminBarHeight,u=f.offset().top,u<c+N.sideSortablesHeight+I&&(c=u-N.sideSortablesHeight-12),z.css({position:"absolute",top:c,bottom:""})):!D&&N.sideSortablesHeight+z.offset().top+I<T+N.windowHeight&&(D=!0,z.css({position:"fixed",top:"auto",bottom:I})):T<P&&(D?(D=!1,c=z.offset().top-I,u=f.offset().top,u<c+N.sideSortablesHeight+I&&(c=u-N.sideSortablesHeight-12),z.css({position:"absolute",top:c,bottom:""})):!U&&z.offset().top>=T+F&&(U=!0,z.css({position:"fixed",top:F,bottom:""}))):(T>=X-F?z.css({position:"fixed",top:F}):z.attr("style",""),U=D=!1),P=T):(z.attr("style",""),U=D=!1),_&&(w.css({paddingTop:N.toolsHeight}),W?v.css({paddingTop:N.visualTopHeight+N.menuBarHeight}):y.css({marginTop:N.textTopHeight})))}}function c(){o(),d()}function u(t){for(var e=1;e<6;e++)setTimeout(t,500*e)}function r(){clearTimeout(h),h=setTimeout(d,100)}function l(){t.pageYOffset&&t.pageYOffset>X&&t.scrollTo(t.pageXOffset,0),m.addClass("wp-editor-expand"),i.on("scroll.editor-expand resize.editor-expand",function(t){d(t.type),r()}),n.on("wp-collapse-menu.editor-expand postboxes-columnchange.editor-expand editor-classchange.editor-expand",d).on("postbox-toggled.editor-expand postbox-moved.editor-expand",function(){!U&&!D&&t.pageYOffset>F&&(D=!0,t.scrollBy(0,-1),d(),t.scrollBy(0,1)),d()}).on("wp-window-resized.editor-expand",function(){g&&!g.isHidden()?g.execCommand("wpAutoResize"):o()}),y.on("focus.editor-expand input.editor-expand propertychange.editor-expand",o),W(),A&&A.pubsub.subscribe("hidden",c),g&&(g.settings.wp_autoresize_on=!0,g.execCommand("wpAutoResizeOn"),g.isHidden()||g.execCommand("wpAutoResize")),g&&!g.isHidden()||o(),d(),n.trigger("editor-expand-on")}function p(){var o=parseInt(t.getUserSetting("ed_size",300),10);o<50?o=50:o>5e3&&(o=5e3),t.pageYOffset&&t.pageYOffset>X&&t.scrollTo(t.pageXOffset,0),m.removeClass("wp-editor-expand"),i.off(".editor-expand"),n.off(".editor-expand"),y.off(".editor-expand"),K(),A&&A.pubsub.unsubscribe("hidden",c),e.each([b,x,H,S,C,O,w,v,y,z],function(t,e){e&&e.attr("style","")}),R=Y=U=D=!1,g&&(g.settings.wp_autoresize_on=!1,g.execCommand("wpAutoResizeOff"),g.isHidden()||(y.hide(),o&&g.theme.resizeTo(null,o))),o&&y.height(o),n.trigger("editor-expand-off")}var g,h,m=e("#postdivrich"),w=e("#wp-content-wrap"),H=e("#wp-content-editor-tools"),b=e(),v=e(),x=e("#ed_toolbar"),y=e("#content"),T=y[0],B=0,C=e("#post-status-info"),S=e(),O=e(),z=e("#side-sortables"),E=e("#postbox-container-1"),k=e("#post-body"),A=t.wp.editor&&t.wp.editor.fullscreen,W=function(){},K=function(){},R=!1,Y=!1,U=!1,D=!1,P=0,X=130,F=56,I=20,L=300,M=w.hasClass("tmce-active")?"tinymce":"html",V=!!parseInt(t.getUserSetting("hidetb"),10),N={windowHeight:0,windowWidth:0,adminBarHeight:0,toolsHeight:0,menuBarHeight:0,visualTopHeight:0,textTopHeight:0,bottomHeight:0,statusBarHeight:0,sideSortablesHeight:0},j=t._.throttle(function(){var e=t.scrollX||document.documentElement.scrollLeft,o=t.scrollY||document.documentElement.scrollTop,i=parseInt(T.style.height,10);T.style.height=L+"px",T.scrollHeight>L&&(T.style.height=T.scrollHeight+"px"),void 0!==e&&t.scrollTo(e,o),T.scrollHeight<i&&d()},300);n.on("tinymce-editor-init.editor-expand",function(n,s){function f(){var t,e,o,i=s.selection.getNode();if(s.wp&&s.wp.getView&&(e=s.wp.getView(i)))o=e.getBoundingClientRect();else{t=s.selection.getRng();try{o=t.getClientRects()[0]}catch(t){}o||(o=i.getBoundingClientRect())}return!!o.height&&o}function a(t){var e=t.keyCode;e<=47&&e!==H.SPACEBAR&&e!==H.ENTER&&e!==H.DELETE&&e!==H.BACKSPACE&&e!==H.UP&&e!==H.LEFT&&e!==H.DOWN&&e!==H.UP||e>=91&&e<=93||e>=112&&e<=123||144===e||145===e||c(e)}function c(e){var o,i,n,a,d=f(),c=50;d&&(o=d.top+s.iframeElement.getBoundingClientRect().top,i=o+d.height,o-=c,i+=c,n=N.adminBarHeight+N.toolsHeight+N.menuBarHeight+N.visualTopHeight,(a=N.windowHeight-(V?N.bottomHeight+N.statusBarHeight:0))-n<d.height||(o<n&&(e===H.UP||e===H.LEFT||e===H.BACKSPACE)?t.scrollTo(t.pageXOffset,o+t.pageYOffset-n):i>a&&t.scrollTo(t.pageXOffset,i+t.pageYOffset-a)))}function r(t){t.state||d()}function l(){i.on("scroll.mce-float-panels",x),setTimeout(function(){s.execCommand("wpAutoResize"),d()},300)}function p(){i.off("scroll.mce-float-panels"),setTimeout(function(){var e=w.offset().top;t.pageYOffset>e&&t.scrollTo(t.pageXOffset,e-N.adminBarHeight),o(),d()},100),d()}function h(){V=!V}var H=t.tinymce.util.VK,x=_.debounce(function(){!e(".mce-floatpanel:hover").length&&t.tinymce.ui.FloatPanel.hideAll(),e(".mce-tooltip").hide()},1e3,!0);"content"===s.id&&(g=s,s.settings.autoresize_min_height=L,b=w.find(".mce-toolbar-grp"),v=w.find(".mce-edit-area"),O=w.find(".mce-statusbar"),S=w.find(".mce-menubar"),W=function(){s.on("keyup",a),s.on("show",l),s.on("hide",p),s.on("wp-toolbar-toggle",h),s.on("setcontent wp-autoresize wp-toolbar-toggle",d),s.on("undo redo",c),s.on("FullscreenStateChanged",r),i.off("scroll.mce-float-panels").on("scroll.mce-float-panels",x)},K=function(){s.off("keyup",a),s.off("show",l),s.off("hide",p),s.off("wp-toolbar-toggle",h),s.off("setcontent wp-autoresize wp-toolbar-toggle",d),s.off("undo redo",c),s.off("FullscreenStateChanged",r),i.off("scroll.mce-float-panels")},m.hasClass("wp-editor-expand")&&(W(),u(d)))}),m.hasClass("wp-editor-expand")&&(l(),w.hasClass("html-active")&&u(function(){d(),o()})),e("#adv-settings .editor-expand").show(),e("#editor-expand-toggle").on("change.editor-expand",function(){e(this).prop("checked")?(l(),t.setUserSetting("editor_expand","on")):(p(),t.setUserSetting("editor_expand","off"))}),t.editorExpand={on:l,off:p}}),e(function(){function o(){C=R.offset(),C.right=C.left+R.outerWidth(),C.bottom=C.top+R.outerHeight()}function a(){M||(M=!0,n.trigger("dfw-activate"),U.on("keydown.focus-shortcut",x))}function d(){M&&(r(),M=!1,n.trigger("dfw-deactivate"),U.off("keydown.focus-shortcut"))}function c(){return M}function u(){!V&&M&&(V=!0,U.on("keydown.focus",g),Y.add(U).on("blur.focus",m),g(),t.setUserSetting("post_dfw","on"),n.trigger("dfw-on"))}function r(){V&&(V=!1,Y.add(U).off(".focus"),h(),R.off(".focus"),t.setUserSetting("post_dfw","off"),n.trigger("dfw-off"))}function l(){V?r():u()}function p(){return V}function g(e){var n,s=e&&e.keyCode;return t.navigator.platform&&(n=t.navigator.platform.indexOf("Mac")>-1),27===s||87===s&&e.altKey&&(!n&&e.shiftKey||n&&e.ctrlKey)?void h(e):void(e&&(e.metaKey||e.ctrlKey&&!e.altKey||e.altKey&&e.shiftKey||s&&(s<=47&&8!==s&&13!==s&&32!==s&&46!==s||s>=91&&s<=93||s>=112&&s<=135||s>=144&&s<=150||s>=224))||(y||(y=!0,clearTimeout(k),k=setTimeout(function(){D.show()},600),R.css("z-index",9998),D.on("mouseenter.focus",function(){o(),i.on("scroll.focus",function(){var e=t.pageYOffset;E&&z&&E!==e&&(z<C.top-q||z>C.bottom+q)&&h(),E=e})}).on("mouseleave.focus",function(){S=O=null,N=j=0,i.off("scroll.focus")}).on("mousemove.focus",function(e){var o=e.clientX,i=e.clientY,n=t.pageYOffset,s=t.pageXOffset;if(S&&O&&(o!==S||i!==O))if(i<=O&&i<C.top-n||i>=O&&i>C.bottom-n||o<=S&&o<C.left-s||o>=S&&o>C.right-s){if(N+=Math.abs(S-o),j+=Math.abs(O-i),(i<=C.top-q-n||i>=C.bottom+q-n||o<=C.left-q-s||o>=C.right+q-s)&&(N>10||j>10))return h(),S=O=null,void(N=j=0)}else N=j=0;S=o,O=i}).on("touchstart.focus",function(t){t.preventDefault(),h()}),R.off("mouseenter.focus"),_&&(clearTimeout(_),_=null),W.addClass("focus-on").removeClass("focus-off")),w(),b()))}function h(t){y&&(y=!1,clearTimeout(k),k=setTimeout(function(){D.hide()},200),R.css("z-index",""),D.off("mouseenter.focus mouseleave.focus mousemove.focus touchstart.focus"),void 0===t&&R.on("mouseenter.focus",function(){(e.contains(R.get(0),document.activeElement)||A)&&g()}),_=setTimeout(function(){_=null,R.off("mouseenter.focus")},1e3),W.addClass("focus-off").removeClass("focus-on")),H(),v()}function m(){setTimeout(function(){function t(t){return e.contains(t.get(0),document.activeElement)}var o=document.activeElement.compareDocumentPosition(R.get(0));2!==o&&4!==o||!(t(F)||t(K)||t(f))||h()},0)}function w(){!T&&y&&(T=!0,s.on("mouseenter.focus",function(){s.addClass("focus-off")}).on("mouseleave.focus",function(){s.removeClass("focus-off")}))}function H(){T&&(T=!1,s.off(".focus"))}function b(){B||!y||P.find(":focus").length||(B=!0,P.stop().fadeTo("fast",.3).on("mouseenter.focus",v).off("mouseleave.focus"),X.on("focus.focus",v).off("blur.focus"))}function v(){B&&(B=!1,P.stop().fadeTo("fast",1).on("mouseleave.focus",b).off("mouseenter.focus"),X.on("blur.focus",b).off("focus.focus"))}function x(t){t.altKey&&t.shiftKey&&87===t.keyCode&&l()}var y,T,B,C,S,O,z,E,_,k,A,W=e(document.body),K=e("#wpcontent"),R=e("#post-body-content"),Y=e("#title"),U=e("#content"),D=e(document.createElement("DIV")),P=e("#edit-slug-box"),X=P.find("a").add(P.find("button")).add(P.find("input")),F=e("#adminmenuwrap"),I=e(),L=e(),M="on"===t.getUserSetting("editor_expand","on"),V=!!M&&"on"===t.getUserSetting("post_dfw"),N=0,j=0,q=20;W.append(D),D.css({display:"none",position:"fixed",top:s.height(),right:0,bottom:0,left:0,"z-index":9997}),R.css({position:"relative"}),i.on("mousemove.focus",function(t){z=t.pageY}),e("#postdivrich").hasClass("wp-editor-expand")&&U.on("keydown.focus-shortcut",x),n.on("tinymce-editor-setup.focus",function(t,e){e.addButton("dfw",{active:V,classes:"wp-dfw btn widget",disabled:!M,onclick:l,onPostRender:function(){var t=this;n.on("dfw-activate.focus",function(){t.disabled(!1)}).on("dfw-deactivate.focus",function(){t.disabled(!0)}).on("dfw-on.focus",function(){t.active(!0)}).on("dfw-off.focus",function(){t.active(!1)})},tooltip:"Distraction-free writing mode",shortcut:"Alt+Shift+W"}),e.addCommand("wpToggleDFW",l),e.addShortcut("access+w","","wpToggleDFW")}),n.on("tinymce-editor-init.focus",function(t,i){function s(){A=!0}function f(){A=!1}var a,d;"content"===i.id&&(I=e(i.getWin()),L=e(i.getContentAreaContainer()).find("iframe"),a=function(){i.on("keydown",g),i.on("blur",m),i.on("focus",s),i.on("blur",f),i.on("wp-autoresize",o)},d=function(){i.off("keydown",g),i.off("blur",m),i.off("focus",s),i.off("blur",f),i.off("wp-autoresize",o)},V&&a(),n.on("dfw-on.focus",a).on("dfw-off.focus",d),i.on("click",function(t){t.target===i.getDoc().documentElement&&i.focus()}))}),n.on("quicktags-init",function(t,o){var i;o.settings.buttons&&-1!==(","+o.settings.buttons+",").indexOf(",dfw,")&&(i=e("#"+o.name+"_dfw"),e(document).on("dfw-activate",function(){i.prop("disabled",!1)}).on("dfw-deactivate",function(){i.prop("disabled",!0)}).on("dfw-on",function(){i.addClass("active")}).on("dfw-off",function(){i.removeClass("active")}))}),n.on("editor-expand-on.focus",a).on("editor-expand-off.focus",d),V&&(U.on("keydown.focus",g),Y.add(U).on("blur.focus",m)),t.wp=t.wp||{},t.wp.editor=t.wp.editor||{},t.wp.editor.dfw={activate:a,deactivate:d,isActive:c,on:u,off:r,toggle:l,isOn:p}})}(window,window.jQuery);