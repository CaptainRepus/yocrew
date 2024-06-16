import{d as X,r as b,o as n,c as r,a as s,w as a,u as l,I as M,b as S,e as T,f as ee,g as F,h as C,i as g,j as E,k as e,t as i,l as U,F as y,_ as L,m as B,p as W,n as Y,q as z,s as te,v as V,x as oe,y as se,z as le,A as j,B as I,C as P,D as O,E as ne,G as ae}from"./index-BfY2O68G.js";import{M as J,u as G}from"./blogModal-DKQSKqLh.js";import{a as re}from"./axios-DN9wIMCN.js";import{u as H,m as ce}from"./modalTournament-2VtXAtqA.js";const A=X({id:"giveaway",state:()=>({giveaway:""}),actions:{async getGiveaway(){try{const c=await re.get("/JSON/giveaway.json");this.giveaway=c.data.giveaway[0]}catch(c){throw console.error("Error fetching user data:",c),c}}}}),ie={class:"text-2xl font-bold text-center mb-5"},de={class:"text-lg mb-5 px-2"},ue={class:"w-full h-52 rounded-xl border-2 border-green-500 mb-10 overflow-hidden"},me=["src"],he={class:"flex flex-col w-full mb-28"},fe=e("h1",{class:"font-bold text-2xl mb-2 text-center"},"Tu sa prihlásiš",-1),_e=e("p",{class:"text-center mb-5"},"Vyplň tento formulár pre zapojenie sa do giveaway a vyskúšaj svoje šťastie!",-1),ge={__name:"giveawayModal",setup(c){const _=b(),f=b(),o=b(),u=A(),x=()=>_.value.$el.dismiss(null,"cancel"),d=()=>{f.value.$el.value,o.value.$el.value,x()};return(p,t)=>(n(),r(y,null,[s(l(T),null,{default:a(()=>[s(l(M),{class:"hidden"},{default:a(()=>[s(l(S))]),_:1})]),_:1}),s(l(E),{class:"ion-padding"},{default:a(()=>[s(l(ee),{ref_key:"modal",ref:_,trigger:"open-modal"},{default:a(()=>[s(l(T),null,{default:a(()=>[s(l(M),null,{default:a(()=>[s(l(F),{slot:"start"},{default:a(()=>[s(l(C),{onClick:t[0]||(t[0]=m=>x())},{default:a(()=>[g("Zrušiť")]),_:1})]),_:1}),s(l(S),{mode:"ios"},{default:a(()=>[g("Giveaway")]),_:1}),s(l(F),{slot:"end"},{default:a(()=>[s(l(C),{strong:!0,onClick:t[1]||(t[1]=m=>d())},{default:a(()=>[g("Prihlásiť")]),_:1})]),_:1})]),_:1})]),_:1}),s(l(E),{class:"ion-padding"},{default:a(()=>[e("h1",ie,i(l(u).giveaway.name),1),e("p",de,i(l(u).giveaway.description),1),e("div",ue,[e("img",{src:l(u).giveaway.cesta_obrazku,alt:"Obrazok",class:"h-full w-full"},null,8,me)]),e("div",he,[fe,_e,s(l(U),{mode:"md",label:"Tu nahoď svoje meno","label-placement":"stacked",ref_key:"inputName",ref:f,type:"text",placeholder:"Tvoje meno"},null,512),s(l(U),{mode:"md",label:"Tu nahoď svoj email","label-placement":"stacked",ref_key:"inputEmail",ref:o,type:"text",placeholder:"Tvoj email"},null,512)])]),_:1})]),_:1},512)]),_:1})],64))}},xe={components:{giveawayModal:ge},setup(){const c=A();return{giveawayStore:c,getGiveaways:()=>{c.getGiveaway(),console.log(c)}}},mounted(){this.getGiveaways()}},K=c=>(W("data-v-fa98348a"),c=c(),Y(),c),pe={class:"animate relative w-full h-auto md:h-auto bg-green-600 shadow-md border border-gray-700 rounded-lg md:rounded-none overlfow-x-hidden mt-[1rem] mb-5 oveflow-hidden"},ve=K(()=>e("span",{class:"absolute top-[-2rem] left-[-1rem] text-5xl mt-2 mr-2 md:hidden"},"🎉",-1)),we=K(()=>e("span",{class:"absolute bottom-[-1rem] right-[-2rem] text-5xl mt-2 mr-2 md:hidden"},"🎊",-1)),ye={class:"flex flex-col p-2 md:flex-row justify-center items-center"},be={class:"md:w-1/3"},ke={class:"p-2 text-white text-xl text-center font-bold"},$e={class:"p-1 text-white text-md text-center max-md:hidden"},je={class:"flex justify-center items-center md:w-1/4"},ze={id:"open-modal",class:"p-3 text-white text-md text-center bg-green-500 border border-green-900 rounded-lg mt-2 md:mt-0 hover:bg-green-700 max-md:mb-3"};function Ce(c,_,f,o,u,x){const d=B("giveawayModal");return n(),r(y,null,[e("div",pe,[ve,we,e("div",ye,[e("div",be,[e("h1",ke,i(o.giveawayStore.giveaway.name),1),e("h2",$e,i(o.giveawayStore.giveaway.description),1)]),e("div",je,[e("button",ze," Prihlás sa do "+i(o.giveawayStore.giveaway.deadline),1)])])]),s(d)],64)}const Be=L(xe,[["render",Ce],["__scopeId","data-v-fa98348a"]]),De={name:"SponsorSlider",data(){return{sponsors:[{name:"DEV1S",logo:"/img/sponsors/DEV1S.png"},{name:"GetGear",logo:"/img/sponsors/GetGear.png"},{name:"Walzel",logo:"/img/sponsors/logo_Walzel.png"},{name:"NUGOSU",logo:"/img/sponsors/nugosu-logo-head-typo-black (2).svg"},{name:"NUTREND",logo:"/img/sponsors/NUTREND.png"},{name:"Pizzeria Papa Mafia",logo:"/img/sponsors/pizzeria Papa Mafia.svg"}],slideDuration:50}}},Me={class:"overflow-hidden relative"},Se={class:"flex animate-slide"},Te=["src","alt"],Ie=["src","alt"];function Pe(c,_,f,o,u,x){return n(),r("div",Me,[e("div",Se,[(n(!0),r(y,null,z(u.sponsors,(d,p)=>(n(),r("div",{key:"original-"+p,class:"flex-none w-48 h-32 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg mx-2"},[e("img",{src:d.logo,alt:d.name,class:"max-h-full max-w-full"},null,8,Te)]))),128)),(n(!0),r(y,null,z(u.sponsors.concat(u.sponsors).concat(u.sponsors),(d,p)=>(n(),r("div",{key:"duplicate-"+p,class:"flex-none w-48 h-32 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg mx-2"},[e("img",{src:d.logo,alt:d.name,class:"max-h-full max-w-full"},null,8,Ie)]))),128))])])}const Le=L(De,[["render",Pe]]),Ge={class:"bg-gray-900 rounded-lg shadow m-4 max-md:hidden"},Ne={class:"w-full max-w-screen-xl mx-auto p-4 md:py-8"},Ve={class:"sm:flex sm:items-center sm:justify-between"},Ee=e("a",{href:"https://yocrew.eu/",class:"flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"},[e("img",{src:le,class:"h-16",alt:"YoCrew Logo"}),e("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"YoCrew")],-1),Oe={class:"flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"},He={href:"https://instagram.com/yocrew_/"},Ae={href:"https://discord.gg/hnyAMZsQKU"},Fe={href:"https://www.facebook.com/yooocrew/?_rdr"},Ue=e("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),Re={class:"block text-sm text-gray-400 sm:text-center"},We=e("a",{href:"https://yocrew.eu/",class:"text-gray-400 hover:underline hover:text-green-500"},"YoCrew™",-1),Ye={__name:"footer",setup(c){const _=b(new Date().getFullYear());return(f,o)=>(n(),r("footer",Ge,[e("div",Ne,[e("div",Ve,[Ee,e("ul",Oe,[e("li",null,[e("a",He,[s(l(V),{class:"text-gray-400 hover:underline me-4 md:me-6 hover:text-green-500 text-xl",icon:l(te)},null,8,["icon"])])]),e("li",null,[e("a",Ae,[s(l(V),{class:"text-gray-400 hover:underline me-4 md:me-6 hover:text-green-500 text-xl",icon:l(oe)},null,8,["icon"])])]),e("li",null,[e("a",Fe,[s(l(V),{class:"text-gray-400 hover:underline me-4 md:me-6 hover:text-green-500 text-xl",icon:l(se)},null,8,["icon"])])])])]),Ue,e("span",Re,[g("© "+i(_.value)+" ",1),We,g(". Všetky práva sú vyhradené.")]),s(Le,{class:"mt-5"})])]))}},Je={components:{IonButton:C,ModalBlog:J},setup(){const c=G(),_=j(()=>[...c.articles].sort((t,m)=>new Date(m.date)-new Date(t.date))),f=b(null),o=b(!1);function u(t){f.value=t,o.value=!0}function x(){f.value=null,o.value=!1}const d=t=>{switch(t){case"CS2":return"bg-yellow-600 text-white";case"Gaming":return"bg-green-500 text-white";case"LOL":return"bg-blue-500 text-white";case"ESPORT":return"bg-purple-500 text-white";case"SVET":return"bg-lime-500 text-white";case"BRAWL STARS":return"bg-red-500 text-white";default:return"bg-red-500 text-white"}};function p(t){const m=t.split(" ");return m.length>6?m.slice(0,6).join(" ")+"...":t}return{sortedBlog:_,selectedBlog:f,isModalOpen:o,openModal:u,closeModal:x,truncatedBlogName:p,bgFunction:d}},methods:{click(){this.$router.push("/clanky")}}},N=c=>(W("data-v-7ce76f93"),c=c(),Y(),c),Ke={class:"h-full md:h-auto"},Ze={class:"py-3 max-lg:hidden"},qe=N(()=>e("h1",{class:"pb-0 font-bold text-2xl mb-3"}," Pozri si naše články",-1)),Qe={class:"flex flex-col gap-4"},Xe=["href"],et=["src"],tt={class:"p-3 w-full md:w-[60%] flex flex-col justify-center items-start"},ot=["href"],st={class:"mb-1 mt-0 font-bold tracking-tight text-white"},lt={class:"font-normal text-white"},nt={class:"mb-2"},at=["onClick"],rt=N(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),ct={class:"p-3 px-0 lg:hidden"},it=N(()=>e("h1",{class:"font-bold text-2xl mb-3"},"Najnovšie články",-1)),dt={class:"grid grid-cols-1 gap-4"},ut=["href"],mt=["src"],ht={class:"p-5"},ft=["href"],_t={class:"mb-2 text-2xl font-bold tracking-tight text-white"},gt={class:"mb-3 font-normal text-white"},xt={class:"mb-3"},pt=["onClick"],vt=N(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1));function wt(c,_,f,o,u,x){const d=B("ion-button"),p=B("modal-blog");return n(),r("div",Ke,[e("div",Ze,[qe,e("div",Qe,[(n(!0),r(y,null,z(o.sortedBlog.slice(1,6),(t,m)=>(n(),r("div",{key:m,class:"bg-gray-900 border border-gray-800 rounded-lg shadow flex h-44"},[e("a",{href:t.link,class:"relative w-full md:w-[40%] h-[200px] md:h-auto"},[e("img",{class:"rounded-s-lg h-full w-full object-cover",src:t.cesta_obrazku,alt:"Blog Image"},null,8,et),e("div",{class:I(["absolute top-2 right-2 py-1 px-3 rounded-xl font-bold",o.bgFunction(t.tag)])},i(t.tag.toUpperCase()),3)],8,Xe),e("div",tt,[e("a",{href:t.link},[e("h5",st,i(o.truncatedBlogName(t.name)),1)],8,ot),e("p",lt,"Autor: "+i(t.autor),1),e("p",nt,i(t.date),1),e("button",{onClick:k=>o.openModal(t),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"},[g(" Pozrieť viac "),rt],8,at)])]))),128)),s(d,{class:"col-span-2",onClick:x.click},{default:a(()=>[g(" Pozrieť všetky články ")]),_:1},8,["onClick"])])]),e("div",ct,[it,e("div",dt,[(n(!0),r(y,null,z(o.sortedBlog.slice(1,3),(t,m)=>(n(),r("div",{key:m,class:"max-w-sm bg-gray-900 border border-gray-600 rounded-lg shadow"},[e("a",{href:t.link,class:"relative"},[e("img",{class:"rounded-t-lg h-48 w-full",src:t.cesta_obrazku,alt:"Blog Image"},null,8,mt),e("div",{class:I(["absolute top-4 right-4 py-3 px-5 rounded-xl font-bold",o.bgFunction(t.tag)])},i(t.tag.toUpperCase()),3)],8,ut),e("div",ht,[e("a",{href:t.link},[e("h5",_t,i(o.truncatedBlogName(t.name)),1)],8,ft),e("p",gt,i(t.autor),1),e("p",xt,i(t.date),1),e("button",{onClick:k=>o.openModal(t),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"},[g(" Pozrieť viac "),vt],8,pt),o.isModalOpen?(n(),P(p,{key:0,blog:o.selectedBlog,"is-open":o.isModalOpen,onClose:o.closeModal},null,8,["blog","is-open","onClose"])):O("",!0)])]))),128)),s(d,{onClick:x.click},{default:a(()=>[g("Pozrieť všetky články")]),_:1},8,["onClick"])])])])}const yt=L(Je,[["render",wt],["__scopeId","data-v-7ce76f93"]]),bt={},kt={class:"flex justify-center items-center h-[85vh] bg-center bg-no-repeat bg-cover bg-[url('/img/IMG_0050.JPG')] bg-gray-700 bg-blend-multiply"},$t={class:"max-w-screen-xl text-center"},jt=e("h1",{class:"mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"},'"Spájame hráčov, tvoríme šampiónov!"',-1),zt=e("p",{class:"mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"},'"V našej ešportovej organizácii spájame vášeň, technológie a tímovú prácu, aby sme dosiahli vrcholový úspech a inšpirovali novú generáciu hráčov."',-1),Ct={class:"flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"},Bt=e("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1);function Dt(c,_){const f=B("router-link");return n(),r("section",kt,[e("div",$t,[jt,zt,e("div",Ct,[s(f,{to:"/turnaje-servery",class:"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"},{default:a(()=>[g(" Turnaje "),Bt]),_:1}),s(f,{to:"/yocrew",class:"inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"},{default:a(()=>[g(" Náš tím ")]),_:1})])])])}const Mt=L(bt,[["render",Dt]]),St={key:0,class:"text-center text-xl font-bold w-full h-72 md:h-full relative"},Tt={key:0},It=["src"],Pt={class:"absolute bottom-0 flex h-full w-full items-end justify-center z-20"},Lt={class:"bg-gray-900 w-full h-1/2 md:h-1/3 bg-opacity-80 flex justify-center items-center flex-col gap-2"},Gt={class:"text-white"},Nt=e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),Vt={key:1},Et={key:1,class:"w-full h-full flex flex-col"},Ot={class:"h-1/4 w-full flex justify-center items-center"},Ht={class:"text-2xl font-bold flex gap-5 max-md:p-5"},At=e("p",{class:"font-bold z-20 flex justify-center items-center text-white text-xl bg-red-500 px-5 rounded-xl"},[e("span",{class:"animate-pulse"},"●"),g(" LIVE ")],-1),Ft={class:"h-3/4 w-full flex flex-col justify-center items-start p-5 pt-0"},Ut={class:"font-bold text-xl"},Rt={class:"font-bold text-xl"},Wt={class:"mt-3"},Yt=e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),R={__name:"newsPanel",setup(c){const _=G(),f=H(),o=b(null),u=b(!1),x=b(null),d=b(!1);function p(v){o.value=v,u.value=!0}function t(){o.value=null,u.value=!1}function m(v){x.value=v,d.value=!0}function k(){x.value=null,d.value=!1}const h=j(()=>[..._.articles].sort((v,w)=>new Date(v.date)-new Date(w.date))),Z=j(()=>{const v=new Date;return v.setHours(0,0,0,0),f.tournament.filter(w=>{const D=new Date(w.date);return D.setHours(0,0,0,0),D>=v})}),$=j(()=>[...Z.value].sort((v,w)=>new Date(v.date)-new Date(w.date))),q=j(()=>{const v=new Date;if(v.setHours(0,0,0,0),$.value.length>0){const w=new Date($.value[0].date);return w.setHours(0,0,0,0),v.getTime()===w.getTime()}return!1}),Q=b(window.innerWidth<=768);return window.addEventListener("resize",()=>{Q.value=window.innerWidth<=768}),(v,w)=>(n(),r(y,null,[q.value?(n(),r("div",Et,[e("div",Ot,[e("div",Ht,[At,g(" "+i($.value[0].name),1)])]),e("div",Ft,[e("p",Ut,"Hra: "+i($.value[0].game),1),e("p",Rt,"Prizepool: "+i($.value[0].prizepool)+"€",1),e("p",Wt,i($.value[0].description),1),e("button",{onClick:w[1]||(w[1]=D=>m($.value[0])),class:"z-20 px-10 flex items-center mt-7 justify-center h-1/2 max-md:h-10 w-full max-md:mt-5 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"},[g(" Pozrieť viac "),Yt])])])):(n(),r("div",St,[h.value.length>0?(n(),r("div",Tt,[e("img",{src:h.value[0].cesta_obrazku,alt:"Blog Image",class:"absolute object-cover w-full h-full opacity-50 z-10"},null,8,It),e("div",Pt,[e("div",Lt,[e("span",Gt,i(h.value[0].name),1),e("button",{onClick:w[0]||(w[0]=D=>p(h.value[0])),class:"inline-flex items-center px-16 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"},[g(" Pozrieť viac "),Nt])])])])):(n(),r("div",Vt," Loading... ")),u.value?(n(),P(J,{key:2,blog:o.value,"is-open":u.value,onClose:t},null,8,["blog","is-open"])):O("",!0)])),s(ce,{tournament:x.value,"is-open":d.value,onClose:k},null,8,["tournament","is-open"])],64))}},Jt={class:"h-full w-full flex flex-col py-3 max-lg:hidden"},Kt={class:"h-full w-full px-3 max-md:p-0 md:flex-1 flex flex-col justify-between"},Zt=e("h1",{class:"py-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0 max-lg:hidden"},"Mohlo by Vás zaujímať",-1),qt={class:"md:flex-1 flex flex-col gap-2 justify-center overflow-hidden"},Qt={class:"w-full h-1/2 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"},Xt={class:"md:flex-1 flex flex-col gap-2"},eo=["href"],to=e("div",{class:"flex justify-center items-center opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]"},[e("svg",{fill:"#00C55E",class:"absolute top-[-10%] right-[-15%] opacity-65",width:"700px",height:"800px",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M9.103.435a1.753 1.753 0 0 1 1.652-.362c.218.072.406.203.609.333.16.101.348.145.493.261.072.058.014.16.014.232.189.45.29.942.13 1.42-.13.16-.362.203-.55.276-.03.203.043.39.072.594-.043.029-.072.058-.116.087.276-.015.551-.073.827-.13.101-.102.26-.044.39-.059.015-.203.088-.391.088-.594a.34.34 0 0 0 .116-.029c.014.145 0 .29.043.435.073.058.189.029.276.043 0 .058 0 .116.014.174 1.681-.014 3.377 0 5.058 0v.247h.16V2.42h.188c0 .26-.014.507 0 .768a.11.11 0 0 0 .073.029c0 .029.014.087.014.116.058-.058.13-.102.218-.073.014.044.029.087.043.145-.058.058-.087.13-.058.218.464.014.928 0 1.406 0 .044-.058.116-.087.189-.116a.464.464 0 0 1 .087.058h.68a.874.874 0 0 1 .015.333h-.696a.46.46 0 0 1-.087.073c-.072-.044-.13-.073-.202-.116h-1.261c-.247.072-.508.058-.754.014v.275H16.16a.532.532 0 0 1-.29.13c.044.218-.202.276-.29.436a.45.45 0 0 1-.231.174c-.073.449.087.87.203 1.29-.13.029-.276.072-.406.101-.073.29-.145.594-.203.884a.848.848 0 0 1-.507.58c-.174.203-.406.406-.682.42-.101.03-.174-.043-.246-.101-.362.029-.696-.145-1.015-.29-.347-.16-.666-.363-1-.55.03.202-.072.376-.145.55.16.072.377.13.464.304.058.13.116.276.116.435-.014.522-.072 1.044-.101 1.565.014.377-.174.754-.435 1.03-.174-.015-.319-.088-.478-.16-.058.13-.189.26-.116.42.058.189.058.392.145.566a6.674 6.674 0 0 1 1.217 1.753c.304.624.536 1.276.783 1.928.043 0 .13-.015.174-.015.058.189 0 .406.116.58.101.16.072.348.072.536-.029.435-.058.87-.101 1.305-.03.304-.102.609-.145.913.014.232.116.464.101.696-.014.217-.014.449-.188.608.014.493-.116.986.058 1.464.232.32.493.623.768.899.304.145.667.174.928.435.1.16.043.347.014.521a6.732 6.732 0 0 1-1.87 0c-.246-.058-.478-.159-.724-.188-.334.014-.725.145-1.03-.087-.028-.391.117-.768.189-1.145.029-.13.16-.217.145-.348-.03-.45-.058-.913-.087-1.362-.058-.03-.16-.058-.145-.145 0-.218-.072-.435-.13-.638a10.821 10.821 0 0 1-.16-1.681c-.014-.16.087-.276.203-.377.03-.246.058-.507.073-.754-.044-.13-.145-.232-.203-.348-.261.03-.638.087-.797-.188-.377-.565-.769-1.145-1.145-1.71-.16-.015-.348 0-.493-.102-.16-.174-.261-.405-.363-.623-.043.174-.072.362-.174.507-.087.145-.231.247-.333.377-.101.232-.188.464-.275.696-.102.29-.247.58-.276.899a1.543 1.543 0 0 1-.101.449c-.073.116-.203.16-.319.217-.087.189-.145.377-.275.537-.087.101-.232.13-.29.26-.058.174-.145.334-.218.493-.029.174.087.363.03.536-.102.435-.32.841-.522 1.232-.102.29-.174.595-.32.87-.057.116-.202.145-.318.16-.13.318-.276.623-.362.956a5.437 5.437 0 0 0-.03.971c0 .145.088.261.146.391.057.174.014.348-.015.522-.565.073-1.145.13-1.696-.043-.058-.044-.043-.116-.058-.174-.043-.261-.072-.536.015-.783.188-.681.348-1.362.536-2.043-.072-.073-.174-.13-.174-.247-.014-.188 0-.391.044-.58.087-.319.318-.565.434-.87.044-.13.03-.26.044-.39 0-.305.174-.551.304-.812.13-.218.232-.45.406-.638.116-.101.116-.26.203-.391.087-.16.232-.29.232-.479.029-.231-.058-.463-.03-.695.059-.681.19-1.348.305-2.03-.058-.072-.145-.144-.174-.246.015-.072.03-.13.044-.203l-.13-.217c.057-.087.115-.188.173-.275-.058-.044-.13-.102-.188-.145.072-.218.043-.537.304-.638.03.014.102.029.13.043-.043-.376-.043-.768-.086-1.145a3.534 3.534 0 0 1-.073-1.232c.145-.217.42-.304.667-.318-.319-.073-.638-.102-.942-.203-.015-.261.029-.522.072-.783.13-.507.073-1.029.145-1.55.073-.146.261-.175.42-.146.189.03.377-.029.566-.087 0-.072.014-.16 0-.232-.116-.507-.087-1.029 0-1.521.116-.638.377-1.261.855-1.71.319-.305.783-.45 1.217-.435.145 0 .232.145.348.232.058-.058.116-.116.16-.174-.073-.247-.189-.508-.174-.769.029-.58.217-1.174.652-1.565m4.522 4.102c.029.029.029.029 0 0m.203.029c.014.101.043.203-.015.29-.072.029-.16.029-.232.072.203 0 .406.015.61 0 .159-.043.1-.246.1-.362-.1-.116-.318-.044-.463 0m-.507.609c.145.159.217.405.347.565.189-.247.334-.508.551-.725-.26-.015-.522.015-.782-.015-.044.058-.073.116-.116.174z"})])],-1),oo={class:"h-1/4 w-full flex items-end"},so={class:"h-3/4 w-full flex flex-col gap-2"},lo={class:"font-semibold z-20 text-white"},no={class:"font-semibold z-20 text-white"},ao={class:"text-sm z-20 text-white"},ro={key:1,class:"h-full w-full bg-gray-900 border border-gray-800 rounded-xl flex justify-center items-center text-3xl p-5 text-center font-semibold"},co={class:"flex justify-center pt-3 w-full"},io={class:"h-full w-full flex flex-col py-3 md:hidden"},uo=e("h1",{class:"ps-3 py-3 font-bold text-2xl max-md:mb-2 max-md:ps-0"},"Mohlo by Vás zaujímať",-1),mo={class:"h-full w-full px-3 max-md:p-0 flex flex-col justify-between"},ho={class:"flex flex-col gap-2 justify-center overflow-hidden"},fo={class:"w-full bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"},_o={class:"flex flex-col gap-2"},go=["href"],xo=e("div",{class:"absolute flex justify-center items-center opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]"},[e("svg",{fill:"#00C55E",width:"700px",height:"800px",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M9.103.435a1.753 1.753 0 0 1 1.652-.362c.218.072.406.203.609.333.16.101.348.145.493.261.072.058.014.16.014.232.189.45.29.942.13 1.42-.13.16-.362.203-.55.276-.03.203.043.39.072.594-.043.029-.072.058-.116.087.276-.015.551-.073.827-.13.101-.102.26-.044.39-.059.015-.203.088-.391.088-.594a.34.34 0 0 0 .116-.029c.014.145 0 .29.043.435.073.058.189.029.276.043 0 .058 0 .116.014.174 1.681-.014 3.377 0 5.058 0v.247h.16V2.42h.188c0 .26-.014.507 0 .768a.11.11 0 0 0 .073.029c0 .029.014.087.014.116.058-.058.13-.102.218-.073.014.044.029.087.043.145-.058.058-.087.13-.058.218.464.014.928 0 1.406 0 .044-.058.116-.087.189-.116a.464.464 0 0 1 .087.058h.68a.874.874 0 0 1 .015.333h-.696a.46.46 0 0 1-.087.073c-.072-.044-.13-.073-.202-.116h-1.261c-.247.072-.508.058-.754.014v.275H16.16a.532.532 0 0 1-.29.13c.044.218-.202.276-.29.436a.45.45 0 0 1-.231.174c-.073.449.087.87.203 1.29-.13.029-.276.072-.406.101-.073.29-.145.594-.203.884a.848.848 0 0 1-.507.58c-.174.203-.406.406-.682.42-.101.03-.174-.043-.246-.101-.362.029-.696-.145-1.015-.29-.347-.16-.666-.363-1-.55.03.202-.072.376-.145.55.16.072.377.13.464.304.058.13.116.276.116.435-.014.522-.072 1.044-.101 1.565.014.377-.174.754-.435 1.03-.174-.015-.319-.088-.478-.16-.058.13-.189.26-.116.42.058.189.058.392.145.566a6.674 6.674 0 0 1 1.217 1.753c.304.624.536 1.276.783 1.928.043 0 .13-.015.174-.015.058.189 0 .406.116.58.101.16.072.348.072.536-.029.435-.058.87-.101 1.305-.03.304-.102.609-.145.913.014.232.116.464.101.696-.014.217-.014.449-.188.608.014.493-.116.986.058 1.464.232.32.493.623.768.899.304.145.667.174.928.435.1.16.043.347.014.521a6.732 6.732 0 0 1-1.87 0c-.246-.058-.478-.159-.724-.188-.334.014-.725.145-1.03-.087-.028-.391.117-.768.189-1.145.029-.13.16-.217.145-.348-.03-.45-.058-.913-.087-1.362-.058-.03-.16-.058-.145-.145 0-.218-.072-.435-.13-.638a10.821 10.821 0 0 1-.16-1.681c-.014-.16.087-.276.203-.377.03-.246.058-.507.073-.754-.044-.13-.145-.232-.203-.348-.261.03-.638.087-.797-.188-.377-.565-.769-1.145-1.145-1.71-.16-.015-.348 0-.493-.102-.16-.174-.261-.405-.363-.623-.043.174-.072.362-.174.507-.087.145-.231.247-.333.377-.101.232-.188.464-.275.696-.102.29-.247.58-.276.899a1.543 1.543 0 0 1-.101.449c-.073.116-.203.16-.319.217-.087.189-.145.377-.275.537-.087.101-.232.13-.29.26-.058.174-.145.334-.218.493-.029.174.087.363.03.536-.102.435-.32.841-.522 1.232-.102.29-.174.595-.32.87-.057.116-.202.145-.318.16-.13.318-.276.623-.362.956a5.437 5.437 0 0 0-.03.971c0 .145.088.261.146.391.057.174.014.348-.015.522-.565.073-1.145.13-1.696-.043-.058-.044-.043-.116-.058-.174-.043-.261-.072-.536.015-.783.188-.681.348-1.362.536-2.043-.072-.073-.174-.13-.174-.247-.014-.188 0-.391.044-.58.087-.319.318-.565.434-.87.044-.13.03-.26.044-.39 0-.305.174-.551.304-.812.13-.218.232-.45.406-.638.116-.101.116-.26.203-.391.087-.16.232-.29.232-.479.029-.231-.058-.463-.03-.695.059-.681.19-1.348.305-2.03-.058-.072-.145-.144-.174-.246.015-.072.03-.13.044-.203l-.13-.217c.057-.087.115-.188.173-.275-.058-.044-.13-.102-.188-.145.072-.218.043-.537.304-.638.03.014.102.029.13.043-.043-.376-.043-.768-.086-1.145a3.534 3.534 0 0 1-.073-1.232c.145-.217.42-.304.667-.318-.319-.073-.638-.102-.942-.203-.015-.261.029-.522.072-.783.13-.507.073-1.029.145-1.55.073-.146.261-.175.42-.146.189.03.377-.029.566-.087 0-.072.014-.16 0-.232-.116-.507-.087-1.029 0-1.521.116-.638.377-1.261.855-1.71.319-.305.783-.45 1.217-.435.145 0 .232.145.348.232.058-.058.116-.116.16-.174-.073-.247-.189-.508-.174-.769.029-.58.217-1.174.652-1.565m4.522 4.102c.029.029.029.029 0 0m.203.029c.014.101.043.203-.015.29-.072.029-.16.029-.232.072.203 0 .406.015.61 0 .159-.043.1-.246.1-.362-.1-.116-.318-.044-.463 0m-.507.609c.145.159.217.405.347.565.189-.247.334-.508.551-.725-.26-.015-.522.015-.782-.015-.044.058-.073.116-.116.174z"})])],-1),po={class:"h-1/4 w-full flex items-end"},vo={class:"h-3/4 w-full flex flex-col gap-2"},wo={class:"text-lg font-semibold z-20 text-white"},yo={class:"text-lg font-semibold z-20 text-white"},bo={class:"text-sm z-20 text-white"},ko={key:1,class:"h-20 w-full bg-gray-900 border border-gray-800 rounded-xl flex justify-center items-center text-3xl font-semibold"},$o={class:"flex justify-center pt-3 w-full"},jo={__name:"tournamentClose",setup(c){const _=H();G(),Array.isArray(_.tournament)||(_.tournament=[]);const f=j(()=>{const t=new Date;return _.tournament.filter(m=>new Date(m.date)>=t)}),o=j(()=>[...f.value].sort((t,m)=>new Date(t.date)-new Date(m.date))),u=t=>{const m={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString("sk-SK",m)},x=()=>{this.$router.push("/turnaje-servery")},d=t=>{if(!t)return"";const m=t.split(" ");return m.length>15?m.slice(0,15).join(" ")+"...":t},p=t=>t?t.split(" ").length>2?"text-xl max-md:text-lg":"text-2xl max-md:text-xl":"";return(t,m)=>{const k=B("router-link");return n(),r(y,null,[e("div",Jt,[e("div",Kt,[Zt,e("div",qt,[e("div",Qt,[s(R)]),e("div",Xt,[(n(),r(y,null,z(2,h=>(n(),r(y,{key:h},[o.value[h-1]?(n(),r("a",{key:0,href:o.value[h-1].link,class:"relative h-full w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0"},[to,e("div",oo,[e("h1",{class:I([p(o.value[h-1].name),"m-0 font-bold z-20 text-white"])},i(o.value[h-1].name),3)]),e("div",so,[e("p",lo,i(o.value[h-1].game),1),e("p",no,i(u(o.value[h-1].date)),1),e("p",ao,i(d(o.value[h-1].description)),1)])],8,eo)):(n(),r("div",ro," Pripravujeme pre Vás turnaje... "))],64))),64))])]),e("div",co,[s(k,{to:"/turnaje-servery",class:"w-full"},{default:a(()=>[s(l(C),{onClick:x,class:"w-full"},{default:a(()=>[g(" Pozrieť všetky turnaje ")]),_:1})]),_:1})])])]),e("div",io,[uo,e("div",mo,[e("div",ho,[e("div",fo,[s(R)]),e("div",_o,[(n(),r(y,null,z(2,h=>(n(),r(y,{key:h},[o.value[h-1]?(n(),r("a",{key:0,href:o.value[h-1].link,class:"relative h-52 w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0"},[xo,e("div",po,[e("h1",{class:I([p(o.value[h-1].name),"m-0 font-bold z-20 text-white"])},i(o.value[h-1].name),3)]),e("div",vo,[e("p",wo,i(o.value[h-1].game),1),e("p",yo,i(u(o.value[h-1].date)),1),e("p",bo,i(d(o.value[h-1].description)),1)])],8,go)):(n(),r("div",ko," Niesú žiadne turnaje "))],64))),64))])]),e("div",$o,[s(k,{to:"/turnaje-servery",class:"w-full"},{default:a(()=>[s(l(C),{onClick:x,class:"w-full"},{default:a(()=>[g(" Pozrieť všetky turnaje ")]),_:1})]),_:1})])])])],64)}}},zo={class:"px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0"},Co={class:"flex flex-col justify-center md:flex-row md:px-10"},Bo={class:"flex flex-col md:flex-row md:px-28 gap-1 md:mt-3"},Do={class:"w-full md:flex-1"},Mo={class:"w-full md:flex-1 md:h-full md:hidden lg:block"},So=e("div",{class:"flex justify-center items-center flex-col md:flex-row my-5"},[e("div",{class:"bg-[url('/img/background.jpg')] bg-cover w-full h-auto flex flex-col justify-center items-center p-4 mx-4 rounded-xl"},[e("h1",{class:"mb-5 font-bold text-xl p-3 bg-green-500 rounded-xl md:text-4xl"},"Príďte na stream!"),e("iframe",{class:"rounded-2xl border-4 border-green-500 w-full md:w-1/2 h-56 md:h-96",src:"https://player.twitch.tv/?channel=yocrew_games&parent=yocrew.eu",frameborder:"0",allowfullscreen:"true",scrolling:"no"})])],-1),Go={__name:"Tab1Page",setup(c){const _=G(),f=A(),o=H(),u=()=>{_.getBlog()},x=()=>{f.getGiveaway()},d=()=>{o.getTournament()};return ne(()=>{u(),x(),d()}),(p,t)=>(n(),P(l(ae),{class:"overflow-hidden"},{default:a(()=>[s(l(T),null,{default:a(()=>[s(l(M),{mode:"ios",class:"md:hidden"},{default:a(()=>[s(l(S),{size:"large",class:"mt-5"},{default:a(()=>[g("Domov")]),_:1})]),_:1})]),_:1}),s(l(E),{fullscreen:!0},{default:a(()=>[s(l(T),{collapse:"condense",class:"md:hidden"},{default:a(()=>[s(l(M),{class:"mt-[-6.5rem]"},{default:a(()=>[s(l(S),{size:"large",class:"mt-[2.5rem] z-10"},{default:a(()=>[g("Domov")]),_:1})]),_:1})]),_:1}),e("div",zo,[l(f).giveaway!==""?(n(),P(Be,{key:0})):O("",!0),s(Mt,{class:"max-md:hidden"}),e("div",Co,[e("div",Bo,[e("div",Do,[s(yt)]),e("div",Mo,[s(jo)])])]),So,s(Ye)])]),_:1})]),_:1}))}};export{Go as default};
