tinymce.PluginManager.add("wpautoresize",function(e){function t(){return e.plugins.fullscreen&&e.plugins.fullscreen.isFullscreen()}function o(e){return parseInt(e,10)||0}function n(i){var a,s,d,g,m,h,f,c,y,p,_,w,z=tinymce.DOM;if(l&&(s=e.getDoc())){if(i=i||{},d=s.body,g=s.documentElement,m=r.autoresize_min_height,!d||i&&"setcontent"===i.type&&i.initial||t())return void(d&&g&&(d.style.overflowY="auto",g.style.overflowY="auto"));f=e.dom.getStyle(d,"margin-top",!0),c=e.dom.getStyle(d,"margin-bottom",!0),y=e.dom.getStyle(d,"padding-top",!0),p=e.dom.getStyle(d,"padding-bottom",!0),_=e.dom.getStyle(d,"border-top-width",!0),w=e.dom.getStyle(d,"border-bottom-width",!0),h=d.offsetHeight+o(f)+o(c)+o(y)+o(p)+o(_)+o(w),h&&h<g.offsetHeight&&(h=g.offsetHeight),(isNaN(h)||h<=0)&&(h=tinymce.Env.ie?d.scrollHeight:tinymce.Env.webkit&&0===d.clientHeight?0:d.offsetHeight),h>r.autoresize_min_height&&(m=h),r.autoresize_max_height&&h>r.autoresize_max_height?(m=r.autoresize_max_height,d.style.overflowY="auto",g.style.overflowY="auto"):(d.style.overflowY="hidden",g.style.overflowY="hidden",d.scrollTop=0),m!==u&&(a=m-u,z.setStyle(e.iframeElement,"height",m+"px"),u=m,tinymce.isWebKit&&a<0&&n(i),e.fire("wp-autoresize",{height:m,deltaHeight:"nodechange"===i.type?a:null}))}}function i(e,t,o){setTimeout(function(){n(),e--?i(e,t,o):o&&o()},t)}function a(){e.dom.hasClass(e.getBody(),"wp-autoresize")||(l=!0,e.dom.addClass(e.getBody(),"wp-autoresize"),e.on("nodechange setcontent keyup FullscreenStateChanged",n),n())}function s(){var t;r.wp_autoresize_on||(l=!1,t=e.getDoc(),e.dom.removeClass(e.getBody(),"wp-autoresize"),e.off("nodechange setcontent keyup FullscreenStateChanged",n),t.body.style.overflowY="auto",t.documentElement.style.overflowY="auto",u=0)}var r=e.settings,u=300,l=!1;e.settings.inline||tinymce.Env.iOS||(r.autoresize_min_height=parseInt(e.getParam("autoresize_min_height",e.getElement().offsetHeight),10),r.autoresize_max_height=parseInt(e.getParam("autoresize_max_height",0),10),r.wp_autoresize_on&&(l=!0,e.on("init",function(){e.dom.addClass(e.getBody(),"wp-autoresize")}),e.on("nodechange keyup FullscreenStateChanged",n),e.on("setcontent",function(){i(3,100)}),e.getParam("autoresize_on_init",!0)&&e.on("init",function(){i(10,200,function(){i(5,1e3)})})),e.on("show",function(){u=0}),e.addCommand("wpAutoResize",n),e.addCommand("wpAutoResizeOn",a),e.addCommand("wpAutoResizeOff",s))});