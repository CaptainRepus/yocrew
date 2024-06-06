import { defineStore } from "pinia";


export const useSectionStore = defineStore({
  id: "section",
  state: () => ({
    section : 1
  }),
  actions:{
    setSection(number){
      this.section = number;
    },
  }
});