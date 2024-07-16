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
        const response = await axios.get('https://api.wade-development.com/api/get-servers');
        this.server = response.data.servers;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; 
      }
    }
  }
});