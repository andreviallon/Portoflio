window.wp=window.wp||{},function(e){var i;i=wp.revisions={model:{},view:{},controller:{}},i.settings=window._wpRevisionsSettings||{},i.debug=!1,i.log=function(){window.console&&i.debug&&window.console.log.apply(window.console,arguments)},e.fn.allOffsets=function(){var i=this.offset()||{top:0,left:0},t=e(window);return _.extend(i,{right:t.width()-i.left-this.outerWidth(),bottom:t.height()-i.top-this.outerHeight()})},e.fn.allPositions=function(){var e=this.position()||{top:0,left:0},i=this.parent();return _.extend(e,{right:i.outerWidth()-e.left-this.outerWidth(),bottom:i.outerHeight()-e.top-this.outerHeight()})},i.model.Slider=Backbone.Model.extend({defaults:{value:null,values:null,min:0,max:1,step:1,range:!1,compareTwoMode:!1},initialize:function(e){this.frame=e.frame,this.revisions=e.revisions,this.listenTo(this.frame,"update:revisions",this.receiveRevisions),this.listenTo(this.frame,"change:compareTwoMode",this.updateMode),this.on("change:from",this.handleLocalChanges),this.on("change:to",this.handleLocalChanges),this.on("change:compareTwoMode",this.updateSliderSettings),this.on("update:revisions",this.updateSliderSettings),this.on("change:hoveredRevision",this.hoverRevision),this.set({max:this.revisions.length-1,compareTwoMode:this.frame.get("compareTwoMode"),from:this.frame.get("from"),to:this.frame.get("to")}),this.updateSliderSettings()},getSliderValue:function(e,i){return isRtl?this.revisions.length-this.revisions.indexOf(this.get(e))-1:this.revisions.indexOf(this.get(i))},updateSliderSettings:function(){this.get("compareTwoMode")?this.set({values:[this.getSliderValue("to","from"),this.getSliderValue("from","to")],value:null,range:!0}):this.set({value:this.getSliderValue("to","to"),values:null,range:!1}),this.trigger("update:slider")},hoverRevision:function(e,i){this.trigger("hovered:revision",i)},updateMode:function(e,i){this.set({compareTwoMode:i})},handleLocalChanges:function(){this.frame.set({from:this.get("from"),to:this.get("to")})},receiveRevisions:function(e,i){this.get("from")===e&&this.get("to")===i||(this.set({from:e,to:i},{silent:!0}),this.trigger("update:revisions",e,i))}}),i.model.Tooltip=Backbone.Model.extend({defaults:{revision:null,offset:{},hovering:!1,scrubbing:!1},initialize:function(e){this.frame=e.frame,this.revisions=e.revisions,this.slider=e.slider,this.listenTo(this.slider,"hovered:revision",this.updateRevision),this.listenTo(this.slider,"change:hovering",this.setHovering),this.listenTo(this.slider,"change:scrubbing",this.setScrubbing)},updateRevision:function(e){this.set({revision:e})},setHovering:function(e,i){this.set({hovering:i})},setScrubbing:function(e,i){this.set({scrubbing:i})}}),i.model.Revision=Backbone.Model.extend({}),i.model.Revisions=Backbone.Collection.extend({model:i.model.Revision,initialize:function(){_.bindAll(this,"next","prev")},next:function(e){var i=this.indexOf(e);if(-1!==i&&i!==this.length-1)return this.at(i+1)},prev:function(e){var i=this.indexOf(e);if(-1!==i&&0!==i)return this.at(i-1)}}),i.model.Field=Backbone.Model.extend({}),i.model.Fields=Backbone.Collection.extend({model:i.model.Field}),i.model.Diff=Backbone.Model.extend({initialize:function(){var e=this.get("fields");this.unset("fields"),this.fields=new i.model.Fields(e)}}),i.model.Diffs=Backbone.Collection.extend({initialize:function(e,i){_.bindAll(this,"getClosestUnloaded"),this.loadAll=_.once(this._loadAll),this.revisions=i.revisions,this.postId=i.postId,this.requests={}},model:i.model.Diff,ensure:function(i,t){var s=this.get(i),o=this.requests[i],n=e.Deferred(),r={},l=i.split(":")[0],d=i.split(":")[1];return r[i]=!0,wp.revisions.log("ensure",i),this.trigger("ensure",r,l,d,n.promise()),s?n.resolveWith(t,[s]):(this.trigger("ensure:load",r,l,d,n.promise()),_.each(r,_.bind(function(e){this.requests[e]&&delete r[e],this.get(e)&&delete r[e]},this)),o||(r[i]=!0,o=this.load(_.keys(r))),o.done(_.bind(function(){n.resolveWith(t,[this.get(i)])},this)).fail(_.bind(function(){n.reject()}))),n.promise()},getClosestUnloaded:function(e,i){var t=this;return _.chain([0].concat(e)).initial().zip(e).sortBy(function(e){return Math.abs(i-e[1])}).map(function(e){return e.join(":")}).filter(function(e){return _.isUndefined(t.get(e))&&!t.requests[e]}).value()},_loadAll:function(i,t,s){var o=this,n=e.Deferred(),r=_.first(this.getClosestUnloaded(i,t),s);return _.size(r)>0?this.load(r).done(function(){o._loadAll(i,t,s).done(function(){n.resolve()})}).fail(function(){1===s?n.reject():o._loadAll(i,t,Math.ceil(s/2)).done(function(){n.resolve()})}):n.resolve(),n},load:function(e){return wp.revisions.log("load",e),this.fetch({data:{compare:e},remove:!1}).done(function(){wp.revisions.log("load:complete",e)})},sync:function(e,i,t){if("read"===e){t=t||{},t.context=this,t.data=_.extend(t.data||{},{action:"get-revision-diffs",post_id:this.postId});var s=wp.ajax.send(t),o=this.requests;return t.data.compare&&_.each(t.data.compare,function(e){o[e]=s}),s.always(function(){t.data.compare&&_.each(t.data.compare,function(e){delete o[e]})}),s}return Backbone.Model.prototype.sync.apply(this,arguments)}}),i.model.FrameState=Backbone.Model.extend({defaults:{loading:!1,error:!1,compareTwoMode:!1},initialize:function(e,t){var s=this.get("initialDiffState");_.bindAll(this,"receiveDiff"),this._debouncedEnsureDiff=_.debounce(this._ensureDiff,200),this.revisions=t.revisions,this.diffs=new i.model.Diffs([],{revisions:this.revisions,postId:this.get("postId")}),this.diffs.set(this.get("diffData")),this.listenTo(this,"change:from",this.changeRevisionHandler),this.listenTo(this,"change:to",this.changeRevisionHandler),this.listenTo(this,"change:compareTwoMode",this.changeMode),this.listenTo(this,"update:revisions",this.updatedRevisions),this.listenTo(this.diffs,"ensure:load",this.updateLoadingStatus),this.listenTo(this,"update:diff",this.updateLoadingStatus),this.set({to:this.revisions.get(s.to),from:this.revisions.get(s.from),compareTwoMode:s.compareTwoMode}),window.history&&window.history.pushState&&(this.router=new i.Router({model:this}),Backbone.History.started&&Backbone.history.stop(),Backbone.history.start({pushState:!0}))},updateLoadingStatus:function(){this.set("error",!1),this.set("loading",!this.diff())},changeMode:function(e,i){var t=this.revisions.indexOf(this.get("to"));i&&0===t&&this.set({from:this.revisions.at(t),to:this.revisions.at(t+1)}),i||0===t||this.set({from:this.revisions.at(t-1),to:this.revisions.at(t)})},updatedRevisions:function(e,i){this.get("compareTwoMode")||this.diffs.loadAll(this.revisions.pluck("id"),i.id,40)},diff:function(){return this.diffs.get(this._diffId)},updateDiff:function(i){var t,s,o,n;return i=i||{},t=this.get("from"),s=this.get("to"),o=(t?t.id:0)+":"+s.id,this._diffId===o?e.Deferred().reject().promise():(this._diffId=o,this.trigger("update:revisions",t,s),n=this.diffs.get(o),n?(this.receiveDiff(n),e.Deferred().resolve().promise()):i.immediate?this._ensureDiff():(this._debouncedEnsureDiff(),e.Deferred().reject().promise()))},changeRevisionHandler:function(){this.updateDiff()},receiveDiff:function(e){_.isUndefined(e)||_.isUndefined(e.id)?this.set({loading:!1,error:!0}):this._diffId===e.id&&this.trigger("update:diff",e)},_ensureDiff:function(){return this.diffs.ensure(this._diffId,this).always(this.receiveDiff)}}),i.view.Frame=wp.Backbone.View.extend({className:"revisions",template:wp.template("revisions-frame"),initialize:function(){this.listenTo(this.model,"update:diff",this.renderDiff),this.listenTo(this.model,"change:compareTwoMode",this.updateCompareTwoMode),this.listenTo(this.model,"change:loading",this.updateLoadingStatus),this.listenTo(this.model,"change:error",this.updateErrorStatus),this.views.set(".revisions-control-frame",new i.view.Controls({model:this.model}))},render:function(){return wp.Backbone.View.prototype.render.apply(this,arguments),e("html").css("overflow-y","scroll"),e("#wpbody-content .wrap").append(this.el),this.updateCompareTwoMode(),this.renderDiff(this.model.diff()),this.views.ready(),this},renderDiff:function(e){this.views.set(".revisions-diff-frame",new i.view.Diff({model:e}))},updateLoadingStatus:function(){this.$el.toggleClass("loading",this.model.get("loading"))},updateErrorStatus:function(){this.$el.toggleClass("diff-error",this.model.get("error"))},updateCompareTwoMode:function(){this.$el.toggleClass("comparing-two-revisions",this.model.get("compareTwoMode"))}}),i.view.Controls=wp.Backbone.View.extend({className:"revisions-controls",initialize:function(){_.bindAll(this,"setWidth"),this.views.add(new i.view.Buttons({model:this.model})),this.views.add(new i.view.Checkbox({model:this.model}));var e=new i.model.Slider({frame:this.model,revisions:this.model.revisions}),t=new i.model.Tooltip({frame:this.model,revisions:this.model.revisions,slider:e});this.views.add(new i.view.Tooltip({model:t})),this.views.add(new i.view.Tickmarks({model:t})),this.views.add(new i.view.Slider({model:e})),this.views.add(new i.view.Metabox({model:this.model}))},ready:function(){this.top=this.$el.offset().top,this.window=e(window),this.window.on("scroll.wp.revisions",{controls:this},function(e){var i=e.data.controls,t=i.$el.parent(),s=i.window.scrollTop(),o=i.views.parent;s>=i.top?(o.$el.hasClass("pinned")||(i.setWidth(),t.css("height",t.height()+"px"),i.window.on("resize.wp.revisions.pinning click.wp.revisions.pinning",{controls:i},function(e){e.data.controls.setWidth()})),o.$el.addClass("pinned")):o.$el.hasClass("pinned")?(i.window.off(".wp.revisions.pinning"),i.$el.css("width","auto"),o.$el.removeClass("pinned"),t.css("height","auto"),i.top=i.$el.offset().top):i.top=i.$el.offset().top})},setWidth:function(){this.$el.css("width",this.$el.parent().width()+"px")}}),i.view.Tickmarks=wp.Backbone.View.extend({className:"revisions-tickmarks",direction:isRtl?"right":"left",initialize:function(){this.listenTo(this.model,"change:revision",this.reportTickPosition)},reportTickPosition:function(e,i){var t,s,o,n,r=this.model.revisions.indexOf(i);s=this.$el.allOffsets(),o=this.$el.parent().allOffsets(),r===this.model.revisions.length-1?t={rightPlusWidth:s.left-o.left+1,leftPlusWidth:s.right-o.right+1}:(n=this.$("div:nth-of-type("+(r+1)+")"),t=n.allPositions(),_.extend(t,{left:t.left+s.left-o.left,right:t.right+s.right-o.right}),_.extend(t,{leftPlusWidth:t.left+n.outerWidth(),rightPlusWidth:t.right+n.outerWidth()})),this.model.set({offset:t})},ready:function(){var e,i;e=this.model.revisions.length-1,i=1/e,this.$el.css("width",50*this.model.revisions.length+"px"),_(e).times(function(e){this.$el.append('<div style="'+this.direction+": "+100*i*e+'%"></div>')},this)}}),i.view.Metabox=wp.Backbone.View.extend({className:"revisions-meta",initialize:function(){this.views.add(new i.view.MetaFrom({model:this.model,className:"diff-meta diff-meta-from"})),this.views.add(new i.view.MetaTo({model:this.model}))}}),i.view.Meta=wp.Backbone.View.extend({template:wp.template("revisions-meta"),events:{"click .restore-revision":"restoreRevision"},initialize:function(){this.listenTo(this.model,"update:revisions",this.render)},prepare:function(){return _.extend(this.model.toJSON()[this.type]||{},{type:this.type})},restoreRevision:function(){document.location=this.model.get("to").attributes.restoreUrl}}),i.view.MetaFrom=i.view.Meta.extend({className:"diff-meta diff-meta-from",type:"from"}),i.view.MetaTo=i.view.Meta.extend({className:"diff-meta diff-meta-to",type:"to"}),i.view.Checkbox=wp.Backbone.View.extend({className:"revisions-checkbox",template:wp.template("revisions-checkbox"),events:{"click .compare-two-revisions":"compareTwoToggle"},initialize:function(){this.listenTo(this.model,"change:compareTwoMode",this.updateCompareTwoMode)},ready:function(){this.model.revisions.length<3&&e(".revision-toggle-compare-mode").hide()},updateCompareTwoMode:function(){this.$(".compare-two-revisions").prop("checked",this.model.get("compareTwoMode"))},compareTwoToggle:function(){this.model.set({compareTwoMode:e(".compare-two-revisions").prop("checked")})}}),i.view.Tooltip=wp.Backbone.View.extend({className:"revisions-tooltip",template:wp.template("revisions-meta"),initialize:function(){this.listenTo(this.model,"change:offset",this.render),this.listenTo(this.model,"change:hovering",this.toggleVisibility),this.listenTo(this.model,"change:scrubbing",this.toggleVisibility)},prepare:function(){return _.isNull(this.model.get("revision"))?void 0:_.extend({type:"tooltip"},{attributes:this.model.get("revision").toJSON()})},render:function(){var e,i,t,s,o={};s=(this.model.revisions.indexOf(this.model.get("revision"))+1)/this.model.revisions.length>.5,isRtl?(i=s?"left":"right",t=s?"leftPlusWidth":i):(i=s?"right":"left",t=s?"rightPlusWidth":i),e="right"===i?"left":"right",wp.Backbone.View.prototype.render.apply(this,arguments),o[i]=this.model.get("offset")[t]+"px",o[e]="",this.$el.toggleClass("flipped",s).css(o)},visible:function(){return this.model.get("scrubbing")||this.model.get("hovering")},toggleVisibility:function(){this.visible()?this.$el.stop().show().fadeTo(100-100*this.el.style.opacity,1):this.$el.stop().fadeTo(300*this.el.style.opacity,0,function(){e(this).hide()})}}),i.view.Buttons=wp.Backbone.View.extend({className:"revisions-buttons",template:wp.template("revisions-buttons"),events:{"click .revisions-next .button":"nextRevision","click .revisions-previous .button":"previousRevision"},initialize:function(){this.listenTo(this.model,"update:revisions",this.disabledButtonCheck)},ready:function(){this.disabledButtonCheck()},gotoModel:function(e){var i={to:this.model.revisions.at(e)};e?i.from=this.model.revisions.at(e-1):this.model.unset("from",{silent:!0}),this.model.set(i)},nextRevision:function(){var e=this.model.revisions.indexOf(this.model.get("to"))+1;this.gotoModel(e)},previousRevision:function(){var e=this.model.revisions.indexOf(this.model.get("to"))-1;this.gotoModel(e)},disabledButtonCheck:function(){var i=this.model.revisions.length-1,t=0,s=e(".revisions-next .button"),o=e(".revisions-previous .button"),n=this.model.revisions.indexOf(this.model.get("to"));s.prop("disabled",i===n),o.prop("disabled",0===n)}}),i.view.Slider=wp.Backbone.View.extend({className:"wp-slider",direction:isRtl?"right":"left",events:{mousemove:"mouseMove"},initialize:function(){_.bindAll(this,"start","slide","stop","mouseMove","mouseEnter","mouseLeave"),this.listenTo(this.model,"update:slider",this.applySliderSettings)},ready:function(){this.$el.css("width",50*this.model.revisions.length+"px"),this.$el.slider(_.extend(this.model.toJSON(),{start:this.start,slide:this.slide,stop:this.stop})),this.$el.hoverIntent({over:this.mouseEnter,out:this.mouseLeave,timeout:800}),this.applySliderSettings()},mouseMove:function(i){var t=this.model.revisions.length-1,s=this.$el.allOffsets()[this.direction],o=this.$el.width(),n=o/t,r=(isRtl?e(window).width()-i.pageX:i.pageX)-s,l=Math.floor((r+n/2)/n);l<0?l=0:l>=this.model.revisions.length&&(l=this.model.revisions.length-1),this.model.set({hoveredRevision:this.model.revisions.at(l)})},mouseLeave:function(){this.model.set({hovering:!1})},mouseEnter:function(){this.model.set({hovering:!0})},applySliderSettings:function(){this.$el.slider(_.pick(this.model.toJSON(),"value","values","range"));var e=this.$("a.ui-slider-handle");this.model.get("compareTwoMode")?(e.first().toggleClass("to-handle",!!isRtl).toggleClass("from-handle",!isRtl),e.last().toggleClass("from-handle",!!isRtl).toggleClass("to-handle",!isRtl)):e.removeClass("from-handle to-handle")},start:function(i,t){this.model.set({scrubbing:!0}),e(window).on("mousemove.wp.revisions",{view:this},function(i){var s,o=i.data.view,n=o.$el.offset().left,r=n,l=n+o.$el.width(),d=l,a="0",h="100%",f=e(t.handle);o.model.get("compareTwoMode")&&(s=f.parent().find(".ui-slider-handle"),f.is(s.first())?(d=s.last().offset().left,h=d-r):(n=s.first().offset().left+s.first().width(),a=n-r)),i.pageX<n?f.css("left",a):i.pageX>d?f.css("left",h):f.css("left",i.pageX-r)})},getPosition:function(e){return isRtl?this.model.revisions.length-e-1:e},slide:function(e,i){var t,s;if(this.model.get("compareTwoMode")){if(i.values[1]===i.values[0])return!1;isRtl&&i.values.reverse(),t={from:this.model.revisions.at(this.getPosition(i.values[0])),to:this.model.revisions.at(this.getPosition(i.values[1]))}}else t={to:this.model.revisions.at(this.getPosition(i.value))},this.getPosition(i.value)>0?t.from=this.model.revisions.at(this.getPosition(i.value)-1):t.from=void 0;s=this.model.revisions.at(this.getPosition(i.value)),this.model.get("scrubbing")&&(t.hoveredRevision=s),this.model.set(t)},stop:function(){e(window).off("mousemove.wp.revisions"),this.model.updateSliderSettings(),this.model.set({scrubbing:!1})}}),i.view.Diff=wp.Backbone.View.extend({className:"revisions-diff",template:wp.template("revisions-diff"),prepare:function(){return _.extend({fields:this.model.fields.toJSON()},this.options)}}),i.Router=Backbone.Router.extend({initialize:function(e){this.model=e.model,this.listenTo(this.model,"update:diff",_.debounce(this.updateUrl,250)),this.listenTo(this.model,"change:compareTwoMode",this.updateUrl)},baseUrl:function(e){return this.model.get("baseUrl")+e},updateUrl:function(){var e=this.model.has("from")?this.model.get("from").id:0,i=this.model.get("to").id;this.model.get("compareTwoMode")?this.navigate(this.baseUrl("?from="+e+"&to="+i),{replace:!0}):this.navigate(this.baseUrl("?revision="+i),{replace:!0})},handleRoute:function(e,i){_.isUndefined(i)||(i=this.model.revisions.get(e),e=this.model.revisions.prev(i),i=i?i.id:0,e=e?e.id:0)}}),i.init=function(){var e;window.adminpage&&"revision-php"===window.adminpage&&(e=new i.model.FrameState({initialDiffState:{to:parseInt(i.settings.to,10),from:parseInt(i.settings.from,10),compareTwoMode:"1"===i.settings.compareTwoMode},diffData:i.settings.diffData,baseUrl:i.settings.baseUrl,postId:parseInt(i.settings.postId,10)},{revisions:new i.model.Revisions(i.settings.revisionData)}),i.view.frame=new i.view.Frame({model:e}).render())},e(i.init)}(jQuery);