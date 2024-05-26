import{d as N,r as y,o as l,c as d,a as s,w as m,u as _,I as C,b as T,e as z,f as Q,g as D,h as S,i as p,j as B,k as e,t as i,l as M,F as w,m as g,p as P,n as G,q as L,s as k,v as E,x as X,y as ee,z as te,A as j,B as V,_ as oe,C as se}from"./index-BQLPfU40.js";import{M as ne,u as O}from"./blogModal-C8U4lQyG.js";import{a as W}from"./axios-DN9wIMCN.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=N({id:"giveaway",state:()=>({giveaway:""}),actions:{async getGiveaway(){try{const o=await W.get("/JSON/giveaway.json");this.giveaway=o.data}catch(o){throw console.error("Error fetching user data:",o),o}}}}),re={class:"text-2xl font-bold text-center mb-5"},ae={class:"text-lg mb-5 px-2"},le={class:"w-full h-52 rounded-xl border-2 border-green-500 mb-10"},ie=["src"],de={class:"flex flex-col w-full mb-28"},ce=e("h1",{class:"font-bold text-2xl mb-2 text-center"},"Tu sa prihlásiš",-1),me=e("p",{class:"text-center mb-5"},"Vyplň tento formulár pre zapojenie sa do giveaway a vyskúšaj svoje šťastie!",-1),ue={__name:"giveawayModal",setup(o){const c=y(),h=y(),t=y(),r=I(),a=()=>c.value.$el.dismiss(null,"cancel"),n=()=>{h.value.$el.value,t.value.$el.value,a()};return(f,u)=>(l(),d(w,null,[s(_(z),null,{default:m(()=>[s(_(C),{class:"hidden"},{default:m(()=>[s(_(T))]),_:1})]),_:1}),s(_(B),{class:"ion-padding"},{default:m(()=>[s(_(Q),{ref_key:"modal",ref:c,trigger:"open-modal"},{default:m(()=>[s(_(z),null,{default:m(()=>[s(_(C),null,{default:m(()=>[s(_(D),{slot:"start"},{default:m(()=>[s(_(S),{onClick:u[0]||(u[0]=v=>a())},{default:m(()=>[p("Zrušiť")]),_:1})]),_:1}),s(_(T),{mode:"ios"},{default:m(()=>[p("Giveaway")]),_:1}),s(_(D),{slot:"end"},{default:m(()=>[s(_(S),{strong:!0,onClick:u[1]||(u[1]=v=>n())},{default:m(()=>[p("Prihlásiť")]),_:1})]),_:1})]),_:1})]),_:1}),s(_(B),{class:"ion-padding"},{default:m(()=>[e("h1",re,i(_(r).giveaway.name),1),e("p",ae,i(_(r).giveaway.popis),1),e("div",le,[e("img",{src:_(r).giveaway.img,alt:"Obrazok"},null,8,ie)]),e("div",de,[ce,me,s(_(M),{mode:"md",label:"Tu nahoď svoje meno","label-placement":"stacked",ref_key:"inputName",ref:h,type:"text",placeholder:"Tvoje meno"},null,512),s(_(M),{mode:"md",label:"Tu nahoď svoj email","label-placement":"stacked",ref_key:"inputEmail",ref:t,type:"text",placeholder:"Tvoj email"},null,512)])]),_:1})]),_:1},512)]),_:1})],64))}},he={components:{giveawayModal:ue},setup(){return{giveawayStore:I()}}},Y=o=>(P("data-v-38c38480"),o=o(),G(),o),_e={class:"animate relative w-full h-auto md:h-auto bg-green-600 shadow-md border border-gray-700 rounded-lg md:rounded-none overlfow-x-hidden mt-[1rem] mb-5 oveflow-hidden"},ge=Y(()=>e("span",{class:"absolute top-[-2rem] left-[-1rem] text-5xl mt-2 mr-2 md:hidden"},"🎉",-1)),fe=Y(()=>e("span",{class:"absolute bottom-[-1rem] right-[-2rem] text-5xl mt-2 mr-2 md:hidden"},"🎊",-1)),pe={class:"flex flex-col p-2 md:flex-row justify-center items-center"},xe={class:"md:w-1/3"},ve={class:"p-2 text-white text-xl text-center font-bold"},we={class:"p-1 text-white text-md text-center max-md:hidden"},be={class:"flex justify-center items-center md:w-1/4"},ye={id:"open-modal",class:"p-3 text-white text-md text-center bg-green-500 border border-green-900 rounded-lg mt-2 md:mt-0 hover:bg-green-700 max-md:mb-3"};function ke(o,c,h,t,r,a){const n=g("giveawayModal");return l(),d(w,null,[e("div",_e,[ge,fe,e("div",pe,[e("div",xe,[e("h1",ve,i(t.giveawayStore.giveaway.name),1),e("h2",we,i(t.giveawayStore.giveaway.popis),1)]),e("div",be,[e("button",ye," Prihlás sa do "+i(t.giveawayStore.giveaway.deadline),1)])])]),s(n)],64)}const $e=x(he,[["render",ke],["__scopeId","data-v-38c38480"]]),U=N({id:"tournament",state:()=>({tournament:[]}),actions:{async getTournament(){try{const o=await W.get("/JSON/turnaj.json");this.tournament=o.data}catch(o){throw console.error("Error fetching user data:",o),o}}}}),je={components:{IonButton:S,ModalBlog:ne},setup(){const o=O(),c=L(()=>[...o.articles].sort((n,f)=>new Date(f.date)-new Date(n.date))),h=y(null),t=y(!1);function r(n){h.value=n,t.value=!0}function a(){h.value=null,t.value=!1}return{sortedBlog:c,selectedBlog:h,isModalOpen:t,openModal:r,closeModal:a}},methods:{click(){this.$router.push("/clanky")}}},b=o=>(P("data-v-137c433f"),o=o(),G(),o),Ce={class:"p-3 pe-4 max-md:hidden"},Te=b(()=>e("h1",{class:"pb-0 font-bold text-2xl mb-3"},"Najnovšie články",-1)),ze={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Se=["href"],Be=b(()=>e("img",{class:"rounded-t-lg",src:"https://flowbite.com/docs/images/blog/image-1.jpg",alt:"Blog Image"},null,-1)),Ie=[Be],De={class:"p-5"},Me=["href"],Ne={class:"mb-2 text-2xl font-bold tracking-tight text-white"},Pe={class:"mb-3 font-normal text-white"},Ge=["onClick"],Le=b(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),Ee={class:"p-3 px-0 md:hidden"},Ve=b(()=>e("h1",{class:"font-bold text-2xl mb-3"},"Najnovšie články",-1)),Oe={class:"grid grid-cols-1 gap-4"},We=["href"],Ye=b(()=>e("img",{class:"rounded-t-lg",src:"https://flowbite.com/docs/images/blog/image-1.jpg",alt:"Blog Image"},null,-1)),Ue=[Ye],qe={class:"p-5"},Ae=["href"],Fe={class:"mb-2 text-2xl font-bold tracking-tight text-white"},Je={class:"mb-3 font-normal text-white"},Re=["onClick"],Ze=b(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1));function He(o,c,h,t,r,a){const n=g("ion-button"),f=g("modal-blog");return l(),d("div",null,[e("div",Ce,[Te,e("div",ze,[(l(!0),d(w,null,k(t.sortedBlog.slice(0,4),(u,v)=>(l(),d("div",{key:v,class:"max-w-sm h-[27rem] bg-gray-900 border border-gray-800 rounded-lg shadow"},[e("a",{href:u.link},Ie,8,Se),e("div",De,[e("a",{href:u.link},[e("h5",Ne,i(u.title),1)],8,Me),e("p",Pe,i(u.author),1),e("button",{onClick:$=>t.openModal(u),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"},[p(" Pozrieť viac "),Le],8,Ge)])]))),128)),s(n,{class:"col-span-2",onClick:a.click},{default:m(()=>[p(" Pozrieť všetky články ")]),_:1},8,["onClick"])])]),e("div",Ee,[Ve,e("div",Oe,[(l(!0),d(w,null,k(t.sortedBlog.slice(0,2),(u,v)=>(l(),d("div",{key:v,class:"max-w-sm bg-gray-900 border border-gray-600 rounded-lg shadow"},[e("a",{href:u.link},Ue,8,We),e("div",qe,[e("a",{href:u.link},[e("h5",Fe,i(u.title),1)],8,Ae),e("p",Je,i(u.author),1),e("button",{onClick:$=>t.openModal(u),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"},[p(" Pozrieť viac "),Ze],8,Re),t.isModalOpen?(l(),E(f,{key:0,blog:t.selectedBlog,"is-open":t.isModalOpen,onClose:t.closeModal},null,8,["blog","is-open","onClose"])):X("",!0)])]))),128)),s(n,{onClick:a.click},{default:m(()=>[p("Pozrieť všetky články")]),_:1},8,["onClick"])])])])}const Ke=x(je,[["render",He],["__scopeId","data-v-137c433f"]]),Qe={},Xe={class:"h-full w-full max-md:mb-5"},et=e("h1",{class:"p-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0"},"Príď na stream!",-1),tt=e("div",{class:"h-full w-full p-3 max-md:p-0"},[e("div",{class:"flex justify-center items-center bg-[url('/img/background.jpg')] bg-cover rounded-lg overflow-hidden h-80 max-md:h-72 border border-gray-800"},[e("iframe",{src:"https://player.twitch.tv/?channel=yocrew_games&parent=http://yocrew.eu/",frameborder:"0",allowfullscreen:"true",scrolling:"no",class:"h-2/3 w-2/3 max-md:w-[90%] rounded-xl border border-gray-900"})])],-1),ot=[et,tt];function st(o,c){return l(),d("div",Xe,ot)}const nt=x(Qe,[["render",st]]),rt={setup(){const o=U();Array.isArray(o.tournament)||(o.tournament=[]);const c=L(()=>[...o.tournament].sort((r,a)=>new Date(r.date)-new Date(a.date)));return{tournamentStore:o,sortedTournaments:c,gameController:ee,calendar:te,truncateDescription:r=>{const a=r.split(" ");return a.length>15?a.slice(0,15).join(" ")+"...":r},titleClass:r=>r.split(" ").length>2?"text-xl max-md:text-lg":"text-2xl max-md:text-xl"}}},at={class:"h-full w-full"},lt=e("h1",{class:"p-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0"},"Naše akcie a turnaje",-1),it={class:"h-full w-full p-3 max-md:p-0"},dt={class:"flex flex-col gap-2 justify-center overflow-hidden h-[34.2rem] max-md:h-[40rem]"},ct=["href"],mt={class:"h-1/4 w-full flex items-end"},ut={class:"h-3/4 w-full flex flex-col gap-0"},ht={class:"text-lg font-semibold pb-5 z-20 text-white"},_t={class:"text-lg font-semibold pb-1 z-20 text-white"},gt={class:"text-sm z-20 text-white"},ft={key:1,class:"h-1/3 w-full bg-gray-500"},pt=["href"],xt={class:"h-1/4 w-full flex items-end"},vt={class:"h-3/4 w-full flex flex-col gap-0"},wt={class:"text-lg font-semibold pb-1 z-20 text-white"},bt={class:"text-lg font-semibold pb-1 z-20 text-white"},yt={class:"text-sm z-20 text-white"},kt={key:3,class:"h-1/3 w-full bg-gray-500"},$t=["href"],jt={class:"h-1/4 w-full flex items-end"},Ct={class:"h-3/4 w-full flex flex-col gap-0"},Tt={class:"text-lg font-semibold z-20 text-white"},zt={class:"text-lg font-semibold z-20 text-white"},St={class:"text-sm z-20 text-white"},Bt={key:5,class:"h-1/3 w-full bg-gray-500"};function It(o,c,h,t,r,a){const n=g("ion-icon");return l(),d("div",at,[lt,e("div",it,[e("div",dt,[t.tournamentStore.tournament.length>0?(l(),d("a",{key:0,href:t.sortedTournaments[0].link,class:"relative h-1/3 w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0"},[s(n,{"aria-hidden":"true",class:"absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]",icon:t.gameController},null,8,["icon"]),e("div",mt,[e("h1",{class:j([t.titleClass(t.sortedTournaments[0].tournament),"font-bold z-20 text-white"])},i(t.sortedTournaments[0].tournament),3)]),e("div",ut,[e("h3",ht,i(t.sortedTournaments[0].game),1),e("h3",_t,i(t.sortedTournaments[0].date),1),e("p",gt,i(t.truncateDescription(t.sortedTournaments[0].description)),1)])],8,ct)):(l(),d("div",ft," Loading... ")),t.tournamentStore.tournament.length>0?(l(),d("a",{key:2,href:t.sortedTournaments[1].link,class:"relative h-1/3 w-full px-3 rounded-xl bg-gray-900 border border-gray-800 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2"},[s(n,{"aria-hidden":"true",class:"absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]",icon:t.calendar},null,8,["icon"]),e("div",xt,[e("h1",{class:j([t.titleClass(t.sortedTournaments[1].tournament),"font-bold z-20 text-white"])},i(t.sortedTournaments[1].tournament),3)]),e("div",vt,[e("h3",wt,i(t.sortedTournaments[1].game),1),e("h3",bt,i(t.sortedTournaments[1].date),1),e("p",yt,i(t.truncateDescription(t.sortedTournaments[1].description)),1)])],8,pt)):(l(),d("div",kt," Loading... ")),t.tournamentStore.tournament.length>0?(l(),d("a",{key:4,href:t.sortedTournaments[2].link,class:"relative h-1/3 w-full px-3 rounded-xl bg-gray-900 border border-gray-800 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2"},[s(n,{"aria-hidden":"true",class:"absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]",icon:t.calendar},null,8,["icon"]),e("div",jt,[e("h1",{class:j([t.titleClass(t.sortedTournaments[2].tournament),"font-bold z-20 text-white"])},i(t.sortedTournaments[2].tournament),3)]),e("div",Ct,[e("h3",Tt,i(t.sortedTournaments[2].game),1),e("h3",zt,i(t.sortedTournaments[2].date),1),e("p",St,i(t.truncateDescription(t.sortedTournaments[2].description)),1)])],8,$t)):(l(),d("div",Bt," Loading... "))])])])}const Dt=x(rt,[["render",It]]),Mt={data(){return{currentIndex:0,photos:[{url:"/img/background.jpg",name:"Yodoch",position:"Zakladateľ"},{url:"/img/profile.jpg",name:"idk2",position:"Designer"},{url:"/img/profile.jpg",name:"idk3",position:"Lol"},{url:"/img/profile.jpg",name:"idk4",position:"idk4"},{url:"/img/profile.jpg",name:"idk5",position:"Designer2"},{url:"/img/profile.jpg",name:"idk6",position:"Designer5"}]}},computed:{currentPhoto(){return this.photos[this.currentIndex]}},methods:{scroll(o){this.currentIndex+=o,this.currentIndex<0?this.currentIndex=this.photos.length-1:this.currentIndex>=this.photos.length&&(this.currentIndex=0)}}},Nt={class:"flex items-center justify-between bg-green-500 p-4 md:p-10 mb-4 rounded-xl md:mb-0 ml-0 mr-0 md:ml-8 md:mr-4"},Pt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-black",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),Gt=[Pt],Lt={class:"flex flex-col items-center overflow-hidden"},Et=["src","alt"],Vt={class:"w-full md:w-5/6 px-6 py-4 bg-black shadow-lg mt-4 rounded-2xl"},Ot={class:"font-bold text-xl mb-2 text-white"},Wt={class:"text-gray-300 text-base"},Yt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-black",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1),Ut=[Yt];function qt(o,c,h,t,r,a){return l(),d("div",Nt,[e("button",{onClick:c[0]||(c[0]=n=>a.scroll(-1)),class:"focus:outline-none active:bg-green-700 p-1 rounded-full"},Gt),e("div",Lt,[e("img",{src:a.currentPhoto.url,alt:a.currentPhoto.name,class:"w-5/6 md:w-4/6 shadow-lg aspect-square object-cover rounded-full"},null,8,Et),e("div",Vt,[e("div",Ot,i(a.currentPhoto.name),1),e("p",Wt,i(a.currentPhoto.position),1)])]),e("button",{onClick:c[1]||(c[1]=n=>a.scroll(1)),class:"focus:outline-none active:bg-green-700 p-1 rounded-full"},Ut)])}const At=x(Mt,[["render",qt]]),Ft="/img/nugosu.webp.png",Jt="/img/5v5_series.png",Rt="/img/image-2.png",Zt="/img/image-3.png",Ht="/img/image-4.png",Kt="/img/image-5.png",Qt="/img/5v5_winners.png",Xt="/img/commentators.png",eo="/img/image-7.png",to={components:{team:At}},oo=e("h1",{class:"text-2xl font-bold mb-3 md:px-3 md:py-0"},"Spoznaj náš tím",-1),so={class:"flex md:flex-row flex-col-reverse md:items-center"},no=V('<div class="md:w-1/2 w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:ms-3"><div class="grid gap-3"><div><img class="h-auto max-w-full rounded-lg" src="'+Ft+'" alt=""></div><div><img class="h-auto max-w-full rounded-lg" src="'+Jt+'" alt=""></div><div><img class="h-auto max-w-full rounded-lg" src="'+Rt+'" alt=""></div></div><div class="grid gap-3"><div><img class="h-auto max-w-full rounded-lg" src="'+Zt+'" alt=""></div><div><img class="h-auto max-w-full rounded-lg" src="'+Ht+'" alt=""></div><div><img class="h-auto max-w-full rounded-lg" src="'+Kt+'" alt=""></div></div><div class="gap-3 md:grid hidden"><div><img class="h-auto max-w-full rounded-lg" src="'+Qt+'" alt=""></div><div><img class="h-auto max-w-full rounded-lg" src="'+Xt+'" alt=""></div><div><img class="h-auto max-w-full rounded-lg" src="'+eo+'" alt=""></div></div></div>',1);function ro(o,c,h,t,r,a){const n=g("team");return l(),d(w,null,[oo,e("div",so,[no,s(n,{class:"w-full aspect-square md:w-1/2 p-20"})])],64)}const ao=x(to,[["render",ro]]),lo={name:"SponsorSlider",data(){return{sponsors:[{name:"DEV1S",logo:"/img/sponsors/DEV1S.png"},{name:"GetGear",logo:"/img/sponsors/GetGear.png"},{name:"Walzel",logo:"/img/sponsors/logo_Walzel.png"},{name:"NUGOSU",logo:"/img/sponsors/nugosu-logo-head-typo-black (2).svg"},{name:"NUTREND",logo:"/img/sponsors/NUTREND.png"},{name:"Pizzeria Papa Mafia",logo:"/img/sponsors/pizzeria Papa Mafia.svg"}],slideDuration:50}}},io={class:"overflow-hidden relative"},co={class:"flex animate-slide"},mo=["src","alt"],uo=["src","alt"];function ho(o,c,h,t,r,a){return l(),d("div",io,[e("div",co,[(l(!0),d(w,null,k(r.sponsors,(n,f)=>(l(),d("div",{key:"original-"+f,class:"flex-none w-48 h-32 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg mx-2"},[e("img",{src:n.logo,alt:n.name,class:"max-h-full max-w-full"},null,8,mo)]))),128)),(l(!0),d(w,null,k(r.sponsors.concat(r.sponsors).concat(r.sponsors),(n,f)=>(l(),d("div",{key:"duplicate-"+f,class:"flex-none w-48 h-32 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg mx-2"},[e("img",{src:n.logo,alt:n.name,class:"max-h-full max-w-full"},null,8,uo)]))),128))])])}const q=x(lo,[["render",ho]]),_o={components:{sponsorBox:q},data(){return{year:new Date().getFullYear()}}},go={class:"bg-gray-900 rounded-lg shadow m-4 max-md:hidden"},fo={class:"w-full max-w-screen-xl mx-auto p-4 md:py-8"},po=V('<div class="sm:flex sm:items-center sm:justify-between"><a href="https://yocrew.eu/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"><img src="'+oe+'" class="h-16" alt="YoCrew Logo"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YoCrew</span></a><ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="#" class="hover:underline me-4 md:me-6 hover:text-green-500">Články</a></li><li><a href="#" class="hover:underline me-4 md:me-6 hover:text-green-500">Turnaje</a></li><li><a href="#" class="hover:underline me-4 md:me-6 hover:text-green-500">CS2 Servery</a></li><li><a href="#" class="hover:underline hover:text-green-500">Kontakt</a></li></ul></div><hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">',2),xo={class:"block text-sm text-gray-400 sm:text-center"},vo=e("a",{href:"https://yocrew.eu/",class:"hover:underline hover:text-green-500"},"YoCrew™",-1);function wo(o,c,h,t,r,a){const n=g("sponsorBox");return l(),d("footer",go,[e("div",fo,[po,e("span",xo,[p("© "+i(r.year)+" ",1),vo,p(". Všetky práva sú vyhradené.")]),s(n,{class:"mt-5"})])])}const bo=x(_o,[["render",wo]]),yo={components:{IonPage:se,IonHeader:z,IonToolbar:C,IonTitle:T,IonContent:B,giveaway:$e,blog:Ke,streamWidget:nt,tournamentClose:Dt,gallery:ao,foter:bo,sponsor:q},setup(){const o=O(),c=I(),h=U();return{blogStore:o,getBlog:()=>{o.getBlog()},getGiveaway:()=>{c.getGiveaway()},giveawayStore:c,tournamentStore:h,getTournaments:()=>{h.getTournament()}}},mounted(){this.getBlog(),this.getGiveaway(),this.getTournaments()}},ko={class:"px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0"},$o={class:"w-full h-auto flex flex-col md:flex-row"},jo={class:"w-full h-full"},Co={class:"w-full"},To={class:"w-full h-full max-md:mt-5"},zo={class:"w-full h-full max-md:mt-5 py-2 max-md:pt-0"};function So(o,c,h,t,r,a){const n=g("ion-title"),f=g("ion-toolbar"),u=g("ion-header"),v=g("giveaway"),$=g("streamWidget"),A=g("tournamentClose"),F=g("blog"),J=g("gallery"),R=g("sponsor"),Z=g("foter"),H=g("ion-content"),K=g("ion-page");return l(),E(K,{class:"overflow-hidden"},{default:m(()=>[s(u,null,{default:m(()=>[s(f,{mode:"ios",class:"md:hidden"},{default:m(()=>[s(n,{size:"large",class:"mt-5"},{default:m(()=>[p("Domov")]),_:1})]),_:1})]),_:1}),s(H,{fullscreen:!0},{default:m(()=>[s(u,{collapse:"condense",class:"md:hidden"},{default:m(()=>[s(f,{class:"mt-[-6.5rem]"},{default:m(()=>[s(n,{size:"large",class:"mt-[2.5rem] z-10"},{default:m(()=>[p("Domov")]),_:1})]),_:1})]),_:1}),e("div",ko,[s(v),e("div",$o,[e("div",jo,[s($),e("div",Co,[s(A)])]),e("div",To,[s(F)])]),e("div",zo,[s(J),s(R,{class:"mt-5 md:hidden"})]),s(Z)])]),_:1})]),_:1})}const No=x(yo,[["render",So]]);export{No as default};
