import { defineStore } from "pinia";
import axios from "axios";

export const useServerStore = defineStore({
  id: "server",
  state: () => ({
    server: []
  }),
  actions: {
    async getServers() {
      try {
        const response = await axios.get('/JSON/servers.json');
        this.server = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});