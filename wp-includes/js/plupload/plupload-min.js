!function(e,t,n){function i(e){function t(e,t,n){var r={chunks:"slice_blob",jpgresize:"send_binary_string",pngresize:"send_binary_string",progress:"report_upload_progress",multi_selection:"select_multiple",dragdrop:"drag_and_drop",drop_element:"drag_and_drop",headers:"send_custom_headers",urlstream_upload:"send_binary_string",canSendBinary:"send_binary",triggerDialog:"summon_file_dialog"};r[e]?i[r[e]]=t:n||(i[e]=t)}var n=e.required_features,i={};return"string"==typeof n?a.each(n.split(/\s*,\s*/),function(e){t(e,!0)}):"object"==typeof n?a.each(n,function(e,n){t(n,e)}):!0===n&&(e.chunk_size>0&&(i.slice_blob=!0),!e.resize.enabled&&e.multipart||(i.send_binary_string=!0),a.each(e,function(e,n){t(n,!!e,!0)})),e.runtimes="html5,html4",i}var r=e.setTimeout,s={},a={VERSION:"2.1.9",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,FILE_DUPLICATE_ERROR:-602,IMAGE_FORMAT_ERROR:-700,MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:t.mimes,ua:t.ua,typeOf:t.typeOf,extend:t.extend,guid:t.guid,getAll:function e(t){var n=[],i;"array"!==a.typeOf(t)&&(t=[t]);for(var r=t.length;r--;)(i=a.get(t[r]))&&n.push(i);return n.length?n:null},get:t.get,each:t.each,getPos:t.getPos,getSize:t.getSize,xmlEncode:function(e){var t={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},n=/[<>&\"\']/g;return e?(""+e).replace(n,function(e){return t[e]?"&"+t[e]+";":e}):e},toArray:t.toArray,inArray:t.inArray,addI18n:t.addI18n,translate:t.translate,isEmptyObj:t.isEmptyObj,hasClass:t.hasClass,addClass:t.addClass,removeClass:t.removeClass,getStyle:t.getStyle,addEvent:t.addEvent,removeEvent:t.removeEvent,removeAllEvents:t.removeAllEvents,cleanName:function(e){var t,n;for(n=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"],t=0;t<n.length;t+=2)e=e.replace(n[t],n[t+1]);return e=e.replace(/\s+/g,"_"),e=e.replace(/[^a-z0-9_\-\.]+/gi,"")},buildUrl:function(e,t){var n="";return a.each(t,function(e,t){n+=(n?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(e)}),n&&(e+=(e.indexOf("?")>0?"&":"?")+n),e},formatSize:function(e){function t(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}if(e===n||/\D/.test(e))return a.translate("N/A");var i=Math.pow(1024,4);return e>i?t(e/i,1)+" "+a.translate("tb"):e>(i/=1024)?t(e/i,1)+" "+a.translate("gb"):e>(i/=1024)?t(e/i,1)+" "+a.translate("mb"):e>1024?Math.round(e/1024)+" "+a.translate("kb"):e+" "+a.translate("b")},parseSize:t.parseSizeStr,predictRuntime:function(e,n){var i,r;return i=new a.Uploader(e),r=t.Runtime.thatCan(i.getOption().required_features,n||e.runtimes),i.destroy(),r},addFileFilter:function(e,t){s[e]=t}};a.addFileFilter("mime_types",function(e,t,n){e.length&&!e.regexp.test(t.name)?(this.trigger("Error",{code:a.FILE_EXTENSION_ERROR,message:a.translate("File extension error."),file:t}),n(!1)):n(!0)}),a.addFileFilter("max_file_size",function(e,t,n){var i;e=a.parseSize(e),t.size!==i&&e&&t.size>e?(this.trigger("Error",{code:a.FILE_SIZE_ERROR,message:a.translate("File size error."),file:t}),n(!1)):n(!0)}),a.addFileFilter("prevent_duplicates",function(e,t,n){if(e)for(var i=this.files.length;i--;)if(t.name===this.files[i].name&&t.size===this.files[i].size)return this.trigger("Error",{code:a.FILE_DUPLICATE_ERROR,message:a.translate("Duplicate file error."),file:t}),void n(!1);n(!0)}),a.Uploader=function(e){function o(){var e,t=0,n;if(this.state==a.STARTED){for(n=0;n<S.length;n++)e||S[n].status!=a.QUEUED?t++:(e=S[n],this.trigger("BeforeUpload",e)&&(e.status=a.UPLOADING,this.trigger("UploadFile",e)));t==S.length&&(this.state!==a.STOPPED&&(this.state=a.STOPPED,this.trigger("StateChanged")),this.trigger("UploadComplete",S))}}function u(e){e.percent=e.size>0?Math.ceil(e.loaded/e.size*100):100,l()}function l(){var e,t;for(A.reset(),e=0;e<S.length;e++)t=S[e],t.size!==n?(A.size+=t.origSize,A.loaded+=t.loaded*t.origSize/t.size):A.size=n,t.status==a.DONE?A.uploaded++:t.status==a.FAILED?A.failed++:A.queued++;A.size===n?A.percent=S.length>0?Math.ceil(A.uploaded/S.length*100):0:(A.bytesPerSec=Math.ceil(A.loaded/((+new Date-F||1)/1e3)),A.percent=A.size>0?Math.ceil(A.loaded/A.size*100):0)}function d(){var e=D[0]||w[0];return!!e&&e.getRuntime().uid}function c(e,n){if(e.ruid){var i=t.Runtime.getInfo(e.ruid);if(i)return i.can(n)}return!1}function f(){this.bind("FilesAdded FilesRemoved",function(e){e.trigger("QueueChanged"),e.refresh()}),this.bind("CancelUpload",E),this.bind("BeforeUpload",_),this.bind("UploadFile",m),this.bind("UploadProgress",b),this.bind("StateChanged",R),this.bind("QueueChanged",l),this.bind("Error",v),this.bind("FileUploaded",y),this.bind("Destroy",z)}function g(e,n){var i=this,r=0,s=[],o={runtime_order:e.runtimes,required_caps:e.required_features,preferred_caps:T};a.each(e.runtimes.split(/\s*,\s*/),function(t){e[t]&&(o[t]=e[t])}),e.browse_button&&a.each(e.browse_button,function(n){s.push(function(s){var u=new t.FileInput(a.extend({},o,{accept:e.filters.mime_types,name:e.file_data_name,multiple:e.multi_selection,container:e.container,browse_button:n}));u.onready=function(){var e=t.Runtime.getInfo(this.ruid);t.extend(i.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),multi_selection:e.can("select_multiple")}),r++,D.push(this),s()},u.onchange=function(){i.addFile(this.files)},u.bind("mouseenter mouseleave mousedown mouseup",function(i){P||(e.browse_button_hover&&("mouseenter"===i.type?t.addClass(n,e.browse_button_hover):"mouseleave"===i.type&&t.removeClass(n,e.browse_button_hover)),e.browse_button_active&&("mousedown"===i.type?t.addClass(n,e.browse_button_active):"mouseup"===i.type&&t.removeClass(n,e.browse_button_active)))}),u.bind("mousedown",function(){i.trigger("Browse")}),u.bind("error runtimeerror",function(){u=null,s()}),u.init()})}),e.drop_element&&a.each(e.drop_element,function(e){s.push(function(n){var s=new t.FileDrop(a.extend({},o,{drop_zone:e}));s.onready=function(){var e=t.Runtime.getInfo(this.ruid);t.extend(i.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),dragdrop:e.can("drag_and_drop")}),r++,w.push(this),n()},s.ondrop=function(){i.addFile(this.files)},s.bind("error runtimeerror",function(){s=null,n()}),s.init()})}),t.inSeries(s,function(){"function"==typeof n&&n(r)})}function p(e,i,r){var s=new t.Image;try{s.onload=function(){if(i.width>this.width&&i.height>this.height&&i.quality===n&&i.preserve_headers&&!i.crop)return this.destroy(),r(e);s.downsize(i.width,i.height,i.crop,i.preserve_headers)},s.onresize=function(){r(this.getAsBlob(e.type,i.quality)),this.destroy()},s.onerror=function(){r(e)},s.load(e)}catch(t){r(e)}}function h(e,n,r){function s(e,t,n){var i=I[e];switch(e){case"max_file_size":"max_file_size"===e&&(I.max_file_size=I.filters.max_file_size=t);break;case"chunk_size":(t=a.parseSize(t))&&(I[e]=t,I.send_file_name=!0);break;case"multipart":I[e]=t,t||(I.send_file_name=!0);break;case"unique_names":I[e]=t,t&&(I.send_file_name=!0);break;case"filters":"array"===a.typeOf(t)&&(t={mime_types:t}),n?a.extend(I.filters,t):I.filters=t,t.mime_types&&(I.filters.mime_types.regexp=function(e){var t=[];return a.each(e,function(e){a.each(e.extensions.split(/,/),function(e){/^\s*\*\s*$/.test(e)?t.push("\\.*"):t.push("\\."+e.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$&")+"]","g"),"\\$&"))})}),new RegExp("("+t.join("|")+")$","i")}(I.filters.mime_types));break;case"resize":n?a.extend(I.resize,t,{enabled:!0}):I.resize=t;break;case"prevent_duplicates":I.prevent_duplicates=I.filters.prevent_duplicates=!!t;break;case"container":case"browse_button":case"drop_element":t="container"===e?a.get(t):a.getAll(t);case"runtimes":case"multi_selection":I[e]=t,n||(u=!0);break;default:I[e]=t}n||o.trigger("OptionChanged",e,t,i)}var o=this,u=!1;"object"==typeof e?a.each(e,function(e,t){s(t,e,r)}):s(e,n,r),r?(I.required_features=i(a.extend({},I)),T=i(a.extend({},I,{required_features:!0}))):u&&(o.trigger("Destroy"),g.call(o,I,function(e){e?(o.runtime=t.Runtime.getInfo(d()).type,o.trigger("Init",{runtime:o.runtime}),o.trigger("PostInit")):o.trigger("Error",{code:a.INIT_ERROR,message:a.translate("Init error.")})}))}function _(e,t){if(e.settings.unique_names){var n=t.name.match(/\.([^.]+)$/),i="part";n&&(i=n[1]),t.target_name=t.id+"."+i}}function m(e,n){function i(){l-- >0?r(s,1e3):(n.loaded=f,e.trigger("Error",{code:a.HTTP_ERROR,message:a.translate("HTTP Error."),file:n,response:U.responseText,status:U.status,responseHeaders:U.getAllResponseHeaders()}))}function s(){var c,p,h={},_;n.status===a.UPLOADING&&e.state!==a.STOPPED&&(e.settings.send_file_name&&(h.name=n.target_name||n.name),u&&d.chunks&&g.size>u?(_=Math.min(u,g.size-f),c=g.slice(f,f+_)):(_=g.size,c=g),u&&d.chunks&&(e.settings.send_chunk_number?(h.chunk=Math.ceil(f/u),h.chunks=Math.ceil(g.size/u)):(h.offset=f,h.total=g.size)),U=new t.XMLHttpRequest,U.upload&&(U.upload.onprogress=function(t){n.loaded=Math.min(n.size,f+t.loaded),e.trigger("UploadProgress",n)}),U.onload=function(){if(U.status>=400)return void i();l=e.settings.max_retries,_<g.size?(c.destroy(),f+=_,n.loaded=Math.min(f,g.size),e.trigger("ChunkUploaded",n,{offset:n.loaded,total:g.size,response:U.responseText,status:U.status,responseHeaders:U.getAllResponseHeaders()}),"Android Browser"===t.Env.browser&&e.trigger("UploadProgress",n)):n.loaded=n.size,c=p=null,!f||f>=g.size?(n.size!=n.origSize&&(g.destroy(),g=null),e.trigger("UploadProgress",n),n.status=a.DONE,e.trigger("FileUploaded",n,{response:U.responseText,status:U.status,responseHeaders:U.getAllResponseHeaders()})):r(s,1)},U.onerror=function(){i()},U.onloadend=function(){this.destroy(),U=null},e.settings.multipart&&d.multipart?(U.open("post",o,!0),a.each(e.settings.headers,function(e,t){U.setRequestHeader(t,e)}),p=new t.FormData,a.each(a.extend(h,e.settings.multipart_params),function(e,t){p.append(t,e)}),p.append(e.settings.file_data_name,c),U.send(p,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:T})):(o=a.buildUrl(e.settings.url,a.extend(h,e.settings.multipart_params)),U.open("post",o,!0),U.setRequestHeader("Content-Type","application/octet-stream"),a.each(e.settings.headers,function(e,t){U.setRequestHeader(t,e)}),U.send(c,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:T})))}var o=e.settings.url,u=e.settings.chunk_size,l=e.settings.max_retries,d=e.features,f=0,g;n.loaded&&(f=n.loaded=u?u*Math.floor(n.loaded/u):0),g=n.getSource(),e.settings.resize.enabled&&c(g,"send_binary_string")&&~t.inArray(g.type,["image/jpeg","image/png"])?p.call(this,g,e.settings.resize,function(e){g=e,n.size=e.size,s()}):s()}function b(e,t){u(t)}function R(e){if(e.state==a.STARTED)F=+new Date;else if(e.state==a.STOPPED)for(var t=e.files.length-1;t>=0;t--)e.files[t].status==a.UPLOADING&&(e.files[t].status=a.QUEUED,l())}function E(){U&&U.abort()}function y(e){l(),r(function(){o.call(e)},1)}function v(e,t){t.code===a.INIT_ERROR?e.destroy():t.code===a.HTTP_ERROR&&(t.file.status=a.FAILED,u(t.file),e.state==a.STARTED&&(e.trigger("CancelUpload"),r(function(){o.call(e)},1)))}function z(e){e.stop(),a.each(S,function(e){e.destroy()}),S=[],D.length&&(a.each(D,function(e){e.destroy()}),D=[]),w.length&&(a.each(w,function(e){e.destroy()}),w=[]),T={},P=!1,F=U=null,A.reset()}var O=a.guid(),I,S=[],T={},D=[],w=[],F,A,P=!1,U;I={runtimes:t.Runtime.order,max_retries:0,chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:{mime_types:[],prevent_duplicates:!1,max_file_size:0},resize:{enabled:!1,preserve_headers:!0,crop:!1},send_file_name:!0,send_chunk_number:!0},h.call(this,e,null,!0),A=new a.QueueProgress,a.extend(this,{id:O,uid:O,state:a.STOPPED,features:{},runtime:null,files:S,settings:I,total:A,init:function(){var e=this,n,i,r;return i=e.getOption("preinit"),"function"==typeof i?i(e):a.each(i,function(t,n){e.bind(n,t)}),f.call(e),a.each(["container","browse_button","drop_element"],function(t){if(null===e.getOption(t))return r={code:a.INIT_ERROR,message:a.translate("'%' specified, but cannot be found.")},!1}),r?e.trigger("Error",r):I.browse_button||I.drop_element?void g.call(e,I,function(n){var i=e.getOption("init");"function"==typeof i?i(e):a.each(i,function(t,n){e.bind(n,t)}),n?(e.runtime=t.Runtime.getInfo(d()).type,e.trigger("Init",{runtime:e.runtime}),e.trigger("PostInit")):e.trigger("Error",{code:a.INIT_ERROR,message:a.translate("Init error.")})}):e.trigger("Error",{code:a.INIT_ERROR,message:a.translate("You must specify either 'browse_button' or 'drop_element'.")})},setOption:function(e,t){h.call(this,e,t,!this.runtime)},getOption:function(e){return e?I[e]:I},refresh:function(){D.length&&a.each(D,function(e){e.trigger("Refresh")}),this.trigger("Refresh")},start:function(){this.state!=a.STARTED&&(this.state=a.STARTED,this.trigger("StateChanged"),o.call(this))},stop:function(){this.state!=a.STOPPED&&(this.state=a.STOPPED,this.trigger("StateChanged"),this.trigger("CancelUpload"))},disableBrowse:function(){P=arguments[0]===n||arguments[0],D.length&&a.each(D,function(e){e.disable(P)}),this.trigger("DisableBrowse",P)},getFile:function(e){var t;for(t=S.length-1;t>=0;t--)if(S[t].id===e)return S[t]},addFile:function(e,n){function i(e,n){var i=[];t.each(u.settings.filters,function(t,n){s[n]&&i.push(function(i){s[n].call(u,t,e,function(e){i(!e)})})}),t.inSeries(i,n)}function o(e){var s=t.typeOf(e);if(e instanceof t.File){if(!e.ruid&&!e.isDetached()){if(!f)return!1;e.ruid=f,e.connectRuntime(f)}o(new a.File(e))}else e instanceof t.Blob?(o(e.getSource()),e.destroy()):e instanceof a.File?(n&&(e.name=n),l.push(function(t){i(e,function(n){n||(S.push(e),c.push(e),u.trigger("FileFiltered",e)),r(t,1)})})):-1!==t.inArray(s,["file","blob"])?o(new t.File(null,e)):"node"===s&&"filelist"===t.typeOf(e.files)?t.each(e.files,o):"array"===s&&(n=null,t.each(e,o))}var u=this,l=[],c=[],f;f=d(),o(e),l.length&&t.inSeries(l,function(){c.length&&u.trigger("FilesAdded",c)})},removeFile:function(e){for(var t="string"==typeof e?e:e.id,n=S.length-1;n>=0;n--)if(S[n].id===t)return this.splice(n,1)[0]},splice:function(e,t){var i=S.splice(e===n?0:e,t===n?S.length:t),r=!1;return this.state==a.STARTED&&(a.each(i,function(e){if(e.status===a.UPLOADING)return r=!0,!1}),r&&this.stop()),this.trigger("FilesRemoved",i),a.each(i,function(e){e.destroy()}),r&&this.start(),i},dispatchEvent:function(e){var t,n,i;if(e=e.toLowerCase(),t=this.hasEventListener(e)){t.sort(function(e,t){return t.priority-e.priority}),n=[].slice.call(arguments),n.shift(),n.unshift(this);for(var r=0;r<t.length;r++)if(!1===t[r].fn.apply(t[r].scope,n))return!1}return!0},bind:function(e,t,n,i){a.Uploader.prototype.bind.call(this,e,t,i,n)},destroy:function(){this.trigger("Destroy"),I=A=null,this.unbindAll()}})},a.Uploader.prototype=t.EventTarget.instance,a.File=function(){function e(e){a.extend(this,{id:a.guid(),name:e.name||e.fileName,type:e.type||"",size:e.size||e.fileSize,origSize:e.size||e.fileSize,loaded:0,percent:0,status:a.QUEUED,lastModifiedDate:e.lastModifiedDate||(new Date).toLocaleString(),getNative:function(){var e=this.getSource().getSource();return-1!==t.inArray(t.typeOf(e),["blob","file"])?e:null},getSource:function(){return n[this.id]?n[this.id]:null},destroy:function(){var e=this.getSource();e&&(e.destroy(),delete n[this.id])}}),n[this.id]=e}var n={};return e}(),a.QueueProgress=function(){var e=this;e.size=0,e.loaded=0,e.uploaded=0,e.failed=0,e.queued=0,e.percent=0,e.bytesPerSec=0,e.reset=function(){e.size=e.loaded=e.uploaded=e.failed=e.queued=e.percent=e.bytesPerSec=0}},e.plupload=a}(window,mOxie);