!function($){$.fn.filter_visible=function(e){e=e||3;var t=function(){var t=$(this),r;for(r=0;r<e-1;++r){if(!t.is(":visible"))return!1;t=t.parent()}return!0};return this.filter(t)},$.table_hotkeys=function(e,t,r){r=$.extend($.table_hotkeys.defaults,r);var n,i,s,_,o,c,l,u,h,a,f,k,y;n=r.class_prefix+r.selected_suffix,i=r.class_prefix+r.destructive_suffix,s=function(e){$.table_hotkeys.current_row&&$.table_hotkeys.current_row.removeClass(n),e.addClass(n),e[0].scrollIntoView(!1),$.table_hotkeys.current_row=e},_=function(e){!c(e)&&$.isFunction(r[e+"_page_link_cb"])&&r[e+"_page_link_cb"]()},o=function(e){var t,n;return $.table_hotkeys.current_row?(n="prev"==e?$.fn.prevAll:$.fn.nextAll,n.call($.table_hotkeys.current_row,r.cycle_expr).filter_visible()[0]):(t=a(),$.table_hotkeys.current_row=t,t[0])},c=function(e){var t=o(e);return!!t&&(s($(t)),!0)},l=function(){return c("prev")},u=function(){return c("next")},h=function(){$(r.checkbox_expr,$.table_hotkeys.current_row).each(function(){this.checked=!this.checked})},a=function(){return $(r.cycle_expr,e).filter_visible().eq(r.start_row_index)},f=function(){var t=$(r.cycle_expr,e).filter_visible();return t.eq(t.length-1)},k=function(e){return function(){if(null==$.table_hotkeys.current_row)return!1;var t=$(e,$.table_hotkeys.current_row);if(!t.length)return!1;t.is("."+i)&&(u()||l()),t.click()}},y=a(),y.length&&(r.highlight_first?s(y):r.highlight_last&&s(f()),$.hotkeys.add(r.prev_key,r.hotkeys_opts,function(){return _("prev")}),$.hotkeys.add(r.next_key,r.hotkeys_opts,function(){return _("next")}),$.hotkeys.add(r.mark_key,r.hotkeys_opts,h),$.each(t,function(){var e,t;$.isFunction(this[1])?(e=this[1],t=this[0],$.hotkeys.add(t,r.hotkeys_opts,function(t){return e(t,$.table_hotkeys.current_row)})):(t=this,$.hotkeys.add(t,r.hotkeys_opts,k("."+r.class_prefix+t)))}))},$.table_hotkeys.current_row=null,$.table_hotkeys.defaults={cycle_expr:"tr",class_prefix:"vim-",selected_suffix:"current",destructive_suffix:"destructive",hotkeys_opts:{disableInInput:!0,type:"keypress"},checkbox_expr:":checkbox",next_key:"j",prev_key:"k",mark_key:"x",start_row_index:2,highlight_first:!1,highlight_last:!1,next_page_link_cb:!1,prev_page_link_cb:!1}}(jQuery);