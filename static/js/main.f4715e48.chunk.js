(window["webpackJsonpsource-gym"]=window["webpackJsonpsource-gym"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(79),a(80),a(11)),i=(a(81),a(118)),u=a(73),s=a(119),m=a(63),E=a.n(m),p=a(27),f=a(28),d=a(18),g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement("header",{className:"App-header"},r.a.createElement(i.a,null,r.a.createElement(d.b,{className:"nav-link",to:"/"},r.a.createElement("img",{src:E.a,alt:"logo",className:"brand"})),r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(s.a,null,r.a.createElement(p.a,{icon:f.b,className:"toggler",onClick:function(){return l(!a)}}),r.a.createElement(s.a.Menu,{className:a&&"show"},r.a.createElement(d.b,{to:"/",onClick:function(){return l(!a)}},r.a.createElement(p.a,{icon:f.c})," - Home"),r.a.createElement(d.b,{to:"/Profile",onClick:function(){return l(!a)}},r.a.createElement(p.a,{icon:f.a})," - My Profile"),r.a.createElement(d.b,{to:"/LogIn",onClick:function(){return l(!a)}},r.a.createElement(p.a,{icon:f.d})," - Log In"))))))},b=a(24),v=(a(107),a(121)),h=a(114),w=a(115),C=a(117),j=a(69),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"The Source Gym"),r.a.createElement(x,null),r.a.createElement(O,null))},x=function(){return r.a.createElement(v.a,{interval:null,indicators:!1},[{url:"https://www.switchbacktravel.com/sites/default/files/images/landing-page/climbing%20%28header%29.jpg"},{url:"https://www.switchbacktravel.com/sites/default/files/images/articles/Beginner%20Climbing%20Shoes%20%28header%29_0.jpg"},{url:"https://d1vs4ggwgd7mlq.cloudfront.net/wp-content/uploads/2018/02/robert-baker-531539-unsplash-e1519072936677-934x563.jpg"}].map(function(e,t){return r.a.createElement(v.a.Item,{key:t},r.a.createElement("img",{className:"d-block",src:e.url,alt:"Slide ".concat(t+1)}),r.a.createElement(v.a.Caption,null,"Image ",t+1))}))},O=function(){var e=Object(n.useState)("Events"),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(h.a,{id:"controlled-tab-example",activeKey:a,onSelect:function(e){return l(e)}},r.a.createElement(w.a,{eventKey:"Events",title:"Events"},"Event calendar or news goes here!"),r.a.createElement(w.a,{eventKey:"Location",title:"Location"},"Address and stuff goes here!"),r.a.createElement(w.a,{eventKey:"Contact",title:"Contact Us"},r.a.createElement(y,null)))},y=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(""),E=Object(o.a)(m,2),p=E[0],f=E[1];return r.a.createElement(C.a,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{controlId:"formBasicEmail"},r.a.createElement(C.a.Label,null,"Email address"),r.a.createElement(C.a.Control,{type:"text",value:a,onChange:function(e){return l(e.target.value)}}))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,{controlId:"formName"},r.a.createElement(C.a.Label,null,"Name"),r.a.createElement(C.a.Control,{type:"text",value:u,onChange:function(e){return s(e.target.value)}}))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Message"),r.a.createElement(C.a.Control,{as:"textarea",rows:"3",value:p,onChange:function(e){return f(e.target.value)}}))),r.a.createElement(j.a,{type:"submit"},"Submit"))},N=a(120),S=a(71),I=(a(108),function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0];t[1];return r.a.createElement("div",{className:"profile-content"},r.a.createElement(L,{profile:a}),r.a.createElement(P,{profile:a}))}),L=function(e){return r.a.createElement("div",{className:"profile-pic"},r.a.createElement(N.a,{className:"user-pic"},e.profile?r.a.createElement(S.a,{src:e.profile.userImageSrc,thumbnail:!0}):r.a.createElement(p.a,{icon:f.e,style:{maxHeight:"200px",width:"150px",minHeight:"180px"}}),r.a.createElement(d.b,{to:"/Profile/EditProPic"},r.a.createElement(N.a.Caption,null,"Edit Picture"))))},P=function(){return r.a.createElement("div",{className:"user-info"},"Member since: ",r.a.createElement("br",null),"Current expiration: ",r.a.createElement("br",null))},R=a(36),G=a.n(R),B=a(43),_=(a(61),a(116)),A=a(72),K=a.n(A),M=function(e){var t=function(){var e=Object(B.a)(G.a.mark(function e(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:alert("this will sign you in with googs");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"google-auth-button",onClick:t},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:K.a,alt:"google logo"})),r.a.createElement("span",{className:"button-text"},"Sign in with Google"))},H=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return a?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"log-in"},r.a.createElement(z,{setRedirect:l}),r.a.createElement(W,{setRedirect:l}))},W=function(e){return r.a.createElement(_.a,null,r.a.createElement(M,{setRedirect:e.setRedirect}))},z=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),s=u[0],m=u[1],E=Object(n.useState)(void 0),p=Object(o.a)(E,2),f=p[0],d=p[1],g=function(){var t=Object(B.a)(G.a.mark(function t(a){var n;return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),"new"!==(n=a.target.id)){t.next=13;break}return t.prev=3,t.abrupt("return",e.setRedirect(!0));case 7:t.prev=7,t.t0=t.catch(3),console.error(t.t0),d(t.t0.message);case 11:t.next=14;break;case 13:"existing"===n||d("An unknown error has occurred. Please contact administrator if this continues.");case 14:case"end":return t.stop()}},t,null,[[3,7]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Log-in Options:"),f&&r.a.createElement("h5",null,f),r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{controlId:"formBasicEmail"},r.a.createElement(C.a.Label,null,r.a.createElement("i",{className:"fas fa-at"})),r.a.createElement(C.a.Control,{autoComplete:"email",type:"email",placeholder:"Enter email",value:l,name:"email",onChange:function(e){return c(e.target.value)}})),r.a.createElement(C.a.Group,{controlId:"formBasicPassword"},r.a.createElement(C.a.Label,null,r.a.createElement("i",{className:"fas fa-lock"})),r.a.createElement(C.a.Control,{type:"password",autoComplete:"current-password",placeholder:"Password",value:s,name:"password",onChange:function(e){return m(e.target.value)}})),r.a.createElement(_.a,null,r.a.createElement(j.a,{variant:"outline-success",size:"sm",id:"existing",onClick:function(e){return g(e)}},"Sign In"),r.a.createElement(j.a,{variant:"outline-success",size:"sm",id:"new",onClick:function(e){return g(e)}},"Create"))))},F=function(){return r.a.createElement("main",null,r.a.createElement(d.a,null,r.a.createElement(b.b,{path:"/",component:g}),r.a.createElement("div",{className:"content"},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/Profile",component:I}),r.a.createElement(b.b,{exact:!0,path:"/LogIn",component:H}),r.a.createElement(b.b,{exact:!0,path:"/",component:k})),r.a.createElement("small",null,"Website by the green owl."))))};var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110);c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/sourcelogotrans.802bd682.png"},72:function(e,t,a){e.exports=a.p+"static/media/btn_google_dark_focus_ios.ef5056c5.svg"},74:function(e,t,a){e.exports=a(111)},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.f4715e48.chunk.js.map