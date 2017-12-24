!function($){var e={add:"ajaxAdd",del:"ajaxDel",dim:"ajaxDim",process:"process",recolor:"recolor"},t;t={settings:{url:ajaxurl,type:"POST",response:"ajax-response",what:"",alt:"alternate",altOffset:0,addColor:"#ffff33",delColor:"#faafaa",dimAddColor:"#ffff33",dimDelColor:"#ff3333",confirm:null,addBefore:null,addAfter:null,delBefore:null,delAfter:null,dimBefore:null,dimAfter:null},nonce:function(e,t){var n=wpAjax.unserialize(e.attr("href")),o=$("#"+t.element);return t.nonce||n._ajax_nonce||o.find('input[name="_ajax_nonce"]').val()||n._wpnonce||o.find('input[name="_wpnonce"]').val()||0},parseData:function(e,t){var n=[],o;try{o=$(e).data("wp-lists")||"",o=o.match(new RegExp(t+":[\\S]+")),o&&(n=o[0].split(":"))}catch(e){}return n},pre:function(e,t,n){var o,i,s;return t=$.extend({},this.wpList.settings,{element:null,nonce:0,target:e.get(0)},t||{}),!($.isFunction(t.confirm)&&(o=$("#"+t.element),"add"!==n&&(i=o.css("backgroundColor"),o.css("backgroundColor","#ff9966")),s=t.confirm.call(this,e,t,n,i),"add"!==n&&o.css("backgroundColor",i),!s))&&t},ajaxAdd:function(e,n){var o=this,i=$(e),s=t.parseData(i,"add"),a,l,r,d;return n=n||{},n=t.pre.call(o,i,n,"add"),n.element=s[2]||i.prop("id")||n.element||null,n.addColor=s[3]?"#"+s[3]:n.addColor,!!n&&(i.is('[id="'+n.element+'-submit"]')?!n.element||(n.action="add-"+n.what,n.nonce=t.nonce(i,n),!!wpAjax.validateForm("#"+n.element)&&(n.data=$.param($.extend({_ajax_nonce:n.nonce,action:n.action},wpAjax.unserialize(s[4]||""))),a=$("#"+n.element+" :input").not('[name="_ajax_nonce"], [name="_wpnonce"], [name="action"]'),l=$.isFunction(a.fieldSerialize)?a.fieldSerialize():a.serialize(),l&&(n.data+="&"+l),!(!$.isFunction(n.addBefore)||(n=n.addBefore(n)))||(!n.data.match(/_ajax_nonce=[a-f0-9]+/)||(n.success=function(e){return r=wpAjax.parseAjaxResponse(e,n.response,n.element),d=e,!(!r||r.errors)&&(!0===r||($.each(r.responses,function(){t.add.call(o,this.data,$.extend({},n,{position:this.position||0,id:this.id||0,oldId:this.oldId||null}))}),o.wpList.recolor(),$(o).trigger("wpListAddEnd",[n,o.wpList]),void t.clear.call(o,"#"+n.element)))},n.complete=function(e,t){$.isFunction(n.addAfter)&&n.addAfter(d,$.extend({xml:e,status:t,parsed:r},n))},$.ajax(n),!1)))):!t.add.call(o,i,n))},ajaxDel:function(e,n){var o=this,i=$(e),s=t.parseData(i,"delete"),a,l,r;return n=n||{},n=t.pre.call(o,i,n,"delete"),n.element=s[2]||n.element||null,n.delColor=s[3]?"#"+s[3]:n.delColor,!(!n||!n.element)&&(n.action="delete-"+n.what,n.nonce=t.nonce(i,n),n.data=$.extend({_ajax_nonce:n.nonce,action:n.action,id:n.element.split("-").pop()},wpAjax.unserialize(s[4]||"")),!(!$.isFunction(n.delBefore)||(n=n.delBefore(n,o)))||(!n.data._ajax_nonce||(a=$("#"+n.element),"none"!==n.delColor?a.css("backgroundColor",n.delColor).fadeOut(350,function(){o.wpList.recolor(),$(o).trigger("wpListDelEnd",[n,o.wpList])}):(o.wpList.recolor(),$(o).trigger("wpListDelEnd",[n,o.wpList])),n.success=function(e){if(l=wpAjax.parseAjaxResponse(e,n.response,n.element),r=e,!l||l.errors)return a.stop().stop().css("backgroundColor","#faa").show().queue(function(){o.wpList.recolor(),$(this).dequeue()}),!1},n.complete=function(e,t){$.isFunction(n.delAfter)&&a.queue(function(){n.delAfter(r,$.extend({xml:e,status:t,parsed:l},n))}).dequeue()},$.ajax(n),!1)))},ajaxDim:function(e,n){var o=this,i=$(e),s=t.parseData(i,"dim"),a,l,r,d,c,u;return"none"!==i.parent().css("display")&&(n=n||{},n=t.pre.call(o,i,n,"dim"),n.element=s[2]||n.element||null,n.dimClass=s[3]||n.dimClass||null,n.dimAddColor=s[4]?"#"+s[4]:n.dimAddColor,n.dimDelColor=s[5]?"#"+s[5]:n.dimDelColor,!(n&&n.element&&n.dimClass)||(n.action="dim-"+n.what,n.nonce=t.nonce(i,n),n.data=$.extend({_ajax_nonce:n.nonce,action:n.action,id:n.element.split("-").pop(),dimClass:n.dimClass},wpAjax.unserialize(s[6]||"")),!(!$.isFunction(n.dimBefore)||(n=n.dimBefore(n)))||(a=$("#"+n.element),l=a.toggleClass(n.dimClass).is("."+n.dimClass),r=t.getColor(a),d=l?n.dimAddColor:n.dimDelColor,a.toggleClass(n.dimClass),"none"!==d?a.animate({backgroundColor:d},"fast").queue(function(){a.toggleClass(n.dimClass),$(this).dequeue()}).animate({backgroundColor:r},{complete:function(){$(this).css("backgroundColor",""),$(o).trigger("wpListDimEnd",[n,o.wpList])}}):$(o).trigger("wpListDimEnd",[n,o.wpList]),!n.data._ajax_nonce||(n.success=function(e){if(c=wpAjax.parseAjaxResponse(e,n.response,n.element),u=e,!0===c)return!0;if(!c||c.errors)return a.stop().stop().css("backgroundColor","#ff3333")[l?"removeClass":"addClass"](n.dimClass).show().queue(function(){o.wpList.recolor(),$(this).dequeue()}),!1;if(void 0!==c.responses[0].supplemental.comment_link){var t=i.find(".submitted-on"),s=t.find("a");""!==c.responses[0].supplemental.comment_link?t.html($("<a></a>").text(t.text()).prop("href",c.responses[0].supplemental.comment_link)):s.length&&t.text(s.text())}},n.complete=function(e,t){$.isFunction(n.dimAfter)&&a.queue(function(){n.dimAfter(u,$.extend({xml:e,status:t,parsed:c},n))}).dequeue()},$.ajax(n),!1))))},getColor:function(e){return $(e).css("backgroundColor")||"#ffffff"},add:function(e,n){var o=$(this),i=$(e),s=!1,a,l;return"string"==typeof n&&(n={what:n}),n=$.extend({position:0,id:0,oldId:null},this.wpList.settings,n),!(!i.length||!n.what)&&(n.oldId&&(s=$("#"+n.what+"-"+n.oldId)),!n.id||n.id===n.oldId&&s&&s.length||$("#"+n.what+"-"+n.id).remove(),s&&s.length?(s.before(i),s.remove()):isNaN(n.position)?(a="after","-"===n.position.substr(0,1)&&(n.position=n.position.substr(1),a="before"),l=o.find("#"+n.position),1===l.length?l[a](i):o.append(i)):"comment"===n.what&&0!==$("#"+n.element).length||(n.position<0?o.prepend(i):o.append(i)),n.alt&&i.toggleClass(n.alt,(o.children(":visible").index(i[0])+n.altOffset)%2),"none"!==n.addColor&&i.css("backgroundColor",n.addColor).animate({backgroundColor:t.getColor(i)},{complete:function(){$(this).css("backgroundColor","")}}),o.each(function(e,t){t.wpList.process(i)}),i)},clear:function(e){var t=this,n=$(e),o,i;t.wpList&&n.parents("#"+t.id).length||n.find(":input").each(function(e,t){$(t).parents(".form-no-clear").length||(o=t.type.toLowerCase(),i=t.tagName.toLowerCase(),"text"===o||"password"===o||"textarea"===i?t.value="":"checkbox"===o||"radio"===o?t.checked=!1:"select"===i&&(t.selectedIndex=null))})},process:function(e){var t=this,n=$(e||document);n.on("submit",'form[data-wp-lists^="add:'+t.id+':"]',function(){return t.wpList.add(this)}),n.on("click",'a[data-wp-lists^="add:'+t.id+':"], input[data-wp-lists^="add:'+t.id+':"]',function(){return t.wpList.add(this)}),n.on("click",'[data-wp-lists^="delete:'+t.id+':"]',function(){return t.wpList.del(this)}),n.on("click",'[data-wp-lists^="dim:'+t.id+':"]',function(){return t.wpList.dim(this)})},recolor:function(){var e=this,t=[":even",":odd"],n;e.wpList.settings.alt&&(n=$(".list-item:visible",e),n.length||(n=$(e).children(":visible")),e.wpList.settings.altOffset%2&&t.reverse(),n.filter(t[0]).addClass(e.wpList.settings.alt).end(),n.filter(t[1]).removeClass(e.wpList.settings.alt))},init:function(){var e=this;e.wpList.process=function(t){e.each(function(){this.wpList.process(t)})},e.wpList.recolor=function(){e.each(function(){this.wpList.recolor()})}}},$.fn.wpList=function(n){return this.each(function(o,i){i.wpList={settings:$.extend({},t.settings,{what:t.parseData(i,"list")[1]||""},n)},$.each(e,function(e,n){i.wpList[e]=function(e,o){return t[n].call(i,e,o)}})}),t.init.call(this),this.wpList.process(),this}}(jQuery);