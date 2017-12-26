!function(e){function t(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){var a=wp.media,s=window._wpmejsSettings||{},o=window._wpMediaViewsL10n||{};wp.media.mixin={mejsSettings:s,removeAllPlayers:function(){var e;if(window.mejs&&window.mejs.players)for(e in window.mejs.players)window.mejs.players[e].pause(),this.removePlayer(window.mejs.players[e])},removePlayer:function(e){var t,i;if(e.options){for(t in e.options.features)if(i=e.options.features[t],e["clean"+i])try{e["clean"+i](e)}catch(e){}e.isDynamic||e.node.remove(),"html5"!==e.media.rendererName&&e.media.remove(),delete window.mejs.players[e.id],e.container.remove(),e.globalUnbind("resize",e.globalResizeCallback),e.globalUnbind("keydown",e.globalKeydownCallback),e.globalUnbind("click",e.globalClickCallback),delete e.media.player}},unsetPlayers:function(){this.players&&this.players.length&&(_.each(this.players,function(e){e.pause(),wp.media.mixin.removePlayer(e)}),this.players=[])}},wp.media.playlist=new wp.media.collection({tag:"playlist",editTitle:o.editPlaylistTitle,defaults:{id:wp.media.view.settings.post.id,style:"light",tracklist:!0,tracknumbers:!0,images:!0,artists:!0,type:"audio"}}),wp.media.audio={coerce:wp.media.coerce,defaults:{id:wp.media.view.settings.post.id,src:"",loop:!1,autoplay:!1,preload:"none",width:400},edit:function(e){var t,i=wp.shortcode.next("audio",e).shortcode;return t=wp.media({frame:"audio",state:"audio-details",metadata:_.defaults(i.attrs.named,this.defaults)})},shortcode:function(e){var t;return _.each(this.defaults,function(t,i){e[i]=this.coerce(e,i),t===e[i]&&delete e[i]},this),t=e.content,delete e.content,new wp.shortcode({tag:"audio",attrs:e,content:t})}},wp.media.video={coerce:wp.media.coerce,defaults:{id:wp.media.view.settings.post.id,src:"",poster:"",loop:!1,autoplay:!1,preload:"metadata",content:"",width:640,height:360},edit:function(e){var t,i,a=wp.shortcode.next("video",e).shortcode;return i=a.attrs.named,i.content=a.content,t=wp.media({frame:"video",state:"video-details",metadata:_.defaults(i,this.defaults)})},shortcode:function(e){var t;return _.each(this.defaults,function(t,i){e[i]=this.coerce(e,i),t===e[i]&&delete e[i]},this),t=e.content,delete e.content,new wp.shortcode({tag:"video",attrs:e,content:t})}},a.model.PostMedia=i(1),a.controller.AudioDetails=i(2),a.controller.VideoDetails=i(3),a.view.MediaFrame.MediaDetails=i(4),a.view.MediaFrame.AudioDetails=i(5),a.view.MediaFrame.VideoDetails=i(6),a.view.MediaDetails=i(7),a.view.AudioDetails=i(8),a.view.VideoDetails=i(9)},function(e,t){var i=Backbone.Model.extend({initialize:function(){this.attachment=!1},setSource:function(e){this.attachment=e,this.extension=e.get("filename").split(".").pop(),this.get("src")&&this.extension===this.get("src").split(".").pop()&&this.unset("src"),_.contains(wp.media.view.settings.embedExts,this.extension)?this.set(this.extension,this.attachment.get("url")):this.unset(this.extension)},changeAttachment:function(e){this.setSource(e),this.unset("src"),_.each(_.without(wp.media.view.settings.embedExts,this.extension),function(e){this.unset(e)},this)}});e.exports=i},function(e,t){var i,a=wp.media.controller.State,s=wp.media.view.l10n;i=a.extend({defaults:{id:"audio-details",toolbar:"audio-details",title:s.audioDetailsTitle,content:"audio-details",menu:"audio-details",router:!1,priority:60},initialize:function(e){this.media=e.media,a.prototype.initialize.apply(this,arguments)}}),e.exports=i},function(e,t){var i,a=wp.media.controller.State,s=wp.media.view.l10n;i=a.extend({defaults:{id:"video-details",toolbar:"video-details",title:s.videoDetailsTitle,content:"video-details",menu:"video-details",router:!1,priority:60},initialize:function(e){this.media=e.media,a.prototype.initialize.apply(this,arguments)}}),e.exports=i},function(e,t){var i,a=wp.media.view.MediaFrame.Select,s=wp.media.view.l10n;i=a.extend({defaults:{id:"media",url:"",menu:"media-details",content:"media-details",toolbar:"media-details",type:"link",priority:120},initialize:function(e){this.DetailsView=e.DetailsView,this.cancelText=e.cancelText,this.addText=e.addText,this.media=new wp.media.model.PostMedia(e.metadata),this.options.selection=new wp.media.model.Selection(this.media.attachment,{multiple:!1}),a.prototype.initialize.apply(this,arguments)},bindHandlers:function(){var e=this.defaults.menu;a.prototype.bindHandlers.apply(this,arguments),this.on("menu:create:"+e,this.createMenu,this),this.on("content:render:"+e,this.renderDetailsContent,this),this.on("menu:render:"+e,this.renderMenu,this),this.on("toolbar:render:"+e,this.renderDetailsToolbar,this)},renderDetailsContent:function(){var e=new this.DetailsView({controller:this,model:this.state().media,attachment:this.state().media.attachment}).render();this.content.set(e)},renderMenu:function(e){var t=this.lastState(),i=t&&t.id,a=this;e.set({cancel:{text:this.cancelText,priority:20,click:function(){i?a.setState(i):a.close()}},separateCancel:new wp.media.View({className:"separator",priority:40})})},setPrimaryButton:function(e,t){this.toolbar.set(new wp.media.view.Toolbar({controller:this,items:{button:{style:"primary",text:e,priority:80,click:function(){var e=this.controller;t.call(this,e,e.state()),e.setState(e.options.state),e.reset()}}}}))},renderDetailsToolbar:function(){this.setPrimaryButton(s.update,function(e,t){e.close(),t.trigger("update",e.media.toJSON())})},renderReplaceToolbar:function(){this.setPrimaryButton(s.replace,function(e,t){var i=t.get("selection").single();e.media.changeAttachment(i),t.trigger("replace",e.media.toJSON())})},renderAddSourceToolbar:function(){this.setPrimaryButton(this.addText,function(e,t){var i=t.get("selection").single();e.media.setSource(i),t.trigger("add-source",e.media.toJSON())})}}),e.exports=i},function(e,t){var i,a=wp.media.view.MediaFrame.MediaDetails,s=wp.media.controller.MediaLibrary,o=wp.media.view.l10n;i=a.extend({defaults:{id:"audio",url:"",menu:"audio-details",content:"audio-details",toolbar:"audio-details",type:"link",title:o.audioDetailsTitle,priority:120},initialize:function(e){e.DetailsView=wp.media.view.AudioDetails,e.cancelText=o.audioDetailsCancel,e.addText=o.audioAddSourceTitle,a.prototype.initialize.call(this,e)},bindHandlers:function(){a.prototype.bindHandlers.apply(this,arguments),this.on("toolbar:render:replace-audio",this.renderReplaceToolbar,this),this.on("toolbar:render:add-audio-source",this.renderAddSourceToolbar,this)},createStates:function(){this.states.add([new wp.media.controller.AudioDetails({media:this.media}),new s({type:"audio",id:"replace-audio",title:o.audioReplaceTitle,toolbar:"replace-audio",media:this.media,menu:"audio-details"}),new s({type:"audio",id:"add-audio-source",title:o.audioAddSourceTitle,toolbar:"add-audio-source",media:this.media,menu:!1})])}}),e.exports=i},function(e,t){var i,a=wp.media.view.MediaFrame.MediaDetails,s=wp.media.controller.MediaLibrary,o=wp.media.view.l10n;i=a.extend({defaults:{id:"video",url:"",menu:"video-details",content:"video-details",toolbar:"video-details",type:"link",title:o.videoDetailsTitle,priority:120},initialize:function(e){e.DetailsView=wp.media.view.VideoDetails,e.cancelText=o.videoDetailsCancel,e.addText=o.videoAddSourceTitle,a.prototype.initialize.call(this,e)},bindHandlers:function(){a.prototype.bindHandlers.apply(this,arguments),this.on("toolbar:render:replace-video",this.renderReplaceToolbar,this),this.on("toolbar:render:add-video-source",this.renderAddSourceToolbar,this),this.on("toolbar:render:select-poster-image",this.renderSelectPosterImageToolbar,this),this.on("toolbar:render:add-track",this.renderAddTrackToolbar,this)},createStates:function(){this.states.add([new wp.media.controller.VideoDetails({media:this.media}),new s({type:"video",id:"replace-video",title:o.videoReplaceTitle,toolbar:"replace-video",media:this.media,menu:"video-details"}),new s({type:"video",id:"add-video-source",title:o.videoAddSourceTitle,toolbar:"add-video-source",media:this.media,menu:!1}),new s({type:"image",id:"select-poster-image",title:o.videoSelectPosterImageTitle,toolbar:"select-poster-image",media:this.media,menu:"video-details"}),new s({type:"text",id:"add-track",title:o.videoAddTrackTitle,toolbar:"add-track",media:this.media,menu:"video-details"})])},renderSelectPosterImageToolbar:function(){this.setPrimaryButton(o.videoSelectPosterImageTitle,function(e,t){var i=[],a=t.get("selection").single();e.media.set("poster",a.get("url")),t.trigger("set-poster-image",e.media.toJSON()),_.each(wp.media.view.settings.embedExts,function(t){e.media.get(t)&&i.push(e.media.get(t))}),wp.ajax.send("set-attachment-thumbnail",{data:{urls:i,thumbnail_id:a.get("id")}})})},renderAddTrackToolbar:function(){this.setPrimaryButton(o.videoAddTrackTitle,function(e,t){var i=t.get("selection").single(),a=e.media.get("content");-1===a.indexOf(i.get("url"))&&(a+=['<track srclang="en" label="English" kind="subtitles" src="',i.get("url"),'" />'].join(""),e.media.set("content",a)),t.trigger("add-track",e.media.toJSON())})}}),e.exports=i},function(e,t){var i,a=wp.media.view.Settings.AttachmentDisplay,s=jQuery;i=a.extend({initialize:function(){_.bindAll(this,"success"),this.players=[],this.listenTo(this.controller,"close",wp.media.mixin.unsetPlayers),this.on("ready",this.setPlayer),this.on("media:setting:remove",wp.media.mixin.unsetPlayers,this),this.on("media:setting:remove",this.render),this.on("media:setting:remove",this.setPlayer),a.prototype.initialize.apply(this,arguments)},events:function(){return _.extend({"click .remove-setting":"removeSetting","change .content-track":"setTracks","click .remove-track":"setTracks","click .add-media-source":"addSource"},a.prototype.events)},prepare:function(){return _.defaults({model:this.model.toJSON()},this.options)},removeSetting:function(e){var t,i=s(e.currentTarget).parent();t=i.find("input").data("setting"),t&&(this.model.unset(t),this.trigger("media:setting:remove",this)),i.remove()},setTracks:function(){var e="";_.each(this.$(".content-track"),function(t){e+=s(t).val()}),this.model.set("content",e),this.trigger("media:setting:remove",this)},addSource:function(e){this.controller.lastMime=s(e.currentTarget).data("mime"),this.controller.setState("add-"+this.controller.defaults.id+"-source")},loadPlayer:function(){this.players.push(new MediaElementPlayer(this.media,this.settings)),this.scriptXhr=!1},setPlayer:function(){var e;this.players.length||!this.media||this.scriptXhr||(e=this.model.get("src"),e&&e.indexOf("vimeo")>-1&&!("Vimeo"in window)?this.scriptXhr=s.getScript("https://player.vimeo.com/api/player.js",_.bind(this.loadPlayer,this)):this.loadPlayer())},setMedia:function(){return this},success:function(e){var t=e.attributes.autoplay&&"false"!==e.attributes.autoplay;"flash"===e.pluginType&&t&&e.addEventListener("canplay",function(){e.play()},!1),this.mejs=e},render:function(){return a.prototype.render.apply(this,arguments),setTimeout(_.bind(function(){this.resetFocus()},this),10),this.settings=_.defaults({success:this.success},wp.media.mixin.mejsSettings),this.setMedia()},resetFocus:function(){this.$(".embed-media-settings").scrollTop(0)}},{instances:0,prepareSrc:function(e){var t=i.instances++;return _.each(s(e).find("source"),function(e){e.src=[e.src,e.src.indexOf("?")>-1?"&":"?","_=",t].join("")}),e}}),e.exports=i},function(e,t){var i,a=wp.media.view.MediaDetails;i=a.extend({className:"audio-details",template:wp.template("audio-details"),setMedia:function(){var e=this.$(".wp-audio-shortcode");return e.find("source").length?(e.is(":hidden")&&e.show(),this.media=a.prepareSrc(e.get(0))):(e.hide(),this.media=!1),this}}),e.exports=i},function(e,t){var i,a=wp.media.view.MediaDetails;i=a.extend({className:"video-details",template:wp.template("video-details"),setMedia:function(){var e=this.$(".wp-video-shortcode");return e.find("source").length?(e.is(":hidden")&&e.show(),e.hasClass("youtube-video")||e.hasClass("vimeo-video")?this.media=e.get(0):this.media=a.prepareSrc(e.get(0))):(e.hide(),this.media=!1),this}}),e.exports=i}]);