import { defineStore } from "pinia";
import axios from "axios";
import { Preferences } from '@capacitor/preferences';

export const useDataStore = defineStore({
  id: "userData",
  state: () => ({
    userData: null, // Initialize as null instead of an empty array
    error: null, // To handle error state
  }),
  actions: {
    async getData() {
      try {
        // Get the token from Preferences and extract its value
        const { value: token } = await Preferences.get({ key: 'access_token' }); 

        if (!token) {
          throw new Error('Token not found');
        }

        const response = await axios.get('https://api.wade-development.com/api/YoCrew/App/auth-user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });

        this.userData = response.data; // Set the fetched data
        this.error = null; // Clear any previous errors
      } catch (error) {
        console.error('Error fetching user data:', error);
        this.error = error; // Set error state
      }
    }
  }
});
