<template>
  <ion-page>
    <ion-content class="bg-slate-900 text-white">
      <ion-header collapse="condense" class="hidden">
          <ion-toolbar>
            <ion-title size="large">Welcome</ion-title>
          </ion-toolbar>
        </ion-header>
      <div class="flex flex-col justify-end items-center h-full pb-20 relative">
        <!-- Video Section with Gray Filter -->
        <div class="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
          <video
            src="/robo.mp4"
            class="w-full h-full object-cover filter-gray"
            autoplay
            muted
            loop
          ></video>
          <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
  
        <div class="z-20">
          <img src="/img/yocrewlogo.png" class="w-28" alt="">
        </div>

        <!-- Text Section -->
        <div class="text-left px-4 mt-6 z-20">
          <h1 class="text-3xl font-bold">Spájame hráčov, tvoríme šampiónov!</h1>
        </div>
  
        <!-- Button Section -->
        <div class="flex flex-col items-center space-y-4 mt-3 z-20 w-full px-4">
          <router-link
            to="/register"
            class="w-full bg-green-600 p-3 rounded-xl text-xl text-center text-white font-bold"
          >
            Začať
          </router-link>
          <router-link to="/login" class="text-white font-semibold"
            >Už máš účet? Prihlás sa</router-link
          >
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
  
  <script setup>
  import { IonContent, IonPage, IonTitle, IonHeader, IonToolbar } from '@ionic/vue';
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  /* Apply a grayscale filter to the video */
  .filter-gray {
    filter: grayscale(90%);
  }
  
  /* Add custom styles for better presentation */
  .ion-content {
    --background: transparent;
  }
  </style>
  