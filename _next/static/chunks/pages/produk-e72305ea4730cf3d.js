(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{3806:(e,s,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/produk",function(){return a(1905)}])},9327:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var t=a(4848),n=a(1106),l=a.n(n);a(8133);var r=a(4107);function i(){let{isLoggedIn:e,handleLogin:s,handleLogout:a}=(0,r.A)();return(0,t.jsx)("nav",{id:"w2",className:"navbar navbar-default fixed-top",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(l(),{className:"navbar-brand",href:"/dashboard",children:(0,t.jsxs)("span",{className:"xbrand",children:[(0,t.jsx)("img",{src:"/img/lifesmart.png",style:{height:"100%"}}),(0,t.jsx)("img",{src:"/img/elipsis-loader.gif",style:{display:"none"}}),(0,t.jsx)("span",{})]})}),(0,t.jsx)("button",{type:"button",className:"navbar-toggler collapsed","data-bs-toggle":"collapse","data-bs-target":"#w2-collapse","aria-controls":"w2-collapse","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"navbar-toggler-icon"})}),(0,t.jsx)("div",{id:"w2-collapse",className:"navbar-collapse collapse",style:{},children:(0,t.jsxs)("ul",{id:"w3",className:"navbar-nav navbar-right nav",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),(0,t.jsx)("li",{children:e?(0,t.jsx)(l(),{className:"nav-link",href:"/dashboard",children:"Dashboard"}):null}),(0,t.jsx)("li",{children:e?(0,t.jsx)(l(),{className:"nav-link",href:"/order/list",children:"Order List"}):null}),e?(0,t.jsx)("li",{children:(0,t.jsx)("a",{onClick:a,className:"nav-link",children:"Logout"})}):null,e?null:(0,t.jsx)("li",{children:(0,t.jsx)(l(),{className:"nav-link",href:"/login",children:"Login"})})]})})]})})}},4107:(e,s,a)=>{"use strict";a.d(s,{A:()=>l});var t=a(6540),n=a(6715);function l(){let e=(0,n.useRouter)(),[s,a]=(0,t.useState)(!1),[l,r]=(0,t.useState)("");return(0,t.useEffect)(()=>{if(window){let s=window.sessionStorage.getItem("pulsabebJwt");null!=s&&""!=s?a(!0):e.push("/login"),r(window.sessionStorage.getItem("pulsabebJwt"))}},[s]),{isLoggedIn:s,handleLogin:e=>{a(!0),window.sessionStorage.setItem("pulsabebJwt",e),r(e)},handleLogout:()=>{a(!1),window.sessionStorage.removeItem("pulsabebJwt"),e.push("/login")},pulsabebJwt:l}}},1905:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var t=a(4848),n=a(9327),l=a(4335),r=a(6540),i=a(6715),d=a(4107);a(1106);var o=a(704);function c(e){let{products:s,selectedProviders:a,setSelectedProviders:n,setXgroups:l,xgroups:i,unfilteredGroups:d}=e,o=[];s.forEach(e=>{o[e.operator_id]=e.keterangan});let[c,u]=(0,r.useState)(o);function g(e){void 0==a[e.target.dataset.provider_id]||!1==a[e.target.dataset.provider_id]?a[e.target.dataset.provider_id]=!0:a[e.target.dataset.provider_id]=!1,n(a),console.log(a),u(o),l(d.filter(function(e){if(!0==a[e[0]])return e}))}return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"mb-3",children:o.map((e,s)=>(0,t.jsx)("button",{onClick:g,"data-provider_id":s,className:!0==a[s]?"btn btn-primary m-1":"btn btn-light m-1",children:e.split(" ")[0]}))})})}function u(){let{isLoggedIn:e,handleLogin:s,handleLogout:a,pulsabebJwt:u}=(0,d.A)(),[g,p]=(0,r.useState)([]),[h,m]=(0,r.useState)([]),[b,x]=(0,r.useState)([]),[j,v]=(0,r.useState)([]);var f=[];let w=(0,i.useRouter)();async function N(){l.A.get("http://pulsabeb.local/pulsabebapi/product/index",{headers:{Authorization:"Bearer "+window.sessionStorage.getItem("pulsabebJwt")}}).then(function(e){p(e.data);var s=Object.keys(f=Object.groupBy(e.data,e=>{let{operator_id:s}=e;return s})).map(e=>[e,f[e]]);m(s),x(s)})}(0,r.useEffect)(()=>{console.log("status login:"+e),!0==e&&N()},[e]);let _=e=>{let s=e.target.getAttribute("data-id");console.log(s),null!=s?g.forEach(e=>{e.id==s&&(window.sessionStorage.setItem("selectedProductId",JSON.stringify(e)),w.push("/order/create/"+e.id))}):window.sessionStorage.removeItem("selectedProductId"),e.preventDefault()};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"loader-wrapper",children:(0,t.jsx)("div",{className:"loader"})}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsx)(n.A,{}),(0,t.jsxs)("div",{id:"main-content",className:"container",children:[(0,t.jsx)(c,{products:g,selectedProviders:j,setSelectedProviders:v,xgroups:h,setXgroups:m,unfilteredGroups:b}),(0,t.jsx)(o.A,{children:h.map((e,s)=>(0,t.jsxs)(o.A.Item,{eventKey:e[0],children:[(0,t.jsxs)(o.A.Header,{children:[e[1][0].keterangan.split(" ")[0]," ",!0==j[e[0]]?"ON":"OFF"]}),(0,t.jsx)(o.A.Body,{children:(0,t.jsx)("ul",{className:"list-group",children:e[1].map((e,s)=>(0,t.jsxs)("li",{className:"list-group-item d-flex",children:[(0,t.jsxs)("span",{className:"flex-fill",children:[e.keterangan_tambahan,(0,t.jsx)("br",{}),(0,t.jsxs)("span",{style:{"font-weight":"bolder"},className:"monofont",children:["Rp ",new Intl.NumberFormat("id-ID").format(e.harga_jual)]}),(0,t.jsx)("br",{}),"normal"==e.status_text?(0,t.jsx)("span",{className:"badge bg-success",children:e.status_text}):(0,t.jsx)("span",{className:"badge bg-danger",children:e.status_text})]}),(0,t.jsx)("button",{"data-id":e.id,onClick:_,className:"btn btn-primary btn-lg w-20",children:">"})]}))})})]}))})]})]}),(0,t.jsx)("footer",{className:"footer",style:{paddingTop:0}})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[48,335,704,636,593,792],()=>s(3806)),_N_E=e.O()}]);