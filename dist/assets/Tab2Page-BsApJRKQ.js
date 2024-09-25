import{K as P,D as y,L as q,m as V,o as a,p as i,F as T,H as C,c as I,w as c,i as e,x as l,J as k,e as n,b as r,B as p,M as F,h as f,N as E,O as G,P as J,d as D,a as K,t as O,f as S,g as j,I as $,Q as A,k as Q,l as R}from"./index-Cvou-PqL.js";import{j as U}from"./jumbotron-BOZZK1GD.js";const W={class:"w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 px-3 md:px-56"},X=["src"],Y={class:"relative w-full h-1/3 md:h-3/5 overflow-hidden z-20"},Z={key:0,class:"absolute bottom-0 left-3"},ee={class:"font-semibold text-sm text-white hover:text-gray-300 transition ease-in"},te={class:"font-bold text-lg text-white hover:text-gray-300 transition ease-in"},se={key:1,class:"absolute bottom-0 left-3"},re=e("h1",{class:"font-semibold text-sm text-white"},"--/--",-1),oe=e("h1",{class:"font-bold text-xl md:text-lg text-white transition ease-in hover:text-gray-300"},"Na turnaji pracujeme",-1),ne=[re,oe],ae={key:0,class:"h-1/3 w-full flex justify-start items-center text-sm text-white transition ease-in hover:text-gray-300"},le={key:1,class:"h-1/3 w-full flex justify-start items-center text-sm text-white"},ie={class:"h-1/4 w-full flex justify-start items-center gap-2"},ce={class:"h-5/6 w-[45%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},de={class:"h-5/6 w-[30%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},ue={class:"h-5/6 w-[25%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},me={class:"h-[42%] w-full flex justify-start items-center overflow-hidden text-white"},he={class:"text-sm hover:text-gray-300 transition ease-in"},_e={class:"w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold transition ease-in hover:text-gray-300 text-white"},fe={class:"w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold ps-2 transition ease-in hover:text-gray-300"},ge={__name:"layoutTournaments",setup(d){const u=P(),x=y(()=>[...u.tournament].sort((s,o)=>new Date(s.date)-new Date(o.date))),w=s=>{const o=new Date(s),_=o.getHours(),t=o.getMinutes();return"".concat(_,":").concat(t)},v=y(()=>{const s=new Date;return s.setHours(0,0,0,0),x.value.filter(o=>{const _=new Date(o.date);return _.setHours(0,0,0,0),_>=s})}),h=y(()=>{const s=v.value;for(;s.length<4;)s.push(null);return s}),m=s=>{const o={year:"numeric",month:"long",day:"numeric"};return new Date(s).toLocaleDateString("sk-SK",o)},g=s=>{const o=s.split(" ");return o.length>20?o.slice(0,15).join(" ")+"...":s},b=s=>{switch(s){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"bg-[#ea580cf2]";case"LoL":return"bg-sky-600";case"Brawl Stars":return"bg-red-500";default:return"bg-green-600"}},B=s=>{switch(s){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"bg-[#9a3412f2]";case"LoL":return"bg-sky-800";case"Brawl Stars":return"bg-red-700";default:return"bg-green-900"}},z=s=>{switch(s){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"/img/tournaments/cs2_2.jpg";case"LoL":return"";case"Brawl Stars":return"";default:return"/img/tournaments/yocrew-example.png"}},M=s=>{const o=s.currentTarget.querySelector("img");o.style.transform="scale(1.2)"},N=s=>{const o=s.currentTarget.querySelector("img");o.style.transform="scale(1)"};return q(()=>{u.getTournament()}),(s,o)=>{const _=V("router-link");return a(),i("div",W,[(a(!0),i(T,null,C(h.value,(t,H)=>(a(),I(_,{key:H,to:"tournament ? { name: 'Tournament', params: { slug: tournament.slug } } : '/'",class:"relative w-full md:w-full h-56 md:h-96 rounded-2xl overflow-hidden flex flex-col",onMouseenter:M,onMouseleave:N},{default:c(()=>[e("img",{src:z(t?t.game_name:" "),alt:"Tournament image",class:"absolute h-56 md:h-full w-full object-cover transition ease-in z-10 max-md:blur-[2px]"},null,8,X),e("div",Y,[t?(a(),i("div",Z,[e("h1",ee,l(t.game_name),1),e("h1",te,l(t.name),1)])):(a(),i("div",se,ne))]),e("div",{class:k(["w-full h-1/2 md:h-[30%] flex flex-col px-4 z-20",b(t?t.game_name:"")])},[t?(a(),i("div",ae," Registrácia do: "+l(m(t.date_reg)),1)):(a(),i("div",le," --/-- ")),e("div",ie,[e("div",ce,[n(r(p),{icon:r(F),class:"text-black text-sm me-2"},null,8,["icon"]),f(" "+l(t?t.bracket:"-/--"),1)]),e("div",de,[n(r(p),{icon:r(E),class:"text-black text-sm me-2"},null,8,["icon"]),f(" "+l(t?t.format:"-/--"),1)]),e("div",ue,[n(r(p),{icon:r(G),class:"text-black text-sm me-2"},null,8,["icon"]),f(" "+l(t?t.team_count:"-/--"),1)])]),e("div",me,[e("p",he,l(t?g(t.description):"Tento turnaj ešte pre Vás ešte pripravujeme..."),1)])],2),e("div",{class:k(["w-full h-[16.6667%] md:h-[10%] z-20 flex justify-center items-center text-white px-2",B(t?t.game_name:"")])},[e("div",_e,l(t?m(t.date):"Dátum")+" | "+l(t?w(t.date):"--/--"),1),e("div",fe,[f(l(t?t.prizepool+"€":"Prizepool")+" ",1),n(r(p),{icon:r(J),class:"text-white text-sm ms-2"},null,8,["icon"])])],2)]),_:2},1024))),128))])}}},xe=D({id:"section",state:()=>({section:1}),actions:{setSection(d){this.section=d}}}),we="/img/tournaments/cs2_2.jpg",L=D({id:"server",state:()=>({server:[]}),actions:{async getServers(){try{const d=await K.get("https://api.wade-development.com/api/get-servers");this.server=d.data.servers}catch(d){throw console.error("Error fetching user data:",d),d}}}}),ve={class:"w-full md:px-3 mt-7 px-4"},pe=e("h2",{class:"text-4xl md:px-56 font-bold mb-5"},"CS2 Servery",-1),be={key:0,class:"w-full md:grid grid-cols-1 gap-5 md:px-56"},ye=e("div",{class:"w-1/3 max-md:w-full max-md:h-1/3 h-full overflow-hidden"},[e("img",{src:we,class:"w-full h-full object-cover transition ease-in",alt:""})],-1),ke={class:"w-1/2 md:w-1/3 h-full max-md:h-1/3 flex justify-center items-start ps-5 flex-col"},Se={class:"text-lg md:text-xl font-bold text-black"},je={class:"text-black"},$e={class:"w-1/3 h-full flex justify-center items-center max-md:hidden"},Te=["href"],Ce=e("div",{class:"w-full h-full bg-green-600 flex justify-center items-center font-bold"},[f(" Pripojiť sa "),e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})])],-1),Ie=[Ce],De={class:"w-1/2 h-1/3 flex justify-center items-center md:hidden"},Le=e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),Be={key:1,class:"w-full h-56 flex justify-center items-center"},ze=e("h1",{class:"text-2xl font-bold"},"Neboli pridané žiadne CS2 Servery",-1),Me=[ze],Ne={__name:"listOfServers",setup(d){const u=L(),x=()=>{},w=h=>{const m=h.currentTarget.querySelector("img");m.style.transform="scale(1.2)"},v=h=>{const m=h.currentTarget.querySelector("img");m.style.transform="scale(1)"};return(h,m)=>(a(),i("div",ve,[pe,r(u).server=="[]"?(a(),i("div",be,[(a(!0),i(T,null,C(r(u).server,(g,b)=>(a(),i("div",{key:b,class:"bg-gray-100 border border-gray-200 rounded-xl w-full h-28 max-md:mb-4 flex hover:bg-gray-300 overflow-hidden max-md:flex max-md:flex-col max-md:h-60",onMouseenter:w,onMouseleave:v},[ye,e("div",ke,[e("h1",Se,l(g.name),1),e("p",je,"Adresa: "+l(g.link),1)]),e("div",$e,[e("a",{href:g.link,class:"rounded-xl overflow-hidden w-1/3 h-1/2 flex justify-center items-center"},Ie,8,Te)]),e("div",De,[n(r(O),{onClick:x},{default:c(()=>[f(" Pripojiť sa "),Le]),_:1})])],32))),128))])):(a(),i("div",Be,Me))]))}},He=e("div",null,"Turnaje",-1),Pe=e("div",null,"Turnaje",-1),qe={class:"md:mt-20 w-full z-[50000] md:px-0 bg-slate-900"},Ee={__name:"Tab2Page",setup(d){xe();const u=L();return(()=>{u.getServers()})(),(w,v)=>(a(),I(r(R),null,{default:c(()=>[n(r($),{class:"hidden"},{default:c(()=>[n(r(S),{mode:"ios",class:"md:hidden"},{default:c(()=>[n(r(j),{size:"large",class:"mt-5"},{default:c(()=>[He]),_:1})]),_:1})]),_:1}),n(r(Q),{fullscreen:!0},{default:c(()=>[n(r($),{collapse:"condense",class:"md:hidden"},{default:c(()=>[n(r(S),{class:"mt-[-6.5rem]"},{default:c(()=>[n(r(j),{size:"large",class:"mt-[2.5rem] z-10"},{default:c(()=>[Pe]),_:1})]),_:1})]),_:1}),e("div",qe,[n(U,{title:"Turnaje",description:"Bojisko pre skutočných ešportových majstrov.",class:"bg-[url('/img/IMG_0129(1).JPG')] bg-cover mb-5 md:mb-10"}),n(ge),n(Ne),n(A)])]),_:1})]),_:1}))}};export{Ee as default};
