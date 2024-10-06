System.register(["./index-legacy-Blqp2-9f.js"],(function(e,t){"use strict";var l,a,n,s,r,i,o,c,d,u,m,x,f,g,h,w,v,p,b,y,k,j,_,S,D,T,C,L,z,B,M,E,G,H,P,R,A,I,N,O,V;return{setters:[e=>{l=e.m,a=e.n,n=e.r,s=e.o,r=e.x,i=e.b,o=e.w,c=e.a,d=e.d,u=e.e,m=e.I,x=e.y,f=e.z,g=e.i,h=e.f,w=e.j,v=e.g,p=e.A,b=e.B,y=e.F,k=e.q,j=e.l,_=e.s,S=e.t,D=e.C,T=e.D,C=e.E,L=e.G,z=e.H,B=e.J,M=e.c,E=e.K,G=e.R,H=e.L,P=e.M,R=e.N,A=e.O,I=e.Q,N=e.S,O=e.T,V=e.k}],execute:function(){var t=document.createElement("style");t.textContent=".animate[data-v-60e4971e]{animation:pulse-60e4971e 5s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse-60e4971e{0%,to{background-color:1}50%{opacity:1.8}}.typing-animation[data-v-024c6e24]{display:inline-block;border-right:3px solid black;white-space:nowrap;overflow:hidden;animation:typing-024c6e24 3.5s steps(20,end),blink-024c6e24 .75s step-end infinite}@keyframes typing-024c6e24{0%{width:0}to{width:15ch}}@keyframes blink-024c6e24{0%,to{border-color:transparent}50%{border-color:#000}}\n",document.head.appendChild(t);const $=l({id:"giveaway",state:()=>({giveaway:""}),actions:{async getGiveaway(){try{const e=await a.get("https://api.wade-development.com/api/get-giveaways/");this.giveaway=e.data.giveaways[0]}catch(e){throw console.error("Error fetching user data:",e),e}}}}),U={class:"text-2xl font-bold text-center mb-5"},q={class:"text-lg mb-5 px-2"},F={class:"w-full h-52 rounded-xl border-2 border-green-500 mb-10 overflow-hidden"},W=["src"],K={class:"flex flex-col w-full mb-28"},J=v("h1",{class:"font-bold text-2xl mb-2 text-center"},"Tu sa prihlásiš",-1),Q=v("p",{class:"text-center mb-5"},"Vyplň tento formulár pre zapojenie sa do giveaway a vyskúšaj svoje šťastie!",-1),Z={components:{giveawayModal:{__name:"giveawayModal",setup(e){const t=n(),l=n(),a=n(),k=$(),j=()=>t.value.$el.dismiss(null,"cancel");return(e,n)=>(s(),r(y,null,[i(c(m),null,{default:o((()=>[i(c(d),{class:"hidden"},{default:o((()=>[i(c(u))])),_:1})])),_:1}),i(c(w),{class:"ion-padding"},{default:o((()=>[i(c(x),{ref_key:"modal",ref:t,trigger:"open-modal"},{default:o((()=>[i(c(m),null,{default:o((()=>[i(c(d),null,{default:o((()=>[i(c(f),{slot:"start"},{default:o((()=>[i(c(g),{onClick:n[0]||(n[0]=e=>j())},{default:o((()=>[h("Zrušiť")])),_:1})])),_:1}),i(c(u),{mode:"ios"},{default:o((()=>[h("Giveaway")])),_:1}),i(c(f),{slot:"end"},{default:o((()=>[i(c(g),{strong:!0,onClick:n[1]||(n[1]=e=>(l.value.$el.value,a.value.$el.value,void j()))},{default:o((()=>[h("Prihlásiť")])),_:1})])),_:1})])),_:1})])),_:1}),i(c(w),{class:"ion-padding"},{default:o((()=>[v("h1",U,p(c(k).giveaway.name),1),v("p",q,p(c(k).giveaway.description),1),v("div",F,[v("img",{src:c(k).giveaway.cesta_obrazku,alt:"Obrazok",class:"h-full w-full"},null,8,W)]),v("div",K,[J,Q,i(c(b),{mode:"md",label:"Tu nahoď svoje meno","label-placement":"stacked",ref_key:"inputName",ref:l,type:"text",placeholder:"Tvoje meno"},null,512),i(c(b),{mode:"md",label:"Tu nahoď svoj email","label-placement":"stacked",ref_key:"inputEmail",ref:a,type:"text",placeholder:"Tvoj email"},null,512)])])),_:1})])),_:1},512)])),_:1})],64))}}},setup(){const e=$();return{giveawayStore:e,getGiveaways:()=>{e.getGiveaway(),console.log(e)}}},mounted(){this.getGiveaways()}},X=e=>(_("data-v-60e4971e"),e=e(),S(),e),Y={class:"animate mx-3 relative flex justify-center items-center h-auto md:h-56 bg-slate-800 shadow-md border border-gray-800 rounded-lg md:rounded-xl overlfow-x-hidden my-[2rem] mb-5 oveflow-hidden"},ee=X((()=>v("span",{class:"absolute top-[-2rem] left-[-1rem] text-5xl mt-2 mr-2"},"🎉",-1))),te=X((()=>v("span",{class:"absolute bottom-[-1rem] right-[-1.5rem] text-5xl mt-2 mr-2"},"🎊",-1))),le={class:"flex flex-col md:gap-5 p-2 md:flex-row justify-center items-center"},ae={class:"md:w-1/3"},ne={class:"p-2 text-green-500 text-xl text-center font-bold"},se={class:"p-1 text-white md:text-green-500 text-md text-center max-md:hidden"},re={class:"flex justify-center items-center"},ie={id:"open-modal",class:"py-3 px-5 text-md text-center bg-green-500 border border-green-900 rounded-lg mt-2 md:mt-0 hover:bg-green-700 max-md:mb-3"},oe=k(Z,[["render",function(e,t,l,a,n,o){const c=j("giveawayModal");return s(),r(y,null,[v("div",Y,[ee,te,v("div",le,[v("div",ae,[v("h1",ne,p(a.giveawayStore.giveaway.name),1),v("h2",se,p(a.giveawayStore.giveaway.description),1)]),v("div",re,[v("button",ie," Prihlás sa do "+p(a.giveawayStore.giveaway.deadline),1)])])]),i(c)],64)}],["__scopeId","data-v-60e4971e"]]),ce={class:"h-full md:h-auto"},de={class:"flex flex-col gap-4"},ue={class:"w-full px-2 md:w-[30%] h-[200px] md:h-auto transition ease-in rounded-lg overflow-hidden"},me=["src"],xe={class:"py-3 px-2 w-full md:w-[70%] flex flex-col justify-center items-start"},fe={class:"mb-2 flex justify-start items-center md:flex-row w-1/2"},ge={class:"md:mt-0 md:ms-2 ms-5 text-md flex items-center justify-center hover:text-gray-400 transition ease-in text-white"},he={class:"text-xs ms-2 text-white"},we={class:"mb-1 mt-0 font-semibold tracking-tight text-white text-[1.3rem] hover:text-gray-400 transition ease-in"},ve=["innerHTML"],pe={class:"text-[0.6rem] text-slate-400 flex flex-row justify-center items-center"},be=k({components:{IonButton:g,IonIcon:D},setup(){const e=T();return{sortedBlog:C((()=>[...e.articles].sort(((e,t)=>new Date(t.date)-new Date(e.date))))),bgFunction:e=>{switch(e){case"CS2":return"bg-yellow-600 text-white hover:bg-yellow-800";case"Gaming":return"bg-green-500 text-white hover:bg-green-700";case"LOL":return"bg-blue-500 text-white hover:bg-blue-700";case"ESPORT":return"bg-purple-500 text-white hover:bg-purple-700";case"SVET":return"bg-lime-500 text-white hover:bg-lime-700";default:return"bg-red-500 text-white hover:bg-red-700"}},truncatedBlogName:function(e){if(!e)return"";const t=e.split(" ");return t.length>6?t.slice(0,15).join(" ")+"...":e},truncatedBlogDescription:function(e){if(!e)return"";const t=e.split(" ");return t.length>15?t.slice(0,17).join(" ")+"...":e},personCircle:L,time:z,calculateReadingTime:function(e){if(!e)return"";const t=e.split(" ").length/200;return Math.ceil(t)},whenUploaded:e=>{const t=new Date,l=new Date(e);return l.toDateString()===t.toDateString()?"DNES":l.toDateString()===new Date(t.setDate(t.getDate()-1)).toDateString()?"VČERA":e}}},methods:{click(){this.$router.push("/clanky")}},async created(){const e=T();try{await e.getBlog()}catch(t){console.error("Error fetching blog articles:",t)}}},[["render",function(e,t,l,a,n,c){const d=j("ion-icon"),u=j("router-link");return s(),r("div",ce,[v("div",null,[v("div",de,[(s(!0),r(y,null,B(a.sortedBlog.slice(1,6),((e,t)=>(s(),M(u,{to:{name:"Article",params:{slug:e.slug}},key:t,class:"rounded-lg shadow flex flex-col md:flex-row h-auto w-full md:w-[45vw]"},{default:o((()=>[v("div",ue,[v("img",{class:"rounded-lg h-full w-full object-cover hover:scale-110 transition ease-in",src:e.image_path,alt:"Blog Image"},null,8,me)]),v("div",xe,[v("div",fe,[v("div",{class:E(["flex justify-center items-center px-4 rounded-2xl font-bold text-xs transition ease-in",a.bgFunction(e.tag)])},p(e.tag.toUpperCase()),3),v("div",ge,[h("|"),v("span",he,p(a.whenUploaded(e.date)),1)])]),v("div",null,[v("h5",we,p(e.title),1)]),v("p",{class:"mb-1 font-normal text-white text-sm hover:text-gray-400 transition ease-in",innerHTML:a.truncatedBlogDescription(e.content)},null,8,ve),v("p",pe,[i(d,{icon:a.personCircle,class:"text-gray-400 text-sm me-1"},null,8,["icon"]),h(p(e.author)+" ",1),i(d,{icon:a.time,class:"text-gray-400 text-sm ms-4 me-1"},null,8,["icon"]),h(" "+p(a.calculateReadingTime(e.content))+" min. čítania ",1)])])])),_:2},1032,["to"])))),128))])])])}]]),ye={},ke={class:"flex items-center justify-center pt-10"},je=[(e=>(_("data-v-024c6e24"),e=e(),S(),e))((()=>v("h1",{class:"text-4xl font-bold text-gray-100"},[v("span",{class:"typing-animation"},"Welcome, Leonard")],-1)))],_e=k(ye,[["render",function(e,t){return s(),r("div",ke,je)}],["__scopeId","data-v-024c6e24"]]),Se={class:"rounded-xl overflow-hidden h-[49%]"},De=["src"],Te={class:"flex justify-start items-center h-[10%] max-md:my-3"},Ce={class:"ms-2 text-md md:text-lg flex items-center justify-center hover:text-gray-400 transi ease-in text-white"},Le={class:"text-md md:text-lg ms-2 text-white"},ze={class:"h-[35%] w-full"},Be={class:"mb-3 text-3xl md:text-[2rem] font-bold hover:text-gray-400 transition ease-in text-white"},Me=["innerHTML"],Ee={class:"h-[5%] w-full"},Ge={class:"text-[1rem] md:text-[0.8rem] text-slate-400 flex pt-5 items-center"},He={__name:"newestArticle",setup(e){const t=T(),l=C((()=>[...t.articles].sort(((e,t)=>new Date(t.date)-new Date(e.date))))),a=e=>{switch(e){case"CS2":return"bg-yellow-600 text-white hover:bg-yellow-800";case"Gaming":return"bg-green-500 text-white hover:bg-green-700";case"LOL":return"bg-blue-500 text-white hover:bg-blue-700";case"ESPORT":return"bg-purple-500 text-white hover:bg-purple-700";case"SVET":return"bg-lime-500 text-white hover:bg-lime-700";default:return"bg-red-500 text-white hover:bg-red-700"}},n=e=>{const t=new Date,l=new Date(e);return t.toDateString()===l.toDateString()?"DNES":(t-l)/864e5<1?"VČERA":e},d=e=>{if(!e)return"";const t=e.split(" ");return t.length>20&&innerWidth>1024?t.slice(0,50).join(" ")+"...":innerWidth<768?t.slice(0,20).join(" ")+"...":t.join(" ")},u=e=>{if(!e)return"";const t=e.split(" ").length/200;return Math.ceil(t)};return(e,t)=>(s(!0),r(y,null,B(l.value.slice(0,1),((e,t)=>(s(),M(c(G),{to:{name:"Article",params:{slug:e.slug}},class:"w-full h-full bg-slate-700"},{default:o((()=>[v("div",Se,[v("img",{src:e.image_path,alt:"Blog obrazok",class:"w-full h-full object-cover hover:scale-110 transition ease-in"},null,8,De)]),v("div",Te,[v("div",{class:E(["flex justify-center items-center px-3 rounded-2xl font-bold text-md md:text-lg transition ease-in",a(e.tag)])},p(e.tag.toUpperCase()),3),v("div",Ce,[h("|"),v("span",Le,p(n(e.date)),1)])]),v("div",ze,[v("h1",Be,p(e.title),1),v("p",{class:"hover:text-gray-400 transition ease-in text-white",innerHTML:d(e.content)},null,8,Me)]),v("div",Ee,[v("p",Ge,[i(c(D),{icon:c(L),class:"text-gray-400 text-lg me-1"},null,8,["icon"]),h(p(e.author)+" ",1),i(c(D),{icon:c(z),class:"text-gray-400 text-lg ms-4 me-1"},null,8,["icon"]),h(" "+p(u(e.content))+" min. čítania ",1)])])])),_:2},1032,["to"])))),256))}},Pe={class:"w-full h-full md:h-96 flex flex-col md:flex-row gap-2 px-4 md:px-0"},Re=["src"],Ae={class:"relative w-full h-1/3 md:h-3/5 overflow-hidden z-20"},Ie={key:0,class:"absolute bottom-0 left-3"},Ne={class:"font-semibold text-sm text-white hover:text-gray-300 transition ease-in"},Oe={class:"font-bold text-lg text-white hover:text-gray-300 transition ease-in"},Ve={key:1,class:"absolute bottom-0 left-3"},$e=[v("h1",{class:"font-semibold text-sm text-white"},"--/--",-1),v("h1",{class:"font-bold text-xl md:text-lg text-white transition ease-in hover:text-gray-300"},"Na turnaji pracujeme",-1)],Ue={key:0,class:"h-1/3 w-full flex justify-start items-center text-sm text-white transition ease-in hover:text-gray-300"},qe={key:1,class:"h-1/3 w-full flex justify-start items-center text-sm text-white"},Fe={class:"h-1/4 w-full flex justify-start items-center gap-2"},We={class:"h-5/6 w-[45%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},Ke={class:"h-5/6 w-[30%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},Je={class:"h-5/6 w-[25%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},Qe={class:"h-[42%] w-full flex justify-start items-center overflow-hidden text-white"},Ze={class:"text-sm hover:text-gray-300 transition ease-in"},Xe={class:"w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold transition ease-in hover:text-gray-300"},Ye={class:"w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold ps-2 transition ease-in hover:text-gray-300"},et={__name:"tournaments",setup(e){const t=H(),l=C((()=>[...t.tournament].sort(((e,t)=>new Date(e.date)-new Date(t.date)))));C((()=>{const e=new Date;return e.setHours(0,0,0,0),l.value.filter((t=>{const l=new Date(t.date);return l.setHours(0,0,0,0),l>=e}))}));const a=C((()=>{const e=l.value.slice(0,2);for(;e.length<2;)e.push(null);return e})),n=e=>new Date(e).toLocaleDateString("sk-SK",{year:"numeric",month:"long",day:"numeric"}),d=e=>{const t=e.split(" ");return t.length>10?t.slice(0,10).join(" ")+"...":e},u=e=>{const t=new Date(e);return`${t.getHours()}:${t.getMinutes()}`},m=e=>{switch(e){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"bg-[#ea580cf2]";case"LoL":return"bg-sky-600";case"Brawl Stars":return"bg-red-500";default:return"bg-green-600"}},x=e=>{switch(e){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"bg-[#9a3412f2]";case"LoL":return"bg-sky-800";case"Brawl Stars":return"bg-red-700";default:return"bg-green-900"}},f=e=>{switch(e){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"/img/tournaments/cs2_2.jpg";case"LoL":case"Brawl Stars":return"";default:return"/img/tournaments/yocrew-example.png"}},g=e=>{if(e&&e.currentTarget){const t=e.currentTarget.querySelector("img");t&&(t.style.transform="scale(1.2)")}},w=e=>{if(e&&e.currentTarget){const t=e.currentTarget.querySelector("img");t&&(t.style.transform="scale(1)")}};return P((()=>{t.getTournament()})),(e,t)=>{const l=j("router-link");return s(),r("div",Pe,[(s(!0),r(y,null,B(a.value,((e,t)=>(s(),M(l,{key:t,to:e?{name:"Tournament",params:{slug:e.slug}}:"/",class:"relative w-full md:w-1/4 h-72 md:h-full rounded-2xl overflow-hidden flex flex-col",onMouseenter:g,onMouseleave:w},{default:o((()=>[v("img",{src:f(e?e.game_name:" "),alt:"Tournament image",class:"absolute h-56 md:h-full w-full object-cover transition ease-in z-10 max-md:blur-[2px]"},null,8,Re),v("div",Ae,[e?(s(),r("div",Ie,[v("h1",Ne,p(e.game_name),1),v("h1",Oe,p(e.name),1)])):(s(),r("div",Ve,$e))]),v("div",{class:E(["w-full h-1/2 md:h-[30%] flex flex-col px-4 z-20",m(e?e.game_name:"")])},[e?(s(),r("div",Ue," Registrácia do: "+p(n(e.date_reg)),1)):(s(),r("div",qe," --/-- ")),v("div",Fe,[v("div",We,[i(c(D),{icon:c(R),class:"text-black text-sm me-2"},null,8,["icon"]),h(" "+p(e?e.bracket:"-/--"),1)]),v("div",Ke,[i(c(D),{icon:c(A),class:"text-black text-sm me-2"},null,8,["icon"]),h(" "+p(e?e.format:"-/--"),1)]),v("div",Je,[i(c(D),{icon:c(I),class:"text-black text-sm me-2"},null,8,["icon"]),h(" "+p(e?e.team_count:"-/--"),1)])]),v("div",Qe,[v("p",Ze,p(e?d(e.description):"Tento turnaj ešte pre Vás ešte pripravujeme..."),1)])],2),v("div",{class:E(["w-full h-[16.6667%] md:h-[10%] z-20 flex justify-center items-center text-white px-2",x(e?e.game_name:"")])},[v("div",Xe,p(e?n(e.date_start):"Dátum")+" | "+p(e?u(e.date_start):"--/--"),1),v("div",Ye,[h(p(e?e.prizepool+"€":"Prizepool")+" ",1),i(c(D),{icon:c(N),class:"text-white text-sm ms-2"},null,8,["icon"])])],2)])),_:2},1032,["to"])))),128))])}}},tt={class:"md:mt-20 w-full z-[50000] md:px-0 bg-slate-900"},lt={class:"flex flex-col justify-center md:flex-col md:px-20"},at=v("div",{class:"font-bold text-3xl pt-5 md:pb-3 md:text-2xl max-md:mb-3 max-md:text-center"},"Najnovšie články",-1),nt={class:"flex justify-center flex-col md:flex-row gap-3 md:mt-3 max-md:px-3"},st={class:"w-full md:flex-1 max-md:hidden"},rt={class:"w-full md:flex-1"},it={class:"flex md:justify-end items-center mt-3 max-md:px-5"},ot=v("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[v("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),ct=v("div",{class:"font-bold text-3xl pt-5 md:pb-3 md:text-2xl max-md:mb-3 max-md:text-center"},"Aktuálne turnaje",-1),dt={class:"flex md:justify-end items-center mt-3 max-md:px-5 pb-5"},ut=v("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[v("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1);e("default",{__name:"Tab1Page",setup(e){const t=T(),l=$(),a=H();return P((()=>{t.getBlog(),l.getGiveaway(),a.getTournament()})),(e,t)=>{const l=j("ion-button"),a=j("router-link");return s(),M(c(V),null,{default:o((()=>[i(c(m),{class:"hidden"},{default:o((()=>[i(c(d),{mode:"ios"},{default:o((()=>[i(c(u),{size:"large",class:"mt-5"},{default:o((()=>[h("Domov")])),_:1})])),_:1})])),_:1}),i(c(w),{fullscreen:!0},{default:o((()=>[i(c(m),{collapse:"condense"},{default:o((()=>[i(c(d),{class:"mt-[-6.5rem]"},{default:o((()=>[i(c(u),{size:"large",class:"mt-[2.5rem] z-10"},{default:o((()=>[h("Domov")])),_:1})])),_:1})])),_:1}),v("div",tt,[i(_e),i(oe),v("div",lt,[at,v("div",nt,[v("div",st,[i(He)]),v("div",rt,[i(be)])]),v("div",it,[i(a,{to:"/clanky",class:"w-full md:w-1/3 rounded-2xl overflow-hidden font-bold"},{default:o((()=>[i(l,{class:"w-full rounded-2xl overflow-hidden font-bold"},{default:o((()=>[h(" Pozrieť všetky články "),ot])),_:1})])),_:1})]),ct,i(et),v("div",dt,[i(a,{to:"/turnaje-servery",class:"w-full md:w-1/3 rounded-2xl overflow-hidden font-bold"},{default:o((()=>[i(l,{class:"w-full rounded-2xl overflow-hidden font-bold"},{default:o((()=>[h(" Pozrieť všetky turnaje "),ut])),_:1})])),_:1})])]),i(O)])])),_:1})])),_:1})}}})}}}));
