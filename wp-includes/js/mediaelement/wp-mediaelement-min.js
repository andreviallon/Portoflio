!function(e,$){function t(){function e(){"undefined"!=typeof _wpmejsSettings&&(t=$.extend(!0,{},_wpmejsSettings)),t.classPrefix="mejs-",t.success=t.success||function(e){var t,n;e.rendererName&&-1!==e.rendererName.indexOf("flash")&&(t=e.attributes.autoplay&&"false"!==e.attributes.autoplay,n=e.attributes.loop&&"false"!==e.attributes.loop,t&&e.addEventListener("canplay",function(){e.play()},!1),n&&e.addEventListener("ended",function(){e.play()},!1))},$(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!$(this).parent().hasClass("mejs-mediaelement")}).mediaelementplayer(t)}var t={};return{initialize:e}}e.wp=e.wp||{},e.wp.mediaelement=new t,$(e.wp.mediaelement.initialize)}(window,jQuery);