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
        const response = await axios.get('/JSON/turnaj.json');
        this.tournament = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});