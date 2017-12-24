!function(e){e.ui.Factory.add("WPLinkPreview",e.ui.Control.extend({url:"#",renderHtml:function(){return'<div id="'+this._id+'" class="wp-link-preview"><a href="'+this.url+'" target="_blank" rel="noopener" tabindex="-1">'+this.url+"</a></div>"},setURL:function(t){var n,i;this.url!==t&&(this.url=t,t=window.decodeURIComponent(t),t=t.replace(/^(?:https?:)?\/\/(?:www\.)?/,""),-1!==(n=t.indexOf("?"))&&(t=t.slice(0,n)),-1!==(n=t.indexOf("#"))&&(t=t.slice(0,n)),t=t.replace(/(?:index)?\.html$/,""),"/"===t.charAt(t.length-1)&&(t=t.slice(0,-1)),""===t&&(t=this.url),t.length>40&&-1!==(n=t.indexOf("/"))&&-1!==(i=t.lastIndexOf("/"))&&i!==n&&(n+t.length-i<40&&(i=-(40-(n+1))),t=t.slice(0,n+1)+"…"+t.slice(i)),e.$(this.getEl().firstChild).attr("href",this.url).text(t))}})),e.ui.Factory.add("WPLinkInput",e.ui.Control.extend({renderHtml:function(){return'<div id="'+this._id+'" class="wp-link-input"><input type="text" value="" placeholder="'+e.translate("Paste URL or type to search")+'" /><input type="text" style="display:none" value="" /></div>'},setURL:function(e){this.getEl().firstChild.value=e},getURL:function(){return e.trim(this.getEl().firstChild.value)},getLinkText:function(){var t=this.getEl().firstChild.nextSibling.value;return e.trim(t)?t.replace(/[\r\n\t ]+/g," "):""},reset:function(){var e=this.getEl().firstChild;e.value="",e.nextSibling.value=""}})),e.PluginManager.add("wplink",function(t){function n(){var e,n,i=t.selection.getStart(),o=t.dom.getParent(i,"a[href]");return o||(n=t.selection.getContent({format:"raw"}))&&-1!==n.indexOf("</a>")&&(e=n.match(/href="([^">]+)"/),e&&e[1]&&(o=t.$('a[href="'+e[1]+'"]',i)[0]),o&&t.selection.select(o)),o}function i(){t.$("a").each(function(e,n){var i=t.$(n);"_wp_link_placeholder"===i.attr("href")?t.dom.remove(n,!0):i.attr("data-wplink-edit")&&i.attr("data-wplink-edit",null)})}function o(e,t){return e.replace(/(<a [^>]+>)([\s\S]*?)<\/a>/g,function(e,n,i){return n.indexOf(' href="_wp_link_placeholder"')>-1?i:(t&&(n=n.replace(/ data-wplink-edit="true"/g,"")),(n=n.replace(/ data-wplink-url-error="true"/g,""))+i+"</a>")})}function a(e){var n=t.$(e),i=n.attr("href");i&&void 0!==w&&(h=!1,!/^http/i.test(i)||k.test(i)&&f.test(i)?n.removeAttr("data-wplink-url-error"):(h=!0,n.attr("data-wplink-url-error","true"),v(t.translate("Warning: the link has been inserted but may have errors. Please test it."),"assertive")))}var l,r,d,c,p,s,u,w=window.jQuery,m=/^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\.[a-z]{2,63}$/i,k=/^https?:\/\/([^\s\/?.#-][^\s\/?.#]*\.?)+(\/[^\s"]*)?$/i,f=/^https?:\/\/[^\/]+\.[^\/]+($|\/)/i,v=void 0!==window.wp&&window.wp.a11y&&window.wp.a11y.speak?window.wp.a11y.speak:function(){},h=!1;return t.on("preinit",function(){if(t.wp&&t.wp._createToolbar){l=t.wp._createToolbar(["wp_link_preview","wp_link_edit","wp_link_remove"],!0);var e=["wp_link_input","wp_link_apply"];void 0!==window.wpLink&&e.push("wp_link_advanced"),r=t.wp._createToolbar(e,!0),r.on("show",function(){void 0!==window.wpLink&&window.wpLink.modalOpen||window.setTimeout(function(){var e=r.$el.find("input.ui-autocomplete-input")[0],t=p&&(p.textContent||p.innerText);e&&(!e.value&&t&&void 0!==window.wpLink&&(e.value=window.wpLink.getUrlFromSelection(t)),s||(e.focus(),e.select()))})}),r.on("hide",function(){r.scrolling||t.execCommand("wp_link_cancel")})}}),t.addCommand("WP_Link",function(){return e.Env.ie&&e.Env.ie<10&&void 0!==window.wpLink?void window.wpLink.open(t.id):(p=n(),r.tempHide=!1,void(p?t.dom.setAttribs(p,{"data-wplink-edit":!0}):(i(),t.execCommand("mceInsertLink",!1,{href:"_wp_link_placeholder"}),p=t.$('a[href="_wp_link_placeholder"]')[0],t.nodeChanged())))}),t.addCommand("wp_link_apply",function(){if(!r.scrolling){var n,i;if(p){n=c.getURL(),i=c.getLinkText(),t.focus();var o=document.createElement("a");if(o.href=n,"javascript:"!==o.protocol&&"data:"!==o.protocol||(n=""),!n)return void t.dom.remove(p,!0);/^(?:[a-z]+:|#|\?|\.|\/)/.test(n)||m.test(n)||(n="http://"+n),t.dom.setAttribs(p,{href:n,"data-wplink-edit":null}),e.trim(p.innerHTML)||t.$(p).text(i||n),a(p)}c.reset(),t.nodeChanged(),void 0===window.wpLinkL10n||h||v(window.wpLinkL10n.linkInserted)}}),t.addCommand("wp_link_cancel",function(){r.tempHide||(c.reset(),i())}),t.addCommand("wp_unlink",function(){t.execCommand("unlink"),r.tempHide=!1,t.execCommand("wp_link_cancel")}),t.addShortcut("access+a","","WP_Link"),t.addShortcut("access+s","","wp_unlink"),t.addShortcut("meta+k","","WP_Link"),t.addButton("link",{icon:"link",tooltip:"Insert/edit link",cmd:"WP_Link",stateSelector:"a[href]"}),t.addButton("unlink",{icon:"unlink",tooltip:"Remove link",cmd:"unlink"}),t.addMenuItem("link",{icon:"link",text:"Insert/edit link",cmd:"WP_Link",stateSelector:"a[href]",context:"insert",prependToContext:!0}),t.on("pastepreprocess",function(n){var i=n.content,o=/^(?:https?:)?\/\/\S+$/i;t.selection.isCollapsed()||o.test(t.selection.getContent())||(i=i.replace(/<[^>]+>/g,""),i=e.trim(i),o.test(i)&&(t.execCommand("mceInsertLink",!1,{href:t.dom.decode(i)}),n.preventDefault()))}),t.on("savecontent",function(e){e.content=o(e.content,!0)}),t.on("BeforeAddUndo",function(e){e.lastLevel&&e.lastLevel.content&&e.level.content&&e.lastLevel.content===o(e.level.content)&&e.preventDefault()}),t.on("keydown",function(n){27===n.keyCode&&t.execCommand("wp_link_cancel"),n.altKey||e.Env.mac&&(!n.metaKey||n.ctrlKey)||!e.Env.mac&&!n.ctrlKey||89!==n.keyCode&&90!==n.keyCode||(s=!0,window.clearTimeout(u),u=window.setTimeout(function(){s=!1},500))}),t.addButton("wp_link_preview",{type:"WPLinkPreview",onPostRender:function(){d=this}}),t.addButton("wp_link_input",{type:"WPLinkInput",onPostRender:function(){var n,i,o,a=this.getEl(),l=a.firstChild;c=this,w&&w.ui&&w.ui.autocomplete&&(n=w(l),n.on("keydown",function(){n.removeAttr("aria-activedescendant")}).autocomplete({source:function(e,t){return o===e.term?void t(i):/^https?:/.test(e.term)||-1!==e.term.indexOf(".")?t():(w.post(window.ajaxurl,{action:"wp-link-ajax",page:1,search:e.term,_ajax_linking_nonce:w("#_ajax_linking_nonce").val()},function(e){i=e,t(e)},"json"),void(o=e.term))},focus:function(e,t){n.attr("aria-activedescendant","mce-wp-autocomplete-"+t.item.ID),e.preventDefault()},select:function(e,t){return n.val(t.item.permalink),w(a.firstChild.nextSibling).val(t.item.title),9===e.keyCode&&void 0!==window.wpLinkL10n&&v(window.wpLinkL10n.linkSelected),!1},open:function(){n.attr("aria-expanded","true"),r.blockHide=!0},close:function(){n.attr("aria-expanded","false"),r.blockHide=!1},minLength:2,position:{my:"left top+2"},messages:{noResults:void 0!==window.uiAutocompleteL10n?window.uiAutocompleteL10n.noResults:"",results:function(e){if(void 0!==window.uiAutocompleteL10n)return e>1?window.uiAutocompleteL10n.manyResults.replace("%d",e):window.uiAutocompleteL10n.oneResult}}}).autocomplete("instance")._renderItem=function(e,t){return w('<li role="option" id="mce-wp-autocomplete-'+t.ID+'">').append("<span>"+t.title+'</span>&nbsp;<span class="wp-editor-float-right">'+t.info+"</span>").appendTo(e)},n.attr({role:"combobox","aria-autocomplete":"list","aria-expanded":"false","aria-owns":n.autocomplete("widget").attr("id")}).on("focus",function(){var e=n.val();e&&!/^https?:/.test(e)&&n.autocomplete("search")}).autocomplete("widget").addClass("wplink-autocomplete").attr("role","listbox").removeAttr("tabindex").on("menufocus",function(e,t){t.item.attr("aria-selected","true")}).on("menublur",function(){w(this).find('[aria-selected="true"]').removeAttr("aria-selected")})),e.$(l).on("keydown",function(e){13===e.keyCode&&(t.execCommand("wp_link_apply"),e.preventDefault())})}}),t.on("wptoolbar",function(e){var n,i,o,a=t.dom.getParent(e.element,"a");return void 0!==window.wpLink&&window.wpLink.modalOpen?void(r.tempHide=!0):(r.tempHide=!1,void(a?(n=t.$(a),i=n.attr("href"),o=n.attr("data-wplink-edit"),"_wp_link_placeholder"===i||o?("_wp_link_placeholder"===i||c.getURL()||c.setURL(i),e.element=a,e.toolbar=r):i&&!n.find("img").length&&(d.setURL(i),e.element=a,e.toolbar=l,"true"===n.attr("data-wplink-url-error")?l.$el.find(".wp-link-preview a").addClass("wplink-url-error"):(l.$el.find(".wp-link-preview a").removeClass("wplink-url-error"),h=!1))):r.visible()&&t.execCommand("wp_link_cancel")))}),t.addButton("wp_link_edit",{tooltip:"Edit ",icon:"dashicon dashicons-edit",cmd:"WP_Link"}),t.addButton("wp_link_remove",{tooltip:"Remove link",icon:"dashicon dashicons-editor-unlink",cmd:"wp_unlink"}),t.addButton("wp_link_advanced",{tooltip:"Link options",icon:"dashicon dashicons-admin-generic",onclick:function(){if(void 0!==window.wpLink){var n=c.getURL()||null,i=c.getLinkText()||null;e.Env.ie&&t.focus(),r.tempHide=!0,window.wpLink.open(t.id,n,i,p),c.reset()}}}),t.addButton("wp_link_apply",{tooltip:"Apply",icon:"dashicon dashicons-editor-break",cmd:"wp_link_apply",classes:"widget btn primary"}),{close:function(){r.tempHide=!1,t.execCommand("wp_link_cancel")},checkLink:a}})}(window.tinymce);