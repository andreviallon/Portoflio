var tb_position;jQuery(document).ready(function($){function t(){var t=o.find("#TB_iframeContent");a=t.contents().find("body"),i(),l.focus(),$("#plugin-information-tabs a",a).on("click",function(){i()}),a.on("keydown",function(t){27===t.which&&tb_remove()})}function i(){var t;e=$(":tabbable",a),l=o.find("#TB_closeWindowButton"),s=e.last(),t=l.add(s),t.off("keydown.wp-plugin-details"),t.on("keydown.wp-plugin-details",function(t){n(t)})}function n(t){9===t.which&&(s[0]!==t.target||t.shiftKey?l[0]===t.target&&t.shiftKey&&(t.preventDefault(),s.focus()):(t.preventDefault(),l.focus()))}var o,a,e,l,s,d=$(),r=$(".upload-view-toggle"),c=$(".wrap"),u=$(document.body);tb_position=function(){var t=$(window).width(),i=$(window).height()-(792<t?60:20),n=792<t?772:t-20;return o=$("#TB_window"),o.length&&(o.width(n).height(i),$("#TB_iframeContent").width(n).height(i),o.css({"margin-left":"-"+parseInt(n/2,10)+"px"}),void 0!==document.body.style.maxWidth&&o.css({top:"30px","margin-top":"0"})),$("a.thickbox").each(function(){var t=$(this).attr("href");t&&(t=t.replace(/&width=[0-9]+/g,""),t=t.replace(/&height=[0-9]+/g,""),$(this).attr("href",t+"&width="+n+"&height="+i))})},$(window).resize(function(){tb_position()}),u.on("thickbox:iframe:loaded",o,function(){o.hasClass("plugin-details-modal")&&t()}).on("thickbox:removed",function(){d.focus()}),$(".thickbox.open-plugin-details-modal").on("click",function(t){var i=$(this).data("title")?plugininstallL10n.plugin_information+" "+$(this).data("title"):plugininstallL10n.plugin_modal_label;t.preventDefault(),t.stopPropagation(),d=$(this),tb_click.call(this),o.attr({role:"dialog","aria-label":plugininstallL10n.plugin_modal_label}).addClass("plugin-details-modal"),o.find("#TB_iframeContent").attr("title",i)}),$("#plugin-information-tabs a").click(function(t){var i=$(this).attr("name");t.preventDefault(),$("#plugin-information-tabs a.current").removeClass("current"),$(this).addClass("current"),"description"!==i&&$(window).width()<772?$("#plugin-information-content").find(".fyi").hide():$("#plugin-information-content").find(".fyi").show(),$("#section-holder div.section").hide(),$("#section-"+i).show()}),c.hasClass("plugin-install-tab-upload")||r.attr({role:"button","aria-expanded":"false"}).on("click",function(t){t.preventDefault(),u.toggleClass("show-upload-view"),r.attr("aria-expanded",u.hasClass("show-upload-view"))})});