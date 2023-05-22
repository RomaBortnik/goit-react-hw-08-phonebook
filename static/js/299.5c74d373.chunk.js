"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[299],{6885:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,o,a,s,c,d,l,u,m,x=t(2791),p=t(9434),f=t(5705),h=t(8174),b=(t(5462),function(n){return n.contacts.items}),g=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},Z=t(3634),w=t(168),k=t(7924),v=(0,k.ZP)(f.l0)(r||(r=(0,w.Z)(["\n  width: 400px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  background-color: #e9e9e9;\n"]))),y=k.ZP.label(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 24px;\n  margin-bottom: 30px;\n"]))),z=(0,k.ZP)(f.gN)(o||(o=(0,w.Z)(["\n  width: 240px;\n  height: 30px;\n  font-size: 18px;\n  font-weight: 400;\n  border: 1px solid black;\n  border-radius: 4px;\n"]))),C=k.ZP.button(a||(a=(0,w.Z)(["\n  font-size: 18px;\n  padding: 4px 12px;\n  border: 1px solid #e9e9e9;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover {\n    background-color: #e1e1e1;\n  }\n"]))),P=t(184),F={name:"",number:""},A=function(){var n=(0,p.I0)(),e=(0,p.v9)(b);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f.J9,{initialValues:F,onSubmit:function(t,r){var i=r.resetForm,o=t.name,a=t.number,s=o.toLowerCase();if(e.find((function(n){return n.name.toLowerCase()===s})))return h.Am.error("".concat(o," is already in contact list"));n((0,Z.uK)({name:o,number:a})),h.Am.success("".concat(o," successfully added to the contact list.")),i()},children:(0,P.jsxs)(v,{children:[(0,P.jsxs)(y,{htmlFor:"name",children:["Name",(0,P.jsx)(z,{type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,P.jsxs)(y,{htmlFor:"number",children:["Number",(0,P.jsx)(z,{type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,P.jsx)(C,{type:"submit",children:"Add contact"})]})}),(0,P.jsx)(h.Ix,{autoClose:2e3,theme:"dark"})]})},I=t(1273),N=k.ZP.input(s||(s=(0,w.Z)(["\n  width: 240px;\n  height: 30px;\n  font-size: 18px;\n  font-weight: 400;\n  border: 1px solid black;\n  border-radius: 4px;\n"]))),L=k.ZP.label(c||(c=(0,w.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n"]))),_=function(){var n=(0,p.I0)();return(0,P.jsxs)(L,{children:["Find contacts by name",(0,P.jsx)(N,{onChange:function(e){return n((0,I.T)(e.target.value))},type:"text",name:"filter"})]})},q=k.ZP.li(d||(d=(0,w.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n"]))),J=k.ZP.button(l||(l=(0,w.Z)(["\n  font-size: 14px;\n  padding: 2px 8px;\n  border: 1px solid #e9e9e9;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: 12px;\n"]))),K=function(n){var e=n.name,t=n.number,r=n.id,i=(0,p.I0)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(q,{children:[e,": ",t,(0,P.jsx)(J,{onClick:function(){h.Am.success("".concat(e," removed from the contact list.")),i((0,Z.GK)(r))},type:"button",children:"Delete"})]}),(0,P.jsx)(h.Ix,{autoClose:2e3,theme:"dark"})]})},S=function(n){var e=n.contacts.items,t=n.filter;if(!t)return e;var r=t.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))},B=k.ZP.ul(u||(u=(0,w.Z)(["\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n"]))),D=function(){var n=(0,p.v9)(S);return(0,P.jsx)(B,{children:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,P.jsx)(K,{name:e,number:t,id:r},r)}))})},E=t(4822),G=t.p+"static/media/defaultImage.7d9552f597616663694b.png",M=k.ZP.h2(m||(m=(0,w.Z)(["\n  font-size: 32px;\n  line-height: 1.5;\n  margin-bottom: 16px;\n"]))),T=function(){var n=(0,p.I0)(),e=(0,p.v9)(g),t=(0,p.v9)(j);return(0,x.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[e&&!t&&(0,P.jsx)(E.Z,{}),t&&(0,P.jsx)("img",{src:G,alt:"Something went wrong"}),!t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{className:"title",children:"Phonebook"}),(0,P.jsx)(A,{}),(0,P.jsx)(M,{className:"title",children:"Contacts"}),(0,P.jsx)(_,{}),(0,P.jsx)(D,{})]})]})}}}]);
//# sourceMappingURL=299.5c74d373.chunk.js.map