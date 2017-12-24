!function(e){"use strict";var t,i,d;d=wp.media.view.MediaFrame.Post.extend({createStates:function e(){this.states.add([new wp.media.controller.Library({id:"gallery",title:wp.media.view.l10n.createGalleryTitle,priority:40,toolbar:"main-gallery",filterable:"uploaded",multiple:"add",editable:!0,library:wp.media.query(_.defaults({type:"image"},this.options.library))}),new wp.media.controller.GalleryEdit({library:this.options.selection,editing:this.options.editing,menu:"gallery"}),new wp.media.controller.GalleryAdd])}}),t=e.MediaWidgetModel.extend({}),i=e.MediaWidgetControl.extend({events:_.extend({},e.MediaWidgetControl.prototype.events,{"click .media-widget-gallery-preview":"editMedia"}),initialize:function t(i){var d=this;e.MediaWidgetControl.prototype.initialize.call(d,i),_.bindAll(d,"updateSelectedAttachments","handleAttachmentDestroy"),d.selectedAttachments=new wp.media.model.Attachments,d.model.on("change:ids",d.updateSelectedAttachments),d.selectedAttachments.on("change",d.renderPreview),d.selectedAttachments.on("reset",d.renderPreview),d.updateSelectedAttachments(),wp.customize&&wp.customize.previewer&&d.selectedAttachments.on("change",function(){wp.customize.previewer.send("refresh-widget-partial",d.model.get("widget_id"))})},updateSelectedAttachments:function e(){var t=this,i,d,a,l,s;i=t.model.get("ids"),d=_.pluck(t.selectedAttachments.models,"id"),a=_.difference(d,i),_.each(a,function(e){t.selectedAttachments.remove(t.selectedAttachments.get(e))}),l=_.difference(i,d),l.length&&(s=wp.media.query({order:"ASC",orderby:"post__in",perPage:-1,post__in:i,query:!0,type:"image"}),s.more().done(function(){t.selectedAttachments.reset(s.models)}))},renderPreview:function e(){var t=this,i,d,a;i=t.$el.find(".media-widget-preview"),d=wp.template("wp-media-widget-gallery-preview"),a=t.previewTemplateProps.toJSON(),a.attachments={},t.selectedAttachments.each(function(e){a.attachments[e.id]=e.toJSON()}),i.html(d(a))},isSelected:function e(){var t=this;return!t.model.get("error")&&t.model.get("ids").length>0},editMedia:function e(){var t=this,i,a,l;i=new wp.media.model.Selection(t.selectedAttachments.models,{multiple:!0}),l=t.mapModelToMediaFrameProps(t.model.toJSON()),i.gallery=new Backbone.Model(l),l.size&&t.displaySettings.set("size",l.size),a=new d({frame:"manage",text:t.l10n.add_to_widget,selection:i,mimeType:t.mime_type,selectedDisplaySettings:t.displaySettings,showDisplaySettings:t.showDisplaySettings,metadata:l,editing:!0,multiple:!0,state:"gallery-edit"}),wp.media.frame=a,a.on("update",function e(i){var d=a.state(),l;(l=i||d.get("selection"))&&(l.gallery&&t.model.set(t.mapMediaToModelProps(l.gallery.toJSON())),t.selectedAttachments.reset(l.models),t.model.set({ids:_.pluck(l.models,"id")}))}),a.$el.addClass("media-widget"),a.open(),i&&i.on("destroy",t.handleAttachmentDestroy)},selectMedia:function e(){var t=this,i,a,l;i=new wp.media.model.Selection(t.selectedAttachments.models,{multiple:!0}),l=t.mapModelToMediaFrameProps(t.model.toJSON()),l.size&&t.displaySettings.set("size",l.size),a=new d({frame:"select",text:t.l10n.add_to_widget,selection:i,mimeType:t.mime_type,selectedDisplaySettings:t.displaySettings,showDisplaySettings:t.showDisplaySettings,metadata:l,state:"gallery"}),wp.media.frame=a,a.on("update",function e(i){var d=a.state(),l;(l=i||d.get("selection"))&&(l.gallery&&t.model.set(t.mapMediaToModelProps(l.gallery.toJSON())),t.selectedAttachments.reset(l.models),t.model.set({ids:_.pluck(l.models,"id")}))}),a.$el.addClass("media-widget"),a.open(),i&&i.on("destroy",t.handleAttachmentDestroy),a.$el.find(":focusable:first").focus()},handleAttachmentDestroy:function e(t){var i=this;i.model.set({ids:_.difference(i.model.get("ids"),[t.id])})}}),e.controlConstructors.media_gallery=i,e.modelConstructors.media_gallery=t}(wp.mediaWidgets);