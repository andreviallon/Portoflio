window.wp=window.wp||{};var inlineEditTax;!function($,t){inlineEditTax={init:function(){var t=this,i=$("#inline-edit");t.type=$("#the-list").attr("data-wp-lists").substr(5),t.what="#"+t.type+"-",$("#the-list").on("click","a.editinline",function(){return inlineEditTax.edit(this),!1}),i.keyup(function(t){if(27===t.which)return inlineEditTax.revert()}),$(".cancel",i).click(function(){return inlineEditTax.revert()}),$(".save",i).click(function(){return inlineEditTax.save(this)}),$("input, select",i).keydown(function(t){if(13===t.which)return inlineEditTax.save(this)}),$('#posts-filter input[type="submit"]').mousedown(function(){t.revert()})},toggle:function(t){var i=this;"none"===$(i.what+i.getId(t)).css("display")?i.revert():i.edit(t)},edit:function(t){var i,e,n,a=this;return a.revert(),"object"==typeof t&&(t=a.getId(t)),i=$("#inline-edit").clone(!0),e=$("#inline_"+t),$("td",i).attr("colspan",$("th:visible, td:visible",".wp-list-table.widefat:first thead").length),$(a.what+t).hide().after(i).after('<tr class="hidden"></tr>'),n=$(".name",e),n.find("img").replaceWith(function(){return this.alt}),n=n.text(),$(':input[name="name"]',i).val(n),n=$(".slug",e),n.find("img").replaceWith(function(){return this.alt}),n=n.text(),$(':input[name="slug"]',i).val(n),$(i).attr("id","edit-"+t).addClass("inline-editor").show(),$(".ptitle",i).eq(0).focus(),!1},save:function(i){var e,n,a=$('input[name="taxonomy"]').val()||"";return"object"==typeof i&&(i=this.getId(i)),$("table.widefat .spinner").addClass("is-active"),e={action:"inline-save-tax",tax_type:this.type,tax_ID:i,taxonomy:a},n=$("#edit-"+i).find(":input").serialize(),e=n+"&"+$.param(e),$.post(ajaxurl,e,function(e){var n,a,r,d=$("#edit-"+i+" .inline-edit-save .notice-error"),s=d.find(".error");$("table.widefat .spinner").removeClass("is-active"),e?-1!==e.indexOf("<tr")?($(inlineEditTax.what+i).siblings("tr.hidden").addBack().remove(),a=$(e).attr("id"),$("#edit-"+i).before(e).remove(),a?(r=a.replace(inlineEditTax.type+"-",""),n=$("#"+a)):(r=i,n=$(inlineEditTax.what+i)),$("#parent").find("option[value="+r+"]").text(n.find(".row-title").text()),n.hide().fadeIn(400,function(){n.find(".editinline").focus(),t.a11y.speak(inlineEditL10n.saved)})):(d.removeClass("hidden"),s.html(e),t.a11y.speak(s.text())):(d.removeClass("hidden"),s.html(inlineEditL10n.error),t.a11y.speak(inlineEditL10n.error))}),!1},revert:function(){var t=$("table.widefat tr.inline-editor").attr("id");t&&($("table.widefat .spinner").removeClass("is-active"),$("#"+t).siblings("tr.hidden").addBack().remove(),t=t.substr(t.lastIndexOf("-")+1),$(this.what+t).show().find(".editinline").focus())},getId:function(t){var i="TR"===t.tagName?t.id:$(t).parents("tr").attr("id"),e=i.split("-");return e[e.length-1]}},$(document).ready(function(){inlineEditTax.init()})}(jQuery,window.wp);