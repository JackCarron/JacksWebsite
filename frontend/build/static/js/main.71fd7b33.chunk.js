(this["webpackJsonpjacks-website"]=this["webpackJsonpjacks-website"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/rory-the-tiger-1.27dadb57.png"},31:function(e,t,a){e.exports=a.p+"static/media/Skate.4399cb57.PNG"},33:function(e,t,a){e.exports=a.p+"static/media/Logo.7b9db18a.png"},36:function(e,t,a){e.exports=a.p+"static/media/Golf.dc1ea67b.PNG"},37:function(e,t,a){e.exports=a.p+"static/media/Professional.66a049cf.PNG"},38:function(e,t,a){e.exports=a(67)},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),s=(a(43),a(2)),o=a(3),i=a(5),m=a(4),u=a(11),p=a(10),h=(a(19),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Jack's Projects/Technical Experience"),r.a.createElement("h5",{className:"mt-3"},"Salesforce Developer"),r.a.createElement("li",{className:"list-group-item"},"Salesforce Developer for Deloitte."),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"https://jcarron.net"},"https://jcarron.net")," , Front-End: React (S3, AWS), Backend: Salesforce")),r.a.createElement("a",{href:"https://github.com/JackCarron/jack-sf-dev"},"Personal Salesforce Github Repo"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/JackCarron/jack-sf-dev"},r.a.createElement("img",{src:"https://github.com/fluidicon.png",style:{maxWidth:"150px"}})),r.a.createElement("a",{className:"ml-2",href:"https://www.linkedin.com/in/hijackcarron/"},r.a.createElement("img",{src:"https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",style:{minWidth:"150px"}})),r.a.createElement("h5",{className:"mt-3"},"Other Experience"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Deloitte: Hands on experience in Software Development Lifecycle with Salesforce at a leading tech company."),r.a.createElement("li",{className:"list-group-item"},"Salesforce Platform Developer 1 Certified"),r.a.createElement("li",{className:"list-group-item mb-2"},"Deloitte: Building reusable salesforce assets with Salesforce Setup, Apex, and Lightning Web Component."),r.a.createElement("li",{className:"list-group-item"},"PetSmart: .NET Software Engineer Intern REST API for Doggie DayCamp Endpoint: ",r.a.createElement("br",null),"https://daycamp-api.petsmart.com/v1/pricing/[StoreNumber]"),r.a.createElement("li",{className:"list-group-item mb-2"},"NAU Application Developer, Oracle SQL Database")),r.a.createElement("h5",{className:"mt-3"},"Bachelors of Science in Information Systems"),r.a.createElement("img",{src:"https://i.pinimg.com/originals/72/05/fd/7205fd42cb59499e0f729df4836cd70f.png",alt:"NAU",style:{maxWidth:"250px"}}))}}]),a}(n.Component)),b=a(30),d=a.n(b),f=a(31),E=a.n(f),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"About Jack"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Originally from Pasadena, CA. Now residing in Scottsdale, AZ"),r.a.createElement("li",{className:"list-group-item mb-3"},"Fosters a passion for software engineering, golf, extreme sports, animals, and helping others")),r.a.createElement("img",{src:d.a,alt:"Cat",style:{maxWidth:"350px"}}),r.a.createElement("br",null),r.a.createElement("img",{className:"mt-3",src:E.a,alt:"Skate",style:{maxWidth:"350px"}}))}}]),a}(n.Component),v=a(32),j=a(14),N=a(44),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={emailAddress:"",subject:"",body:""},n.handleInputChange=n.handleInputChange.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){N.post("https://api-john-jack-carron-developer-edition.na139.force.com/services/apexrest/Messages",{email:this.state.emailAddress,subject:this.state.subject,message:this.state.body}).then((function(e){alert("Message successfully sent")})).catch((function(e){alert(e)})),e.preventDefault(),this.setState({emailAddress:"",subject:"",body:""})}},{key:"handleInputChange",value:function(e){var t=e.target;this.setState(Object(v.a)({},t.name,t.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Contact Jack"),r.a.createElement("h6",null,"Hello, the following form allows you to leave a message for Jack."),r.a.createElement("form",{style:{maxWidth:"500px"},className:"form-group justify-content-center m-auto",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Your Contact Email:"),r.a.createElement("input",{className:"form-control mb-2",type:"email",name:"emailAddress",value:this.state.emailAddress,onChange:this.handleInputChange,placeholder:"example@text.xyz"}),r.a.createElement("label",null,"Subject:"),r.a.createElement("input",{className:"form-control mb-2",type:"text",name:"subject",value:this.state.subject,onChange:this.handleInputChange,placeholder:"Your message's subject line here"}),r.a.createElement("label",null,"Message:"),r.a.createElement("textarea",{className:"form-control mb-2",rows:"3",name:"body",value:this.state.body,onChange:this.handleInputChange,placeholder:"Your message here..."}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),a}(n.Component),x=a(33),k=a.n(x),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg text-light bg-dark mr-auto mb-4 h5"},r.a.createElement("a",{className:"navbar-brand",href:"http://www.jcarron.net"},r.a.createElement("img",{src:k.a,width:"75",height:"75",alt:"Jack Carron"})),r.a.createElement(u.b,{to:"/",className:"navbar-brand"},"Jack Carron"),r.a.createElement("div",{className:"collpase navbar-collapse hover "},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{to:"/about",className:"nav-link"},"About")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{to:"/projects",className:"nav-link"},"Projects")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{to:"/contact",className:"nav-link"},"Contact Me")))))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Welcome to 404 land! You are in uncharted terrirtory"))}}]),a}(n.Component),C=a(36),w=a.n(C),A=a(37),W=a.n(A),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Welcome to jcarron.net"),r.a.createElement("h5",null,"Jack Carron's portfolio"),r.a.createElement("img",{src:W.a,alt:"Professional Headshot",style:{maxWidth:"350px"}}),r.a.createElement("br",null),r.a.createElement("img",{className:"mt-3",src:w.a,alt:"Golf",style:{maxWidth:"350px"}}))}}]),a}(n.Component),P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/about",exact:!0,component:g}),r.a.createElement(p.a,{path:"/contact",component:y}),r.a.createElement(p.a,{path:"/projects",component:h}),r.a.createElement(p.a,{path:"/",component:D}),r.a.createElement(p.a,{component:S}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.71fd7b33.chunk.js.map