HTMLHint.addRule({id:"kses",description:"Element or attribute cannot be used.",init:function(t,e,a){"use strict";var r=this;t.addListener("tagstart",function(t){var i,n,o,s,l,d,g;if(g=t.tagName.toLowerCase(),!a[g])return void e.error("Tag <"+t.tagName+"> is not allowed.",t.line,t.col,r,t.raw);for(s=a[g],n=t.col+t.tagName.length+1,l=0,d=t.attrs.length;l<d;l++)i=t.attrs[l],o=i.name.toLowerCase(),s[o]||e.error("Tag attribute ["+i.raw+" ] is not allowed.",t.line,n+i.index,r,i.raw)})}});