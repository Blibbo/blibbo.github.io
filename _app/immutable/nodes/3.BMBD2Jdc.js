import{f,a as v}from"../chunks/Cfag3KCh.js";import{X as l,Y as o,as as g,W as x,ao as w,aq as b,_ as y,ar as _,g as k}from"../chunks/BA-1fr47.js";import{e as M,i as P}from"../chunks/CyRv4NuM.js";import{p as h,s as z}from"../chunks/hb6Co_U-.js";import{i as m,r as E,a as C,C as L}from"../chunks/D0CZngtG.js";import{M as S}from"../chunks/DfUhPtdZ.js";import{a as B}from"../chunks/DdV3HYI4.js";import{s as u}from"../chunks/Bn-5s4lz.js";const j=m()?E("BlibboLocal"):null;var q=f(`<a class="
    outline-transparent outline
    rounded-2xl duration-(--theme-switch-duration) transition-all p-4

    hover:-translate-y-1 hover:outline-(--accent) hover:shadow-gray-400  hover:shadow-xl
    dark:hover:shadow-2xl dark:hover:shadow-black

    active:-translate-y-1 active:outline-(--accent) active:shadow-gray-400  active:shadow-xl
    dark:active:shadow-2xl dark:active:shadow-black

    focus-visible:-translate-y-1 focus-visible:outline-(--accent) focus-visible:shadow-gray-400  focus-visible:shadow-xl
    dark:focus-visible:shadow-2xl dark:focus-visible:shadow-black
  "><h2 class="text-xl text-center my-4"> </h2> <p class="text-(--accent) text-center"> </p></a>`);function A(c,r){let n=h(r,"title",3,""),d=h(r,"description",3,""),a=h(r,"href",3,"#");var e=q(),t=l(e),s=l(t,!0);o(t);var i=g(t,2),p=l(i,!0);o(i),o(e),x(()=>{C(e,"href",a()),u(s,n()),u(p,d())}),v(c,e)}var I=f(`<div class="
    flex justify-center
  "><div class="px-3 md:px-0 md:w-3/4 lg:w-2/3 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4"></div></div>`);function G(c,r){w(r,!0);let n=_("");if(m()){async function a(){const{value:e}=await j.echo({value:"capacitor frontend says the platform is "+L.getPlatform()});console.log("Response from native:",e),y(n,e,!0)}a()}(async()=>{const a=await B("/health");console.log(a)})();const d=[{title:"Math",description:"The legendary math program",href:"/maths"},{title:"Path of exile puzzle study",description:"I couldn't open that one door",href:"/exile-puzzle"},{title:"Nested ordered pairs solver",description:"Proof of concept of the math substitution program",href:"/pairs"}];S(c,{children:(a,e)=>{var t=I(),s=l(t);M(s,21,()=>d,P,(i,p)=>{A(i,z(()=>k(p)))}),o(s),o(t),v(a,t)},$$slots:{default:!0}}),b()}export{G as component};
