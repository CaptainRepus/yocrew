System.register(["./index-legacy-Blqp2-9f.js"],(function(e,t){"use strict";var r,l,s,a,o,n,d,u,i,c,p,x,g,b,f,m,h,v,w,y,_,k;return{setters:[e=>{r=e.m,l=e.n,s=e.P,a=e.r,o=e.u,n=e.c,d=e.w,u=e.a,i=e.o,c=e.b,p=e.I,x=e.d,g=e.e,b=e.f,f=e.g,m=e.h,h=e.v,v=e.p,w=e.i,y=e.j,_=e.k,k=e.l}],execute:function(){const t=r({id:"register",state:()=>({message:"",errors:{},access_token:""}),actions:{async Register(e,t,r,a){try{const o=await l.post("https://api.wade-development.com/api/YoCrew/App/register",{name:t,email:e,password:r});this.message=o.data.message,this.errors={},this.access_token=o.data.access_token,await s.set({key:"access_token",value:this.access_token}),this.access_token&&a.push({name:"tab1"})}catch(o){return o.response&&o.response.data?(console.error("Error response data:",o.response.data),this.message=o.response.data.message,this.errors=o.response.data.errors||{}):this.message="An error occurred during registration.",console.error("Error during registration:",o),!1}}}}),j={class:"w-full h-screen flex justify-center items-center flex-col bg-slate-900"},U=f("div",{class:"w-full text-center font-bold text-3xl mb-10 flex justify-center items-center flex-col"},[f("h1",null,"Pridaj sa do YoCrew!")],-1),V={class:"w-full px-8"},R=[f("option",{value:"",disabled:"",selected:""},"Vyber si pohlavie",-1),f("option",{value:"male"},"Muž",-1),f("option",{value:"female"},"Žena",-1),f("option",{value:"other"},"Iné",-1)];e("default",{__name:"Register",setup(e){const r=a(""),l=a(""),s=a(""),C=a(""),P=o(),T=()=>{t().Register(r.value,l.value,s.value,P)};return(e,t)=>{const a=k("router-link");return i(),n(u(_),null,{default:d((()=>[c(u(y),null,{default:d((()=>[c(u(p),{collapse:"condense",class:"hidden"},{default:d((()=>[c(u(x),null,{default:d((()=>[c(u(g),{size:"large"},{default:d((()=>[b("Register")])),_:1})])),_:1})])),_:1}),f("div",j,[U,f("div",V,[m(f("input",{type:"email",class:"w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white",placeholder:"Tvoj email","onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e)},null,512),[[h,r.value]]),m(f("input",{type:"text",class:"w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white",placeholder:"Tvoja prezývka","onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e)},null,512),[[h,l.value]]),m(f("input",{type:"password",class:"w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white",placeholder:"Tvoje heslo","onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e)},null,512),[[h,s.value]]),m(f("input",{type:"password",class:"w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white",placeholder:"Zopakuj heslo","onUpdate:modelValue":t[3]||(t[3]=e=>C.value=e)},null,512),[[h,C.value]]),m(f("select",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.gender=t),class:"w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 text-white focus:border-white"},R,512),[[v,e.gender]]),c(u(w),{onClick:T,class:"w-full text-xl rounded-xl bg-green-500 text-white font-bold mb-7 border-[3px] border-green-800 focus:border-green-300"},{default:d((()=>[b(" Registruj sa ")])),_:1}),c(a,{to:"/login",class:"text-center text-gray-500 text-lg font-bold flex justify-center mb-2"},{default:d((()=>[b(" Už máš účet? Prihlás sa ")])),_:1})])])])),_:1})])),_:1})}}})}}}));
