(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{12:function(e,t){},13:function(e,t,a){e.exports={NavLink:"Navigation_NavLink__3BVzJ"}},14:function(e,t,a){e.exports={ContactForm:"ContactForm_ContactForm__P0KBu",InputOverlay:"ContactForm_InputOverlay__1PfHe",InputLabel:"ContactForm_InputLabel__26czB",Input:"ContactForm_Input__iHWmU",FormButton:"ContactForm_FormButton__2sk_y"}},24:function(e,t,a){e.exports={FilterOverlay:"Filter_FilterOverlay__1RTDA",FilterLabel:"Filter_FilterLabel__2mLVZ",FilterInput:"Filter_FilterInput__1NA3u"}},25:function(e,t,a){e.exports={ContactItem:"ContactItem_ContactItem__19COS",ContactItemText:"ContactItem_ContactItemText__2lh9_",DeleteBtn:"ContactItem_DeleteBtn__K_2ia"}},4:function(e,t,a){e.exports={Container:"Views_Container__3AMF_",FormInput:"Views_FormInput__1Eq6a",PhoneBookHeader:"Views_PhoneBookHeader__1gLmK",HomeViewHeader:"Views_HomeViewHeader__3wARW",FormHeader:"Views_FormHeader__1zKVZ"}},45:function(e,t,a){e.exports={AppBar:"AppBar_AppBar__1guT-"}},46:function(e,t,a){e.exports={ContactList:"ContactList_ContactList__1sk8S"}},77:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),s=a.n(r),i=a(9),o=a(40),l=a(16),u=a(19),j=a(41),b=a.n(j),m=a(15),d=a(42),p=a(29),O=a.n(p),h=a(43),x=a(30),v=a.n(x);v.a.defaults.baseURL="https://connections-api.herokuapp.com";var _={register:Object(u.b)("auth/register",function(){var e=Object(h.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/users/signup",t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},f=Object(u.c)({name:"auth",initialState:{user:{name:null,email:null,password:null},token:null,isLoggedIn:!1},extraReducers:Object(d.a)({},_.register.fulfilled,(function(e,t){}))}).reducer,N={key:"auth",storage:b.a,whitelist:["token"]},C=Object(u.a)({reducer:{auth:Object(m.g)(N,f)},middleware:function(e){return e({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})},devTools:!1}),g=Object(m.h)(C),F=(a(77),a(3)),I=(a(78),a(13)),k=a.n(I),L=a(1);function w(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(l.b,{exact:!0,to:"/",className:k.a.NavLink,activeClassName:k.a.activeNavLink,children:"Home"}),Object(L.jsx)(l.b,{to:"/register",className:k.a.NavLink,activeClassName:k.a.activeNavLink,children:"Sign Up"}),Object(L.jsx)(l.b,{to:"/login",className:k.a.NavLink,activeClassName:k.a.activeNavLink,children:"Log In"}),Object(L.jsx)(l.b,{to:"/contacts",className:k.a.NavLink,activeClassName:k.a.activeNavLink,children:"Phonebook"}),Object(L.jsx)("a",{href:"/",className:k.a.NavLink,children:"UserMenu"})]})}var y=a(45),B=a.n(y);function H(){return Object(L.jsx)("header",{className:B.a.AppBar,children:Object(L.jsx)(w,{})})}var S=a(4),A=a.n(S);function P(){return Object(L.jsx)("h2",{className:A.a.HomeViewHeader,children:"Welcome to the PhoneBook Service!"})}function V(){return Object(L.jsxs)("div",{className:A.a.Container,children:[Object(L.jsx)("h2",{className:A.a.FormHeader,children:"Log In page"}),Object(L.jsxs)("form",{children:[Object(L.jsxs)("label",{className:A.a.FormInput,children:["Email",Object(L.jsx)("input",{type:"email",name:"email",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(L.jsxs)("label",{className:A.a.FormInput,children:["Password",Object(L.jsx)("input",{type:"password",name:"password",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(L.jsx)("button",{type:"submit",children:"Log In"})]})]})}var z=a(17),D=a(87),T=a(12),q=a(14),E=a.n(q);function R(){var e=Object(n.useState)(""),t=Object(z.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(z.a)(r,2),o=s[0],l=s[1],u=Object(D.a)(),j=Object(D.a)(),b=Object(i.c)(T.contactsSelectors.getContacts),m=Object(i.b)(),d=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":c(n);break;case"number":l(n);break;default:return}};return Object(L.jsxs)("form",{className:E.a.ContactForm,onSubmit:function(e){e.preventDefault();var t=function(e,t){var a=!!e.find((function(e){return e.name===t}));return a&&alert("Contact is already exist!"),!a}(b,a);t&&(t&&m(T.contactsOperations.addContact({id:Object(D.a)(),name:a,number:o})),c(""),l(""))},children:[Object(L.jsxs)("div",{className:E.a.InputOverlay,children:[Object(L.jsx)("label",{className:E.a.InputLabel,htmlFor:u,children:"Name"}),Object(L.jsx)("input",{className:E.a.Input,type:"text",name:"name",value:a,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",id:u,required:!0})]}),Object(L.jsxs)("div",{className:E.a.InputOverlay,children:[Object(L.jsx)("label",{className:E.a.InputLabel,htmlFor:j,children:"Number"}),Object(L.jsx)("input",{className:E.a.Input,type:"tel",name:"number",value:o,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",id:j,required:!0})]}),Object(L.jsx)("button",{className:E.a.FormButton,type:"submit",children:"Add contact"})]})}var U=a(24),Z=a.n(U);function J(){var e=Object(D.a)(),t=Object(i.c)(T.contactsSelectors.getFilter),a=Object(i.b)();return Object(L.jsxs)("div",{className:Z.a.FilterOverlay,children:[Object(L.jsx)("label",{htmlFor:e,className:Z.a.FilterLabel,children:"Find contacts by name"}),Object(L.jsx)("input",{className:Z.a.FilterInput,type:"text",name:"filter",value:t,onChange:function(e){return a(T.contactsActions.changeFilter(e.target.value))},id:e})]})}var K=a(25),M=a.n(K),W=function(e){var t=e.id,a=e.name,n=e.number,c=e.onDeleteContact;return Object(L.jsxs)("li",{className:M.a.ContactItem,children:[Object(L.jsxs)("p",{className:M.a.ContactItemText,children:[a,": ",n]}),Object(L.jsx)("button",{className:M.a.DeleteBtn,id:t,type:"button",onClick:function(){return c(t)},children:"Delete"})]})},$=a(46),G=a.n($);function Q(){var e=Object(i.b)(),t=function(t){return e(T.contactsOperations.deleteContact(t))};Object(n.useEffect)((function(){return e(T.contactsOperations.fetchContacts())}),[e]);var a=Object(i.c)(T.contactsSelectors.getFilteredContacts);return 0===a.length?null:Object(L.jsx)("ul",{className:G.a.ContactList,children:a.map((function(e){var a=e.id,n=e.name,c=e.number;return Object(L.jsx)(W,{id:a,name:n,number:c,onDeleteContact:t},a)}))})}function X(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("h2",{className:A.a.PhoneBookHeader,children:"Phonebook"}),Object(L.jsx)(R,{}),Object(L.jsx)("h2",{className:A.a.PhoneBookHeader,children:"Contacts"}),Object(L.jsx)(J,{}),Object(L.jsx)(Q,{})]})}function Y(){var e=Object(i.b)(),t=Object(n.useState)(""),a=Object(z.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(z.a)(s,2),l=o[0],u=o[1],j=Object(n.useState)(""),b=Object(z.a)(j,2),m=b[0],d=b[1],p=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return r(n);case"email":return u(n);case"password":return d(n);default:return}};return Object(L.jsxs)("div",{className:A.a.Container,children:[Object(L.jsx)("h2",{className:A.a.FormHeader,children:"Registration page"}),Object(L.jsxs)("form",{onSubmit:function(t){t.preventdefault(),e(_.register({name:c,email:l,password:m})),r(""),u(""),d("")},children:[Object(L.jsxs)("label",{className:A.a.FormInput,children:["Name",Object(L.jsx)("input",{type:"text",name:"name",value:c,onChange:p})]}),Object(L.jsxs)("label",{className:A.a.FormInput,children:["Email",Object(L.jsx)("input",{type:"email",name:"email",value:l,onChange:p})]}),Object(L.jsxs)("label",{className:A.a.FormInput,children:["Password",Object(L.jsx)("input",{type:"password",name:"password",value:m,onChange:p})]}),Object(L.jsx)("button",{type:"submit",children:"Sign Up"})]})]})}function ee(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(H,{}),Object(L.jsxs)(F.b,{children:[Object(L.jsx)(P,{exact:!0,path:"/"}),Object(L.jsx)(Y,{path:"/register"}),Object(L.jsx)(V,{path:"/login"}),Object(L.jsx)(X,{path:"/contacts"})]})]})}s.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(i.a,{store:C,children:Object(L.jsx)(o.a,{loading:null,persistor:g,children:Object(L.jsx)(l.a,{children:Object(L.jsx)(ee,{})})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.38cc6f08.chunk.js.map