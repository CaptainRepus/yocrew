import { defineStore } from "pinia";
import axios from "axios";
import { Preferences } from '@capacitor/preferences';

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    access_token: '',
    errors: {}, // Store validation errors here
  }),
  actions: {
    async login(email, password, router) {
      try {
        const response = await axios.post('https://api.wade-development.com/api/YoCrew/App/login', {
          email,
          password
        });

        this.access_token = response.data.access_token;
        this.errors = {}; // Clear errors on successful login

        // Save the access_token in Capacitor Preferences
        await Preferences.set({
          key: 'access_token',
          value: this.access_token,
        });

        if (this.access_token) {
          router.push({ name: 'tab1' }); // Redirect to main page (tab1)
        }
        
      } catch (error) {
        if (error.response && error.response.data) {
          this.message = error.response.data.message;
          this.errors = error.response.data.errors || {}; // Set validation errors
        } else {
          this.message = 'An error occurred during login.';
        }
        console.error('Error during login:', error);
      }
    },

    async logout(router) {
      // Clear the access_token
      this.access_token = '';
      this.errors = {};

      // Remove access_token from Capacitor Preferences
      await Preferences.remove({ key: 'access_token' });

      router.push({ name: 'welcome' });
    },

    // Restore login state on app startup
    async restoreLoginState() {
      const { value } = await Preferences.get({ key: 'access_token' });
      if (value) {
        this.access_token = value;
      }
    }
  }
});
