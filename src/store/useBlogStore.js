import { defineStore } from "pinia";
import axios from "axios";

export const useBlogStore = defineStore({
  id: "blog",
  state: () => ({
    articles: ''
  }),
  actions: {
    async getBlog() {
      try {
        const response = await axios.get('/JSON/blog.json');
        this.articles = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});