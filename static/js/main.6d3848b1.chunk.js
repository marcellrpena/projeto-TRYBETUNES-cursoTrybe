(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(20),s=n.n(r),i=(n(28),n(3)),o=n(4),l=n(6),u=n(5),d=n(13),j=n(7),h=n(2),b=n.n(h),m=n(9),p=n(16),O="user",f=function(e){return localStorage.setItem(O,JSON.stringify(e))},x=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},v=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(O));null===t&&(t={}),x(t)(e)}))},g=function(e){return new Promise((function(t){f(Object(p.a)(Object(p.a)({},{name:"",email:"",image:"",description:""}),e)),x("OK")(t)}))},k=(n(30),n.p+"static/media/logo5.8d2f6b62.png"),N=n(0),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).mounted=!1,e.onInputChange=function(t){var n=t.target;e.setState({userName:n.value,minLength:n.value.length<3})},e.onButtonClick=function(){var t=Object(m.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.setState({loading:!0}),a=e.state.userName,t.next=5,g({name:a});case 5:e.mounted&&e.setState({loading:!1,loged:!0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={userName:"",minLength:!0,loading:!1,loged:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.minLength,n=e.userName,a=e.loading,c=e.loged;return Object(N.jsx)("div",{"data-testid":"page-login",children:a?Object(N.jsx)("p",{children:"Carregando..."}):Object(N.jsxs)("div",{className:"page-body",children:[Object(N.jsx)("img",{className:"image-position",src:k,alt:"Logomarca Music Tunes"}),Object(N.jsxs)("form",{className:"form-login",children:[c&&Object(N.jsx)(j.a,{to:"/search"}),Object(N.jsxs)("label",{htmlFor:"login",className:"form-floating mb-3",children:[Object(N.jsx)("input",{className:"form-control input-name","data-testid":"login-name-input",type:"text",id:"login",name:"userName",placeholder:"Name",value:n,onChange:this.onInputChange}),Object(N.jsxs)("label",{htmlFor:"login",children:["Digite seu Nome",Object(N.jsx)("input",{className:"blank"})]})]}),Object(N.jsx)("button",{type:"submit",className:"btn-login btn btn-outline-success",name:"entrar",disabled:t,"data-testid":"login-submit-button",onClick:this.onButtonClick,children:"Entrar"})]})]})})}}]),n}(c.a.Component),C=y,S=(n(40),n.p+"static/media/logo4.5713ad7b.png"),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={userName:"",loading:!0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,this.setState({userName:t.name,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.userName,n=e.loading,a=this.props.actualPage;return Object(N.jsx)("section",{children:n?Object(N.jsx)("p",{children:"Carregando..."}):Object(N.jsxs)("div",{className:"header-elements",children:[Object(N.jsxs)("header",{className:"header-main","data-testid":"header-component",children:[Object(N.jsx)("div",{className:"image-logo",children:Object(N.jsx)("img",{src:S,alt:"logomarca-Music-tunes"})}),Object(N.jsx)("div",{className:"user-name",children:Object(N.jsx)("h3",{"data-testid":"header-user-name",children:t})})]}),Object(N.jsxs)("nav",{className:"navbar",children:[Object(N.jsx)("div",{className:"max-width",children:Object(N.jsx)(d.b,{className:"decoration","data-testid":"link-to-search",to:"/search",children:Object(N.jsx)("h1",{className:"pageSearch"===a?"pageSearch":"links",children:"Pesquisa"})})}),Object(N.jsx)("div",{className:"max-width",children:Object(N.jsx)(d.b,{className:"decoration","data-testid":"link-to-favorites",to:"/favorites",children:Object(N.jsx)("h1",{className:"pageFavorite"===a?"pageFavorite":"links",children:"Favoritas"})})}),Object(N.jsx)("div",{className:"max-width",children:Object(N.jsx)(d.b,{className:"decoration","data-testid":"link-to-profile",to:"/profile",children:Object(N.jsx)("h1",{className:"pagePerfil"===a?"pageSearch":"links",children:"Perfil"})})})]})]})})}}]),n}(c.a.Component),I=w,F=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,c,r,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,s=r.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=F,P=(n(41),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.lastSearch,n=e.albumList;return Object(N.jsx)("section",{children:Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"Resultado de \xe1lbuns de: ".concat(t)}),Object(N.jsx)("section",{className:"albuns-card",children:n.map((function(e){return Object(N.jsx)(d.b,{className:"text-style","data-testid":"link-to-album-".concat(e.collectionId),to:"/album/".concat(e.collectionId),children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("img",{className:"image-size",src:e.artworkUrl100,alt:e.collectionName}),Object(N.jsx)("h4",{children:e.collectionName}),Object(N.jsx)("h6",{children:e.artistName})]})},e.collectionId)}))})]})})}}]),n}(c.a.Component)),D=P,M=(n(42),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onInputChange=function(t){var n=t.target;e.setState({searchArtist:n.value,minLength:n.value.length<2})},e.onButtonClick=function(t){t.preventDefault(),e.setState({loading:!0}),e.setState(function(){var t=Object(m.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(n.searchArtist);case 2:a=t.sent,e.setState({lastSearch:n.searchArtist,searchArtist:"",searchList:a,loading:!1,minLength:!0});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e.state={searchArtist:"",minLength:!0,searchList:[],loading:!1,lastSearch:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.minLength,n=e.searchArtist,a=e.searchList,c=e.loading,r=e.lastSearch;return Object(N.jsxs)("div",{className:"page-body-search","data-testid":"page-search",children:[Object(N.jsx)(I,{actualPage:"pageSearch"}),Object(N.jsxs)("main",{children:[Object(N.jsxs)("form",{className:"form-search",children:[Object(N.jsx)("label",{htmlFor:"search",children:Object(N.jsx)("input",{"data-testid":"search-artist-input",className:"shadow-search form-control",id:"search",type:"text",placeholder:"Nome do Artista",value:n,onChange:this.onInputChange})}),Object(N.jsx)("button",{type:"submit",className:"btn-search btn btn-danger",name:"search",disabled:t,"data-testid":"search-artist-button",onClick:this.onButtonClick,children:"Pesquisar"})]}),c?Object(N.jsx)("p",{children:"Carregando..."}):Object(N.jsx)("div",{children:""!==r&&Object(N.jsx)("div",{children:a.length>0?Object(N.jsx)(D,{albumList:a,lastSearch:r}):Object(N.jsx)("p",{children:"Nenhum \xe1lbum foi encontrado"})})})]})]})}}]),n}(c.a.Component)),A=M,U=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=U,B=n(23),q="favorite_songs";JSON.parse(localStorage.getItem(q))||localStorage.setItem(q,JSON.stringify([]));var T=function(){return JSON.parse(localStorage.getItem(q))},E=function(e){return localStorage.setItem(q,JSON.stringify(e))},K=function(e){return function(t){setTimeout((function(){t(e)}),500)}},R=function(){return new Promise((function(e){var t=T();K(t)(e)}))},z=function(e){return new Promise((function(t){if(e){var n=T();E([].concat(Object(B.a)(n),[e]))}K("OK")(t)}))},W=function(e){return new Promise((function(t){var n=T();E(n.filter((function(t){return t.trackId!==e.trackId}))),K("OK")(t)}))},_=(n(43),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onCheckFavorite=function(){var t=Object(m.a)(b.a.mark((function t(n,a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.target,e.setState({loading:!0,check:c.checked}),!c.checked){t.next=7;break}return t.next=5,z(a);case 5:t.next=9;break;case 7:return t.next=9,W(a);case 9:e.setState({loading:!1});case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.state={loading:!1,check:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.album,this.setState({loading:!0}),e.next=4,R();case 4:n=e.sent,this.setState({check:n.length>0&&n.some((function(e){return e.trackId===t.trackId})),loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.check,c=this.props.album;return Object(N.jsx)("div",{children:n?Object(N.jsx)("p",{children:"Carregando..."}):Object(N.jsxs)("div",{className:"music-style",children:[Object(N.jsx)("h4",{className:"music-name",children:c.trackName}),Object(N.jsxs)("audio",{"data-testid":"audio-component",src:c.previewUrl,controls:!0,children:[Object(N.jsx)("track",{kind:"captions"}),'O seu navegador n\xe3o suporta o elemento{" "}\n                  '.concat(Object(N.jsx)("code",{children:"audio"}),".")]}),Object(N.jsxs)("label",{htmlFor:"favorite",children:["Favorita",Object(N.jsx)("input",{type:"checkbox",id:"favorite","data-testid":"checkbox-music-".concat(c.trackId),checked:a,onChange:function(t){return e.onCheckFavorite(t,c)}})]})]})})}}]),n}(c.a.Component)),G=_,H=(n(44),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={albumContent:[],loadingMusic:!0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,e.next=3,J(t.id);case 3:n=e.sent,this.setState({albumContent:n,loadingMusic:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.albumContent,n=e.loadingMusic;return Object(N.jsxs)("div",{className:"page-body-2",children:[Object(N.jsx)(I,{}),n?Object(N.jsx)("p",{children:"Carregando..."}):Object(N.jsxs)("div",{className:"main","data-testid":"page-album",children:[Object(N.jsxs)("aside",{className:"info-card-album",children:[Object(N.jsx)("img",{className:"image-card",src:t[0].artworkUrl100,alt:t[0].collectionName}),Object(N.jsx)("h1",{"data-testid":"album-name",children:t[0].collectionName}),Object(N.jsx)("h4",{"data-testid":"artist-name",children:t[0].artistName})]}),Object(N.jsx)("aside",{className:"music-list",children:t.map((function(e,t){return t>0&&Object(N.jsxs)("div",{children:[Object(N.jsx)(G,{album:e}),Object(N.jsx)("hr",{})]},e.trackId)}))})]})]})}}]),n}(c.a.Component)),Q=H,V=(n(45),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onCheckFavorite=function(){var t=Object(m.a)(b.a.mark((function t(n,a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.target,e.setState({loading:!0}),t.next=4,W(a);case 4:return t.t0=e,t.t1=c.checked,t.next=8,R();case 8:t.t2=t.sent,t.t3={loading:!1,check:t.t1,favoriteList:t.t2},t.t0.setState.call(t.t0,t.t3);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.state={loading:!1,check:!0,favoriteList:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,R();case 3:t=e.sent,this.setState({favoriteList:t,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.check,c=t.favoriteList;return Object(N.jsxs)("div",{className:"page-body-2","data-testid":"page-favorites",children:[Object(N.jsx)(I,{actualPage:"pageFavorite"}),n?Object(N.jsx)("p",{children:"Carregando..."}):Object(N.jsx)("div",{className:"music-list-favorite",children:c.map((function(t){return Object(N.jsxs)("div",{className:"music-style",children:[Object(N.jsx)("h4",{className:"music-name",children:t.trackName}),Object(N.jsxs)("audio",{"data-testid":"audio-component",src:t.previewUrl,controls:!0,children:[Object(N.jsx)("track",{kind:"captions"}),'O seu navegador n\xe3o suporta o elemento{" "}\n                        '.concat(Object(N.jsx)("code",{children:"audio"}),".")]}),Object(N.jsxs)("label",{htmlFor:"favorite",children:["Favorita",Object(N.jsx)("input",{type:"checkbox",id:"favorite","data-testid":"checkbox-music-".concat(t.trackId),checked:a,onChange:function(n){return e.onCheckFavorite(n,t)}})]})]},t.trackId)}))})]})}}]),n}(c.a.Component)),X=V,Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{"data-testid":"page-profile",children:[Object(N.jsx)(I,{}),Object(N.jsx)("main",{children:"Conte\xfado"})]})}}]),n}(c.a.Component),Z=Y,$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(N.jsx)(I,{}),Object(N.jsxs)("form",{children:[Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"text",placeholder:"Insira um Link"})}),Object(N.jsxs)("label",{htmlFor:"name",children:[Object(N.jsx)("h1",{children:"Nome"}),Object(N.jsx)("h6",{children:"Fique \xe0 vontade para usar seu nome social"}),Object(N.jsx)("input",{type:"text",id:"name",placeholder:"Nome"})]}),Object(N.jsxs)("label",{htmlFor:"email",children:[Object(N.jsx)("h1",{children:"E-mail"}),Object(N.jsx)("h6",{children:"Use seu melhor e-mail"}),Object(N.jsx)("input",{type:"e-mail",id:"email",placeholder:"usuario@usuario.com.br"})]}),Object(N.jsxs)("label",{htmlFor:"description",children:[Object(N.jsx)("h1",{children:"Descri\xe7\xe3o"}),Object(N.jsx)("textarea",{id:"description",placeholder:"Sobre mim"})]}),Object(N.jsx)("button",{type:"submit",children:"Salvar"})]})]})}}]),n}(c.a.Component),ee=$,te=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{"data-testid":"page-not-found",children:[Object(N.jsx)("h1",{children:"Ops!"}),Object(N.jsx)("h2",{children:"A P\xe1gina que voc\xea est\xe1 procurando n\xe3o foi encontrada."})]})}}]),n}(c.a.Component),ne=te,ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsx)(d.a,{children:Object(N.jsxs)(j.d,{children:[Object(N.jsx)(j.b,{exact:!0,path:"/",component:C}),Object(N.jsx)(j.b,{path:"/search",component:A}),Object(N.jsx)(j.b,{path:"/album/:id",component:Q}),Object(N.jsx)(j.b,{path:"/favorites",component:X}),Object(N.jsx)(j.b,{path:"/profile/edit",component:ee}),Object(N.jsx)(j.b,{path:"/profile",component:Z}),Object(N.jsx)(j.b,{path:"*",component:ne})]})})}}]),n}(c.a.Component),ce=ae;s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(ce,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6d3848b1.chunk.js.map