(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[2],{35:function(t,e,n){"use strict";n(0);var r=n(2);e.a=function(t){var e=t.movie;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:e.map((function(t){t.backdrop_path;var e=t.id,n=t.title;t.original_title;return Object(r.jsx)("li",{children:n},e)}))})})}},67:function(t,e,n){"use strict";var r=n(68),o=n(11);function c(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function a(t){return Array.isArray(t)?t.sort():"object"===typeof t?a(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=o({arrayFormat:"none"},e)),r=Object.create(null);return"string"!==typeof t?r:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),c=e.length>0?e.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),n(decodeURIComponent(o),c,r)})),Object.keys(r).sort().reduce((function(t,e){var n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=a(n):t[e]=n,t}),Object.create(null))):r},e.stringify=function(t,e){var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[c(e,t),"[",r,"]"].join(""):[c(e,t),"[",c(r,t),"]=",c(n,t)].join("")};case"bracket":return function(e,n){return null===n?c(e,t):[c(e,t),"[]=",c(n,t)].join("")};default:return function(e,n){return null===n?c(e,t):[c(e,t),"=",c(n,t)].join("")}}}(e=o({encode:!0,strict:!0,arrayFormat:"none"},e));return t?Object.keys(t).sort().map((function(r){var o=t[r];if(void 0===o)return"";if(null===o)return c(r,e);if(Array.isArray(o)){var a=[];return o.slice().forEach((function(t){void 0!==t&&a.push(n(r,t,a.length))})),a.join("&")}return c(r,e)+"="+c(o,e)})).filter((function(t){return t.length>0})).join("&"):""}},68:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}},69:function(t,e,n){"use strict";n.r(e);var r=n(47),o=n(15),c=n(16),a=n(18),i=n(17),u=n(0),s=n(2),l=function(t){var e=t.onClick;return Object(s.jsx)("button",{type:"button",onClick:function(){return e()},children:"Load more"})},p=n(35),f=n(36),h=n.n(f),d=n(37),b=n(38),v=n.n(b);v.a.defaults.baseURL="https://api.themoviedb.org/3";var j="0cd28c5ead78fcbe7aeeb8683bb2b504";function m(){return(m=Object(d.a)(h.a.mark((function t(e,n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/search/movie?query=".concat(e,"&page=").concat(n,"&api_key=").concat(j));case 2:return r=t.sent,console.log(r),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t,e){return m.apply(this,arguments)},g=n(67),O=n.n(g),x=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={movies:[],query:"",page:1,total:null,error:""},t.FetchSerch=function(){var e=t.state,n=e.query,o=e.page;y.fetchSearch(n,o).then((function(e){0===e.results.length?t.setState({movies:[]}):(t.setState((function(t){return{movies:[].concat(Object(r.a)(t.movies),Object(r.a)(e.results)),total:e.total_pages}})),t.props.location.search=O.a.stringify({q:n,p:o}),t.props.history.push({pathname:t.props.location.pathname,search:t.props.location.search}))})).catch((function(e){return t.setState({error:e}),console.log(e)}))},t.submitQuery=function(e){e.preventDefault();var n=e.target.elements.query.value;n===t.state.query?t.fetchMovie():t.setState({query:n,page:1,total:null,movies:[]})},t.handleBtn=function(){t.setState((function(t){return{page:t.page+1}}))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=O.a.parse(this.props.location.search);t.q&&this.setState({page:Number(t.p),query:t.q})}},{key:"componentDidUpdate",value:function(t,e){this.state.query===e.query&&this.state.page===e.page||this.FetchSerch(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var t=this.state,e=t.movies,n=t.total,r=t.page;return console.log(e),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("form",{onSubmit:this.submitQuery,children:[Object(s.jsx)("label",{children:Object(s.jsx)("input",{type:"text",name:"query"})}),Object(s.jsx)("button",{type:"submit",children:"Search"})]}),e.length>0?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p.a,{movie:e}),r<=n&&Object(s.jsx)(l,{onClick:this.handleBtn})]}):Object(s.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"})]})}}]),n}(u.Component);e.default=x}}]);
//# sourceMappingURL=MoviesPage.505e9bf5.chunk.js.map