!function(e){e.Jcrop=function(t,n){function o(e){return Math.round(e)+"px"}function r(e){return P.baseClass+"-"+e}function i(){return e.fx.step.hasOwnProperty("backgroundColor")}function a(t){var n=e(t).offset();return[n.left,n.top]}function s(e){return[e.pageX-J[0],e.pageY-J[1]]}function c(t){"object"!=typeof t&&(t={}),P=e.extend(P,t),e.each(["onChange","onSelect","onRelease","onDblClick"],function(e,t){"function"!=typeof P[t]&&(P[t]=function(){})})}function u(e,t,n){if(J=a(q),be.setCursor("move"===e?e:e+"-resize"),"move"===e)return be.activateHandlers(l(t),b,n);var o=fe.getFixed(),r=h(e),i=fe.getCorner(h(r));fe.setPressed(fe.getCorner(r)),fe.setCurrent(i),be.activateHandlers(d(e,o),b,n)}function d(e,t){return function(n){if(P.aspectRatio)switch(e){case"e":n[1]=t.y+1;break;case"w":n[1]=t.y+1;break;case"n":n[0]=t.x+1;break;case"s":n[0]=t.x+1}else switch(e){case"e":n[1]=t.y2;break;case"w":n[1]=t.y2;break;case"n":n[0]=t.x2;break;case"s":n[0]=t.x2}fe.setCurrent(n),ge.update()}}function l(e){var t=e;return we.watchKeys(),function(e){fe.moveOffset([e[0]-t[0],e[1]-t[1]]),t=e,ge.update()}}function h(e){switch(e){case"n":return"sw";case"s":return"nw";case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function f(e){return function(t){return!P.disabled&&(!("move"===e&&!P.allowMove)&&(J=a(q),ue=!0,u(e,s(t)),t.stopPropagation(),t.preventDefault(),!1))}}function p(e,t,n){var o=e.width(),r=e.height();o>t&&t>0&&(o=t,r=t/e.width()*e.height()),r>n&&n>0&&(r=n,o=n/e.height()*e.width()),ae=e.width()/o,se=e.height()/r,e.width(o).height(r)}function g(e){return{x:e.x*ae,y:e.y*se,x2:e.x2*ae,y2:e.y2*se,w:e.w*ae,h:e.h*se}}function b(e){var t=fe.getFixed();t.w>P.minSelect[0]&&t.h>P.minSelect[1]?(ge.enableHandles(),ge.done()):ge.release(),be.setCursor(P.allowSelect?"crosshair":"default")}function w(e){if(P.disabled)return!1;if(!P.allowSelect)return!1;ue=!0,J=a(q),ge.disableHandles(),be.setCursor("crosshair");var t=s(e);return fe.setPressed(t),ge.update(),be.activateHandlers(v,b,"touch"===e.type.substring(0,5)),we.watchKeys(),e.stopPropagation(),e.preventDefault(),!1}function v(e){fe.setCurrent(e),ge.update()}function y(){var t=e("<div></div>").addClass(r("tracker"));return R&&t.css({opacity:0,backgroundColor:"white"}),t}function m(e){G.removeClass().addClass(r("holder")).addClass(e)}function x(e,t){function n(){window.setTimeout(y,l)}var o=e[0]/ae,r=e[1]/se,i=e[2]/ae,a=e[3]/se;if(!de){var s=fe.flipCoords(o,r,i,a),c=fe.getFixed(),u=[c.x,c.y,c.x2,c.y2],d=u,l=P.animationDelay,h=s[0]-u[0],f=s[1]-u[1],p=s[2]-u[2],g=s[3]-u[3],b=0,w=P.swingSpeed;o=d[0],r=d[1],i=d[2],a=d[3],ge.animMode(!0);var v,y=function(){return function(){b+=(100-b)/w,d[0]=Math.round(o+b/100*h),d[1]=Math.round(r+b/100*f),d[2]=Math.round(i+b/100*p),d[3]=Math.round(a+b/100*g),b>=99.8&&(b=100),b<100?(S(d),n()):(ge.done(),ge.animMode(!1),"function"==typeof t&&t.call(ve))}}();n()}}function C(e){S([e[0]/ae,e[1]/se,e[2]/ae,e[3]/se]),P.onSelect.call(ve,g(fe.getFixed())),ge.enableHandles()}function S(e){fe.setPressed([e[0],e[1]]),fe.setCurrent([e[2],e[3]]),ge.update()}function k(){return g(fe.getFixed())}function z(){return fe.getFixed()}function M(e){c(e),B()}function O(){P.disabled=!0,ge.disableHandles(),ge.setCursor("default"),be.setCursor("default")}function j(){P.disabled=!1,B()}function F(){ge.done(),be.activateHandlers(null,null)}function H(){G.remove(),E.show(),E.css("visibility","visible"),e(t).removeData("Jcrop")}function D(e,t){ge.release(),O();var n=new Image;n.onload=function(){var o=n.width,r=n.height,i=P.boxWidth,a=P.boxHeight;q.width(o).height(r),q.attr("src",e),N.attr("src",e),p(q,i,a),L=q.width(),X=q.height(),N.width(L).height(X),_.width(L+2*Z).height(X+2*Z),G.width(L).height(X),pe.resize(L,X),j(),"function"==typeof t&&t.call(ve)},n.src=e}function I(e,t,n){var o=t||P.bgColor;P.bgFade&&i()&&P.fadeTime&&!n?e.animate({backgroundColor:o},{queue:!1,duration:P.fadeTime}):e.css("backgroundColor",o)}function B(e){P.allowResize?e?ge.enableOnly():ge.enableHandles():ge.disableHandles(),be.setCursor(P.allowSelect?"crosshair":"default"),ge.setCursor(P.allowMove?"move":"default"),P.hasOwnProperty("trueSize")&&(ae=P.trueSize[0]/L,se=P.trueSize[1]/X),P.hasOwnProperty("setSelect")&&(C(P.setSelect),ge.done(),delete P.setSelect),pe.refresh(),P.bgColor!=ee&&(I(P.shade?pe.getShades():G,P.shade?P.shadeColor||P.bgColor:P.bgColor),ee=P.bgColor),te!=P.bgOpacity&&(te=P.bgOpacity,P.shade?pe.refresh():ge.setBgOpacity(te)),ne=P.maxSize[0]||0,oe=P.maxSize[1]||0,re=P.minSize[0]||0,ie=P.minSize[1]||0,P.hasOwnProperty("outerImage")&&(q.attr("src",P.outerImage),delete P.outerImage),ge.refresh()}var P=e.extend({},e.Jcrop.defaults),J,A=navigator.userAgent.toLowerCase(),R=/msie/.test(A),T=/msie [1-6]\./.test(A);"object"!=typeof t&&(t=e(t)[0]),"object"!=typeof n&&(n={}),c(n);var K={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},E=e(t),W=!0;if("IMG"==t.tagName){if(0!=E[0].width&&0!=E[0].height)E.width(E[0].width),E.height(E[0].height);else{var Y=new Image;Y.src=E[0].src,E.width(Y.width),E.height(Y.height)}var q=E.clone().removeAttr("id").css(K).show();q.width(E.width()),q.height(E.height()),E.after(q).hide()}else q=E.css(K).show(),W=!1,null===P.shade&&(P.shade=!0);p(q,P.boxWidth,P.boxHeight);var L=q.width(),X=q.height(),G=e("<div />").width(L).height(X).addClass(r("holder")).css({position:"relative",backgroundColor:P.bgColor}).insertAfter(E).append(q);P.addClass&&G.addClass(P.addClass);var N=e("<div />"),V=e("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),Q=e("<div />").width("100%").height("100%").css("zIndex",320),U=e("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var e=fe.getFixed();P.onDblClick.call(ve,e)}).insertBefore(q).append(V,Q);W&&(N=e("<img />").attr("src",q.attr("src")).css(K).width(L).height(X),V.append(N)),T&&U.css({overflowY:"hidden"});var Z=P.boundary,_=y().width(L+2*Z).height(X+2*Z).css({position:"absolute",top:o(-Z),left:o(-Z),zIndex:290}).mousedown(w),ee=P.bgColor,te=P.bgOpacity,ne,oe,re,ie,ae,se,ce=!0,ue,de,le;J=a(q);var he=function(){function e(){var e={},t=["touchstart","touchmove","touchend"],n=document.createElement("div"),o;try{for(o=0;o<t.length;o++){var r=t[o];r="on"+r;var i=r in n;i||(n.setAttribute(r,"return;"),i="function"==typeof n[r]),e[t[o]]=i}return e.touchstart&&e.touchend&&e.touchmove}catch(e){return!1}}function t(){return!0===P.touchSupport||!1===P.touchSupport?P.touchSupport:e()}return{createDragger:function(e){return function(t){return!P.disabled&&(!("move"===e&&!P.allowMove)&&(J=a(q),ue=!0,u(e,s(he.cfilter(t)),!0),t.stopPropagation(),t.preventDefault(),!1))}},newSelection:function(e){return w(he.cfilter(e))},cfilter:function(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,e},isSupported:e,support:t()}}(),fe=function(){function e(e){e=a(e),h=d=e[0],f=l=e[1]}function t(e){e=a(e),p=e[0]-h,g=e[1]-f,h=e[0],f=e[1]}function n(){return[p,g]}function o(e){var t=e[0],n=e[1];0>d+t&&(t-=t+d),0>l+n&&(n-=n+l),X<f+n&&(n+=X-(f+n)),L<h+t&&(t+=L-(h+t)),d+=t,h+=t,l+=n,f+=n}function r(e){var t=i();switch(e){case"ne":return[t.x2,t.y];case"nw":return[t.x,t.y];case"se":return[t.x2,t.y2];case"sw":return[t.x,t.y2]}}function i(){if(!P.aspectRatio)return c();var e=P.aspectRatio,t=P.minSize[0]/ae,n=P.maxSize[0]/ae,o=P.maxSize[1]/se,r=h-d,i=f-l,a=Math.abs(r),p=Math.abs(i),g=a/p,b,w,v,y;return 0===n&&(n=10*L),0===o&&(o=10*X),g<e?(w=f,v=p*e,b=r<0?d-v:v+d,b<0?(b=0,y=Math.abs((b-d)/e),w=i<0?l-y:y+l):b>L&&(b=L,y=Math.abs((b-d)/e),w=i<0?l-y:y+l)):(b=h,y=a/e,w=i<0?l-y:l+y,w<0?(w=0,v=Math.abs((w-l)*e),b=r<0?d-v:v+d):w>X&&(w=X,v=Math.abs(w-l)*e,b=r<0?d-v:v+d)),b>d?(b-d<t?b=d+t:b-d>n&&(b=d+n),w=w>l?l+(b-d)/e:l-(b-d)/e):b<d&&(d-b<t?b=d-t:d-b>n&&(b=d-n),w=w>l?l+(d-b)/e:l-(d-b)/e),b<0?(d-=b,b=0):b>L&&(d-=b-L,b=L),w<0?(l-=w,w=0):w>X&&(l-=w-X,w=X),u(s(d,l,b,w))}function a(e){return e[0]<0&&(e[0]=0),e[1]<0&&(e[1]=0),e[0]>L&&(e[0]=L),e[1]>X&&(e[1]=X),[Math.round(e[0]),Math.round(e[1])]}function s(e,t,n,o){var r=e,i=n,a=t,s=o;return n<e&&(r=n,i=e),o<t&&(a=o,s=t),[r,a,i,s]}function c(){var e=h-d,t=f-l,n;return ne&&Math.abs(e)>ne&&(h=e>0?d+ne:d-ne),oe&&Math.abs(t)>oe&&(f=t>0?l+oe:l-oe),ie/se&&Math.abs(t)<ie/se&&(f=t>0?l+ie/se:l-ie/se),re/ae&&Math.abs(e)<re/ae&&(h=e>0?d+re/ae:d-re/ae),d<0&&(h-=d,d-=d),l<0&&(f-=l,l-=l),h<0&&(d-=h,h-=h),f<0&&(l-=f,f-=f),h>L&&(n=h-L,d-=n,h-=n),f>X&&(n=f-X,l-=n,f-=n),d>L&&(n=d-X,f-=n,l-=n),l>X&&(n=l-X,f-=n,l-=n),u(s(d,l,h,f))}function u(e){return{x:e[0],y:e[1],x2:e[2],y2:e[3],w:e[2]-e[0],h:e[3]-e[1]}}var d=0,l=0,h=0,f=0,p,g;return{flipCoords:s,setPressed:e,setCurrent:t,getOffset:n,moveOffset:o,getCorner:r,getFixed:i}}(),pe=function(){function t(e,t){p.left.css({height:o(t)}),p.right.css({height:o(t)})}function n(){return r(fe.getFixed())}function r(e){p.top.css({left:o(e.x),width:o(e.w),height:o(e.y)}),p.bottom.css({top:o(e.y2),left:o(e.x),width:o(e.w),height:o(X-e.y2)}),p.right.css({left:o(e.x2),width:o(L-e.x2)}),p.left.css({width:o(e.x)})}function i(){return e("<div />").css({position:"absolute",backgroundColor:P.shadeColor||P.bgColor}).appendTo(f)}function a(){h||(h=!0,f.insertBefore(q),n(),ge.setBgOpacity(1,0,1),N.hide(),s(P.shadeColor||P.bgColor,1),ge.isAwake()?u(P.bgOpacity,1):u(1,1))}function s(e,t){I(l(),e,t)}function c(){h&&(f.remove(),N.show(),h=!1,ge.isAwake()?ge.setBgOpacity(P.bgOpacity,1,1):(ge.setBgOpacity(1,1,1),ge.disableHandles()),I(G,0,1))}function u(e,t){h&&(P.bgFade&&!t?f.animate({opacity:1-e},{queue:!1,duration:P.fadeTime}):f.css({opacity:1-e}))}function d(){P.shade?a():c(),ge.isAwake()&&u(P.bgOpacity)}function l(){return f.children()}var h=!1,f=e("<div />").css({position:"absolute",zIndex:240,opacity:0}),p={top:i(),left:i().height(X),right:i().height(X),bottom:i()};return{update:n,updateRaw:r,getShades:l,setBgColor:s,enable:a,disable:c,resize:t,refresh:d,opacity:u}}(),ge=function(){function t(t){var n=e("<div />").css({position:"absolute",opacity:P.borderOpacity}).addClass(r(t));return V.append(n),n}function n(t,n){var o=e("<div />").mousedown(f(t)).css({cursor:t+"-resize",position:"absolute",zIndex:n}).addClass("ord-"+t);return he.support&&o.bind("touchstart.jcrop",he.createDragger(t)),Q.append(o),o}function i(e){var t=P.handleSize,o=n(e,O++).css({opacity:P.handleOpacity}).addClass(r("handle"));return t&&o.width(t).height(t),o}function a(e){return n(e,O++).addClass("jcrop-dragbar")}function s(e){var t;for(t=0;t<e.length;t++)H[e[t]]=a(e[t])}function c(e){var n,o;for(o=0;o<e.length;o++){switch(e[o]){case"n":n="hline";break;case"s":n="hline bottom";break;case"e":n="vline right";break;case"w":n="vline"}j[e[o]]=t(n)}}function u(e){var t;for(t=0;t<e.length;t++)F[e[t]]=i(e[t])}function d(e,t){P.shade||N.css({top:o(-t),left:o(-e)}),U.css({top:o(t),left:o(e)})}function l(e,t){U.width(Math.round(e)).height(Math.round(t))}function h(){var e=fe.getFixed();fe.setPressed([e.x,e.y]),fe.setCurrent([e.x2,e.y2]),p()}function p(e){if(M)return b(e)}function b(e){var t=fe.getFixed();l(t.w,t.h),d(t.x,t.y),P.shade&&pe.updateRaw(t),M||v(),e?P.onSelect.call(ve,g(t)):P.onChange.call(ve,g(t))}function w(e,t,n){(M||t)&&(P.bgFade&&!n?q.animate({opacity:e},{queue:!1,duration:P.fadeTime}):q.css("opacity",e))}function v(){U.show(),P.shade?pe.opacity(te):w(te,!0),M=!0}function m(){S(),U.hide(),P.shade?pe.opacity(1):w(1),M=!1,P.onRelease.call(ve)}function x(){D&&Q.show()}function C(){if(D=!0,P.allowResize)return Q.show(),!0}function S(){D=!1,Q.hide()}function k(e){e?(de=!0,S()):(de=!1,C())}function z(){k(!1),h()}var M,O=370,j={},F={},H={},D=!1;P.dragEdges&&e.isArray(P.createDragbars)&&s(P.createDragbars),e.isArray(P.createHandles)&&u(P.createHandles),P.drawBorders&&e.isArray(P.createBorders)&&c(P.createBorders),e(document).bind("touchstart.jcrop-ios",function(t){e(t.currentTarget).hasClass("jcrop-tracker")&&t.stopPropagation()});var I=y().mousedown(f("move")).css({cursor:"move",position:"absolute",zIndex:360});return he.support&&I.bind("touchstart.jcrop",he.createDragger("move")),V.append(I),S(),{updateVisible:p,update:b,release:m,refresh:h,isAwake:function(){return M},setCursor:function(e){I.css("cursor",e)},enableHandles:C,enableOnly:function(){D=!0},showHandles:x,disableHandles:S,animMode:k,setBgOpacity:w,done:z}}(),be=function(){function t(t){_.css({zIndex:450}),t?e(document).bind("touchmove.jcrop",a).bind("touchend.jcrop",c):h&&e(document).bind("mousemove.jcrop",o).bind("mouseup.jcrop",r)}function n(){_.css({zIndex:290}),e(document).unbind(".jcrop")}function o(e){return d(s(e)),!1}function r(e){return e.preventDefault(),e.stopPropagation(),ue&&(ue=!1,l(s(e)),ge.isAwake()&&P.onSelect.call(ve,g(fe.getFixed())),n(),d=function(){},l=function(){}),!1}function i(e,n,o){return ue=!0,d=e,l=n,t(o),!1}function a(e){return d(s(he.cfilter(e))),!1}function c(e){return r(he.cfilter(e))}function u(e){_.css("cursor",e)}var d=function(){},l=function(){},h=P.trackDocument;return h||_.mousemove(o).mouseup(r).mouseout(r),q.before(_),{activateHandlers:i,setCursor:u}}(),we=function(){function t(){P.keySupport&&(i.show(),i.focus())}function n(e){i.hide()}function o(e,t,n){P.allowMove&&(fe.moveOffset([t,n]),ge.updateVisible(!0)),e.preventDefault(),e.stopPropagation()}function r(e){if(e.ctrlKey||e.metaKey)return!0;le=!!e.shiftKey;var t=le?10:1;switch(e.keyCode){case 37:o(e,-t,0);break;case 39:o(e,t,0);break;case 38:o(e,0,-t);break;case 40:o(e,0,t);break;case 27:P.allowSelect&&ge.release();break;case 9:return!0}return!1}var i=e('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),a=e("<div />").css({position:"absolute",overflow:"hidden"}).append(i);return P.keySupport&&(i.keydown(r).blur(n),T||!P.fixedSupport?(i.css({position:"absolute",left:"-20px"}),a.append(i).insertBefore(q)):i.insertBefore(q)),{watchKeys:t}}();he.support&&_.bind("touchstart.jcrop",he.newSelection),Q.hide(),B(!0);var ve={setImage:D,animateTo:x,setSelect:C,setOptions:M,tellSelect:k,tellScaled:z,setClass:m,disable:O,enable:j,cancel:F,release:ge.release,destroy:H,focus:we.watchKeys,getBounds:function(){return[L*ae,X*se]},getWidgetSize:function(){return[L,X]},getScaleFactor:function(){return[ae,se]},getOptions:function(){return P},ui:{holder:G,selection:U}};return R&&G.bind("selectstart",function(){return!1}),E.data("Jcrop",ve),ve},e.fn.Jcrop=function(t,n){var o;return this.each(function(){if(e(this).data("Jcrop")){if("api"===t)return e(this).data("Jcrop");e(this).data("Jcrop").setOptions(t)}else"IMG"==this.tagName?e.Jcrop.Loader(this,function(){e(this).css({display:"block",visibility:"hidden"}),o=e.Jcrop(this,t),e.isFunction(n)&&n.call(o)}):(e(this).css({display:"block",visibility:"hidden"}),o=e.Jcrop(this,t),e.isFunction(n)&&n.call(o))}),this},e.Jcrop.Loader=function(t,n,o){function r(){a.complete?(i.unbind(".jcloader"),e.isFunction(n)&&n.call(a)):window.setTimeout(r,50)}var i=e(t),a=i[0];i.bind("load.jcloader",r).bind("error.jcloader",function(t){i.unbind(".jcloader"),e.isFunction(o)&&o.call(a)}),a.complete&&e.isFunction(n)&&(i.unbind(".jcloader"),n.call(a))},e.Jcrop.defaults={allowSelect:!0,allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:!1,borderOpacity:.4,handleOpacity:.5,handleSize:null,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges:!0,fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}}(jQuery);