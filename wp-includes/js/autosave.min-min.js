window.autosave=function(){return!0},function(t,e){function n(){function n(e){var n,o,a,i=(new Date).getTime(),r=[],c=s();return c&&c.isDirty()&&!c.isHidden()&&i-3e3>p&&(c.save(),p=i),a={post_id:t("#post_ID").val()||0,post_type:t("#post_type").val()||"",post_author:t("#post_author").val()||"",post_title:t("#title").val()||"",content:t("#content").val()||"",excerpt:t("#excerpt").val()||""},"local"===e?a:(t('input[id^="in-category-"]:checked').each(function(){r.push(this.value)}),a.catslist=r.join(","),(n=t("#post_name").val())&&(a.post_name=n),(o=t("#parent_id").val())&&(a.parent_id=o),t("#comment_status").prop("checked")&&(a.comment_status="open"),t("#ping_status").prop("checked")&&(a.ping_status="open"),"1"===t("#auto_draft").val()&&(a.auto_draft="1"),a)}function o(e){return"object"==typeof e?(e.post_title||"")+"::"+(e.content||"")+"::"+(e.excerpt||""):(t("#title").val()||"")+"::"+(t("#content").val()||"")+"::"+(t("#excerpt").val()||"")}function a(){v.trigger("autosave-disable-buttons"),setTimeout(i,5e3)}function i(){v.trigger("autosave-enable-buttons")}function s(){return"undefined"!=typeof tinymce&&tinymce.get("content")}function r(){function a(){var t=Math.random().toString(),n=!1;try{e.sessionStorage.setItem("wp-test",t),n=e.sessionStorage.getItem("wp-test")===t,e.sessionStorage.removeItem("wp-test")}catch(t){}return y=n,n}function i(){var t=!1;return y&&_&&(t=sessionStorage.getItem("wp-autosave-"+_),t=t?JSON.parse(t):{}),t}function r(t){var e;return!(!y||!_)&&(e="wp-autosave-"+_,sessionStorage.setItem(e,JSON.stringify(t)),null!==sessionStorage.getItem(e))}function c(){var t=i();return!(!t||!x)&&(t["post_"+x]||!1)}function p(t){var e=i();if(!e||!x)return!1;if(t)e["post_"+x]=t;else{if(!e.hasOwnProperty("post_"+x))return!1;delete e["post_"+x]}return r(e)}function l(){k=!0}function f(){k=!1}function d(e){var a,i,s=!1;return!(k||!y)&&(e?(a=c()||{},t.extend(a,e)):a=n("local"),i=o(a),void 0===S&&(S=u),i!==S&&(a.save_time=(new Date).getTime(),a.status=t("#post_status").val()||"",s=p(a),s&&(S=i),s))}function g(){x=t("#post_ID").val()||0,t("#wp-content-wrap").hasClass("tmce-active")?v.on("tinymce-editor-init.autosave",function(){e.setTimeout(function(){m()},1500)}):m(),b=e.setInterval(d,15e3),t("form#post").on("submit.autosave-local",function(){var n=s(),o=t("#post_ID").val()||0;n&&!n.isHidden()?n.on("submit",function(){d({post_title:t("#title").val()||"",content:t("#content").val()||"",excerpt:t("#excerpt").val()||""})}):d({post_title:t("#title").val()||"",content:t("#content").val()||"",excerpt:t("#excerpt").val()||""});var a="https:"===e.location.protocol;wpCookies.set("wp-saving-post",o+"-check",86400,!1,!1,a)})}function w(t,e){function n(t){return t.toString().replace(/[\x20\t\r\n\f]+/g,"")}return n(t||"")===n(e||"")}function m(){var e,n,o,a,i=c(),s=wpCookies.get("wp-saving-post"),r=t("#has-newer-autosave").parent(".notice"),u=t(".wp-header-end");return s===x+"-saved"?(wpCookies.remove("wp-saving-post"),void p(!1)):void(i&&(e=t("#content").val()||"",n=t("#title").val()||"",o=t("#excerpt").val()||"",w(e,i.content)&&w(n,i.post_title)&&w(o,i.excerpt)||(u.length||(u=t(".wrap h1, .wrap h2").first()),a=t("#local-storage-notice").insertAfter(u).addClass("notice-warning"),r.length?r.slideUp(150,function(){a.slideDown(150)}):a.slideDown(200),a.find(".restore-backup").on("click.autosave-local",function(){h(i),a.fadeTo(250,0,function(){a.slideUp(150)})}))))}function h(e){var n;return!!e&&(S=o(e),t("#title").val()!==e.post_title&&t("#title").focus().val(e.post_title||""),t("#excerpt").val(e.excerpt||""),n=s(),n&&!n.isHidden()&&"undefined"!=typeof switchEditors?(n.settings.wpautop&&e.content&&(e.content=switchEditors.wpautop(e.content)),n.undoManager.transact(function(){n.setContent(e.content||""),n.nodeChanged()})):(t("#content-html").click(),t("#content").focus(),document.execCommand("selectAll"),document.execCommand("insertText",!1,e.content||"")),!0)}var _,x,y,b,S,k=!1;return _=void 0!==e.autosaveL10n&&e.autosaveL10n.blog_id,a()&&_&&(t("#content").length||t("#excerpt").length)&&v.ready(g),{hasStorage:y,getSavedPostData:c,save:d,suspend:l,resume:f}}function c(){function s(){w=!0,e.clearTimeout(m),m=e.setTimeout(function(){w=!1},1e4)}function r(){y=!0}function c(){y=!1}function p(e){g(),w=!1,_=h,h="",v.trigger("after-autosave",[e]),i(),e.success&&t("#auto_draft").val("")}function l(){x=0,wp.heartbeat.connectNow()}function f(){return o()!==u}function d(){var i,r;return!(y||w||!e.autosave())&&!((new Date).getTime()<x)&&(i=n(),r=o(i),void 0===_&&(_=u),r!==_&&(h=r,s(),a(),v.trigger("wpcountwords",[i.content]).trigger("before-autosave",[i]),i._wpnonce=t("#_wpnonce").val()||"",i))}function g(){x=(new Date).getTime()+1e3*autosaveL10n.autosaveInterval||6e4}var w,m,h,_,x=0,y=!1;return v.on("heartbeat-send.autosave",function(t,e){var n=d();n&&(e.wp_autosave=n)}).on("heartbeat-tick.autosave",function(t,e){e.wp_autosave&&p(e.wp_autosave)}).on("heartbeat-connection-lost.autosave",function(e,n,o){if("timeout"===n||603===o){var i=t("#lost-connection-notice");wp.autosave.local.hasStorage||i.find(".hide-if-no-sessionstorage").hide(),i.show(),a()}}).on("heartbeat-connection-restored.autosave",function(){t("#lost-connection-notice").hide(),i()}).ready(function(){g()}),{tempBlockSave:s,triggerSave:l,postChanged:f,suspend:r,resume:c}}var u,p=0,v=t(document);return v.on("tinymce-editor-init.autosave",function(t,n){"content"===n.id&&e.setTimeout(function(){n.save(),u=o()},1e3)}).ready(function(){u=o()}),{getPostData:n,getCompareString:o,disableButtons:a,enableButtons:i,local:r(),server:c()}}e.wp=e.wp||{},e.wp.autosave=n()}(jQuery,window);