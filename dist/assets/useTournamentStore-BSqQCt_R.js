import{d as e}from"./index-BCnTj7t5.js";import{a as r}from"./_plugin-vue_export-helper-BkgCGIHj.js";const n=e({id:"tournament",state:()=>({tournament:[]}),actions:{async getTournament(){try{const t=await r.get("https://api.wade-development.com/api/get-turnaje");this.tournament=t.data.turnaje}catch(t){throw console.error("Error fetching user data:",t),t}}}});export{n as u};
