(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[1],{36:function(e,t,a){"use strict";t.a=a.p+"static/media/withoutImg.b2592c11.jpg"},37:function(e,t,a){"use strict";var n=a(38),r=a.n(n),c="https://api.themoviedb.org/3/",i="da01c4e54a8d5b285bda18b1e0590cea",o={getRating:function(){var e="".concat(c,"trending/all/day?api_key=").concat(i);return r.a.get(e).then((function(e){return 0===e.data.length&&Promise.reject("Error"),e.data})).catch((function(e){return{error:e}}))},getDetails:function(e){var t="".concat(c,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US");return r.a.get(t).then((function(e){return 0===e.data.length&&Promise.reject("Error"),e.data})).catch((function(e){return{error:e}}))},getCast:function(e){var t="".concat(c,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US");return r.a.get(t).then((function(e){return 0===e.data.length&&Promise.reject("Error"),e.data})).catch((function(e){return{error:e}}))},getReviews:function(e){var t="".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1");return r.a.get(t).then((function(e){return 0===e.data.length&&Promise.reject("Error"),e.data})).catch((function(e){return{error:e}}))}};t.a=o},39:function(e,t,a){e.exports={picture:"MoviePreview_picture__2MW_Z",container:"MoviePreview_container__3sTq8",text:"MoviePreview_text__2P4Ly"}},40:function(e,t,a){e.exports={noStyle:"MovieList_noStyle__1GESe",flex:"MovieList_flex__dDd4_"}},42:function(e,t,a){"use strict";a(0);var n=a(10),r=a(36),c=a(39),i=a.n(c),o=a(2),s=function(e){var t=e.backdrop_path,a=e.title,n=t?"".concat("https://image.tmdb.org/t/p/original").concat(t):r.a;return Object(o.jsxs)("div",{className:i.a.MoviePreview_item,children:[Object(o.jsx)("div",{className:i.a.tumb,children:Object(o.jsx)("img",{className:i.a.picture,src:n,alt:a,width:"300",height:"auto"})}),Object(o.jsx)("div",{className:i.a.container,children:Object(o.jsxs)("h2",{className:i.a.text,children:[" ",a]})})]})},u=a(40),l=a.n(u);t.a=function(e){var t=e.movie;return Object(o.jsx)("div",{className:l.a.wrapper,children:Object(o.jsx)("ul",{className:l.a.flex,children:t.map((function(e){var t=e.backdrop_path,a=e.id,r=e.title;return Object(o.jsx)("li",{className:l.a.noStyle,children:Object(o.jsx)(n.b,{className:l.a.noStyle,to:{pathname:"/movies/".concat(a)},children:Object(o.jsx)(s,{title:r,backdrop_path:t})})},a)}))})})}},69:function(e,t,a){e.exports={head:"HomePage_head__3AGuJ"}},74:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(17),c=a(19),i=a(18),o=a(0),s=a(37),u=a(42),l=a(69),h=a.n(l),d=a(2),v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={popularMovie:[],error:"Somthing went wrong...."},e.fetchMovie=function(){s.a.getRating().then((function(t){var a=t.results.filter((function(e){return"movie"===e.media_type}));e.setState({popularMovie:a})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"render",value:function(){var e=this.state.popularMovie;return Object(d.jsx)("div",{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:h.a.head,children:"Trending today"}),Object(d.jsx)(u.a,{movie:e})]})})}}]),a}(o.Component);t.default=v}}]);
//# sourceMappingURL=HomePage.ae682ac5.chunk.js.map