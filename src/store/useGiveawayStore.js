import { defineStore } from "pinia";
import axios from "axios";

export const useGiveawayStore = defineStore({
  id: "giveaway",
  state: () => ({
    giveaway: ''
  }),
  actions: {
    async getGiveaway() {
      try {
        const response = await axios.get('/JSON/giveaway.json');
        this.giveaway = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});