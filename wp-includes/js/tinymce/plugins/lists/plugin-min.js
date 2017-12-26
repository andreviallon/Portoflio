!function(){var e={},t=function(e){for(var t=o(e),n=e.split("."),i=Function("return this;")(),r=0;r<n.length-1;++r)void 0===i[n[r]]&&(i[n[r]]={}),i=i[n[r]];i[n[n.length-1]]=t},n=function(t){for(var n=e[t],i=n.deps,r=n.defn,s=i.length,l=new Array(s),c=0;c<s;++c)l[c]=o(i[c]);var a=r.apply(null,l);if(void 0===a)throw"module ["+t+"] returned undefined";n.instance=a},i=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===i)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:void 0}},o=function(t){var i=e[t];if(void 0===i)throw"module ["+t+"] was undefined";return void 0===i.instance&&n(t),i.instance},r=function(e,t){for(var n=e.length,i=new Array(n),r=0;r<n;++r)i.push(o(e[r]));t.apply(null,t)};({}).bolt={module:{api:{define:i,require:r,demand:o}}};var s=i,l=r,c=o;(function(e,t){s(e,[],function(){return t})})("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),s("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.PluginManager")}),s("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.Tools")}),s("tinymce.core.util.VK",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.util.VK")}),s("tinymce.core.dom.DOMUtils",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.DOMUtils")}),s("tinymce.plugins.lists.core.NodeType",[],function(){var e=function(e){return e&&3===e.nodeType},t=function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)},n=function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)},i=function(e){return e&&"BR"===e.nodeName};return{isTextNode:e,isListNode:t,isListItemNode:n,isBr:i,isFirstChild:function(e){return e.parentNode.firstChild===e},isLastChild:function(e){return e.parentNode.lastChild===e},isTextBlock:function(e,t){return t&&!!e.schema.getTextBlockElements()[t.nodeName]},isBlock:function(e,t){return e&&e.nodeName in t},isBogusBr:function(e,t){return!!i(t)&&!(!e.isBlock(t.nextSibling)||i(t.previousSibling))},isEmpty:function(e,t,n){var i=e.isEmpty(t);return!(n&&e.select("span[data-mce-type=bookmark]",t).length>0)&&i},isChildOfBody:function(e,t){return e.isChildOf(t,e.getRoot())}}}),s("tinymce.core.dom.RangeUtils",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.RangeUtils")}),s("tinymce.plugins.lists.core.Range",["tinymce.core.dom.RangeUtils","tinymce.plugins.lists.core.NodeType"],function(e,t){var n=function(n,i){var o=e.getNode(n,i);return t.isListItemNode(n)&&t.isTextNode(o)?{container:o,offset:i>=n.childNodes.length?o.data.length:0}:{container:n,offset:i}};return{getNormalizedEndPoint:n,normalizeRange:function(e){var t=e.cloneRange(),i=n(e.startContainer,e.startOffset);t.setStart(i.container,i.offset);var o=n(e.endContainer,e.endOffset);return t.setEnd(o.container,o.offset),t}}}),s("tinymce.plugins.lists.core.Bookmark",["tinymce.core.dom.DOMUtils","tinymce.plugins.lists.core.NodeType","tinymce.plugins.lists.core.Range"],function(e,t,n){var i=e.DOM;return{createBookmark:function(e){var t={},n=function(n){var o,r,s;r=e[n?"startContainer":"endContainer"],s=e[n?"startOffset":"endOffset"],1===r.nodeType&&(o=i.create("span",{"data-mce-type":"bookmark"}),r.hasChildNodes()?(s=Math.min(s,r.childNodes.length-1),n?r.insertBefore(o,r.childNodes[s]):i.insertAfter(o,r.childNodes[s])):r.appendChild(o),r=o,s=0),t[n?"startContainer":"endContainer"]=r,t[n?"startOffset":"endOffset"]=s};return n(!0),e.collapsed||n(),t},resolveBookmark:function(e){function t(t){var n,o,r,s=function(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t===e)return n;1===t.nodeType&&"bookmark"===t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1};n=r=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"],n&&(1===n.nodeType&&(o=s(n),n=n.parentNode,i.remove(r)),e[t?"startContainer":"endContainer"]=n,e[t?"startOffset":"endOffset"]=o)}t(!0),t();var o=i.createRng();return o.setStart(e.startContainer,e.startOffset),e.endContainer&&o.setEnd(e.endContainer,e.endOffset),n.normalizeRange(o)}}}),s("tinymce.core.dom.DomQuery",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.DomQuery")}),s("tinymce.plugins.lists.core.Selection",["tinymce.core.dom.DomQuery","tinymce.core.util.Tools","tinymce.plugins.lists.core.NodeType"],function(e,t,n){var i=function(e){return e.dom.getParent(e.selection.getStart(!0),"OL,UL,DL")},o=function(n,i){var o=t.map(i,function(e){var t=n.dom.getParent(e,"li,dd,dt",n.getBody());return t||e});return e.unique(o)};return{getParentList:i,getSelectedSubLists:function(e){var o=i(e);return t.grep(e.selection.getSelectedBlocks(),function(e){return n.isListNode(e)&&o!==e})},getSelectedListItems:function(e){var i=e.selection.getSelectedBlocks();return t.grep(o(e,i),function(e){return n.isListItemNode(e)})}}}),s("tinymce.plugins.lists.actions.Indent",["tinymce.core.dom.DOMUtils","tinymce.plugins.lists.core.Bookmark","tinymce.plugins.lists.core.NodeType","tinymce.plugins.lists.core.Selection"],function(e,t,n,i){var o=e.DOM,r=function(e,t){var i;if(n.isListNode(e)){for(;i=e.firstChild;)t.appendChild(i);o.remove(e)}},s=function(e){var t,i,s;return"DT"===e.nodeName?(o.rename(e,"DD"),!0):(t=e.previousSibling)&&n.isListNode(t)?(t.appendChild(e),!0):t&&"LI"===t.nodeName&&n.isListNode(t.lastChild)?(t.lastChild.appendChild(e),r(e.lastChild,t.lastChild),!0):(t=e.nextSibling)&&n.isListNode(t)?(t.insertBefore(e,t.firstChild),!0):!(!(t=e.previousSibling)||"LI"!==t.nodeName||(i=o.create(e.parentNode.nodeName),s=o.getStyle(e.parentNode,"listStyleType"),s&&o.setStyle(i,"listStyleType",s),t.appendChild(i),i.appendChild(e),r(e.lastChild,i),0))};return{indentSelection:function(e){var n=i.getSelectedListItems(e);if(n.length){for(var o=t.createBookmark(e.selection.getRng(!0)),r=0;r<n.length&&(s(n[r])||0!==r);r++);return e.selection.setRng(t.resolveBookmark(o)),e.nodeChanged(),!0}}}}),s("tinymce.plugins.lists.core.NormalizeLists",["tinymce.core.dom.DOMUtils","tinymce.core.util.Tools","tinymce.plugins.lists.core.NodeType"],function(e,t,n){var i=e.DOM,o=function(e,t){var o,r=t.parentNode;"LI"===r.nodeName&&r.firstChild===t&&(o=r.previousSibling,o&&"LI"===o.nodeName?(o.appendChild(t),n.isEmpty(e,r)&&i.remove(r)):i.setStyle(r,"listStyleType","none")),n.isListNode(r)&&(o=r.previousSibling)&&"LI"===o.nodeName&&o.appendChild(t)};return{normalizeList:o,normalizeLists:function(e,n){t.each(t.grep(e.select("ol,ul",n)),function(t){o(e,t)})}}}),s("tinymce.core.Env",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.Env")}),s("tinymce.plugins.lists.core.TextBlock",["tinymce.core.dom.DOMUtils","tinymce.core.Env","tinymce.plugins.lists.core.NodeType"],function(e,t,n){var i=e.DOM;return{createNewTextBlock:function(e,o,r){var s,l,c=i.createFragment(),a,d=e.schema.getBlockElements();if(e.settings.forced_root_block&&(r=r||e.settings.forced_root_block),r&&(l=i.create(r),l.tagName===e.settings.forced_root_block&&i.setAttribs(l,e.settings.forced_root_block_attrs),n.isBlock(o.firstChild,d)||c.appendChild(l)),o)for(;s=o.firstChild;){var u=s.nodeName;a||"SPAN"===u&&"bookmark"===s.getAttribute("data-mce-type")||(a=!0),n.isBlock(s,d)?(c.appendChild(s),l=null):r?(l||(l=i.create(r),c.appendChild(l)),l.appendChild(s)):c.appendChild(s)}return e.settings.forced_root_block?a||t.ie&&!(t.ie>10)||l.appendChild(i.create("br",{"data-mce-bogus":"1"})):c.appendChild(i.create("br")),c}}}),s("tinymce.plugins.lists.core.SplitList",["tinymce.core.dom.DOMUtils","tinymce.plugins.lists.core.NodeType","tinymce.plugins.lists.core.TextBlock","tinymce.core.util.Tools"],function(e,t,n,i){var o=e.DOM;return{splitList:function(e,r,s,l){var c,a,d,u,m=function(e){i.each(d,function(t){e.parentNode.insertBefore(t,s.parentNode)}),o.remove(e)};for(d=o.select('span[data-mce-type="bookmark"]',r),l=l||n.createNewTextBlock(e,s),c=o.createRng(),c.setStartAfter(s),c.setEndAfter(r),a=c.extractContents(),u=a.firstChild;u;u=u.firstChild)if("LI"===u.nodeName&&e.dom.isEmpty(u)){o.remove(u);break}e.dom.isEmpty(a)||o.insertAfter(a,r),o.insertAfter(l,r),t.isEmpty(e.dom,s.parentNode)&&m(s.parentNode),o.remove(s),t.isEmpty(e.dom,r)&&o.remove(r)}}}),s("tinymce.plugins.lists.actions.Outdent",["tinymce.core.dom.DOMUtils","tinymce.plugins.lists.core.Bookmark","tinymce.plugins.lists.core.NodeType","tinymce.plugins.lists.core.NormalizeLists","tinymce.plugins.lists.core.Selection","tinymce.plugins.lists.core.SplitList","tinymce.plugins.lists.core.TextBlock"],function(e,t,n,i,o,r,s){var l=e.DOM,c=function(e,t){n.isEmpty(e,t)&&l.remove(t)},a=function(e,t){var o=t.parentNode,a=o.parentNode,d;return!(o!==e.getBody()&&("DD"===t.nodeName?(l.rename(t,"DT"),0):n.isFirstChild(t)&&n.isLastChild(t)?("LI"===a.nodeName?(l.insertAfter(t,a),c(e.dom,a),l.remove(o)):n.isListNode(a)?l.remove(o,!0):(a.insertBefore(s.createNewTextBlock(e,t),o),l.remove(o)),0):n.isFirstChild(t)?("LI"===a.nodeName?(l.insertAfter(t,a),t.appendChild(o),c(e.dom,a)):n.isListNode(a)?a.insertBefore(t,o):(a.insertBefore(s.createNewTextBlock(e,t),o),l.remove(t)),0):n.isLastChild(t)?("LI"===a.nodeName?l.insertAfter(t,a):n.isListNode(a)?l.insertAfter(t,o):(l.insertAfter(s.createNewTextBlock(e,t),o),l.remove(t)),0):("LI"===a.nodeName?(o=a,d=s.createNewTextBlock(e,t,"LI")):d=n.isListNode(a)?s.createNewTextBlock(e,t,"LI"):s.createNewTextBlock(e,t),r.splitList(e,o,t,d),i.normalizeLists(e.dom,o.parentNode),0)))};return{outdent:a,outdentSelection:function(e){var n=o.getSelectedListItems(e);if(n.length){var i=t.createBookmark(e.selection.getRng(!0)),r,s,l=e.getBody();for(r=n.length;r--;)for(var c=n[r].parentNode;c&&c!==l;){for(s=n.length;s--;)if(n[s]===c){n.splice(r,1);break}c=c.parentNode}for(r=0;r<n.length&&(a(e,n[r])||0!==r);r++);return e.selection.setRng(t.resolveBookmark(i)),e.nodeChanged(),!0}}}}),s("tinymce.core.dom.BookmarkManager",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.BookmarkManager")}),s("tinymce.plugins.lists.actions.ToggleList",["tinymce.core.dom.BookmarkManager","tinymce.core.util.Tools","tinymce.plugins.lists.actions.Outdent","tinymce.plugins.lists.core.Bookmark","tinymce.plugins.lists.core.NodeType","tinymce.plugins.lists.core.NormalizeLists","tinymce.plugins.lists.core.Selection","tinymce.plugins.lists.core.SplitList"],function(e,t,n,i,o,r,s,l){var c=function(e,t,n){var i=n["list-style-type"]?n["list-style-type"]:null;e.setStyle(t,"list-style-type",i)},a=function(e,n){t.each(n,function(t,n){e.setAttribute(n,t)})},d=function(e,n,i){a(n,i["list-attributes"]),t.each(e.select("li",n),function(e){a(e,i["list-item-attributes"])})},u=function(e,t,n){c(e,t,n),d(e,t,n)},m=function(e,t,n){var i,r,s=e.getBody();for(i=t[n?"startContainer":"endContainer"],r=t[n?"startOffset":"endOffset"],1===i.nodeType&&(i=i.childNodes[Math.min(r,i.childNodes.length-1)]||i);i.parentNode!==s;){if(o.isTextBlock(e,i))return i;if(/^(TD|TH)$/.test(i.parentNode.nodeName))return i;i=i.parentNode}return i},f=function(n,i){for(var r=[],s=n.getBody(),l=n.dom,c=m(n,i,!0),a=m(n,i,!1),d,u=[],f=c;f&&(u.push(f),f!==a);f=f.nextSibling);return t.each(u,function(t){if(o.isTextBlock(n,t))return r.push(t),void(d=null);if(l.isBlock(t)||o.isBr(t))return o.isBr(t)&&l.remove(t),void(d=null);var i=t.nextSibling;if(e.isBookmarkNode(t)&&(o.isTextBlock(n,i)||!i&&t.parentNode===s))return void(d=null);d||(d=l.create("p"),t.parentNode.insertBefore(d,t),r.push(d)),d.appendChild(t)}),r},g=function(e,n,r){var s=e.selection.getRng(!0),l,c="LI",a=e.dom;r=r||{},"false"!==a.getContentEditable(e.selection.getNode())&&(n=n.toUpperCase(),"DL"===n&&(c="DT"),l=i.createBookmark(s),t.each(f(e,s),function(t){var i,s,l=function(e){var t=a.getStyle(e,"list-style-type"),n=r?r["list-style-type"]:"";return n=null===n?"":n,t===n};s=t.previousSibling,s&&o.isListNode(s)&&s.nodeName===n&&l(s)?(i=s,t=a.rename(t,c),s.appendChild(t)):(i=a.create(n),t.parentNode.insertBefore(i,t),i.appendChild(t),t=a.rename(t,c)),u(a,i,r),k(e.dom,i)}),e.selection.setRng(i.resolveBookmark(l)))},p=function(e){var c=i.createBookmark(e.selection.getRng(!0)),a=e.getBody(),d=s.getSelectedListItems(e),u=t.grep(d,function(t){return e.dom.isEmpty(t)});d=t.grep(d,function(t){return!e.dom.isEmpty(t)}),t.each(u,function(t){if(o.isEmpty(e.dom,t))return void n.outdent(e,t)}),t.each(d,function(t){var n,i;if(t.parentNode!==e.getBody()){for(n=t;n&&n!==a;n=n.parentNode)o.isListNode(n)&&(i=n);l.splitList(e,i,t),r.normalizeLists(e.dom,i.parentNode)}}),e.selection.setRng(i.resolveBookmark(c))},y=function(e,t){return e&&t&&o.isListNode(e)&&e.nodeName===t.nodeName},v=function(e,t,n){return e.getStyle(t,"list-style-type",!0)===e.getStyle(n,"list-style-type",!0)},N=function(e,t){return e.className===t.className},h=function(e,t,n){return y(t,n)&&v(e,t,n)&&N(t,n)},k=function(e,t){var n,i;if(n=t.nextSibling,h(e,t,n)){for(;i=n.firstChild;)t.appendChild(i);e.remove(n)}if(n=t.previousSibling,h(e,t,n)){for(;i=n.lastChild;)t.insertBefore(i,t.firstChild);e.remove(n)}},L=function(e,t,n,i){if(t.nodeName!==n){var o=e.rename(t,n);u(e,o,i)}else u(e,t,i)},C=function(e,n,o,r,s){if(n.nodeName!==r||B(s)){var l=i.createBookmark(e.selection.getRng(!0));t.each([n].concat(o),function(t){L(e.dom,t,r,s)}),e.selection.setRng(i.resolveBookmark(l))}else p(e,r)},B=function(e){return"list-style-type"in e},T=function(e,t,n,o){if(t!==e.getBody())if(t)if(t.nodeName!==n||B(o)){var r=i.createBookmark(e.selection.getRng(!0));u(e.dom,t,o),k(e.dom,e.dom.rename(t,n)),e.selection.setRng(i.resolveBookmark(r))}else p(e,n);else g(e,n,o)};return{toggleList:function(e,t,n){var i=s.getParentList(e),o=s.getSelectedSubLists(e);n=n||{},i&&o.length>0?C(e,i,o,t,n):T(e,i,t,n)},removeList:p,mergeWithAdjacentLists:k}}),s("tinymce.core.dom.TreeWalker",["global!tinymce.util.Tools.resolve"],function(e){return e("tinymce.dom.TreeWalker")}),s("tinymce.plugins.lists.core.Delete",["tinymce.core.dom.RangeUtils","tinymce.core.dom.TreeWalker","tinymce.core.util.VK","tinymce.plugins.lists.actions.ToggleList","tinymce.plugins.lists.core.Bookmark","tinymce.plugins.lists.core.NodeType","tinymce.plugins.lists.core.NormalizeLists","tinymce.plugins.lists.core.Range","tinymce.plugins.lists.core.Selection"],function(e,t,n,i,o,r,s,l,c){var a=function(n,i,o){var s=i.startContainer,l=i.startOffset,c,a;if(3===s.nodeType&&(o?l<s.data.length:l>0))return s;for(c=n.schema.getNonEmptyElements(),1===s.nodeType&&(s=e.getNode(s,l)),a=new t(s,n.getBody()),o&&r.isBogusBr(n.dom,s)&&a.next();s=a[o?"next":"prev2"]();){if("LI"===s.nodeName&&!s.hasChildNodes())return s;if(c[s.nodeName])return s;if(3===s.nodeType&&s.data.length>0)return s}},d=function(e,t){var n=t.childNodes;return 1===n.length&&!r.isListNode(n[0])&&e.isBlock(n[0])},u=function(e,t){d(e,t)&&e.remove(t.firstChild,!0)},m=function(e,t,n){var i,o;if(o=d(e,n)?n.firstChild:n,u(e,t),!r.isEmpty(e,t,!0))for(;i=t.firstChild;)o.appendChild(i)},f=function(e,t,n){var i,o,s=t.parentNode;r.isChildOfBody(e,t)&&r.isChildOfBody(e,n)&&(r.isListNode(n.lastChild)&&(o=n.lastChild),s===n.lastChild&&r.isBr(s.previousSibling)&&e.remove(s.previousSibling),i=n.lastChild,i&&r.isBr(i)&&t.hasChildNodes()&&e.remove(i),r.isEmpty(e,n,!0)&&e.$(n).empty(),m(e,t,n),o&&n.appendChild(o),e.remove(t),r.isEmpty(e,s)&&s!==e.getRoot()&&e.remove(s))},g=function(e,t,n){e.dom.$(n).empty(),f(e.dom,t,n),e.selection.setCursorLocation(n)},p=function(e,t,n,i){var r=e.dom;if(r.isEmpty(i))g(e,n,i);else{var s=o.createBookmark(t);f(r,n,i),e.selection.setRng(o.resolveBookmark(s))}},y=function(e,t,n,i){var r=o.createBookmark(t);f(e.dom,n,i),e.selection.setRng(o.resolveBookmark(r))},v=function(e,t){var n=e.dom,o=e.selection,s=n.getParent(o.getStart(),"LI"),c,d,u;if(s){if((c=s.parentNode)===e.getBody()&&r.isEmpty(n,c))return!0;if(d=l.normalizeRange(o.getRng(!0)),(u=n.getParent(a(e,d,t),"LI"))&&u!==s)return t?p(e,d,u,s):y(e,d,s,u),!0;if(!u&&!t&&i.removeList(e,c.nodeName))return!0}return!1},N=function(e,t){var n=e.getParent(t.parentNode,e.isBlock);e.remove(t),n&&e.isEmpty(n)&&e.remove(n)},h=function(e,t){var n=e.dom,o=n.getParent(e.selection.getStart(),n.isBlock);if(o&&n.isEmpty(o)){var r=l.normalizeRange(e.selection.getRng(!0)),s=n.getParent(a(e,r,t),"LI");if(s)return e.undoManager.transact(function(){N(n,o),i.mergeWithAdjacentLists(n,s.parentNode),e.selection.select(s,!0),e.selection.collapse(t)}),!0}return!1},k=function(e,t){return v(e,t)||h(e,t)},L=function(e){return!!(e.dom.getParent(e.selection.getStart(),"LI,DT,DD")||c.getSelectedListItems(e).length>0)&&(e.undoManager.transact(function(){e.execCommand("Delete"),s.normalizeLists(e.dom,e.getBody())}),!0)},C=function(e,t){return e.selection.isCollapsed()?k(e,t):L(e)};return{setup:function(e){e.on("keydown",function(t){t.keyCode===n.BACKSPACE?C(e,!1)&&t.preventDefault():t.keyCode===n.DELETE&&C(e,!0)&&t.preventDefault()})},backspaceDelete:C}}),s("tinymce.plugins.lists.Plugin",["tinymce.core.PluginManager","tinymce.core.util.Tools","tinymce.core.util.VK","tinymce.plugins.lists.actions.Indent","tinymce.plugins.lists.actions.Outdent","tinymce.plugins.lists.actions.ToggleList","tinymce.plugins.lists.core.Delete","tinymce.plugins.lists.core.NodeType","tinymce.plugins.lists.core.Selection"],function(e,t,n,i,o,r,s,l,c){var a=function(e,t){return function(){var n=e.dom.getParent(e.selection.getStart(),"UL,OL,DL");return n&&n.nodeName===t}},d=function(e){e.on("BeforeExecCommand",function(t){var n=t.command.toLowerCase(),r;if("indent"===n?i.indentSelection(e)&&(r=!0):"outdent"===n&&o.outdentSelection(e)&&(r=!0),r)return e.fire("ExecCommand",{command:t.command}),t.preventDefault(),!0}),e.addCommand("InsertUnorderedList",function(t,n){r.toggleList(e,"UL",n)}),e.addCommand("InsertOrderedList",function(t,n){r.toggleList(e,"OL",n)}),e.addCommand("InsertDefinitionList",function(t,n){r.toggleList(e,"DL",n)})},u=function(e){e.addQueryStateHandler("InsertUnorderedList",a(e,"UL")),e.addQueryStateHandler("InsertOrderedList",a(e,"OL")),e.addQueryStateHandler("InsertDefinitionList",a(e,"DL"))},m=function(e){e.on("keydown",function(t){9!==t.keyCode||n.metaKeyPressed(t)||e.dom.getParent(e.selection.getStart(),"LI,DT,DD")&&(t.preventDefault(),t.shiftKey?o.outdentSelection(e):i.indentSelection(e))})},f=function(e){var n=function(n){return function(){var i=this;e.on("NodeChange",function(e){var o=t.grep(e.parents,l.isListNode);i.active(o.length>0&&o[0].nodeName===n)})}};(function(e,n){var i=e.settings.plugins?e.settings.plugins:"";return-1!==t.inArray(i.split(/[ ,]/),n)})(e,"advlist")||(e.addButton("numlist",{title:"Numbered list",cmd:"InsertOrderedList",onPostRender:n("OL")}),e.addButton("bullist",{title:"Bullet list",cmd:"InsertUnorderedList",onPostRender:n("UL")})),e.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent",onPostRender:function(t){var n=t.control;e.on("nodechange",function(){var t=c.getSelectedListItems(e),i=t.length>0&&l.isFirstChild(t[0]);n.disabled(i)})}})};return e.add("lists",function(e){return f(e),s.setup(e),e.on("init",function(){d(e),u(e),e.getParam("lists_indent_on_tab",!0)&&m(e)}),{backspaceDelete:function(t){s.backspaceDelete(e,t)}}}),function(){}}),o("tinymce.plugins.lists.Plugin")()}();