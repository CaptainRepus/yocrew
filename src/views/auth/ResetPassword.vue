<template>
  <ion-page>
    <ion-content>
      <ion-header collapse="condense" class="hidden">
        <ion-toolbar>
          <ion-title size="large">Resetovanie hesla</ion-title>
        </ion-toolbar>
      </ion-header>

        <div class="w-full h-screen flex justify-center items-center flex-col bg-slate-900">
            <div class="w-full text-center font-bold text-3xl mb-10 flex justify-center items-center flex-col">
            <img src="/img/yocrewlogo.png" alt="Logo of the YoCrew" class="h-40">
            <h1>Resetovanie hesla</h1>
            </div>
            <div class="w-full px-8">
            <input type="email" 
                     class="w-full px-5 py-4 text-xl rounded-xl mb-3 border-[3px] border-gray-800 bg-slate-900 focus:border-white" 
                     placeholder="Tvoj email" 
                     v-model="email">
    
            <ion-button @click="resetPassword" 
                    class="w-full text-xl rounded-xl bg-green-500 text-white font-bold mb-7 border-[3px] border-green-800 focus:border-green-300">
                Resetovať heslo
            </ion-button>
            
            <router-link to="/login" class="text-center text-gray-500 text-lg font-bold flex justify-center mb-2">
                Vrátiť sa späť
            </router-link>
            </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonButton, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
</script>
  