!function(e,t,n){e.PluginManager.add("wpemoji",function(o){function i(e){e.className="emoji",e.setAttribute("data-mce-resize","false"),e.setAttribute("data-mce-placeholder","1"),e.setAttribute("data-wp-emoji","1")}function a(e){var n={"data-mce-resize":"false","data-mce-placeholder":"1","data-wp-emoji":"1"};t.emoji.parse(e,{imgAttr:n})}function w(e){var t,n;e&&window.twemoji&&window.twemoji.test(e.textContent||e.innerText)&&(d.webkit&&(t=o.selection,n=t.getBookmark()),a(e),d.webkit&&t.moveToBookmark(n))}var c,d=e.Env,r=window.navigator.userAgent,m=r.indexOf("Windows")>-1,s=function(){var e=r.match(/Windows NT 6\.(\d)/);return!!(e&&e[1]>1)}();t&&t.emoji&&!n.supports.everything&&(s?o.on("keyup",function(e){231===e.keyCode&&w(o.selection.getNode())}):m||(o.on("keydown keyup",function(e){c="keydown"===e.type}),o.on("input",function(){c||w(o.selection.getNode())})),o.on("setcontent",function(e){var t=o.selection,n=t.getNode();window.twemoji&&window.twemoji.test(n.textContent||n.innerText)&&(a(n),d.ie&&d.ie<9&&e.load&&n&&"BODY"===n.nodeName&&t.collapse(!0))}),o.on("PastePostProcess",function(t){window.twemoji&&e.each(o.dom.$("img.emoji",t.node),function(e){e.alt&&window.twemoji.test(e.alt)&&i(e)})}),o.on("postprocess",function(e){e.content&&(e.content=e.content.replace(/<img[^>]+data-wp-emoji="[^>]+>/g,function(e){var t=e.match(/alt="([^"]+)"/);return t&&t[1]?t[1]:e}))}),o.on("resolvename",function(e){"IMG"===e.target.nodeName&&o.dom.getAttrib(e.target,"data-wp-emoji")&&e.preventDefault()}))})}(window.tinymce,window.wp,window._wpemojiSettings);