!function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var u="function"==typeof require&&require;if(!s&&u)return u(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return i(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){"use strict";var r={promise:null,load:function e(t){"undefined"!=typeof Vimeo?r._createPlayer(t):(r.promise=r.promise||mejs.Utils.loadScript("https://player.vimeo.com/api/player.js"),r.promise.then(function(){r._createPlayer(t)}))},_createPlayer:function e(t){var n=new Vimeo.Player(t.iframe);window["__ready__"+t.id](n)},getVimeoId:function e(t){return void 0===t||null===t?null:(t=t.split("?")[0],parseInt(t.substring(t.lastIndexOf("/")+1),10))}},i={name:"vimeo_iframe",options:{prefix:"vimeo_iframe"},canPlayType:function e(t){return~["video/vimeo","video/x-vimeo"].indexOf(t.toLowerCase())},create:function e(t,n,i){var a=[],o={},s=4,u=!0,c=1,l=c,d=0,p=0,f=!1,m=0,v=null,h="";o.options=n,o.id=t.id+"_"+n.prefix,o.mediaElement=t;for(var y=function e(n,r){var i=mejs.Utils.createEvent("error",r);i.message=n.name+": "+n.message,t.dispatchEvent(i)},g=mejs.html5media.properties,E=function e(n){var i=""+n.substring(0,1).toUpperCase()+n.substring(1);o["get"+i]=function(){if(null!==v){var e=null;switch(n){case"currentTime":return d;case"duration":return m;case"volume":return c;case"muted":return 0===c;case"paused":return u;case"ended":return f;case"src":return v.getVideoUrl().then(function(e){h=e}),h;case"buffered":return{start:function e(){return 0},end:function e(){return p*m},length:1};case"readyState":return 4}return null}return null},o["set"+i]=function(e){if(null!==v)switch(n){case"src":var i="string"==typeof e?e:e[0].src,s=r.getVimeoId(i);v.loadVideo(s).then(function(){t.originalNode.autoplay&&v.play()}).catch(function(e){y(e,o)});break;case"currentTime":v.setCurrentTime(e).then(function(){d=e,setTimeout(function(){var e=mejs.Utils.createEvent("timeupdate",o);t.dispatchEvent(e)},50)}).catch(function(e){y(e,o)});break;case"volume":v.setVolume(e).then(function(){c=e,l=c,setTimeout(function(){var e=mejs.Utils.createEvent("volumechange",o);t.dispatchEvent(e)},50)}).catch(function(e){y(e,o)});break;case"loop":v.setLoop(e).catch(function(e){y(e,o)});break;case"muted":e?v.setVolume(0).then(function(){c=0,setTimeout(function(){var e=mejs.Utils.createEvent("volumechange",o);t.dispatchEvent(e)},50)}).catch(function(e){y(e,o)}):v.setVolume(l).then(function(){c=l,setTimeout(function(){var e=mejs.Utils.createEvent("volumechange",o);t.dispatchEvent(e)},50)}).catch(function(e){y(e,o)});break;case"readyState":var u=mejs.Utils.createEvent("canplay",o);t.dispatchEvent(u);break;default:break}else a.push({type:"set",propName:n,value:e})}},b=0,U=g.length;b<U;b++)E(g[b]);for(var j=mejs.html5media.methods,w=function e(t){o[t]=function(){if(null!==v)switch(t){case"play":return u=!1,v.play();case"pause":return u=!0,v.pause();case"load":return null}else a.push({type:"call",methodName:t})}},N=0,_=j.length;N<_;N++)w(j[N]);window["__ready__"+o.id]=function(e){if(t.vimeoPlayer=v=e,a.length)for(var n=0,r=a.length;n<r;n++){var i=a[n];if("set"===i.type){var s=i.propName,l=""+s.substring(0,1).toUpperCase()+s.substring(1);o["set"+l](i.value)}else"call"===i.type&&o[i.methodName]()}t.originalNode.muted&&(v.setVolume(0),c=0);var h=document.getElementById(o.id),g=void 0;g=["mouseover","mouseout"];for(var E=function e(n){var r=mejs.Utils.createEvent(n.type,o);t.dispatchEvent(r)},b=0,U=g.length;b<U;b++)h.addEventListener(g[b],E,!1);v.on("loaded",function(){v.getDuration().then(function(e){if((m=e)>0&&(p=m*e,t.originalNode.autoplay)){u=!1,f=!1;var n=mejs.Utils.createEvent("play",o);t.dispatchEvent(n)}}).catch(function(e){y(e,o)})}),v.on("progress",function(){v.getDuration().then(function(e){if((m=e)>0&&(p=m*e,t.originalNode.autoplay)){var n=mejs.Utils.createEvent("play",o);t.dispatchEvent(n);var r=mejs.Utils.createEvent("playing",o);t.dispatchEvent(r)}var i=mejs.Utils.createEvent("progress",o);t.dispatchEvent(i)}).catch(function(e){y(e,o)})}),v.on("timeupdate",function(){v.getCurrentTime().then(function(e){d=e;var n=mejs.Utils.createEvent("timeupdate",o);t.dispatchEvent(n)}).catch(function(e){y(e,o)})}),v.on("play",function(){u=!1,f=!1;var e=mejs.Utils.createEvent("play",o);t.dispatchEvent(e);var n=mejs.Utils.createEvent("playing",o);t.dispatchEvent(n)}),v.on("pause",function(){u=!0,f=!1;var e=mejs.Utils.createEvent("pause",o);t.dispatchEvent(e)}),v.on("ended",function(){u=!1,f=!0;var e=mejs.Utils.createEvent("ended",o);t.dispatchEvent(e)}),g=["rendererready","loadedmetadata","loadeddata","canplay"];for(var j=0,w=g.length;j<w;j++){var N=mejs.Utils.createEvent(g[j],o);t.dispatchEvent(N)}};var x=t.originalNode.height,V=t.originalNode.width,A=document.createElement("iframe"),T="https://player.vimeo.com/video/"+r.getVimeoId(i[0].src),k=~i[0].src.indexOf("?")?"?"+i[0].src.slice(i[0].src.indexOf("?")+1):"";return k&&t.originalNode.autoplay&&-1===k.indexOf("autoplay")&&(k+="&autoplay=1"),k&&t.originalNode.loop&&-1===k.indexOf("loop")&&(k+="&loop=1"),A.setAttribute("id",o.id),A.setAttribute("width",V),A.setAttribute("height",x),A.setAttribute("frameBorder","0"),A.setAttribute("src",""+T+k),A.setAttribute("webkitallowfullscreen",""),A.setAttribute("mozallowfullscreen",""),A.setAttribute("allowfullscreen",""),t.originalNode.parentNode.insertBefore(A,t.originalNode),t.originalNode.style.display="none",r.load({iframe:A,id:o.id}),o.hide=function(){o.pause(),v&&(A.style.display="none")},o.setSize=function(e,t){A.setAttribute("width",e),A.setAttribute("height",t)},o.show=function(){v&&(A.style.display="")},o.destroy=function(){},o}};mejs.Utils.typeChecks.push(function(e){return/(\/\/player\.vimeo|vimeo\.com)/i.test(e)?"video/x-vimeo":null}),mejs.Renderers.add(i)},{}]},{},[1]);