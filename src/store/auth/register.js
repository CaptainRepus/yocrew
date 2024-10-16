import { defineStore } from "pinia";
import axios from "axios";
import { Preferences } from '@capacitor/preferences';

export const useRegisterStore = defineStore({
  id: "register",
  state: () => ({
    message: '',
    errors: {}, // Store validation errors here
    access_token: '',
  }),
  actions: {
    async Register(email, name, password, router) {
      try {
        const response = await axios.post('https://api.wade-development.com/api/YoCrew/App/register', {
          name,
          email,
          password,
        });

        this.message = response.data.message;
        this.errors = {}; // Clear errors on successful registration
        this.access_token = response.data.access_token;

        // Save the access_token in Capacitor Preferences
        await Preferences.set({
          key: 'access_token',
          value: this.access_token,
        });

        // Redirect to the main page (tab1) if registration was successful
        if (this.access_token) {
          router.push({ name: 'tab1' });
        }

      } catch (error) {
        // Log the error response from the server
        if (error.response && error.response.data) {
          console.error('Error response data:', error.response.data);
          this.message = error.response.data.message;
          this.errors = error.response.data.errors || {}; // Set validation errors
        } else {
          this.message = 'An error occurred during registration.';
        }
        console.error('Error during registration:', error);
        return false;
      }
    }
  }
});
