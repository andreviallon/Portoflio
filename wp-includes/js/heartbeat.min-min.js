!function(e,n,t){var a=function(){function a(){var t,a,r,c;"string"==typeof n.pagenow&&(x.screenId=n.pagenow),"string"==typeof n.ajaxurl&&(x.url=n.ajaxurl),"object"==typeof n.heartbeatSettings&&(t=n.heartbeatSettings,!x.url&&t.ajaxurl&&(x.url=t.ajaxurl),t.interval&&(x.mainInterval=t.interval,x.mainInterval<15?x.mainInterval=15:x.mainInterval>120&&(x.mainInterval=120)),t.minimalInterval&&(t.minimalInterval=parseInt(t.minimalInterval,10),x.minimalInterval=t.minimalInterval>0&&t.minimalInterval<=600?1e3*t.minimalInterval:0),x.minimalInterval&&x.mainInterval<x.minimalInterval&&(x.mainInterval=x.minimalInterval),x.screenId||(x.screenId=t.screenId||"front"),"disable"===t.suspension&&(x.suspendEnabled=!1)),x.mainInterval=1e3*x.mainInterval,x.originalInterval=x.mainInterval,void 0!==document.hidden?(a="hidden",c="visibilitychange",r="visibilityState"):void 0!==document.msHidden?(a="msHidden",c="msvisibilitychange",r="msVisibilityState"):void 0!==document.webkitHidden&&(a="webkitHidden",c="webkitvisibilitychange",r="webkitVisibilityState"),a&&(document[a]&&(x.hasFocus=!1),T.on(c+".wp-heartbeat",function(){"hidden"===document[r]?(v(),n.clearInterval(x.checkFocusTimer)):(m(),document.hasFocus&&(x.checkFocusTimer=n.setInterval(o,1e4)))})),document.hasFocus&&(x.checkFocusTimer=n.setInterval(o,1e4)),e(n).on("unload.wp-heartbeat",function(){x.suspend=!0,x.xhr&&4!==x.xhr.readyState&&x.xhr.abort()}),n.setInterval(h,3e4),T.ready(function(){x.lastTick=i(),l()})}function i(){return(new Date).getTime()}function r(e){var t,a=e.src;if(a&&/^https?:\/\//.test(a)&&(t=n.location.origin?n.location.origin:n.location.protocol+"//"+n.location.host,0!==a.indexOf(t)))return!1;try{if(e.contentWindow.document)return!0}catch(e){}return!1}function o(){x.hasFocus&&!document.hasFocus()?v():!x.hasFocus&&document.hasFocus()&&m()}function c(e,n){var t;if(e){switch(e){case"abort":break;case"timeout":t=!0;break;case"error":if(503===n&&x.hasConnected){t=!0;break}case"parsererror":case"empty":case"unknown":++x.errorcount>2&&x.hasConnected&&(t=!0)}t&&!p()&&(x.connectionError=!0,T.trigger("heartbeat-connection-lost",[e,n]))}}function u(){x.hasConnected=!0,p()&&(x.errorcount=0,x.connectionError=!1,T.trigger("heartbeat-connection-restored"))}function s(){var t,a;x.connecting||x.suspend||(x.lastTick=i(),a=e.extend({},x.queue),x.queue={},T.trigger("heartbeat-send",[a]),t={data:a,interval:x.tempInterval?x.tempInterval/1e3:x.mainInterval/1e3,_nonce:"object"==typeof n.heartbeatSettings?n.heartbeatSettings.nonce:"",action:"heartbeat",screen_id:x.screenId,has_focus:x.hasFocus},"customize"===x.screenId&&(t.wp_customize="on"),x.connecting=!0,x.xhr=e.ajax({url:x.url,type:"post",timeout:3e4,data:t,dataType:"json"}).always(function(){x.connecting=!1,l()}).done(function(e,n,t){var a;return e?(u(),e.nonces_expired&&T.trigger("heartbeat-nonces-expired"),e.heartbeat_interval&&(a=e.heartbeat_interval,delete e.heartbeat_interval),T.trigger("heartbeat-tick",[e,n,t]),void(a&&w(a))):void c("empty")}).fail(function(e,n,t){c(n||"unknown",e.status),T.trigger("heartbeat-error",[e,n,t])}))}function l(){var e=i()-x.lastTick,t=x.mainInterval;x.suspend||(x.hasFocus?x.countdown>0&&x.tempInterval&&(t=x.tempInterval,--x.countdown<1&&(x.tempInterval=0)):t=12e4,x.minimalInterval&&t<x.minimalInterval&&(t=x.minimalInterval),n.clearTimeout(x.beatTimer),e<t?x.beatTimer=n.setTimeout(function(){s()},t-e):s())}function v(){x.hasFocus=!1}function m(){x.userActivity=i(),x.suspend=!1,x.hasFocus||(x.hasFocus=!0,l())}function d(){x.userActivityEvents=!1,T.off(".wp-heartbeat-active"),e("iframe").each(function(n,t){r(t)&&e(t.contentWindow).off(".wp-heartbeat-active")}),m()}function h(){var n=x.userActivity?i()-x.userActivity:0;n>3e5&&x.hasFocus&&v(),(x.suspendEnabled&&n>6e5||n>36e5)&&(x.suspend=!0),x.userActivityEvents||(T.on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){d()}),e("iframe").each(function(n,t){r(t)&&e(t.contentWindow).on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){d()})}),x.userActivityEvents=!0)}function I(){return x.hasFocus}function p(){return x.connectionError}function f(){x.lastTick=0,l()}function b(){x.suspendEnabled=!1}function w(e,n){var t,a=x.tempInterval?x.tempInterval:x.mainInterval;if(e){switch(e){case"fast":case 5:t=5e3;break;case 15:t=15e3;break;case 30:t=3e4;break;case 60:t=6e4;break;case 120:t=12e4;break;case"long-polling":return x.mainInterval=0,0;default:t=x.originalInterval}x.minimalInterval&&t<x.minimalInterval&&(t=x.minimalInterval),5e3===t?(n=parseInt(n,10)||30,n=n<1||n>30?30:n,x.countdown=n,x.tempInterval=t):(x.countdown=0,x.tempInterval=0,x.mainInterval=t),t!==a&&l()}return x.tempInterval?x.tempInterval/1e3:x.mainInterval/1e3}function g(e,n,t){return!(!e||t&&this.isQueued(e)||(x.queue[e]=n,0))}function y(e){if(e)return x.queue.hasOwnProperty(e)}function k(e){e&&delete x.queue[e]}function F(e){if(e)return this.isQueued(e)?x.queue[e]:t}var T=e(document),x={suspend:!1,suspendEnabled:!0,screenId:"",url:"",lastTick:0,queue:{},mainInterval:60,tempInterval:0,originalInterval:0,minimalInterval:0,countdown:0,connecting:!1,connectionError:!1,errorcount:0,hasConnected:!1,hasFocus:!0,userActivity:0,userActivityEvents:!1,checkFocusTimer:0,beatTimer:0};return a(),{hasFocus:I,connectNow:f,disableSuspend:b,interval:w,hasConnectionError:p,enqueue:g,dequeue:k,isQueued:y,getQueuedItem:F}};n.wp=n.wp||{},n.wp.heartbeat=new a}(jQuery,window);