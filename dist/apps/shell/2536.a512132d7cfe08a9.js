(self.webpackChunkshell=self.webpackChunkshell||[]).push([[2536],{8809:(k,S,_)=>{_.d(S,{T6:()=>b,VD:()=>s,WE:()=>n,Yt:()=>m,lC:()=>A,py:()=>D,rW:()=>C,s:()=>e,ve:()=>E,vq:()=>t});var h=_(2567);function C(r,c,a){return{r:255*(0,h.sh)(r,255),g:255*(0,h.sh)(c,255),b:255*(0,h.sh)(a,255)}}function A(r,c,a){r=(0,h.sh)(r,255),c=(0,h.sh)(c,255),a=(0,h.sh)(a,255);var g=Math.max(r,c,a),o=Math.min(r,c,a),f=0,M=0,u=(g+o)/2;if(g===o)M=0,f=0;else{var d=g-o;switch(M=u>.5?d/(2-g-o):d/(g+o),g){case r:f=(c-a)/d+(c<a?6:0);break;case c:f=(a-r)/d+2;break;case a:f=(r-c)/d+4}f/=6}return{h:f,s:M,l:u}}function x(r,c,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?r+6*a*(c-r):a<.5?c:a<2/3?r+(c-r)*(2/3-a)*6:r}function E(r,c,a){var g,o,f;if(r=(0,h.sh)(r,360),c=(0,h.sh)(c,100),a=(0,h.sh)(a,100),0===c)o=a,f=a,g=a;else{var M=a<.5?a*(1+c):a+c-a*c,u=2*a-M;g=x(u,M,r+1/3),o=x(u,M,r),f=x(u,M,r-1/3)}return{r:255*g,g:255*o,b:255*f}}function D(r,c,a){r=(0,h.sh)(r,255),c=(0,h.sh)(c,255),a=(0,h.sh)(a,255);var g=Math.max(r,c,a),o=Math.min(r,c,a),f=0,M=g,u=g-o,d=0===g?0:u/g;if(g===o)f=0;else{switch(g){case r:f=(c-a)/u+(c<a?6:0);break;case c:f=(a-r)/u+2;break;case a:f=(r-c)/u+4}f/=6}return{h:f,s:d,v:M}}function n(r,c,a){r=6*(0,h.sh)(r,360),c=(0,h.sh)(c,100),a=(0,h.sh)(a,100);var g=Math.floor(r),o=r-g,f=a*(1-c),M=a*(1-o*c),u=a*(1-(1-o)*c),d=g%6;return{r:255*[a,M,f,f,u,a][d],g:255*[u,a,a,M,f,f][d],b:255*[f,f,u,a,a,M][d]}}function t(r,c,a,g){var o=[(0,h.FZ)(Math.round(r).toString(16)),(0,h.FZ)(Math.round(c).toString(16)),(0,h.FZ)(Math.round(a).toString(16))];return g&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function e(r,c,a,g,o){var f=[(0,h.FZ)(Math.round(r).toString(16)),(0,h.FZ)(Math.round(c).toString(16)),(0,h.FZ)(Math.round(a).toString(16)),(0,h.FZ)(p(g))];return o&&f[0].startsWith(f[0].charAt(1))&&f[1].startsWith(f[1].charAt(1))&&f[2].startsWith(f[2].charAt(1))&&f[3].startsWith(f[3].charAt(1))?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}function p(r){return Math.round(255*parseFloat(r)).toString(16)}function b(r){return s(r)/255}function s(r){return parseInt(r,16)}function m(r){return{r:r>>16,g:(65280&r)>>8,b:255&r}}},3487:(k,S,_)=>{_.d(S,{R:()=>h});var h={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},7952:(k,S,_)=>{_.d(S,{uA:()=>x});var h=_(8809),C=_(3487),A=_(2567);function x(s){var m={r:0,g:0,b:0},r=1,c=null,a=null,g=null,o=!1,f=!1;return"string"==typeof s&&(s=function p(s){if(0===(s=s.trim().toLowerCase()).length)return!1;var m=!1;if(C.R[s])s=C.R[s],m=!0;else if("transparent"===s)return{r:0,g:0,b:0,a:0,format:"name"};var r=i.rgb.exec(s);return r?{r:r[1],g:r[2],b:r[3]}:(r=i.rgba.exec(s))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=i.hsl.exec(s))?{h:r[1],s:r[2],l:r[3]}:(r=i.hsla.exec(s))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=i.hsv.exec(s))?{h:r[1],s:r[2],v:r[3]}:(r=i.hsva.exec(s))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=i.hex8.exec(s))?{r:(0,h.VD)(r[1]),g:(0,h.VD)(r[2]),b:(0,h.VD)(r[3]),a:(0,h.T6)(r[4]),format:m?"name":"hex8"}:(r=i.hex6.exec(s))?{r:(0,h.VD)(r[1]),g:(0,h.VD)(r[2]),b:(0,h.VD)(r[3]),format:m?"name":"hex"}:(r=i.hex4.exec(s))?{r:(0,h.VD)(r[1]+r[1]),g:(0,h.VD)(r[2]+r[2]),b:(0,h.VD)(r[3]+r[3]),a:(0,h.T6)(r[4]+r[4]),format:m?"name":"hex8"}:!!(r=i.hex3.exec(s))&&{r:(0,h.VD)(r[1]+r[1]),g:(0,h.VD)(r[2]+r[2]),b:(0,h.VD)(r[3]+r[3]),format:m?"name":"hex"}}(s)),"object"==typeof s&&(b(s.r)&&b(s.g)&&b(s.b)?(m=(0,h.rW)(s.r,s.g,s.b),o=!0,f="%"===String(s.r).substr(-1)?"prgb":"rgb"):b(s.h)&&b(s.s)&&b(s.v)?(c=(0,A.JX)(s.s),a=(0,A.JX)(s.v),m=(0,h.WE)(s.h,c,a),o=!0,f="hsv"):b(s.h)&&b(s.s)&&b(s.l)&&(c=(0,A.JX)(s.s),g=(0,A.JX)(s.l),m=(0,h.ve)(s.h,c,g),o=!0,f="hsl"),Object.prototype.hasOwnProperty.call(s,"a")&&(r=s.a)),r=(0,A.Yq)(r),{ok:o,format:s.format||f,r:Math.min(255,Math.max(m.r,0)),g:Math.min(255,Math.max(m.g,0)),b:Math.min(255,Math.max(m.b,0)),a:r}}var n="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),t="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?"),e="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?"),i={CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+e),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function b(s){return Boolean(i.CSS_UNIT.exec(String(s)))}},5192:(k,S,_)=>{_.d(S,{C:()=>E});var h=_(8809),C=_(3487),A=_(7952),x=_(2567),E=function(){function n(t,e){var i;if(void 0===t&&(t=""),void 0===e&&(e={}),t instanceof n)return t;"number"==typeof t&&(t=(0,h.Yt)(t)),this.originalInput=t;var p=(0,A.uA)(t);this.originalInput=t,this.r=p.r,this.g=p.g,this.b=p.b,this.a=p.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(i=e.format)&&void 0!==i?i:p.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=p.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},n.prototype.getLuminance=function(){var t=this.toRgb(),b=t.r/255,s=t.g/255,m=t.b/255;return.2126*(b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(m<=.03928?m/12.92:Math.pow((m+.055)/1.055,2.4))},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(t){return this.a=(0,x.Yq)(t),this.roundA=Math.round(100*this.a)/100,this},n.prototype.toHsv=function(){var t=(0,h.py)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},n.prototype.toHsvString=function(){var t=(0,h.py)(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),p=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(i,"%, ").concat(p,"%)"):"hsva(".concat(e,", ").concat(i,"%, ").concat(p,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var t=(0,h.lC)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},n.prototype.toHslString=function(){var t=(0,h.lC)(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),p=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(i,"%, ").concat(p,"%)"):"hsla(".concat(e,", ").concat(i,"%, ").concat(p,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(t){return void 0===t&&(t=!1),(0,h.vq)(this.r,this.g,this.b,t)},n.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},n.prototype.toHex8=function(t){return void 0===t&&(t=!1),(0,h.s)(this.r,this.g,this.b,this.a,t)},n.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(i,")"):"rgba(".concat(t,", ").concat(e,", ").concat(i,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var t=function(e){return"".concat(Math.round(100*(0,x.sh)(e,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var t=function(e){return Math.round(100*(0,x.sh)(e,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+(0,h.vq)(this.r,this.g,this.b,!1),e=0,i=Object.entries(C.R);e<i.length;e++){var p=i[e];if(t===p[1])return p[0]}return!1},n.prototype.toString=function(t){var e=Boolean(t);t=t??this.format;var i=!1;return!e&&this.a<1&&this.a>=0&&(t.startsWith("hex")||"name"===t)?"name"===t&&0===this.a?this.toName():this.toRgbString():("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.l+=t/100,e.l=(0,x.V2)(e.l),new n(e)},n.prototype.brighten=function(t){void 0===t&&(t=10);var e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new n(e)},n.prototype.darken=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.l-=t/100,e.l=(0,x.V2)(e.l),new n(e)},n.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},n.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},n.prototype.desaturate=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.s-=t/100,e.s=(0,x.V2)(e.s),new n(e)},n.prototype.saturate=function(t){void 0===t&&(t=10);var e=this.toHsl();return e.s+=t/100,e.s=(0,x.V2)(e.s),new n(e)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(t){var e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new n(e)},n.prototype.mix=function(t,e){void 0===e&&(e=50);var i=this.toRgb(),p=new n(t).toRgb(),b=e/100;return new n({r:(p.r-i.r)*b+i.r,g:(p.g-i.g)*b+i.g,b:(p.b-i.b)*b+i.b,a:(p.a-i.a)*b+i.a})},n.prototype.analogous=function(t,e){void 0===t&&(t=6),void 0===e&&(e=30);var i=this.toHsl(),p=360/e,b=[this];for(i.h=(i.h-(p*t>>1)+720)%360;--t;)i.h=(i.h+p)%360,b.push(new n(i));return b},n.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new n(t)},n.prototype.monochromatic=function(t){void 0===t&&(t=6);for(var e=this.toHsv(),i=e.h,p=e.s,b=e.v,s=[],m=1/t;t--;)s.push(new n({h:i,s:p,v:b})),b=(b+m)%1;return s},n.prototype.splitcomplement=function(){var t=this.toHsl(),e=t.h;return[this,new n({h:(e+72)%360,s:t.s,l:t.l}),new n({h:(e+216)%360,s:t.s,l:t.l})]},n.prototype.onBackground=function(t){var e=this.toRgb(),i=new n(t).toRgb();return new n({r:i.r+(e.r-i.r)*e.a,g:i.g+(e.g-i.g)*e.a,b:i.b+(e.b-i.b)*e.a})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(t){for(var e=this.toHsl(),i=e.h,p=[this],b=360/t,s=1;s<t;s++)p.push(new n({h:(i+s*b)%360,s:e.s,l:e.l}));return p},n.prototype.equals=function(t){return this.toRgbString()===new n(t).toRgbString()},n}()},2567:(k,S,_)=>{function h(t,e){(function A(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var i=function x(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function C(t){return Math.min(1,Math.max(0,t))}function E(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function D(t){return t<=1?"".concat(100*Number(t),"%"):t}function n(t){return 1===t.length?"0"+t:String(t)}_.d(S,{FZ:()=>n,JX:()=>D,V2:()=>C,Yq:()=>E,sh:()=>h})},9718:(k,S,_)=>{_.d(S,{h:()=>C});var h=_(4004);function C(A){return(0,h.U)(()=>A)}},3414:(k,S,_)=>{_.d(S,{R_:()=>M,o2:()=>E});var h=_(8809),C=_(7952);const x=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];function E(u){return-1!==x.indexOf(u)}const m=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function r({r:u,g:d,b:y}){const l=(0,h.py)(u,d,y);return{h:360*l.h,s:l.s,v:l.v}}function c({r:u,g:d,b:y}){return`#${(0,h.vq)(u,d,y,!1)}`}function g(u,d,y){let l;return l=Math.round(u.h)>=60&&Math.round(u.h)<=240?y?Math.round(u.h)-2*d:Math.round(u.h)+2*d:y?Math.round(u.h)+2*d:Math.round(u.h)-2*d,l<0?l+=360:l>=360&&(l-=360),l}function o(u,d,y){if(0===u.h&&0===u.s)return u.s;let l;return l=y?u.s-.16*d:4===d?u.s+.16:u.s+.05*d,l>1&&(l=1),y&&5===d&&l>.1&&(l=.1),l<.06&&(l=.06),Number(l.toFixed(2))}function f(u,d,y){let l;return l=y?u.v+.05*d:u.v-.15*d,l>1&&(l=1),Number(l.toFixed(2))}function M(u,d={}){const y=[],l=(0,C.uA)(u);for(let v=5;v>0;v-=1){const R=r(l),w=c((0,C.uA)({h:g(R,v,!0),s:o(R,v,!0),v:f(R,v,!0)}));y.push(w)}y.push(c(l));for(let v=1;v<=4;v+=1){const R=r(l),w=c((0,C.uA)({h:g(R,v),s:o(R,v),v:f(R,v)}));y.push(w)}return"dark"===d.theme?m.map(({index:v,opacity:R})=>c(function a(u,d,y){const l=y/100;return{r:(d.r-u.r)*l+u.r,g:(d.g-u.g)*l+u.g,b:(d.b-u.b)*l+u.b}}((0,C.uA)(d.backgroundColor||"#141414"),(0,C.uA)(y[v]),100*R))):y}},2536:(k,S,_)=>{_.d(S,{jY:()=>r,oS:()=>c});var h=_(8944),C=_(7579),A=_(9300),x=_(9718),E=_(5192),D=_(3414),n=_(8932),t=_(3187);const e=new h.InjectionToken("nz-config"),i=`-ant-${Date.now()}-${Math.random()}`;function b(a,g){const o=function p(a,g){const o={},f=(d,y)=>{let l=d.clone();return l=y?.(l)||l,l.toRgbString()},M=(d,y)=>{const l=new E.C(d),v=(0,D.R_)(l.toRgbString());o[`${y}-color`]=f(l),o[`${y}-color-disabled`]=v[1],o[`${y}-color-hover`]=v[4],o[`${y}-color-active`]=v[7],o[`${y}-color-outline`]=l.clone().setAlpha(.2).toRgbString(),o[`${y}-color-deprecated-bg`]=v[1],o[`${y}-color-deprecated-border`]=v[3]};if(g.primaryColor){M(g.primaryColor,"primary");const d=new E.C(g.primaryColor),y=(0,D.R_)(d.toRgbString());y.forEach((v,R)=>{o[`primary-${R+1}`]=v}),o["primary-color-deprecated-l-35"]=f(d,v=>v.lighten(35)),o["primary-color-deprecated-l-20"]=f(d,v=>v.lighten(20)),o["primary-color-deprecated-t-20"]=f(d,v=>v.tint(20)),o["primary-color-deprecated-t-50"]=f(d,v=>v.tint(50)),o["primary-color-deprecated-f-12"]=f(d,v=>v.setAlpha(.12*v.getAlpha()));const l=new E.C(y[0]);o["primary-color-active-deprecated-f-30"]=f(l,v=>v.setAlpha(.3*v.getAlpha())),o["primary-color-active-deprecated-d-02"]=f(l,v=>v.darken(2))}return g.successColor&&M(g.successColor,"success"),g.warningColor&&M(g.warningColor,"warning"),g.errorColor&&M(g.errorColor,"error"),g.infoColor&&M(g.infoColor,"info"),`\n  :root {\n    ${Object.keys(o).map(d=>`--${a}-${d}: ${o[d]};`).join("\n")}\n  }\n  `.trim()}(a,g);(0,t.J8)()?(0,t.hq)(o,`${i}-dynamic-theme`):(0,n.ZK)("NzConfigService: SSR do not support dynamic theme with css variables.")}const s=function(a){return void 0!==a};let r=(()=>{class a{constructor(o){this.configUpdated$=new C.x,this.config=o||{},this.config.theme&&b(this.getConfig().prefixCls?.prefixCls||"ant",this.config.theme)}getConfig(){return this.config}getConfigForComponent(o){return this.config[o]}getConfigChangeEventForComponent(o){return this.configUpdated$.pipe((0,A.h)(f=>f===o),(0,x.h)(void 0))}set(o,f){this.config[o]={...this.config[o],...f},"theme"===o&&this.config.theme&&b(this.getConfig().prefixCls?.prefixCls||"ant",this.config.theme),this.configUpdated$.next(o)}}return a.\u0275fac=function(o){return new(o||a)(h.\u0275\u0275inject(e,8))},a.\u0275prov=h.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function c(){return function(g,o,f){const M=`$$__zorroConfigDecorator__${o}`;return Object.defineProperty(g,M,{configurable:!0,writable:!0,enumerable:!1}),{get(){const u=f?.get?f.get.bind(this)():this[M],d=(this.propertyAssignCounter?.[o]||0)>1,y=this.nzConfigService.getConfigForComponent(this._nzModuleName)?.[o];return d&&s(u)?u:s(y)?y:u},set(u){this.propertyAssignCounter=this.propertyAssignCounter||{},this.propertyAssignCounter[o]=(this.propertyAssignCounter[o]||0)+1,f?.set?f.set.bind(this)(u):this[M]=u},configurable:!0,enumerable:!0}}}}}]);