import { defineStore } from "pinia";
import axios from "axios";

export const useTournamentStore = defineStore({
  id: "tournament",
  state: () => ({
    tournament: []
  }),
  actions: {
    async getTournament() {
      try {
        const response = await axios.get('https://api.wade-development.com/api/get-turnaje');
        this.tournament = response.data.turnaje;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});