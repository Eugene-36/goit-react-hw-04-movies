(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{19:function(e,t,a){e.exports={App:"App_App__1l2ZA","App-logo":"App_App-logo__623g2","App-logo-spin":"App_App-logo-spin__Ui-Wu","App-header":"App_App-header__1qjHO","App-link":"App_App-link__3gDHy"}},20:function(e,t,a){e.exports={gallery__card:"ImageGalleryItem_gallery__card__w-D52"}},21:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__1XJUt"}},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),c=a.n(o),l=(a(27),a(10)),s=a(3),i=a(4),u=a(6),h=a(5),p=a(0),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",value:this.state.query,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),g=a(19),m=a.n(g),j=function(e){var t=e.onClick;return Object(p.jsx)("button",{onClick:t,type:"button",children:"Load more"})},b=a(20),f=a.n(b),y=function(e){var t=e.url,a=e.alt,n=e.openModal,r=e.modalImage;return Object(p.jsx)("li",{onClick:function(){return n(r)},className:f.a.gallery__card,children:Object(p.jsx)("img",{src:t,alt:a})})},O=a(9),v=a.n(O),_=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){"Escape"===t.code&&e.props.onClose()},e.closeModalClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:v.a.overlay,onClick:this.closeModalClick,children:Object(p.jsx)("div",{className:v.a.modal,children:this.props.children})}),_)}}]),a}(n.Component),S=a(21),k=a.n(S),A=a(49),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,modalImage:"",url:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){e.toggleModal(),e.setState({modalImage:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images,a=this.state,n=a.showModal,r=a.modalImage;return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(x,{onClose:this.toggleModal,children:Object(p.jsx)("img",{src:r,alt:"#"})}),Object(p.jsx)("ul",{className:k.a.gallery,children:t.map((function(t){return Object(p.jsx)(y,{url:t.webformatURL,alt:t.tags,modalImage:t.largeImageURL,openModal:e.openModal},Object(A.a)())}))})]})}}]),a}(n.Component),M=a(22),w=a.n(M),I="19817444-e2944238b0133b6bab479e2af",N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(I,"&image_type=photo&orientation=horizontal&per_page=12");return w.a.get(a)},L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],isLoading:!1,error:null,currentPage:1,seachQuery:""},e.onChangeQuery=function(t){e.setState({seachQuery:t,isLoading:!0}),N(t).then((function(t){e.setState({images:t.data.hits})})).catch((function(t){return e.setState({error:!0})})).finally((function(){return e.setState({isLoading:!1})}))},e.fetchImg=function(){var t=e.state,a=t.seachQuery,n=t.currentPage;N(a,n+1).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t.data.hits)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:!0})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.seachQuery,r=a.currentPage;t.searchQuery!==this.state.searchQuery&&this.fetchImg(n,r)}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=t.length>11&&!a;return Object(p.jsxs)("div",{className:m.a.container,children:[Object(p.jsx)(d,{onSubmit:this.onChangeQuery}),n&&Object(p.jsx)("h1",{children:"No image found"}),!a&&Object(p.jsx)(C,{images:t}),r&&Object(p.jsx)(j,{onClick:this.fetchImg})]})}}]),a}(n.Component);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={overlay:"Modal_overlay__249Fq",modal:"Modal_modal__XXBQr"}}},[[47,1,2]]]);
//# sourceMappingURL=main.a06906ae.chunk.js.map