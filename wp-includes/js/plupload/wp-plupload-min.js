window.wp=window.wp||{},function(e,$){var t;"undefined"!=typeof _wpPluploadSettings&&(t=function(e){var r=this,i=-1!=navigator.userAgent.indexOf("Trident/")||-1!=navigator.userAgent.indexOf("MSIE "),a={container:"container",browser:"browse_button",dropzone:"drop_element"},o,d;if(this.supports={upload:t.browser.supported},this.supported=this.supports.upload,this.supported){this.plupload=$.extend(!0,{multipart_params:{}},t.defaults),this.container=document.body,$.extend(!0,this,e);for(o in this)$.isFunction(this[o])&&(this[o]=$.proxy(this[o],this));for(o in a)this[o]&&(this[o]=$(this[o]).first(),this[o].length?(this[o].prop("id")||this[o].prop("id","__wp-uploader-id-"+t.uuid++),this.plupload[a[o]]=this[o].prop("id")):delete this[o]);(this.browser&&this.browser.length||this.dropzone&&this.dropzone.length)&&(i||"flash"!==plupload.predictRuntime(this.plupload)||this.plupload.required_features&&this.plupload.required_features.hasOwnProperty("send_binary_string")||(this.plupload.required_features=this.plupload.required_features||{},this.plupload.required_features.send_binary_string=!0),this.uploader=new plupload.Uploader(this.plupload),delete this.plupload,this.param(this.params||{}),delete this.params,d=function(e,i,a){a.attachment&&a.attachment.destroy(),t.errors.unshift({message:e||pluploadL10n.default_error,data:i,file:a}),r.error(e,i,a)},this.uploader.bind("init",function(e){var i,a,o,d=r.dropzone;if(o=r.supports.dragdrop=e.features.dragdrop&&!t.browser.mobile,d){if(d.toggleClass("supports-drag-drop",!!o),!o)return d.unbind(".wp-uploader");d.bind("dragover.wp-uploader",function(){i&&clearTimeout(i),a||(d.trigger("dropzone:enter").addClass("drag-over"),a=!0)}),d.bind("dragleave.wp-uploader, drop.wp-uploader",function(){i=setTimeout(function(){a=!1,d.trigger("dropzone:leave").removeClass("drag-over")},0)}),r.ready=!0,$(r).trigger("uploader:ready")}}),this.uploader.bind("postinit",function(e){e.refresh(),r.init()}),this.uploader.init(),this.browser?this.browser.on("mouseenter",this.refresh):(this.uploader.disableBrowse(!0),$("#"+this.uploader.id+"_html5_container").hide()),this.uploader.bind("FilesAdded",function(e,i){_.each(i,function(e){var i,a;plupload.FAILED!==e.status&&(i=_.extend({file:e,uploading:!0,date:new Date,filename:e.name,menuOrder:0,uploadedTo:wp.media.model.settings.post.id},_.pick(e,"loaded","size","percent")),a=/(?:jpe?g|png|gif)$/i.exec(e.name),a&&(i.type="image",i.subtype="jpg"===a[0]?"jpeg":a[0]),e.attachment=wp.media.model.Attachment.create(i),t.queue.add(e.attachment),r.added(e.attachment))}),e.refresh(),e.start()}),this.uploader.bind("UploadProgress",function(e,t){t.attachment.set(_.pick(t,"loaded","percent")),r.progress(t.attachment)}),this.uploader.bind("FileUploaded",function(e,i,a){var o;try{a=JSON.parse(a.response)}catch(e){return d(pluploadL10n.default_error,e,i)}return!_.isObject(a)||_.isUndefined(a.success)?d(pluploadL10n.default_error,null,i):a.success?(_.each(["file","loaded","size","percent"],function(e){i.attachment.unset(e)}),i.attachment.set(_.extend(a.data,{uploading:!1})),wp.media.model.Attachment.get(a.data.id,i.attachment),o=t.queue.all(function(e){return!e.get("uploading")}),o&&t.queue.reset(),void r.success(i.attachment)):d(a.data&&a.data.message,a.data,i)}),this.uploader.bind("Error",function(e,r){var i=pluploadL10n.default_error,a;for(a in t.errorMap)if(r.code===plupload[a]){i=t.errorMap[a],_.isFunction(i)&&(i=i(r.file,r));break}d(i,r,r.file),e.refresh()}))}},$.extend(t,_wpPluploadSettings),t.uuid=0,t.errorMap={FAILED:pluploadL10n.upload_failed,FILE_EXTENSION_ERROR:pluploadL10n.invalid_filetype,IMAGE_FORMAT_ERROR:pluploadL10n.not_an_image,IMAGE_MEMORY_ERROR:pluploadL10n.image_memory_exceeded,IMAGE_DIMENSIONS_ERROR:pluploadL10n.image_dimensions_exceeded,GENERIC_ERROR:pluploadL10n.upload_failed,IO_ERROR:pluploadL10n.io_error,HTTP_ERROR:pluploadL10n.http_error,SECURITY_ERROR:pluploadL10n.security_error,FILE_SIZE_ERROR:function(e){return pluploadL10n.file_exceeds_size_limit.replace("%s",e.name)}},$.extend(t.prototype,{param:function(e,t){if(1===arguments.length&&"string"==typeof e)return this.uploader.settings.multipart_params[e];arguments.length>1?this.uploader.settings.multipart_params[e]=t:$.extend(this.uploader.settings.multipart_params,e)},init:function(){},error:function(){},success:function(){},added:function(){},progress:function(){},complete:function(){},refresh:function(){var e,t,r,i;if(this.browser){for(e=this.browser[0];e;){if(e===document.body){t=!0;break}e=e.parentNode}t||(i="wp-uploader-browser-"+this.uploader.id,r=$("#"+i),r.length||(r=$('<div class="wp-uploader-browser" />').css({position:"fixed",top:"-1000px",left:"-1000px",height:0,width:0}).attr("id","wp-uploader-browser-"+this.uploader.id).appendTo("body")),r.append(this.browser))}this.uploader.refresh()}}),t.queue=new wp.media.model.Attachments([],{query:!1}),t.errors=new Backbone.Collection,e.Uploader=t)}(wp,jQuery);