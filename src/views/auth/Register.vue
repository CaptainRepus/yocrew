<template>
    <ion-page>
      <ion-content>
        <ion-header collapse="condense" class="hidden">
          <ion-toolbar>
            <ion-title size="large">Register</ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="w-full h-screen flex justify-center items-center flex-col bg-slate-900">
          <div class="w-full text-center font-bold text-3xl mb-10 flex justify-center items-center flex-col">
            <h1>Pridaj sa do YoCrew!</h1>
          </div>
          <div class="w-full px-8">
            <input type="email" 
                   class="w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white" 
                   placeholder="Tvoj email" 
                   v-model="email">
    
            <input type="text" 
                   class="w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white" 
                   placeholder="Tvoja prezývka" 
                   v-model="nickname">
    
            <input type="password" 
                   class="w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white" 
                   placeholder="Tvoje heslo" 
                   v-model="password">
    
            <input type="password" 
                   class="w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white" 
                   placeholder="Zopakuj heslo" 
                   v-model="verifyPassword">
    
            <select v-model="gender" 
                    class="w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 text-white focus:border-white">
              <option value="" disabled selected>Vyber si pohlavie</option>
              <option value="male">Muž</option>
              <option value="female">Žena</option>
              <option value="other">Iné</option>
            </select>
    
            <ion-button @click="register" 
                    class="w-full px-5 py-3 text-xl rounded-xl bg-green-500 text-white font-bold mb-7 border-[3px] border-green-800 focus:border-green-300">
              Registruj sa
            </ion-button>
            
            <router-link to="/login" class="text-center text-gray-500 text-lg font-bold flex justify-center mb-2">
              Už máš účet? Prihlás sa
            </router-link>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonContent, IonButton, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useRegisterStore } from '@/store/auth/register.js';
  
  const email = ref('');
  const nickname = ref('');
  const password = ref('');
  const verifyPassword = ref('');
  const router = useRouter();
  
  const register = () => {
    // Add your registration logic here, such as form validation and API call
    useRegisterStore().Register(email.value, nickname.value, password.value, router);
  };
  </script>
  