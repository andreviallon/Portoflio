!function e(t,a,n){function i(s,o){if(!a[s]){if(!t[s]){var d="function"==typeof require&&require;if(!o&&d)return d(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=a[s]={exports:{}};t[s][0].call(l.exports,function(e){return i(t[s][1][e]||e)},l,l.exports,e,t,a,n)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(e,t,a){"use strict";var n={isSDKStarted:!1,isSDKLoaded:!1,iframeQueue:[],enqueueIframe:function(e){n.isLoaded?n.createIframe(e):(n.loadIframeApi(),n.iframeQueue.push(e))},loadIframeApi:function(){n.isSDKStarted||(mejs.Utils.loadScript("https://api.dmcdn.net/all.js"),n.isSDKStarted=!0)},apiReady:function(){for(n.isLoaded=!0,n.isSDKLoaded=!0;n.iframeQueue.length>0;){var e=n.iframeQueue.pop();DM.init({apiKey:e.apiKey,status:e.status,cookie:e.cookie}),n.createIframe(e)}},createIframe:function(e){var t=DM.player(e.container,{height:e.height||"100%",width:e.width||"100%",video:e.videoId,params:Object.assign({api:!0},e.params),origin:location.host});t.addEventListener("apiready",function(){window["__ready__"+e.id](t,{paused:!0,ended:!1})})},getDailyMotionId:function(e){var t=e.split("/");return t[t.length-1].split("_")[0]}},i={name:"dailymotion_iframe",options:{prefix:"dailymotion_iframe",dailymotion:{width:"100%",height:"100%",params:{autoplay:!1,chromeless:1,info:0,logo:0,related:0},apiKey:null,status:!0,cookie:!0}},canPlayType:function(e){return~["video/dailymotion","video/x-dailymotion"].indexOf(e.toLowerCase())},create:function(e,t,a){var i={},r=[],s=void 0,o=null,d=null,u=e.originalNode.muted;i.options=t,i.id=e.id+"_"+t.prefix,i.mediaElement=e;for(var l=mejs.html5media.properties,c=0,m=l.length;c<m;c++)!function(t){var a=""+t.substring(0,1).toUpperCase()+t.substring(1);i["get"+a]=function(){if(null!==o){switch(t){case"currentTime":return o.currentTime;case"duration":return isNaN(o.duration)?0:o.duration;case"volume":return o.volume;case"paused":return o.paused;case"ended":return o.ended;case"muted":return u=o.muted;case"buffered":var a=o.bufferedTime,n=o.duration;return{start:function(){return 0},end:function(){return a/n},length:1};case"src":return e.originalNode.getAttribute("src");case"readyState":return 4}return null}return null},i["set"+a]=function(a){if(null!==o)switch(t){case"src":var s="string"==typeof a?a:a[0].src;o.load(n.getDailyMotionId(s));break;case"currentTime":o.seek(a);break;case"muted":!0===a&&o.setVolume(0),o.setMuted(a),u=a,setTimeout(function(){var t=mejs.Utils.createEvent("volumechange",i);e.dispatchEvent(t)},50);break;case"volume":o.setVolume(a),0!==a||o.muted?a>0&&o.muted&&(o.setMuted(!1),u=!1):(o.setMuted(!0),u=!0),setTimeout(function(){var t=mejs.Utils.createEvent("volumechange",i);e.dispatchEvent(t)},50);break;case"readyState":var d=mejs.Utils.createEvent("canplay",i);e.dispatchEvent(d)}else r.push({type:"set",propName:t,value:a})}}(l[c]);for(var p=mejs.html5media.methods,v=0,f=p.length;v<f;v++)!function(e){i[e]=function(){if(null!==o)switch(e){case"play":return o.play();case"pause":return o.pause();case"load":return null}else r.push({type:"call",methodName:e})}}(p[v]);window["__ready__"+i.id]=function(t){if(e.dmPlayer=o=t,r.length)for(var a=0,n=r.length;a<n;a++){var u=r[a];if("set"===u.type){var l=u.propName,c=""+l.substring(0,1).toUpperCase()+l.substring(1);i["set"+c](u.value)}else"call"===u.type&&i[u.methodName]()}d=document.getElementById(i.id);for(var m=0,p=(s=["mouseover","mouseout"]).length;m<p;m++)d.addEventListener(s[m],function(t){var a=mejs.Utils.createEvent(t.type,i);e.dispatchEvent(a)},!1);e.originalNode.muted?(o.setVolume(0),o.setMuted(!0)):(o.setVolume(o.volume),o.setMuted(!1)),s=mejs.html5media.events;for(var v=0,f=(s=s.concat(["click","mouseover","mouseout"])).length;v<f;v++)!function(t){"ended"!==t&&o.addEventListener(t,function(t){var a=mejs.Utils.createEvent(t.type,i);e.dispatchEvent(a)})}(s[v]);o.addEventListener("ad_start",function(){var t=mejs.Utils.createEvent("play",i);e.dispatchEvent(t),t=mejs.Utils.createEvent("progress",i),e.dispatchEvent(t),t=mejs.Utils.createEvent("timeupdate",i),e.dispatchEvent(t)}),o.addEventListener("ad_timeupdate",function(){var t=mejs.Utils.createEvent("timeupdate",i);e.dispatchEvent(t)}),o.addEventListener("ad_pause",function(){var t=mejs.Utils.createEvent("pause",i);e.dispatchEvent(t)}),o.addEventListener("start",function(){if(o.muted){var t=mejs.Utils.createEvent("volumechange",i);e.dispatchEvent(t)}}),o.addEventListener("video_start",function(){var t=mejs.Utils.createEvent("play",i);e.dispatchEvent(t);var a=mejs.Utils.createEvent("playing",i);e.dispatchEvent(a)}),o.addEventListener("ad_timeupdate",function(){var t=mejs.Utils.createEvent("timeupdate",i);e.dispatchEvent(t)}),o.addEventListener("video_end",function(){var t=mejs.Utils.createEvent("ended",i);e.dispatchEvent(t),e.originalNode.getAttribute("loop")&&o.play()});for(var h=["rendererready","loadedmetadata","loadeddata","canplay"],y=0,g=h.length;y<g;y++){var E=mejs.Utils.createEvent(h[y],i);e.dispatchEvent(E)}};var h=document.createElement("div");h.id=i.id,e.appendChild(h),e.originalNode&&(h.style.width=e.originalNode.style.width,h.style.height=e.originalNode.style.height),e.originalNode.style.display="none";var y=n.getDailyMotionId(a[0].src),g={id:i.id,container:h,videoId:y};return g.params=Object.assign({},i.options.dailymotion),g.params.controls=!!e.originalNode.controls,e.originalNode.autoplay&&(g.params.autoplay=!0),e.originalNode.muted&&(g.params.mute=!0),g.params.api="1",n.enqueueIframe(g),i.hide=function(){i.pause(),d&&(d.style.display="none")},i.show=function(){d&&(d.style.display="")},i.setSize=function(e,t){d&&(d.width=e,d.height=t)},i.destroy=function(){o.destroy()},i}};mejs.Utils.typeChecks.push(function(e){return/\/\/((www\.)?dailymotion\.com|dai\.ly)/i.test(e)?"video/x-dailymotion":null}),window.dmAsyncInit=function(){n.apiReady()},mejs.Renderers.add(i)},{}]},{},[1]);