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

const app = createApp(App)
  .use(IonicVue)
  .use(createPinia())
  .use(router);


  
  // Request permission for push notifications
  PushNotifications.requestPermissions().then(result => {
    if (result.receive === 'granted') {
      // Register for push notifications
      PushNotifications.register();
    }
  });

  // Handle device registration (send token to your backend)
  PushNotifications.addListener('registration', async (token) => {
    console.log('Registration token:', token.value);

    try {
      // Send the token to your backend
      await axios.post('https://api.wade-development.com//api/YoCrew/App/store-device-token', {
        token: token.value,
      });
      console.log('Token sent to backend');
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  });

  // Handle incoming notifications when the app is in foreground
  PushNotifications.addListener('pushNotificationReceived', (notification) => {
    console.log('Notification received:', notification);
    // Optionally handle the notification here (e.g., show in-app alert)
  });

  // Handle notification tap/action when the app is in background/closed
  PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
    console.log('Notification action performed:', action);
    // Optionally handle navigation or other logic based on action
  });

  app.mount('#app');

