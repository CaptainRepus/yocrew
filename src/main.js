import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';
import '@heroicons/vue';
import 'aos';

import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import '@ionic/vue/css/palettes/dark.system.css';
import './theme/index.css';
import 'flowbite';
import '@ionic/vue/css/palettes/dark.always.css';

// Import Capacitor Push Notifications
import { PushNotifications } from '@capacitor/push-notifications';
import axios from 'axios';

// Firebase SDK import
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase config (Android & iOS)
const firebaseConfig = {
  apiKey: "AIzaSyCQYsBIS4fuZP97JYFP3wqIYM0g1vJWkO8",
  authDomain: "yocrew-2e2c9.firebaseapp.com",
  projectId: "yocrew-2e2c9",
  storageBucket: "yocrew-2e2c9.appspot.com",
  messagingSenderId: "415239384999",
  appId: "1:415239384999:android:223f9944ae4a8b77085082",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// Function to request and handle Firebase token for both Android and iOS
const registerPushNotifications = async () => {
  // Request notification permissions
  const result = await PushNotifications.requestPermissions();
  
  if (result.receive === 'granted') {
    // Register for push notifications
    PushNotifications.register();

    // Handle token registration (both Android and iOS)
    PushNotifications.addListener('registration', async (token) => {
      console.log('Registration token:', token.value);

      try {
        // Send the token to your backend
        await axios.post('https://api.wade-development.com/api/YoCrew/App/store-device-token', {
          token: token.value,
        });
        console.log('Token sent to backend');
      } catch (error) {
        console.error('Error sending token to backend:', error);
      }
    });

    // Handle foreground notifications
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Notification received:', notification);
      // Optionally handle in-app alerts or notifications
    });

    // Handle notification action (background/closed)
    PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
      console.log('Notification action performed:', action);
      // Optionally handle actions or navigation based on notification action
    });

    // Firebase Messaging: Listen for messages when the app is in the foreground
    onMessage(messaging, (payload) => {
      console.log('Message received in foreground:', payload);
      // Optionally show in-app alerts or notifications
    });

  } else {
    console.log('Permission not granted for push notifications.');
  }
};

// Call the function to register push notifications for both Android and iOS
registerPushNotifications();

const app = createApp(App)
  .use(IonicVue)
  .use(createPinia())
  .use(router);

app.mount('#app');
