import { defineStore } from "pinia";
import axios from "axios";

export const useBlogStore = defineStore({
  id: "blog",
  state: () => ({
    articles: []
  }),
  actions: {
    async getBlog() {
      try {
        const response = await axios.get('https://api.wade-development.com/api/get-clanky');
        this.articles = response.data.clanky;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});