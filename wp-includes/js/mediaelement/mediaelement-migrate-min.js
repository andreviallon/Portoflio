!function(e,$){void 0===mejs.plugins&&(mejs.plugins={},mejs.plugins.silverlight=[],mejs.plugins.silverlight.push({types:[]})),mejs.HtmlMediaElementShim=mejs.HtmlMediaElementShim||{getTypeFromFile:mejs.Utils.getTypeFromFile},void 0===mejs.MediaFeatures&&(mejs.MediaFeatures=mejs.Features),void 0===mejs.Utility&&(mejs.Utility=mejs.Utils);var t=MediaElementPlayer.prototype.init;MediaElementPlayer.prototype.init=function(){this.options.classPrefix="mejs-",this.$media=this.$node=$(this.node),t.call(this)};var i=MediaElementPlayer.prototype._meReady;MediaElementPlayer.prototype._meReady=function(){this.container=$(this.container),this.controls=$(this.controls),this.layers=$(this.layers),i.apply(this,arguments)},MediaElementPlayer.prototype.getElement=function(e){return void 0!==$&&e instanceof $?e[0]:e},MediaElementPlayer.prototype.buildfeatures=function(e,t,i,s){for(var r=["playpause","current","progress","duration","tracks","volume","fullscreen"],l=0,n=this.options.features.length;l<n;l++){var o=this.options.features[l];if(this["build"+o])try{-1===r.indexOf(o)?this["build"+o](e,$(t),$(i),s):this["build"+o](e,t,i,s)}catch(e){console.error("error building "+o,e)}}}}(window,jQuery);