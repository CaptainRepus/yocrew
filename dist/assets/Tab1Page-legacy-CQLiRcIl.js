System.register(["./yocrewlogo-legacy-DbAZUCir.js","./index-legacy-Btlrr1uV.js","./userData-legacy-D5Jf-FJA.js","./sponsorBox-legacy-BxJ6ApHz.js"],(function(e,t){"use strict";var r,l,s,n,a,o,i,c,d,u,m,x,g,f,h,w,v,p,y,b,k,j,_,D,S,C,L,T,B,z,M,E,A,H,R,N,P,V,G,I,O;return{setters:[e=>{r=e._},e=>{l=e.r,s=e.o,n=e.t,a=e.g,o=e.b,i=e.a,c=e.x,d=e.y,u=e.z,m=e.A,x=e.f,g=e.B,f=e.m,h=e.n,w=e._,v=e.i,p=e.C,y=e.D,b=e.E,k=e.F,j=e.l,_=e.G,D=e.H,S=e.c,C=e.w,L=e.J,T=e.R,B=e.K,z=e.L,M=e.M,E=e.N,A=e.O,H=e.Q,R=e.d,N=e.e,P=e.I,V=e.j,G=e.k},e=>{I=e.u},e=>{O=e.s}],execute:function(){var t=document.createElement("style");t.textContent=".animate[data-v-60e4971e]{animation:pulse-60e4971e 5s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse-60e4971e{0%,to{background-color:1}50%{opacity:1.8}}.typing-animation[data-v-de99e58e]{display:inline-block;border-right:3px solid black;white-space:nowrap;overflow:hidden;animation:typing-de99e58e 3.5s steps(20,end),blink-de99e58e .75s step-end infinite}@keyframes typing-de99e58e{0%{width:0}to{width:15ch}}@keyframes blink-de99e58e{0%,to{border-color:transparent}50%{border-color:#000}}\n",document.head.appendChild(t);const U={class:"bg-gray-800 rounded-lg shadow p-4 mb-0 max-md:m-0 max-md:rounded-t-lg max-md:rounded-b-none"},Y={class:"w-full max-w-screen-xl mx-auto p-4 md:py-8"},F={class:"flex sm:items-center sm:justify-between"},K=a("a",{href:"https://yocrew.eu/",class:"flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"},[a("img",{src:r,class:"h-16",alt:"YoCrew Logo"}),a("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"YoCrew")],-1),$={class:"flex flex-wrap max-md:justify-end items-center max-md:w-2/3 text-sm font-medium text-gray-500 mb-0 dark:text-gray-400"},q={href:"https://instagram.com/yocrew_/",target:"_blank"},Q={href:"https://discord.gg/hnyAMZsQKU",target:"_blank"},W={href:"https://www.facebook.com/yooocrew/?_rdr",target:"_blank"},J=a("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),Z={class:"block text-sm text-gray-400 sm:text-center"},X=a("a",{href:"https://yocrew.eu/",target:"_blank",class:"text-gray-400 hover:underline hover:text-green-500"},"YoCrew™",-1),ee={__name:"footer",setup(e){const t=l((new Date).getFullYear());return(e,r)=>(s(),n("footer",U,[a("div",Y,[a("div",F,[K,a("ul",$,[a("li",null,[a("a",q,[o(i(d),{class:"text-gray-200 hover:underline me-4 md:me-6 hover:text-green-500 md:text-xl text-2xl",icon:i(c)},null,8,["icon"])])]),a("li",null,[a("a",Q,[o(i(d),{class:"text-gray-200 hover:underline me-4 md:me-6 hover:text-green-500 md:text-xl text-2xl",icon:i(u)},null,8,["icon"])])]),a("li",null,[a("a",W,[o(i(d),{class:"text-gray-200 hover:underline me-4 md:me-6 hover:text-green-500 md:text-xl text-2xl",icon:i(m)},null,8,["icon"])])])])]),J,a("span",Z,[x("© "+g(t.value)+" ",1),X,x(". Všetky práva sú vyhradené.")]),o(O,{class:"mt-5"})])]))}},te=f({id:"giveaway",state:()=>({giveaway:""}),actions:{async getGiveaway(){try{const e=await h.get("https://api.wade-development.com/api/get-giveaways/");this.giveaway=e.data.giveaways[0]}catch(e){throw console.error("Error fetching user data:",e),e}}}}),re={class:"h-full md:h-auto"},le={class:"flex flex-col gap-4"},se={class:"w-full px-2 md:w-[30%] h-[200px] md:h-auto transition ease-in rounded-lg overflow-hidden"},ne=["src"],ae={class:"py-3 px-2 w-full md:w-[70%] flex flex-col justify-center items-start"},oe={class:"mb-2 flex justify-start items-center md:flex-row w-1/2"},ie={class:"md:mt-0 md:ms-2 ms-5 text-md flex items-center justify-center hover:text-gray-400 transition ease-in text-white"},ce={class:"text-xs ms-2 text-white"},de={class:"mb-1 mt-0 font-semibold tracking-tight text-white text-[1.3rem] hover:text-gray-400 transition ease-in"},ue=["innerHTML"],me={class:"text-[0.6rem] text-slate-400 flex flex-row justify-center items-center"},xe=w({components:{IonButton:v,IonIcon:d},setup(){const e=p();return{sortedBlog:y((()=>[...e.articles].sort(((e,t)=>new Date(t.date)-new Date(e.date))))),bgFunction:e=>{switch(e){case"CS2":return"bg-yellow-600 text-white hover:bg-yellow-800";case"Gaming":return"bg-green-500 text-white hover:bg-green-700";case"LOL":return"bg-blue-500 text-white hover:bg-blue-700";case"ESPORT":return"bg-purple-500 text-white hover:bg-purple-700";case"SVET":return"bg-lime-500 text-white hover:bg-lime-700";default:return"bg-red-500 text-white hover:bg-red-700"}},truncatedBlogName:function(e){if(!e)return"";const t=e.split(" ");return t.length>6?t.slice(0,15).join(" ")+"...":e},truncatedBlogDescription:function(e){if(!e)return"";const t=e.split(" ");return t.length>15?t.slice(0,17).join(" ")+"...":e},personCircle:b,time:k,calculateReadingTime:function(e){if(!e)return"";const t=e.split(" ").length/200;return Math.ceil(t)},whenUploaded:e=>{const t=new Date,r=new Date(e);return r.toDateString()===t.toDateString()?"DNES":r.toDateString()===new Date(t.setDate(t.getDate()-1)).toDateString()?"VČERA":e}}},methods:{click(){this.$router.push("/clanky")}},async created(){const e=p();try{await e.getBlog()}catch(t){console.error("Error fetching blog articles:",t)}}},[["render",function(e,t,r,l,i,c){const d=j("ion-icon"),u=j("router-link");return s(),n("div",re,[a("div",null,[a("div",le,[(s(!0),n(_,null,D(l.sortedBlog.slice(1,6),((e,t)=>(s(),S(u,{to:{name:"Article",params:{slug:e.slug}},key:t,class:"rounded-lg shadow flex flex-col md:flex-row h-auto w-full md:w-[45vw]"},{default:C((()=>[a("div",se,[a("img",{class:"rounded-lg h-full w-full object-cover hover:scale-110 transition ease-in",src:e.image_path,alt:"Blog Image"},null,8,ne)]),a("div",ae,[a("div",oe,[a("div",{class:L(["flex justify-center items-center px-4 rounded-2xl font-bold text-xs transition ease-in",l.bgFunction(e.tag)])},g(e.tag.toUpperCase()),3),a("div",ie,[x("|"),a("span",ce,g(l.whenUploaded(e.date)),1)])]),a("div",null,[a("h5",de,g(e.title),1)]),a("p",{class:"mb-1 font-normal text-white text-sm hover:text-gray-400 transition ease-in",innerHTML:l.truncatedBlogDescription(e.content)},null,8,ue),a("p",me,[o(d,{icon:l.personCircle,class:"text-gray-400 text-sm me-1"},null,8,["icon"]),x(g(e.author)+" ",1),o(d,{icon:l.time,class:"text-gray-400 text-sm ms-4 me-1"},null,8,["icon"]),x(" "+g(l.calculateReadingTime(e.content))+" min. čítania ",1)])])])),_:2},1032,["to"])))),128))])])])}]]),ge={class:"rounded-xl overflow-hidden h-[49%]"},fe=["src"],he={class:"flex justify-start items-center h-[10%] max-md:my-3"},we={class:"ms-2 text-md md:text-lg flex items-center justify-center hover:text-gray-400 transi ease-in text-white"},ve={class:"text-md md:text-lg ms-2 text-white"},pe={class:"h-[35%] w-full"},ye={class:"mb-3 text-3xl md:text-[2rem] font-bold hover:text-gray-400 transition ease-in text-white"},be=["innerHTML"],ke={class:"h-[5%] w-full"},je={class:"text-[1rem] md:text-[0.8rem] text-slate-400 flex pt-5 items-center"},_e={__name:"newestArticle",setup(e){const t=p(),r=y((()=>[...t.articles].sort(((e,t)=>new Date(t.date)-new Date(e.date))))),l=e=>{switch(e){case"CS2":return"bg-yellow-600 text-white hover:bg-yellow-800";case"Gaming":return"bg-green-500 text-white hover:bg-green-700";case"LOL":return"bg-blue-500 text-white hover:bg-blue-700";case"ESPORT":return"bg-purple-500 text-white hover:bg-purple-700";case"SVET":return"bg-lime-500 text-white hover:bg-lime-700";default:return"bg-red-500 text-white hover:bg-red-700"}},c=e=>{const t=new Date,r=new Date(e);return t.toDateString()===r.toDateString()?"DNES":(t-r)/864e5<1?"VČERA":e},u=e=>{if(!e)return"";const t=e.split(" ");return t.length>20&&innerWidth>1024?t.slice(0,50).join(" ")+"...":innerWidth<768?t.slice(0,20).join(" ")+"...":t.join(" ")},m=e=>{if(!e)return"";const t=e.split(" ").length/200;return Math.ceil(t)};return(e,t)=>(s(!0),n(_,null,D(r.value.slice(0,1),((e,t)=>(s(),S(i(T),{to:{name:"Article",params:{slug:e.slug}},class:"w-full h-full bg-slate-700"},{default:C((()=>[a("div",ge,[a("img",{src:e.image_path,alt:"Blog obrazok",class:"w-full h-full object-cover hover:scale-110 transition ease-in"},null,8,fe)]),a("div",he,[a("div",{class:L(["flex justify-center items-center px-3 rounded-2xl font-bold text-md md:text-lg transition ease-in",l(e.tag)])},g(e.tag.toUpperCase()),3),a("div",we,[x("|"),a("span",ve,g(c(e.date)),1)])]),a("div",pe,[a("h1",ye,g(e.title),1),a("p",{class:"hover:text-gray-400 transition ease-in text-white",innerHTML:u(e.content)},null,8,be)]),a("div",ke,[a("p",je,[o(i(d),{icon:i(b),class:"text-gray-400 text-lg me-1"},null,8,["icon"]),x(g(e.author)+" ",1),o(i(d),{icon:i(k),class:"text-gray-400 text-lg ms-4 me-1"},null,8,["icon"]),x(" "+g(m(e.content))+" min. čítania ",1)])])])),_:2},1032,["to"])))),256))}},De={class:"w-full h-full md:h-96 flex flex-col md:flex-row gap-2 px-4 md:px-0"},Se=["src"],Ce={class:"relative w-full h-1/3 md:h-3/5 overflow-hidden z-20"},Le={key:0,class:"absolute bottom-0 left-3"},Te={class:"font-semibold text-sm text-white hover:text-gray-300 transition ease-in"},Be={class:"font-bold text-lg text-white hover:text-gray-300 transition ease-in"},ze={key:1,class:"absolute bottom-0 left-3"},Me=[a("h1",{class:"font-semibold text-sm text-white"},"--/--",-1),a("h1",{class:"font-bold text-xl md:text-lg text-white transition ease-in hover:text-gray-300"},"Na turnaji pracujeme",-1)],Ee={key:0,class:"h-1/3 w-full flex justify-start items-center text-sm text-white transition ease-in hover:text-gray-300"},Ae={key:1,class:"h-1/3 w-full flex justify-start items-center text-sm text-white"},He={class:"h-1/4 w-full flex justify-start items-center gap-2"},Re={class:"h-5/6 w-[45%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},Ne={class:"h-5/6 w-[30%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},Pe={class:"h-5/6 w-[25%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in"},Ve={class:"h-[42%] w-full flex justify-start items-center overflow-hidden text-white"},Ge={class:"text-sm hover:text-gray-300 transition ease-in"},Ie={class:"w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold transition ease-in hover:text-gray-300"},Oe={class:"w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold ps-2 transition ease-in hover:text-gray-300"},Ue={__name:"tournaments",setup(e){const t=B(),r=y((()=>[...t.tournament].sort(((e,t)=>new Date(e.date)-new Date(t.date)))));y((()=>{const e=new Date;return e.setHours(0,0,0,0),r.value.filter((t=>{const r=new Date(t.date);return r.setHours(0,0,0,0),r>=e}))}));const l=y((()=>{const e=r.value.slice(0,2);for(;e.length<2;)e.push(null);return e})),c=e=>new Date(e).toLocaleDateString("sk-SK",{year:"numeric",month:"long",day:"numeric"}),u=e=>{const t=e.split(" ");return t.length>10?t.slice(0,10).join(" ")+"...":e},m=e=>{const t=new Date(e);return`${t.getHours()}:${t.getMinutes()}`},f=e=>{switch(e){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"bg-[#ea580cf2]";case"LoL":return"bg-sky-600";case"Brawl Stars":return"bg-red-500";default:return"bg-green-600"}},h=e=>{switch(e){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"bg-[#9a3412f2]";case"LoL":return"bg-sky-800";case"Brawl Stars":return"bg-red-700";default:return"bg-green-900"}},w=e=>{switch(e){case"CS2":case"Counter Strike 2":case"Counter-Strike 2":return"/img/tournaments/cs2_2.jpg";case"LoL":case"Brawl Stars":return"";default:return"/img/tournaments/yocrew-example.png"}},v=e=>{if(e&&e.currentTarget){const t=e.currentTarget.querySelector("img");t&&(t.style.transform="scale(1.2)")}},p=e=>{if(e&&e.currentTarget){const t=e.currentTarget.querySelector("img");t&&(t.style.transform="scale(1)")}};return z((()=>{t.getTournament()})),(e,t)=>{const r=j("router-link");return s(),n("div",De,[(s(!0),n(_,null,D(l.value,((e,t)=>(s(),S(r,{key:t,to:e?{name:"Tournament",params:{slug:e.slug}}:"/",class:"relative w-full md:w-1/4 h-72 md:h-full rounded-2xl overflow-hidden flex flex-col",onMouseenter:v,onMouseleave:p},{default:C((()=>[a("img",{src:w(e?e.game_name:" "),alt:"Tournament image",class:"absolute h-56 md:h-full w-full object-cover transition ease-in z-10 max-md:blur-[2px]"},null,8,Se),a("div",Ce,[e?(s(),n("div",Le,[a("h1",Te,g(e.game_name),1),a("h1",Be,g(e.name),1)])):(s(),n("div",ze,Me))]),a("div",{class:L(["w-full h-1/2 md:h-[30%] flex flex-col px-4 z-20",f(e?e.game_name:"")])},[e?(s(),n("div",Ee," Registrácia do: "+g(c(e.date_reg)),1)):(s(),n("div",Ae," --/-- ")),a("div",He,[a("div",Re,[o(i(d),{icon:i(M),class:"text-black text-sm me-2"},null,8,["icon"]),x(" "+g(e?e.bracket:"-/--"),1)]),a("div",Ne,[o(i(d),{icon:i(E),class:"text-black text-sm me-2"},null,8,["icon"]),x(" "+g(e?e.format:"-/--"),1)]),a("div",Pe,[o(i(d),{icon:i(A),class:"text-black text-sm me-2"},null,8,["icon"]),x(" "+g(e?e.team_count:"-/--"),1)])]),a("div",Ve,[a("p",Ge,g(e?u(e.description):"Tento turnaj ešte pre Vás ešte pripravujeme..."),1)])],2),a("div",{class:L(["w-full h-[16.6667%] md:h-[10%] z-20 flex justify-center items-center text-white px-2",h(e?e.game_name:"")])},[a("div",Ie,g(e?c(e.date_start):"Dátum")+" | "+g(e?m(e.date_start):"--/--"),1),a("div",Oe,[x(g(e?e.prizepool+"€":"Prizepool")+" ",1),o(i(d),{icon:i(H),class:"text-white text-sm ms-2"},null,8,["icon"])])],2)])),_:2},1032,["to"])))),128))])}}},Ye={class:"md:mt-20 w-full z-[50000] md:px-0 bg-slate-900"},Fe=a("div",{class:"mt-5 w-full h-auto flex justify-center items-center"},[a("img",{src:r,alt:"YoCrew logo",class:"w-1/4"})],-1),Ke={class:"flex flex-col justify-center md:flex-col md:px-20"},$e=a("div",{class:"font-bold text-3xl pt-5 md:pb-3 md:text-2xl max-md:mb-3 max-md:text-center"},"Najnovšie články",-1),qe={class:"flex justify-center flex-col md:flex-row gap-3 md:mt-3 max-md:px-3"},Qe={class:"w-full md:flex-1 max-md:hidden"},We={class:"w-full md:flex-1"},Je={class:"flex md:justify-end items-center mt-3 max-md:px-3"},Ze=a("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[a("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),Xe=a("div",{class:"font-bold text-3xl pt-5 md:pb-3 md:text-2xl max-md:mb-3 max-md:text-center"},"Aktuálne turnaje",-1),et={class:"flex md:justify-end items-center mt-3 max-md:px-3 pb-5"},tt=a("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[a("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1);e("default",{__name:"Tab1Page",setup(e){const t=p(),r=te(),l=B(),n=I();return z((()=>{t.getBlog(),r.getGiveaway(),l.getTournament(),n.getData()})),(e,t)=>{const r=j("router-link");return s(),S(i(G),null,{default:C((()=>[o(i(P),{class:"hidden"},{default:C((()=>[o(i(R),{mode:"ios"},{default:C((()=>[o(i(N),{size:"large",class:"mt-5"},{default:C((()=>[x("Domov")])),_:1})])),_:1})])),_:1}),o(i(V),{fullscreen:!0},{default:C((()=>[o(i(P),{collapse:"condense"},{default:C((()=>[o(i(R),{class:"mt-[-6.5rem]"},{default:C((()=>[o(i(N),{size:"large",class:"mt-[2.5rem] z-10"},{default:C((()=>[x("Domov")])),_:1})])),_:1})])),_:1}),a("div",Ye,[Fe,a("div",Ke,[$e,a("div",qe,[a("div",Qe,[o(_e)]),a("div",We,[o(xe)])]),a("div",Je,[o(r,{to:"/clanky",class:"w-full md:w-1/3 rounded-2xl overflow-hidden font-bold"},{default:C((()=>[o(i(v),{class:"w-full rounded-2xl overflow-hidden font-bold"},{default:C((()=>[x(" Pozrieť všetky články "),Ze])),_:1})])),_:1})]),Xe,o(Ue),a("div",et,[o(r,{to:"/turnaje-servery",class:"w-full md:w-1/3 rounded-2xl overflow-hidden font-bold"},{default:C((()=>[o(i(v),{class:"w-full rounded-2xl overflow-hidden font-bold"},{default:C((()=>[x(" Pozrieť všetky turnaje "),tt])),_:1})])),_:1})])]),o(ee)])])),_:1})])),_:1})}}})}}}));
