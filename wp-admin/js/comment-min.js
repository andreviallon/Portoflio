jQuery(document).ready(function($){postboxes.add_postbox_toggles("comment");var e=$("#timestampdiv"),a=$("#timestamp"),t=a.html(),i=e.find(".timestamp-wrap"),l=e.siblings("a.edit-timestamp");l.click(function(a){e.is(":hidden")&&(e.slideDown("fast",function(){$("input, select",i).first().focus()}),$(this).hide()),a.preventDefault()}),e.find(".cancel-timestamp").click(function(i){l.show().focus(),e.slideUp("fast"),$("#mm").val($("#hidden_mm").val()),$("#jj").val($("#hidden_jj").val()),$("#aa").val($("#hidden_aa").val()),$("#hh").val($("#hidden_hh").val()),$("#mn").val($("#hidden_mn").val()),a.html(t),i.preventDefault()}),e.find(".save-timestamp").click(function(t){var n=$("#aa").val(),s=$("#mm").val(),m=$("#jj").val(),d=$("#hh").val(),c=$("#mn").val(),o=new Date(n,s-1,m,d,c);if(t.preventDefault(),o.getFullYear()!=n||1+o.getMonth()!=s||o.getDate()!=m||o.getMinutes()!=c)return void i.addClass("form-invalid");i.removeClass("form-invalid"),a.html(commentL10n.submittedOn+" <b>"+commentL10n.dateFormat.replace("%1$s",$('option[value="'+s+'"]',"#mm").attr("data-text")).replace("%2$s",parseInt(m,10)).replace("%3$s",n).replace("%4$s",("00"+d).slice(-2)).replace("%5$s",("00"+c).slice(-2))+"</b> "),l.show().focus(),e.slideUp("fast")})});