window.wp=window.wp||{},function(e,t){var i,n=wp.customize;t.extend(t.support,{history:!(!window.history||!history.pushState),hashchange:"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7)}),i=t.extend({},n.Events,{initialize:function(){this.body=t(document.body),i.settings&&t.support.postMessage&&(t.support.cors||!i.settings.isCrossDomain)&&(this.window=t(window),this.element=t('<div id="customize-container" />').appendTo(this.body),this.bind("open",this.overlay.show),this.bind("close",this.overlay.hide),t("#wpbody").on("click",".load-customize",function(e){e.preventDefault(),i.link=t(this),i.open(i.link.attr("href"))}),t.support.history&&this.window.on("popstate",i.popstate),t.support.hashchange&&(this.window.on("hashchange",i.hashchange),this.window.triggerHandler("hashchange")))},popstate:function(e){var t=e.originalEvent.state;t&&t.customize?i.open(t.customize):i.active&&i.close()},hashchange:function(){var e=window.location.toString().split("#")[1];e&&0===e.indexOf("wp_customize=on")&&i.open(i.settings.url+"?"+e),e||t.support.history||i.close()},beforeunload:function(){if(!i.saved())return i.settings.l10n.saveAlert},open:function(e){if(!this.active){if(i.settings.browser.mobile)return window.location=e;this.originalDocumentTitle=document.title,this.active=!0,this.body.addClass("customize-loading"),this.saved=new n.Value(!0),this.iframe=t("<iframe />",{src:e,title:i.settings.l10n.mainIframeTitle}).appendTo(this.element),this.iframe.one("load",this.loaded),this.messenger=new n.Messenger({url:e,channel:"loader",targetWindow:this.iframe[0].contentWindow}),history.replaceState&&this.messenger.bind("changeset-uuid",function(e){var i=document.createElement("a");i.href=location.href,i.search=t.param(_.extend(n.utils.parseQueryString(i.search.substr(1)),{changeset_uuid:e})),history.replaceState({customize:i.href},"",i.href)}),this.messenger.bind("ready",function(){i.messenger.send("back")}),this.messenger.bind("close",function(){t.support.history?history.back():t.support.hashchange?window.location.hash="":i.close()}),t(window).on("beforeunload",this.beforeunload),this.messenger.bind("saved",function(){i.saved(!0)}),this.messenger.bind("change",function(){i.saved(!1)}),this.messenger.bind("title",function(e){window.document.title=e}),this.pushState(e),this.trigger("open")}},pushState:function(e){var i=e.split("?")[1];t.support.history&&window.location.href!==e?history.pushState({customize:e},"",e):!t.support.history&&t.support.hashchange&&i&&(window.location.hash="wp_customize=on&"+i),this.trigger("open")},opened:function(){i.body.addClass("customize-active full-overlay-active").attr("aria-busy","true")},close:function(){var e,t=this;t.active&&(e=function(i){i?(t.active=!1,t.trigger("close"),t.originalDocumentTitle&&(document.title=t.originalDocumentTitle)):history.forward(),t.messenger.unbind("confirmed-close",e)},t.messenger.bind("confirmed-close",e),i.messenger.send("confirm-close"))},closed:function(){i.iframe.remove(),i.messenger.destroy(),i.iframe=null,i.messenger=null,i.saved=null,i.body.removeClass("customize-active full-overlay-active").removeClass("customize-loading"),t(window).off("beforeunload",i.beforeunload),i.link&&i.link.focus()},loaded:function(){i.body.removeClass("customize-loading").attr("aria-busy","false")},overlay:{show:function(){this.element.fadeIn(200,i.opened)},hide:function(){this.element.fadeOut(200,i.closed)}}}),t(function(){i.settings=_wpCustomizeLoaderSettings,i.initialize()}),n.Loader=i}(wp,jQuery);