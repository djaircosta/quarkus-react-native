(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(3),l=c.n(n),i=(c(8),c(9),c(0));var a=e=>{let{particles:t}=e;return Object(i.jsxs)("div",{children:[Object(i.jsx)("center",{children:Object(i.jsx)("h1",{children:"Particles List"})}),Object(i.jsxs)("table",{class:"pf-c-table pf-m-grid-md",role:"grid","aria-label":"Supersonic Subatomic Particles",id:"table-basic",children:[Object(i.jsx)("caption",{children:"Supersonic Subatomic Particles"}),Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{role:"row",children:Object(i.jsx)("th",{role:"columnheader",scope:"col",children:"Name"})})}),t.map((e=>Object(i.jsx)("tbody",{role:"rowgroup",children:Object(i.jsx)("tr",{role:"row",children:Object(i.jsx)("td",{role:"cell","data-label":"Particle name",children:e.name})})})))]})]})};class o extends r.Component{constructor(){super(...arguments),this.state={particles:[]}}componentDidMount(){fetch("/particles").then((e=>e.json())).then((e=>{this.setState({particles:e})})).catch(console.log)}render(){return Object(i.jsx)(a,{particles:this.state.particles})}}var d=o;var j=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((t=>{let{getCLS:c,getFID:r,getFCP:s,getLCP:n,getTTFB:l}=t;c(e),r(e),s(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),j()},8:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.710c0fd2.chunk.js.map