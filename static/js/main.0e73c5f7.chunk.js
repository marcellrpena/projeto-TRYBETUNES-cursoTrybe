(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(22),s=a.n(r),i=(a(31),a(4)),o=a(5),l=a(7),u=a(6),d=a(13),j=a(3),h=a(2),b=a.n(h),m=a(9),p=a(18),O=a.p+"static/media/logo2.2d1ccfd5.png",f="user",x=function(e){return localStorage.setItem(f,JSON.stringify(e))},v=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},g=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(f));null===t&&(t={}),v(t)(e)}))},k=function(e){return new Promise((function(t){var a={name:"",email:"",image:O,description:""};x(Object(p.a)(Object(p.a)({},a),e)),v("OK")(t)}))},N=(a(33),a.p+"static/media/logo5.8d2f6b62.png"),y=a(0),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).mounted=!1,e.onInputChange=function(t){var a=t.target;e.setState({userName:a.value,minLength:a.value.length<3})},e.onButtonClick=function(){var t=Object(m.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loading:!0}),n=e.state.userName,t.next=5,k({name:n});case 5:e.mounted&&e.setState({loading:!1,loged:!0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={userName:"",minLength:!0,loading:!1,loged:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.minLength,a=e.userName,n=e.loading,c=e.loged;return Object(y.jsx)("div",{"data-testid":"page-login",children:n?Object(y.jsx)("p",{children:"Carregando..."}):Object(y.jsxs)("div",{className:"page-body",children:[Object(y.jsx)("img",{className:"image-position",src:N,alt:"Logomarca Music Tunes"}),Object(y.jsxs)("form",{className:"form-login",children:[c&&Object(y.jsx)(j.a,{to:"/search"}),Object(y.jsxs)("label",{htmlFor:"login",className:"form-floating mb-3",children:[Object(y.jsx)("input",{className:"form-control input-name","data-testid":"login-name-input",type:"text",id:"login",name:"userName",placeholder:"Name",value:a,onChange:this.onInputChange}),Object(y.jsxs)("label",{htmlFor:"login",children:["Digite seu Nome",Object(y.jsx)("input",{className:"blank"})]})]}),Object(y.jsx)("button",{type:"submit",className:"btn-login btn btn-outline-success",name:"entrar",disabled:t,"data-testid":"login-submit-button",onClick:this.onButtonClick,children:"Entrar"})]})]})})}}]),a}(c.a.Component),C=S,w=(a(43),a.p+"static/media/logo4.5713ad7b.png"),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={userName:"",loading:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setState({userName:t.name,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.userName,a=e.loading,n=this.props.actualPage;return Object(y.jsx)("section",{children:a?Object(y.jsx)("p",{children:"Carregando..."}):Object(y.jsxs)("div",{className:"header-elements",children:[Object(y.jsxs)("header",{className:"header-main","data-testid":"header-component",children:[Object(y.jsx)("div",{className:"image-logo",children:Object(y.jsx)("img",{src:w,alt:"logomarca-Music-tunes"})}),Object(y.jsx)("div",{className:"user-name",children:Object(y.jsx)("h3",{"data-testid":"header-user-name",children:t})})]}),Object(y.jsxs)("nav",{className:"navbar",children:[Object(y.jsx)("div",{className:"max-width",children:Object(y.jsx)(d.b,{className:"decoration","data-testid":"link-to-search",to:"/search",children:Object(y.jsx)("h1",{className:"pageSearch"===n?"pageSearch":"links",children:"Pesquisa"})})}),Object(y.jsx)("div",{className:"max-width",children:Object(y.jsx)(d.b,{className:"decoration","data-testid":"link-to-favorites",to:"/favorites",children:Object(y.jsx)("h1",{className:"pageFavorite"===n?"pageFavorite":"links",children:"Favoritas"})})}),Object(y.jsx)("div",{className:"max-width",children:Object(y.jsx)(d.b,{className:"decoration","data-testid":"link-to-profile",to:"/profile",children:Object(y.jsx)("h1",{className:"pagePerfil"===n?"pageSearch":"links",children:"Perfil"})})})]})]})})}}]),a}(c.a.Component),F=I,L=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,n,c,r,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,s=r.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=L,D=(a(44),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.lastSearch,a=e.albumList;return Object(y.jsx)("section",{children:Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(t)}),Object(y.jsx)("section",{className:"albuns-card",children:a.map((function(e){return Object(y.jsx)(d.b,{className:"text-style","data-testid":"link-to-album-".concat(e.collectionId),to:"/album/".concat(e.collectionId),children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("img",{className:"image-size",src:e.artworkUrl100,alt:e.collectionName}),Object(y.jsx)("h4",{children:e.collectionName}),Object(y.jsx)("h6",{children:e.artistName})]})},e.collectionId)}))})]})})}}]),a}(c.a.Component)),M=D,A=(a(45),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onInputChange=function(t){var a=t.target;e.setState({searchArtist:a.value,minLength:a.value.length<2})},e.onButtonClick=function(t){t.preventDefault(),e.setState({loading:!0}),e.setState(function(){var t=Object(m.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(a.searchArtist);case 2:n=t.sent,e.setState({lastSearch:a.searchArtist,searchArtist:"",searchList:n,loading:!1,minLength:!0});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.state={searchArtist:"",minLength:!0,searchList:[],loading:!1,lastSearch:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.minLength,a=e.searchArtist,n=e.searchList,c=e.loading,r=e.lastSearch;return Object(y.jsxs)("div",{className:"page-body-search","data-testid":"page-search",children:[Object(y.jsx)(F,{actualPage:"pageSearch"}),Object(y.jsxs)("main",{children:[Object(y.jsxs)("form",{className:"form-search",children:[Object(y.jsx)("label",{htmlFor:"search",children:Object(y.jsx)("input",{"data-testid":"search-artist-input",className:"shadow-search form-control",id:"search",type:"text",placeholder:"Nome do Artista",value:a,onChange:this.onInputChange})}),Object(y.jsx)("button",{type:"submit",className:"btn-search btn btn-danger",name:"search",disabled:t,"data-testid":"search-artist-button",onClick:this.onButtonClick,children:"Pesquisar"})]}),c?Object(y.jsx)("p",{children:"Carregando..."}):Object(y.jsx)("div",{children:""!==r&&Object(y.jsx)("div",{children:n.length>0?Object(y.jsx)(M,{albumList:n,lastSearch:r}):Object(y.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"})})})]})]})}}]),a}(c.a.Component)),U=A,J=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=J,T=a(26),B="favorite_songs";JSON.parse(localStorage.getItem(B))||localStorage.setItem(B,JSON.stringify([]));var q=function(){return JSON.parse(localStorage.getItem(B))},K=function(e){return localStorage.setItem(B,JSON.stringify(e))},R=function(e){return function(t){setTimeout((function(){t(e)}),500)}},z=function(){return new Promise((function(e){var t=q();R(t)(e)}))},W=function(e){return new Promise((function(t){if(e){var a=q();K([].concat(Object(T.a)(a),[e]))}R("OK")(t)}))},Y=function(e){return new Promise((function(t){var a=q();K(a.filter((function(t){return t.trackId!==e.trackId}))),R("OK")(t)}))},_=(a(46),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onCheckFavorite=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a.target,e.setState({loading:!0,check:c.checked}),!c.checked){t.next=7;break}return t.next=5,W(n);case 5:t.next=9;break;case 7:return t.next=9,Y(n);case 9:e.setState({loading:!1});case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={loading:!1,check:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.album,this.setState({loading:!0}),e.next=4,z();case 4:a=e.sent,this.setState({check:a.length>0&&a.some((function(e){return e.trackId===t.trackId})),loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.check,c=this.props.album;return Object(y.jsx)("div",{children:a?Object(y.jsx)("p",{children:"Carregando..."}):Object(y.jsxs)("div",{className:"music-style",children:[Object(y.jsx)("h4",{className:"music-name",children:c.trackName}),Object(y.jsxs)("audio",{"data-testid":"audio-component",src:c.previewUrl,controls:!0,children:[Object(y.jsx)("track",{kind:"captions"}),'O seu navegador n\xe3o suporta o elemento{" "}\n                  '.concat(Object(y.jsx)("code",{children:"audio"}),".")]}),Object(y.jsxs)("label",{htmlFor:"favorite",children:["Favorita",Object(y.jsx)("input",{type:"checkbox",id:"favorite","data-testid":"checkbox-music-".concat(c.trackId),checked:n,onChange:function(t){return e.onCheckFavorite(t,c)}})]})]})})}}]),a}(c.a.Component)),G=_,H=(a(47),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={albumContent:[],loadingMusic:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,e.next=3,E(t.id);case 3:a=e.sent,this.setState({albumContent:a,loadingMusic:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.albumContent,a=e.loadingMusic;return Object(y.jsxs)("div",{className:"page-body-2",children:[Object(y.jsx)(F,{}),a?Object(y.jsx)("p",{children:"Carregando..."}):Object(y.jsxs)("div",{className:"main","data-testid":"page-album",children:[Object(y.jsxs)("aside",{className:"info-card-album",children:[Object(y.jsx)("img",{className:"image-card",src:t[0].artworkUrl100,alt:t[0].collectionName}),Object(y.jsx)("h1",{"data-testid":"album-name",children:t[0].collectionName}),Object(y.jsx)("h4",{"data-testid":"artist-name",children:t[0].artistName})]}),Object(y.jsx)("aside",{className:"music-list",children:t.map((function(e,t){return t>0&&Object(y.jsxs)("div",{children:[Object(y.jsx)(G,{album:e}),Object(y.jsx)("hr",{})]},e.trackId)}))})]})]})}}]),a}(c.a.Component)),Q=H,V=(a(48),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onCheckFavorite=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.target,e.setState({loading:!0}),t.next=4,Y(n);case 4:return t.t0=e,t.t1=c.checked,t.next=8,z();case 8:t.t2=t.sent,t.t3={loading:!1,check:t.t1,favoriteList:t.t2},t.t0.setState.call(t.t0,t.t3);case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={loading:!1,check:!0,favoriteList:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,z();case 3:t=e.sent,this.setState({favoriteList:t,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.check,c=t.favoriteList;return Object(y.jsxs)("div",{className:"page-body-2","data-testid":"page-favorites",children:[Object(y.jsx)(F,{actualPage:"pageFavorite"}),a?Object(y.jsx)("p",{children:"Carregando..."}):Object(y.jsx)("div",{className:"music-list-favorite",children:c.map((function(t){return Object(y.jsxs)("div",{className:"music-style",children:[Object(y.jsx)("h4",{className:"music-name",children:t.trackName}),Object(y.jsxs)("audio",{"data-testid":"audio-component",src:t.previewUrl,controls:!0,children:[Object(y.jsx)("track",{kind:"captions"}),'O seu navegador n\xe3o suporta o elemento{" "}\n                        '.concat(Object(y.jsx)("code",{children:"audio"}),".")]}),Object(y.jsxs)("label",{htmlFor:"favorite",children:["Favorita",Object(y.jsx)("input",{type:"checkbox",id:"favorite","data-testid":"checkbox-music-".concat(t.trackId),checked:n,onChange:function(a){return e.onCheckFavorite(a,t)}})]})]},t.trackId)}))})]})}}]),a}(c.a.Component)),X=V,Z=a(25);a(49);var $=function(){var e=Object(n.useState)({}),t=Object(Z.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(JSON.parse(localStorage.getItem("user")))}),[]),Object(y.jsxs)("div",{"data-testid":"page-profile",className:"body-profile",children:[Object(y.jsx)(F,{}),0===Object.keys(a).length?Object(y.jsx)("h1",{children:"Loading..."}):Object(y.jsxs)("main",{className:"main-profile",children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{className:"img-profile",src:a.image,alt:"profile-photography"})}),Object(y.jsxs)("div",{className:"personal-info",children:[Object(y.jsxs)("div",{className:"align",children:[Object(y.jsx)("h1",{children:"Nome: "}),Object(y.jsx)("h1",{className:"name-info",children:a.name})]}),Object(y.jsxs)("div",{className:"align",children:[Object(y.jsx)("h1",{children:"Email: "}),Object(y.jsx)("h1",{className:"email-info",children:a.email})]}),Object(y.jsxs)("div",{className:"align",children:[Object(y.jsx)("h1",{children:"Descri\xe7\xe3o: "}),Object(y.jsx)("p",{className:"description-info",children:a.description})]})]})]})]})},ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(y.jsx)(F,{}),Object(y.jsxs)("form",{children:[Object(y.jsx)("div",{children:Object(y.jsx)("input",{type:"text",placeholder:"Insira um Link"})}),Object(y.jsxs)("label",{htmlFor:"name",children:[Object(y.jsx)("h1",{children:"Nome"}),Object(y.jsx)("h6",{children:"Fique \xe0 vontade para usar seu nome social"}),Object(y.jsx)("input",{type:"text",id:"name",placeholder:"Nome"})]}),Object(y.jsxs)("label",{htmlFor:"email",children:[Object(y.jsx)("h1",{children:"E-mail"}),Object(y.jsx)("h6",{children:"Use seu melhor e-mail"}),Object(y.jsx)("input",{type:"e-mail",id:"email",placeholder:"usuario@usuario.com.br"})]}),Object(y.jsxs)("label",{htmlFor:"description",children:[Object(y.jsx)("h1",{children:"Descri\xe7\xe3o"}),Object(y.jsx)("textarea",{id:"description",placeholder:"Sobre mim"})]}),Object(y.jsx)("button",{type:"submit",children:"Salvar"})]})]})}}]),a}(c.a.Component),te=ee,ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{"data-testid":"page-not-found",children:[Object(y.jsx)("h1",{children:"Ops!"}),Object(y.jsx)("h2",{children:"A P\xe1gina que voc\xea est\xe1 procurando n\xe3o foi encontrada."})]})}}]),a}(c.a.Component),ne=ae,ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(y.jsx)(d.a,{basename:"/projeto-TRYBETUNES-cursoTrybe",children:Object(y.jsxs)(j.d,{children:[Object(y.jsx)(j.b,{exact:!0,path:"/",component:C}),Object(y.jsx)(j.b,{path:"/search",component:U}),Object(y.jsx)(j.b,{path:"/album/:id",component:Q}),Object(y.jsx)(j.b,{path:"/favorites",component:X}),Object(y.jsx)(j.b,{path:"/profile/edit",component:te}),Object(y.jsx)(j.b,{path:"/profile",component:$}),Object(y.jsx)(j.b,{path:"*",component:ne})]})})}}]),a}(c.a.Component),re=ce;s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(re,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0e73c5f7.chunk.js.map