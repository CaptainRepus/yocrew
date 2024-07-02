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
        const response = await axios.get('https://api.wade-development.com/api/get-giveaways');
        this.giveaway = response.data.giveaway[0];
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});
// https://api.wade-development.com/api/get-giveaways