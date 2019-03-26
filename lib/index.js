!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("SAT-ts",[],e):"object"==typeof exports?exports["SAT-ts"]=e():t["SAT-ts"]=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=14)}([function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(16),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(0),n(1)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(e),u=r(n),i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,o.default)(this,t),this.x=e,this.y=n}return(0,u.default)(t,[{key:"copy",value:function(t){return this.x=t.x,this.y=t.y,this}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"perp",value:function(){var t=this.x;return this.x=this.y,this.y=t,this}},{key:"rotate",value:function(t){var e=this.x,n=this.y;return this.x=e*Math.cos(t)-n*Math.sin(t),this.y=e*Math.sin(t)+n*Math.cos(t),this}},{key:"reverse",value:function(){return this.x=-this.x,this.y=-this.y,this}},{key:"normalize",value:function(){var t=this.len();return t>0&&(this.x=this.x/t,this.y=this.y/t),this}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"scale",value:function(t,e){return this.x*=t,this.y*=e||t,this}},{key:"project",value:function(t){var e=this.dot(t)/t.len2();return this.x=e*t.x,this.y=e*t.y,this}},{key:"projectN",value:function(t){var e=this.dot(t);return this.x=e*t.x,this.y=e*t.y,this}},{key:"reflect",value:function(t){var e=this.x,n=this.y;return this.project(t).scale(2),this.x-=e,this.y-=n,this}},{key:"reflectN",value:function(t){var e=this.x,n=this.y;return this.projectN(t).scale(2),this.x-=e,this.y-=n,this}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"len2",value:function(){return this.dot(this)}},{key:"len",value:function(){return Math.sqrt(this.len2())}}]),t}();t.default=i})},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(2),n(15),n(8),n(5)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.Box=t.Polygon=t.Circle=t.Vector=void 0;var i=u(e),s=u(n),a=u(r),l=u(o);t.Vector=i.default,t.Circle=s.default,t.Polygon=a.default,t.Box=l.default})},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(0),n(1),n(2),n(8)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var i=u(e),s=u(n),a=u(r),l=u(o),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new a.default,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,i.default)(this,t),this.pos=e,this.w=n,this.h=r}return(0,s.default)(t,[{key:"toPolygon",value:function(){var t=this.pos,e=this.w,n=this.h;return new l.default(new a.default(t.x,t.y),[new a.default,new a.default(e,0),new a.default(e,n),new a.default(0,n)])}}]),t}();t.default=c})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(0),n(1),n(4)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var u=o(e),i=o(n),s=function(){function t(){(0,u.default)(this,t),this.a=null,this.b=null,this.overlapN=new r.Vector,this.overlapV=new r.Vector,this.clear()}return(0,i.default)(t,[{key:"clear",value:function(){this.aInB=!0,this.bInA=!0,this.overlap=Number.MAX_VALUE}}]),t}();t.default=s})},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(0),n(1),n(2),n(5)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var i=u(e),s=u(n),a=u(r),l=u(o),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new a.default,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(0,i.default)(this,t),this.pos=e,this.angle=0,this.offset=new a.default,this.setPoints(n)}return(0,s.default)(t,[{key:"setPoints",value:function(t){if(!this.points||this.points.length!==t.length){var e=void 0,n=this.calcPoints=[],r=this.edges=[],o=this.normals=[];for(e=0;e<t.length;e++)n.push(new a.default),r.push(new a.default),o.push(new a.default)}return this.points=t,this._recalc(),this}},{key:"_recalc",value:function(){var t=this.calcPoints,e=this.edges,n=this.normals,r=this.points,o=this.offset,u=this.angle,i=r.length,s=void 0;for(s=0;s<i;s++){var a=t[s].copy(r[s]);a.x+=o.x,a.y+=o.y,0!==u&&a.rotate(u)}for(s=0;s<i;s++){var l=t[s],c=s<i-1?t[s+1]:t[0],f=e[s].copy(c).sub(l);n[s].copy(f).perp().normalize()}return this}},{key:"setAngle",value:function(t){return this.angle=t,this._recalc(),this}},{key:"setOffset",value:function(t){return this.offset=t,this._recalc(),this}},{key:"rotate",value:function(t){for(var e=this.points,n=e.length,r=0;r<n;r++)e[r].rotate(t);return this._recalc(),this}},{key:"translate",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.points,r=n.length,o=0;o<r;o++)n[o].x+=t,n[o].y+=e;return this._recalc(),this}},{key:"getAABB",value:function(){for(var t=this.calcPoints,e=t.length,n=t[0].x,r=t[0].y,o=n,u=r,i=1;i<e;i++){var s=t[i];s.x<n?n=s.x:s.x>o?o=s.x:s.y<r?r=s.y:s.y>u&&(u=s.y)}return new l.default(this.pos.clone().add(new a.default(n,r)),o-n,u-r).toPolygon()}},{key:"getCentroid",value:function(){for(var t=this.calcPoints,e=t.length,n=0,r=0,o=0,u=0;u<e;u++){var i=t[u],s=u===e-1?t[0]:t[u+1],l=i.x*s.y-i.y*s.x;n+=(i.x+s.x)*l,r+=(i.y+s.y)*l,o+=l}return o*=3,n/=o,r/=o,new a.default(n,r)}}]),t}();t.default=c})},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(19),o=n(25),u=n(27),i=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(4),n(7)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n){"use strict";function r(t,e,n){for(var r=Number.MAX_VALUE,o=-Number.MAX_VALUE,u=t.length,i=0;i<u;i++){var s=t[i].dot(e);s<r&&(r=s),s>o&&(o=s)}n[0]=r,n[1]=o}function o(t,e,n,o,u,i){var s=y.pop(),a=y.pop(),l=h.pop().copy(e).sub(t),c=l.dot(u);if(r(n,u,s),r(o,u,a),a[0]+=c,a[1]+=c,s[0]>a[1]||a[0]>s[1])return h.push(l),y.push(s),y.push(a),!0;if(i){var f=0;if(s[0]<a[0])if(i.aInB=!1,s[1]<a[1])f=s[1]-a[0],i.bInA=!1;else{var p=s[1]-a[0],v=a[1]-s[0];f=p<v?p:-v}else if(i.bInA=!1,s[1]>a[1])f=s[0]-a[1],i.aInB=!1;else{var d=s[1]-a[0],x=a[1]-s[0];f=d<x?d:-x}var g=Math.abs(f);g<i.overlap&&(i.overlap=g,i.overlapN.copy(u),f<0&&i.overlapN.reverse())}return h.push(l),y.push(s),y.push(a),!1}function u(t,e){var n=t.len2(),r=e.dot(t);return r<0?g:r>n?_:b}function i(t,e){var n=h.pop().copy(t).sub(e.pos),r=e.r*e.r,o=n.len2();return h.push(n),o<=r}function s(t,e,n){for(var r=t.calcPoints,u=r.length,i=e.calcPoints,s=i.length,a=0;a<u;a++)if(o(t.pos,e.pos,r,i,t.normals[a],n))return!1;for(var l=0;l<s;l++)if(o(t.pos,e.pos,r,i,e.normals[l],n))return!1;return n&&(n.a=t,n.b=e,n.overlapV.copy(n.overlapN).scale(n.overlap)),!0}function a(t,e){x.pos.copy(t),d.clear();var n=s(x,e,d);return n&&(n=d.aInB),n}function l(t,e,n){var r=h.pop().copy(e.pos).sub(t.pos),o=t.r+e.r,u=o*o,i=r.len2();if(i>u)return h.push(r),!1;if(n){var s=Math.sqrt(i);n.a=t,n.b=e,n.overlap=o-s,n.overlapN.copy(r.normalize()),n.overlapV.copy(r).scale(n.overlap),n.aInB=t.r<=e.r&&s<=e.r-t.r,n.bInA=e.r<=t.r&&s<=t.r-e.r}return h.push(r),!0}function c(t,e,n){for(var r=h.pop().copy(e.pos).sub(t.pos),o=e.r,i=o*o,s=t.calcPoints,a=s.length,l=h.pop(),c=h.pop(),f=0;f<a;f++){var p=f===a-1?0:f+1,v=0===f?a-1:f-1,y=0,d=null;l.copy(t.edges[f]),c.copy(r).sub(s[f]),n&&c.len2()>i&&(n.aInB=!1);var x=u(l,c);if(x===g){l.copy(t.edges[v]);var b=h.pop().copy(r).sub(s[v]);if((x=u(l,b))===_){var P=c.len();if(P>o)return h.push(r),h.push(l),h.push(c),h.push(b),!1;n&&(n.bInA=!1,d=c.normalize(),y=o-P)}h.push(b)}else if(x===_){if(l.copy(t.edges[p]),c.copy(r).sub(s[p]),(x=u(l,c))===g){var P=c.len();if(P>o)return h.push(r),h.push(l),h.push(c),!1;n&&(n.bInA=!1,d=c.normalize(),y=o-P)}}else{var w=l.perp().normalize(),P=c.dot(w),M=Math.abs(P);if(P>0&&M>o)return h.push(r),h.push(w),h.push(c),!1;n&&(d=w,y=o-P,(P>=0||y<2*o)&&(n.bInA=!1))}d&&n&&Math.abs(y)<Math.abs(n.overlap)&&(n.overlap=y,n.overlapN.copy(d))}return n&&(n.a=t,n.b=e,n.overlapV.copy(n.overlapN).scale(n.overlap)),h.push(r),h.push(l),h.push(c),!0}function f(t,e,n){var r=c(e,t,n);if(r&&n){var o=n.a,u=n.aInB;n.overlapN.reverse(),n.overlapV.reverse(),n.a=n.b,n.b=o,n.aInB=n.bInA,n.bInA=u}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.isSeparatingAxis=o,t.pointInCircle=i,t.testPolygonPolygon=s,t.pointInPolygon=a,t.testCircleCircle=l,t.testPolygonCircle=c,t.testCirclePolygon=f;for(var p=function(t){return t&&t.__esModule?t:{default:t}}(n),h=[],v=0;v<10;v++)h.push(new e.Vector);for(var y=[],v=0;v<5;v++)y.push([]);var d=new p.default,x=new e.Box(new e.Vector,1e-6,1e-6).toPolygon(),g=-1,b=0,_=1})},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(4),n(7),n(13)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.testCirclePolygon=t.testPolygonPolygon=t.testPolygonCircle=t.testCircleCircle=t.Response=t.Polygon=t.Circle=t.Vector=t.Box=void 0;var o=function(t){return t&&t.__esModule?t:{default:t}}(n);t.Box=e.Box,t.Vector=e.Vector,t.Circle=e.Circle,t.Polygon=e.Polygon,t.Response=o.default,t.testCircleCircle=r.testCircleCircle,t.testPolygonCircle=r.testPolygonCircle,t.testPolygonPolygon=r.testPolygonPolygon,t.testCirclePolygon=r.testCirclePolygon})},function(t,e,n){var r,o,u;!function(i,s){o=[e,n(0),n(1),n(2),n(5)],r=s,void 0!==(u="function"==typeof r?r.apply(e,o):r)&&(t.exports=u)}(0,function(t,e,n,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var i=u(e),s=u(n),a=u(r),l=u(o),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new a.default,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,i.default)(this,t),this.pos=e,this.r=n}return(0,s.default)(t,[{key:"getAABB",value:function(){var t=this.r,e=this.pos.clone().sub(new a.default(t,t));return new l.default(e,2*t,2*t).toPolygon()}}]),t}();t.default=c})},function(t,e,n){t.exports={default:n(17),__esModule:!0}},function(t,e,n){n(28);var r=n(9).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(6),o=n(11).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){var r=n(11),o=n(9),u=n(20),i=n(24),s=n(23),a=function(t,e,n){var l,c,f,p=t&a.F,h=t&a.G,v=t&a.S,y=t&a.P,d=t&a.B,x=t&a.W,g=h?o:o[e]||(o[e]={}),b=g.prototype,_=h?r:v?r[e]:(r[e]||{}).prototype;h&&(n=e);for(l in n)(c=!p&&_&&void 0!==_[l])&&s(g,l)||(f=c?_[l]:n[l],g[l]=h&&"function"!=typeof _[l]?n[l]:d&&c?u(f,r):x&&_[l]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):y&&"function"==typeof f?u(Function.call,f):f,y&&((g.virtual||(g.virtual={}))[l]=f,t&a.R&&b&&!b[l]&&i(b,l,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(12),o=n(26);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(3)&&!n(10)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(22);r(r.S+r.F*!n(3),"Object",{defineProperty:n(12).f})}])});
//# sourceMappingURL=index.js.map