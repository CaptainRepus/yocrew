import { defineStore } from "pinia";
import axios from "axios";

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

        // Set the access token as a cookie
        document.cookie = `access_token=${this.access_token};`;

        if (this.access_token) {
          router.push({ name: 'tab1' });
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
    }
  }
});
