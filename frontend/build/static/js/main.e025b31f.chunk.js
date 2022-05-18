(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{179:function(e,t,n){},583:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(167),o=n.n(c),i=(n(179),n(172)),r=n(7),u=n(1);var l=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__container",children:"\xa9 2020 Mesto Russia"})})},p=n(6),d=n(25);var h=function(e){var t=e.loggedIn,n=e.email,a=e.handleSignOut,s=Object(p.h)().pathname,c="".concat("/sign-in"===s?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),o="".concat("/sign-in"===s?"/sign-up":"/sign-in");return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("div",{className:"header__logo"}),Object(u.jsx)("div",{className:"header__wrap",children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"header__email",children:n}),Object(u.jsx)(d.b,{className:"header__signout",to:"",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(u.jsx)(d.b,{className:"header__link",to:o,children:c})})]})},j=s.a.createContext();var m=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardRemove,o=s.a.useContext(j),i=t.owner===o._id,r=t.likes.some((function(e){return e._id===o._id}));return Object(u.jsxs)("div",{className:"places__item",children:[Object(u.jsx)("img",{className:"places__item-img",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(u.jsx)("button",{className:i?"places__item-delete-button":"places__item-delete-button_hidden",onClick:function(){c(t)}}),Object(u.jsxs)("div",{className:"places__item-group",children:[Object(u.jsx)("h2",{className:"places__item-name",children:t.name}),Object(u.jsxs)("div",{className:"places__like-container",children:[Object(u.jsx)("button",{type:"button",className:"places__like-button ".concat(r?"places__like-button_active":""),onClick:function(){a(t)}}),Object(u.jsx)("p",{className:"places__like-counter",children:t.likes.length})]})]})]})};var _=function(e){var t=s.a.useContext(j);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__info-container",children:[Object(u.jsx)("img",{src:t.avatar,className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(u.jsx)("button",{className:"profile__info-avatar-button",onClick:e.onEditAvatar})]}),Object(u.jsxs)("div",{className:"profile__author",children:[Object(u.jsxs)("div",{className:"profile__author-add",children:[Object(u.jsx)("h1",{name:"title",className:"profile__title",children:t.name}),Object(u.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})]}),Object(u.jsx)("p",{name:"subtitle",className:"profile__subtitle",children:t.about})]})]}),Object(u.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"places",children:e.cards.map((function(t){return Object(u.jsx)(m,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardRemove:e.onCardDelete},t._id)}))})]})};var b=function(e){return Object(u.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_active"),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsxs)("form",{name:e.name,className:"popup__form popup__".concat(e.name),onSubmit:e.onSubmit,children:[e.children,Object(u.jsx)("button",{type:"submit",className:"popup__button-save popup__button-save-edit-avatar",children:e.btnText})]})]})})};var f=function(e){var t=e.isOpen,n=e.onClose,a=e.onChangeUserInfo,c=s.a.useState(""),o=Object(r.a)(c,2),i=o[0],l=o[1],p=s.a.useState(""),d=Object(r.a)(p,2),h=d[0],m=d[1],_=s.a.useContext(j);return s.a.useEffect((function(){l(_.name),m(_.about)}),[_,t]),Object(u.jsxs)(b,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({name:i,about:h})},children:[Object(u.jsx)("input",{id:"name-author",type:"text",name:"name",minLength:"2",maxLength:"40",placeholder:"\u0418\u043c\u044f",className:" popup__input popup__input_type_name ",onChange:function(e){l(e.target.value)},value:i||" ",required:!0}),Object(u.jsx)("span",{className:" name-author-error popup__input-error",children:" "}),Object(u.jsx)("input",{id:"job-author",value:h||" ",type:"text",name:"about",minLength:"2",maxLength:"200",placeholder:"\u041f\u0440\u0438\u0437\u0432\u0430\u043d\u0438\u0435",className:" popup__input popup__input_type_job",onChange:function(e){m(e.target.value)},required:!0}),Object(u.jsx)("span",{className:" job-author-error popup__input-error"})]})};var O=function(e){var t=e.isOpen,n=e.onClose,a=e.onEditAvatar,c=s.a.useRef();return s.a.useEffect((function(){c.current.value=""}),[t]),Object(u.jsxs)(b,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value})},btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(u.jsx)("input",{id:"link-avatar",type:"url",name:"link",ref:c,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input popup__input_type_link-avatar",required:!0}),Object(u.jsx)("span",{className:"link-avatar-error popup__input-error"})]})};var v=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=s.a.useRef(),o=s.a.useRef();return s.a.useEffect((function(){c.current.value="",o.current.value=""}),[t]),Object(u.jsxs)(b,{name:"add-cards",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c.current.value,link:o.current.value})},btnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(u.jsx)("input",{id:"edit-form",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",className:" popup__input popup__input_type_name-card",required:!0,ref:c}),Object(u.jsx)("span",{className:" edit-form-error popup__input-error"}),Object(u.jsx)("input",{id:"link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",className:"popup__input popup__input_type_link-card",required:!0,ref:o}),Object(u.jsx)("span",{className:"link-error popup__input-error"})]})};var x=function(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(u.jsx)("div",{className:"popup popup-of-places  ".concat(n&&"popup_active"),children:Object(u.jsxs)("div",{className:"popup-of-places__container",children:[Object(u.jsx)("img",{className:"popup-of-places__img",src:t.link,alt:t.name}),Object(u.jsx)("p",{className:"popup-of-places__name",children:t.name}),Object(u.jsx)("button",{className:"popup__close",onClick:a})]})})},g=n(170),k=n(171),N=new(function(){function e(t){var n=t.address,a=t.headers;Object(g.a)(this,e),this._address=n,this._headers=a}return Object(k.a)(e,[{key:"getOriginsCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"postUserInfo",value:function(e,t){return console.log(e),fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.dislikeCard(e):this.likeCard(e)}},{key:"likeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"updateHeaders",value:function(){this._headers={"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}}]),e}())({address:"http://api.konstantinnovikov.nomoredomains.xyz",headers:{authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-type":"application/json"}}),C=n.p+"static/media/authorization-ok.1b6082f8.svg",y=n.p+"static/media/authorization-bad.df8eddf6.svg";var S=function(e){var t=e.authorization,n=s.a.useState(""),a=Object(r.a)(n,2),c=a[0],o=a[1],i=s.a.useState(""),l=Object(r.a)(i,2),p=l[0],d=l[1];return Object(u.jsxs)("section",{className:"start-screen",children:[Object(u.jsx)("h1",{className:"start-screen__title",children:"\u0412\u0445\u043e\u0434"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({email:c,password:p})},className:"start-screen__form",children:[Object(u.jsx)("input",{value:c,className:"start-screen__input",placeholder:"Email",onChange:function(e){o(e.target.value)}}),Object(u.jsx)("input",{value:p,className:"start-screen__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){d(e.target.value)}}),Object(u.jsx)("button",{className:"start-screen__submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var P=function(e){var t=e.registration,n=s.a.useState(""),a=Object(r.a)(n,2),c=a[0],o=a[1],i=s.a.useState(""),l=Object(r.a)(i,2),p=l[0],h=l[1];return Object(u.jsxs)("section",{className:"start-screen",children:[Object(u.jsx)("h1",{className:"start-screen__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({email:c,password:p})},className:"start-screen__form",children:[Object(u.jsx)("input",{value:c,onChange:function(e){o(e.target.value)},type:"email",className:"start-screen__input",placeholder:"Email"}),Object(u.jsx)("input",{value:p,onChange:function(e){h(e.target.value)},type:"password",className:"start-screen__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("button",{className:"start-screen__submit",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(u.jsx)(d.b,{className:"start-screen__login",to:"/sign-in",children:" \u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})},T=n(173),w=n(174),E=["component"],I=function(e){var t=e.component,n=Object(w.a)(e,E);return Object(u.jsx)(p.b,{children:function(){return n.loggedIn?Object(u.jsx)(t,Object(T.a)({},n)):Object(u.jsx)(p.a,{to:"/sign-in"})}})};var A=function(e){var t=e.onClose,n=e.isOpen,a=e.message;return Object(u.jsx)("div",{className:"popup popup_type_infotool ".concat(n?"popup_active":""),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("img",{src:a.iconPath,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 Yes \u0438\u043b\u0438 No",className:"popup__result-icon"}),Object(u.jsx)("p",{className:"popup__title-info",children:a.text}),Object(u.jsx)("button",{type:"button",className:"popup__close",onClick:t})]})})},L=(n(188),"http://api.konstantinnovikov.nomoredomains.xyz"),R=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var D=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),o=Object(r.a)(c,2),d=o[0],m=o[1],b=s.a.useState(!1),g=Object(r.a)(b,2),k=g[0],T=g[1],w=s.a.useState(!1),E=Object(r.a)(w,2),D=E[0],U=E[1],z=s.a.useState(!1),J=Object(r.a)(z,2),F=J[0],q=J[1],B=s.a.useState({}),H=Object(r.a)(B,2),M=H[0],G=H[1],Y=s.a.useState({}),K=Object(r.a)(Y,2),Q=K[0],V=K[1],W=s.a.useState(!1),X=Object(r.a)(W,2),Z=X[0],$=X[1],ee=s.a.useState({iconPath:"",text:""}),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],se=s.a.useState(""),ce=Object(r.a)(se,2),oe=ce[0],ie=ce[1],re=Object(p.g)(),ue=s.a.useState([]),le=Object(r.a)(ue,2),pe=le[0],de=le[1];function he(){m(!1),T(!1),a(!1),U(!1),G({}),q(!1)}function je(){q(!0)}function me(e){var t=e.iconPath,n=e.text;ae({iconPath:t,text:n})}return s.a.useEffect((function(){Z&&N.getOriginsCards().then((function(e){de(e)})).catch((function(e){console.log(e)}))}),[Z]),s.a.useEffect((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,console.log(e),fetch("".concat(L,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(R).then((function(e){return e}))).then((function(e){$(!0),ie(e.email),re.push("/")})).catch((function(e){return console.log(e)}))}),[re]),s.a.useEffect((function(){Z&&N.getUserInfo().then((function(e){V(e)})).catch((function(e){console.log(e)}))}),[Z]),Object(u.jsxs)(j.Provider,{value:Q,children:[Object(u.jsx)(h,{loggedIn:Z,email:oe,handleSignOut:function(){$(!1),localStorage.removeItem("jwt"),ie(""),re.push("/sign-in")}}),Object(u.jsxs)(p.d,{children:[Object(u.jsx)(p.b,{path:"/sign-in",children:Object(u.jsx)(S,{authorization:function(e){var t=e.email,n=e.password;(function(e){var t=e.email,n=e.password;return fetch("".concat(L,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then(R).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),N.updateHeaders(),e.token}))})({email:t,password:n}).then((function(e){if(!e)throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430");ie(t),$(!0),me({iconPath:C,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b!"}),je(),setTimeout(re.push,3e3,"/"),setTimeout(he,2500)})).catch((function(e){me({iconPath:y,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"}),je(),setTimeout(he,2500),console.log(e)}))}})}),Object(u.jsx)(p.b,{path:"/sign-up",children:Object(u.jsx)(P,{registration:function(e){(function(e,t){return fetch("".concat(L,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(R)})(e.email,e.password).then((function(e){201===e.status&&(me({iconPath:C,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),je(),setTimeout(re.push,3e3,"/sign-in"),setTimeout(he,2500)),400===e.status&&(console.log("\u0412\u0432\u0435\u0434\u0435\u043d\u044b\u0439 email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"),me({iconPath:y,text:"\u0412\u0432\u0435\u0434\u0435\u043d\u044b\u0439 email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"}),je(),setTimeout(he,2500))})).catch((function(e){me({iconPath:y,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"}),je(),setTimeout(he,2500),console.log(e)}))}})}),Object(u.jsx)(I,{exact:!0,path:"/",component:_,onEditProfile:function(){a(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){T(!0)},onCardClick:function(e){G(e),U(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e===Q._id}));console.log(t),N.changeLikeCardStatus(e._id,t).then((function(t){de((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)})),N.getUserInfo().then((function(e){console.log(e)}))},cards:pe,onCardDelete:function(e){N.removeCard(e._id).then((function(){var t=pe.filter((function(t){return t!==e}));de(t)})).catch((function(e){console.log(e)}))},loggedIn:Z}),Object(u.jsx)(p.b,{path:"/",children:Z?Object(u.jsx)(p.a,{to:"/main"}):Object(u.jsx)(p.a,{to:"/sign-in"})})]}),Object(u.jsx)(l,{}),Object(u.jsx)(f,{isOpen:n,onClose:he,onChangeUserInfo:function(e){var t=e.name,n=e.about;N.postUserInfo(t,n).then((function(e){V(e),he()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(O,{isOpen:k,onClose:he,onEditAvatar:function(e){var t=e.avatar;N.editUserAvatar(t).then((function(e){V(e),he()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(v,{isOpen:d,onClose:he,onAddPlace:function(e){var t=e.name,n=e.link;N.addNewCard(t,n).then((function(e){de([e].concat(Object(i.a)(pe))),he()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(x,{card:M,isOpen:D,onClose:he}),Object(u.jsx)(A,{isOpen:F,onClose:he,message:ne})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,584)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)(D,{})})}),document.getElementById("root")),U()}},[[583,1,2]]]);
//# sourceMappingURL=main.e025b31f.chunk.js.map