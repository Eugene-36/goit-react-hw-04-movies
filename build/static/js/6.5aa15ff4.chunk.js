(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[6],{36:function(t,e,r){"use strict";e.a=r.p+"static/media/withoutImg.b2592c11.jpg"},37:function(t,e,r){"use strict";var n=r(38),a=r.n(n),o="https://api.themoviedb.org/3/",i="da01c4e54a8d5b285bda18b1e0590cea",c={getRating:function(){var t="".concat(o,"trending/all/day?api_key=").concat(i);return a.a.get(t).then((function(t){return 0===t.data.length&&Promise.reject("Error"),t.data})).catch((function(t){return{error:t}}))},getDetails:function(t){var e="".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US");return a.a.get(e).then((function(t){return 0===t.data.length&&Promise.reject("Error"),t.data})).catch((function(t){return{error:t}}))},getCast:function(t){var e="".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US");return a.a.get(e).then((function(t){return 0===t.data.length&&Promise.reject("Error"),t.data})).catch((function(t){return{error:t}}))},getReviews:function(t){var e="".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1");return a.a.get(e).then((function(t){return 0===t.data.length&&Promise.reject("Error"),t.data})).catch((function(t){return{error:t}}))}};e.a=c},41:function(t,e,r){t.exports=r(73)},73:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(A){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n=h;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw o;return C()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",d={};function m(){}function g(){}function y(){}var j={};j[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==r&&n.call(w,o)&&(j=w);var x=y.prototype=m.prototype=Object.create(j);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new k(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(x),s(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},74:function(t,e,r){},75:function(t,e,r){t.exports={imageCast:"Cast_imageCast__N24CR"}},76:function(t,e,r){},92:function(t,e,r){"use strict";r.r(e);var n=r(41),a=r.n(n);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){c(o,n,a,i,s,"next",t)}function s(t){c(o,n,a,i,s,"throw",t)}i(void 0)}))}}var u=r(16),l=r(17),h=r(19),f=r(18),p=r(0),v=r(1),d=r(7),m=r(43),g=r(36),y=r(10),j=r(74),b=r.n(j),w=r(2),x=function(t){var e=t.title,r=t.overview,n=t.vote_average,a=t.genres,o=t.backdrop_path,i=t.onClick,c=t.propsik,s=o?"".concat("https://image.tmdb.org/t/p/w500").concat(o):g.a;return Object(w.jsxs)("div",{className:b.a.MovieDetailsPage,children:[Object(w.jsx)("button",{className:b.a.btnDetails,type:"button",onClick:i,children:"Go back"}),Object(w.jsxs)("div",{className:b.a.wrappler,children:[Object(w.jsx)("img",{className:b.a.images,src:s,alt:e}),Object(w.jsxs)("div",{className:b.a.descr,children:[Object(w.jsx)("h1",{children:e}),Object(w.jsxs)("p",{children:["User score: ",n]}),Object(w.jsx)("h2",{children:"Overviev"}),Object(w.jsx)("p",{children:r}),Object(w.jsx)("h3",{children:"Genres"}),Object(w.jsx)("p",{children:a.map((function(t){var e=t.name;return"".concat(e," ")}))})]})]}),Object(w.jsxs)("div",{className:b.a.Additional,children:[Object(w.jsx)("h3",{children:"Additional information"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{className:b.a.listItem,children:Object(w.jsx)(y.c,{to:{pathname:"".concat(c.match.url,"/cast"),state:Object(m.a)({},c.location)},className:b.a.listItem,children:"Cast"})}),Object(w.jsx)("li",{className:b.a.listItem,children:Object(w.jsx)(y.c,{to:{pathname:"".concat(c.match.url,"/reviews"),state:Object(m.a)({},c.location)},className:b.a.listItem,children:"Reviews"})})]})]})]})},O=r(37),k=r(75),_=r.n(k),L=function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={cast:[]},t}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var t=s(a.a.mark((function t(){var e,r=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.match.params.movieId,O.a.getCast(e).then((function(t){r.setState({cast:t.cast})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.cast;return t.length>0?Object(w.jsx)("ul",{className:_.a.Cast,children:t.map((function(t){var e=t.name,r=t.character,n=t.profile_path,a=t.id,o=n?"".concat("https://image.tmdb.org/t/p/original").concat(n):g.a;return Object(w.jsxs)("li",{className:_.a.item,children:[Object(w.jsx)("img",{className:_.a.imageCast,src:o,alt:e}),Object(w.jsx)("h2",{children:e}),Object(w.jsx)("p",{children:r})]},a)}))}):Object(w.jsx)("h2",{children:"\u043d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"})}}]),r}(p.Component),E=r(76),N=r.n(E),S=function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={reviews:[]},t}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var t=s(a.a.mark((function t(){var e,r=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.match.params.movieId,O.a.getReviews(e).then((function(t){r.setState({reviews:t.results})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.reviews;return t.length>0?Object(w.jsx)("ul",{className:N.a.reviews,children:t.map((function(t){var e=t.author,r=t.content,n=t.id;return Object(w.jsxs)("li",{className:N.a.item,children:[Object(w.jsx)("h2",{children:e}),Object(w.jsx)("p",{children:r})]},n)}))}):Object(w.jsx)("h2",{children:"\u043d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"})}}]),r}(p.Component),C=function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={backdrop_path:null,genres:[],id:null,overview:null,title:null,vote_average:null},t.handleButton=function(){var e,r=t.props,n=r.location;r.history.push((null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.from)||d.a.home)},t}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var t=s(a.a.mark((function t(){var e,r=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.match.params.movieId,O.a.getDetails(e).then((function(t){var e=t.backdrop_path,n=t.id,a=t.overview,o=t.title,c=t.vote_average,s=t.genres;r.setState({backdrop_path:e,id:n,overview:a,title:o,vote_average:c,genres:i(s)})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.backdrop_path,r=t.genres,n=t.overview,a=t.title,o=t.vote_average;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x,{title:a,overview:n,vote_average:o,genres:r,backdrop_path:e,onClick:this.handleButton,propsik:this.props}),Object(w.jsxs)(v.c,{children:[Object(w.jsx)(v.a,{path:"".concat(this.props.match.path,"/cast"),component:L}),Object(w.jsx)(v.a,{path:"".concat(this.props.match.path,"/reviews"),component:S})]})]})}}]),r}(p.Component);e.default=C}}]);
//# sourceMappingURL=6.5aa15ff4.chunk.js.map