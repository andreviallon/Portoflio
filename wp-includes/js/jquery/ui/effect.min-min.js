!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e="ui-effects-",n=t;return t.effects={effect:{}},function(t,e){function n(t,e,n){var r=u[e.type]||{};return null==t?n||!e.def?null:e.def:(t=r.floor?~~t:parseFloat(t),isNaN(t)?e.def:r.mod?(t+r.mod)%r.mod:0>t?0:r.max<t?r.max:t)}function r(e){var n=f(),r=n._rgba=[];return e=e.toLowerCase(),p(s,function(t,o){var i,a=o.re.exec(e),s=a&&o.parse(a),f=o.space||"rgba";if(s)return i=n[f](s),n[c[f].cache]=i[c[f].cache],r=n._rgba=i._rgba,!1}),r.length?("0,0,0,0"===r.join()&&t.extend(r,i.transparent),n):i[e]}function o(t,e,n){return n=(n+1)%1,6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}var i,a=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],f=t.Color=function(e,n,r,o){return new t.Color.fn.parse(e,n,r,o)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},l=f.support={},d=t("<p>")[0],p=t.each;d.style.cssText="background-color:rgba(1,1,1,.5)",l.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),f.fn=t.extend(f.prototype,{parse:function(o,a,s,u){if(o===e)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=t(o).css(a),a=e);var l=this,d=t.type(o),h=this._rgba=[];return a!==e&&(o=[o,a,s,u],d="array"),"string"===d?this.parse(r(o)||i._default):"array"===d?(p(c.rgba.props,function(t,e){h[e.idx]=n(o[e.idx],e)}),this):"object"===d?(o instanceof f?p(c,function(t,e){o[e.cache]&&(l[e.cache]=o[e.cache].slice())}):p(c,function(e,r){var i=r.cache;p(r.props,function(t,e){if(!l[i]&&r.to){if("alpha"===t||null==o[t])return;l[i]=r.to(l._rgba)}l[i][e.idx]=n(o[t],e,!0)}),l[i]&&t.inArray(null,l[i].slice(0,3))<0&&(l[i][3]=1,r.from&&(l._rgba=r.from(l[i])))}),this):void 0},is:function(t){var e=f(t),n=!0,r=this;return p(c,function(t,o){var i,a=e[o.cache];return a&&(i=r[o.cache]||o.to&&o.to(r._rgba)||[],p(o.props,function(t,e){if(null!=a[e.idx])return n=a[e.idx]===i[e.idx]})),n}),n},_space:function(){var t=[],e=this;return p(c,function(n,r){e[r.cache]&&t.push(n)}),t.pop()},transition:function(t,e){var r=f(t),o=r._space(),i=c[o],a=0===this.alpha()?f("transparent"):this,s=a[i.cache]||i.to(a._rgba),l=s.slice();return r=r[i.cache],p(i.props,function(t,o){var i=o.idx,a=s[i],f=r[i],c=u[o.type]||{};null!==f&&(null===a?l[i]=f:(c.mod&&(f-a>c.mod/2?a+=c.mod:a-f>c.mod/2&&(a-=c.mod)),l[i]=n((f-a)*e+a,o)))}),this[o](l)},blend:function(e){if(1===this._rgba[3])return this;var n=this._rgba.slice(),r=n.pop(),o=f(e)._rgba;return f(t.map(n,function(t,e){return(1-r)*o[e]+r*t}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===n[3]&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===n[3]&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(255*r)),"#"+t.map(n,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,n,r=t[0]/255,o=t[1]/255,i=t[2]/255,a=t[3],s=Math.max(r,o,i),f=Math.min(r,o,i),c=s-f,u=s+f,l=.5*u;return e=f===s?0:r===s?60*(o-i)/c+360:o===s?60*(i-r)/c+120:60*(r-o)/c+240,n=0===c?0:l<=.5?c/u:c/(2-u),[Math.round(e)%360,n,l,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],r=t[2],i=t[3],a=r<=.5?r*(1+n):r+n-r*n,s=2*r-a;return[Math.round(255*o(s,a,e+1/3)),Math.round(255*o(s,a,e)),Math.round(255*o(s,a,e-1/3)),i]},p(c,function(r,o){var i=o.props,s=o.cache,c=o.to,u=o.from;f.fn[r]=function(r){if(c&&!this[s]&&(this[s]=c(this._rgba)),r===e)return this[s].slice();var o,a=t.type(r),l="array"===a||"object"===a?r:arguments,d=this[s].slice();return p(i,function(t,e){var r=l["object"===a?t:e.idx];null==r&&(r=d[e.idx]),d[e.idx]=n(r,e)}),u?(o=f(u(d)),o[s]=d,o):f(d)},p(i,function(e,n){f.fn[e]||(f.fn[e]=function(o){var i,s=t.type(o),f="alpha"===e?this._hsla?"hsla":"rgba":r,c=this[f](),u=c[n.idx];return"undefined"===s?u:("function"===s&&(o=o.call(this,u),s=t.type(o)),null==o&&n.empty?this:("string"===s&&(i=a.exec(o))&&(o=u+parseFloat(i[2])*("+"===i[1]?1:-1)),c[n.idx]=o,this[f](c)))})})}),f.hook=function(e){var n=e.split(" ");p(n,function(e,n){t.cssHooks[n]={set:function(e,o){var i,a,s="";if("transparent"!==o&&("string"!==t.type(o)||(i=r(o)))){if(o=f(i||o),!l.rgba&&1!==o._rgba[3]){for(a="backgroundColor"===n?e.parentNode:e;(""===s||"transparent"===s)&&a&&a.style;)try{s=t.css(a,"backgroundColor"),a=a.parentNode}catch(t){}o=o.blend(s&&"transparent"!==s?s:"_default")}o=o.toRgbaString()}try{e.style[n]=o}catch(t){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=f(e.elem,n),e.end=f(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}})},f.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],function(n,r){e["border"+r+"Color"]=t}),e}},i=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(n),function(){function e(e){var n,r,o=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,i={};if(o&&o.length&&o[0]&&o[o[0]])for(r=o.length;r--;)n=o[r],"string"==typeof o[n]&&(i[t.camelCase(n)]=o[n]);else for(n in o)"string"==typeof o[n]&&(i[n]=o[n]);return i}function r(e,n){var r,o,a={};for(r in n)o=n[r],e[r]!==o&&(i[r]||!t.fx.step[r]&&isNaN(parseFloat(o))||(a[r]=o));return a}var o=["add","remove","toggle"],i={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,r){t.fx.step[r]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(n.style(t.elem,r,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,i,a,s){var f=t.speed(i,a,s);return this.queue(function(){var i,a=t(this),s=a.attr("class")||"",c=f.children?a.find("*").addBack():a;c=c.map(function(){return{el:t(this),start:e(this)}}),i=function(){t.each(o,function(t,e){n[e]&&a[e+"Class"](n[e])})},i(),c=c.map(function(){return this.end=e(this.el[0]),this.diff=r(this.start,this.end),this}),a.attr("class",s),c=c.map(function(){var e=this,n=t.Deferred(),r=t.extend({},f,{queue:!1,complete:function(){n.resolve(e)}});return this.el.animate(this.diff,r),n.promise()}),t.when.apply(t,c.get()).done(function(){i(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),f.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(n,r,o,i){return r?t.effects.animateClass.call(this,{add:n},r,o,i):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(n,r,o,i){return arguments.length>1?t.effects.animateClass.call(this,{remove:n},r,o,i):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(n,r,o,i,a){return"boolean"==typeof r||void 0===r?o?t.effects.animateClass.call(this,r?{add:n}:{remove:n},o,i,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:n},r,o,i)}}(t.fn.toggleClass),switchClass:function(e,n,r,o,i){return t.effects.animateClass.call(this,{add:n,remove:e},r,o,i)}})}(),function(){function n(e,n,r,o){return t.isPlainObject(e)&&(n=e,e=e.effect),e={effect:e},null==n&&(n={}),t.isFunction(n)&&(o=n,r=null,n={}),("number"==typeof n||t.fx.speeds[n])&&(o=r,r=n,n={}),t.isFunction(r)&&(o=r,r=null),n&&t.extend(e,n),r=r||n.duration,e.duration=t.fx.off?0:"number"==typeof r?r:r in t.fx.speeds?t.fx.speeds[r]:t.fx.speeds._default,e.complete=o||n.complete,e}function r(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||"string"==typeof e&&!t.effects.effect[e]||!!t.isFunction(e)||"object"==typeof e&&!e.effect}t.extend(t.effects,{version:"1.11.4",save:function(t,n){for(var r=0;r<n.length;r++)null!==n[r]&&t.data(e+n[r],t[0].style[n[r]])},restore:function(t,n){var r,o;for(o=0;o<n.length;o++)null!==n[o]&&(r=t.data(e+n[o]),void 0===r&&(r=""),t.css(n[o],r))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var n,r;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=t[1]/e.width}return{x:r,y:n}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var n={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},r=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:e.width(),height:e.height()},i=document.activeElement;try{i.id}catch(t){i=document.body}return e.wrap(r),(e[0]===i||t.contains(e[0],i))&&t(i).focus(),r=e.parent(),"static"===e.css("position")?(r.css({position:"relative"}),e.css({position:"relative"})):(t.extend(n,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,r){n[r]=e.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(o),r.css(n).show()},removeWrapper:function(e){var n=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===n||t.contains(e[0],n))&&t(n).focus()),e},setTransition:function(e,n,r,o){return o=o||{},t.each(n,function(t,n){var i=e.cssUnit(n);i[0]>0&&(o[n]=i[0]*r+i[1])}),o}}),t.fn.extend({effect:function(){function e(e){function n(){t.isFunction(i)&&i.call(o[0]),t.isFunction(e)&&e()}var o=t(this),i=r.complete,s=r.mode;(o.is(":hidden")?"hide"===s:"show"===s)?(o[s](),n()):a.call(o[0],r,n)}var r=n.apply(this,arguments),o=r.mode,i=r.queue,a=t.effects.effect[r.effect];return t.fx.off||!a?o?this[o](r.duration,r.complete):this.each(function(){r.complete&&r.complete.call(this)}):!1===i?this.each(e):this.queue(i||"fx",e)},show:function(t){return function(e){if(r(e))return t.apply(this,arguments);var o=n.apply(this,arguments);return o.mode="show",this.effect.call(this,o)}}(t.fn.show),hide:function(t){return function(e){if(r(e))return t.apply(this,arguments);var o=n.apply(this,arguments);return o.mode="hide",this.effect.call(this,o)}}(t.fn.hide),toggle:function(t){return function(e){if(r(e)||"boolean"==typeof e)return t.apply(this,arguments);var o=n.apply(this,arguments);return o.mode="toggle",this.effect.call(this,o)}}(t.fn.toggle),cssUnit:function(e){var n=this.css(e),r=[];return t.each(["em","px","%","pt"],function(t,e){n.indexOf(e)>0&&(r=[parseFloat(n),e])}),r}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return t<.5?n(2*t)/2:1-n(-2*t+2)/2}})}(),t.effects});