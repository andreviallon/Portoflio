var postboxes;!function(e){var o=e(document);postboxes={handle_click:function(){var s,t=e(this),a=t.parent(".postbox"),n=a.attr("id");"dashboard_browser_nag"!==n&&(a.toggleClass("closed"),s=!a.hasClass("closed"),t.hasClass("handlediv")?t.attr("aria-expanded",s):t.closest(".postbox").find("button.handlediv").attr("aria-expanded",s),"press-this"!==postboxes.page&&postboxes.save_state(postboxes.page),n&&(!a.hasClass("closed")&&e.isFunction(postboxes.pbshow)?postboxes.pbshow(n):a.hasClass("closed")&&e.isFunction(postboxes.pbhide)&&postboxes.pbhide(n)),o.trigger("postbox-toggled",a))},add_postbox_toggles:function(s,t){var a=e(".postbox .hndle, .postbox .handlediv");this.page=s,this.init(s,t),a.on("click.postboxes",this.handle_click),e(".postbox .hndle a").click(function(e){e.stopPropagation()}),e(".postbox a.dismiss").on("click.postboxes",function(o){var s=e(this).parents(".postbox").attr("id")+"-hide";o.preventDefault(),e("#"+s).prop("checked",!1).triggerHandler("click")}),e(".hide-postbox-tog").bind("click.postboxes",function(){var t=e(this),a=t.val(),n=e("#"+a);t.prop("checked")?(n.show(),e.isFunction(postboxes.pbshow)&&postboxes.pbshow(a)):(n.hide(),e.isFunction(postboxes.pbhide)&&postboxes.pbhide(a)),postboxes.save_state(s),postboxes._mark_area(),o.trigger("postbox-toggled",n)}),e('.columns-prefs input[type="radio"]').bind("click.postboxes",function(){var o=parseInt(e(this).val(),10);o&&(postboxes._pb_edit(o),postboxes.save_order(s))})},init:function(s,t){var a=e(document.body).hasClass("mobile"),n=e(".postbox .handlediv");e.extend(this,t||{}),e("#wpbody-content").css("overflow","hidden"),e(".meta-box-sortables").sortable({placeholder:"sortable-placeholder",connectWith:".meta-box-sortables",items:".postbox",handle:".hndle",cursor:"move",delay:a?200:0,distance:2,tolerance:"pointer",forcePlaceholderSize:!0,helper:function(e,o){return o.clone().find(":input").attr("name",function(e,o){return"sort_"+parseInt(1e5*Math.random(),10).toString()+"_"+o}).end()},opacity:.65,stop:function(){var o=e(this);return o.find("#dashboard_browser_nag").is(":visible")&&"dashboard_browser_nag"!=this.firstChild.id?void o.sortable("cancel"):void postboxes.save_order(s)},receive:function(s,t){"dashboard_browser_nag"==t.item[0].id&&e(t.sender).sortable("cancel"),postboxes._mark_area(),o.trigger("postbox-moved",t.item)}}),a&&(e(document.body).bind("orientationchange.postboxes",function(){postboxes._pb_change()}),this._pb_change()),this._mark_area(),n.each(function(){var o=e(this);o.attr("aria-expanded",!o.parent(".postbox").hasClass("closed"))})},save_state:function(o){var s,t;"nav-menus"!==o&&(s=e(".postbox").filter(".closed").map(function(){return this.id}).get().join(","),t=e(".postbox").filter(":hidden").map(function(){return this.id}).get().join(","),e.post(ajaxurl,{action:"closed-postboxes",closed:s,hidden:t,closedpostboxesnonce:jQuery("#closedpostboxesnonce").val(),page:o}))},save_order:function(o){var s,t=e(".columns-prefs input:checked").val()||0;s={action:"meta-box-order",_ajax_nonce:e("#meta-box-order-nonce").val(),page_columns:t,page:o},e(".meta-box-sortables").each(function(){s["order["+this.id.split("-")[0]+"]"]=e(this).sortable("toArray").join(",")}),e.post(ajaxurl,s)},_mark_area:function(){var o=e("div.postbox:visible").length,s=e("#post-body #side-sortables");e("#dashboard-widgets .meta-box-sortables:visible").each(function(){var s=e(this);1==o||s.children(".postbox:visible").length?s.removeClass("empty-container"):(s.addClass("empty-container"),s.attr("data-emptyString",postBoxL10n.postBoxEmptyString))}),s.length&&(s.children(".postbox:visible").length?s.removeClass("empty-container"):"280px"==e("#postbox-container-1").css("width")&&s.addClass("empty-container"))},_pb_edit:function(o){var s=e(".metabox-holder").get(0);s&&(s.className=s.className.replace(/columns-\d+/,"columns-"+o)),e(document).trigger("postboxes-columnchange")},_pb_change:function(){var o=e('label.columns-prefs-1 input[type="radio"]');switch(window.orientation){case 90:case-90:o.length&&o.is(":checked")||this._pb_edit(2);break;case 0:case 180:e("#poststuff").length?this._pb_edit(1):o.length&&o.is(":checked")||this._pb_edit(2)}},pbshow:!1,pbhide:!1}}(jQuery);