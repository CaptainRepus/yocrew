<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios" class="md:hidden">
        <ion-title size="large" class="mt-5">Domov</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="md:hidden">
        <ion-toolbar class="mt-[-6.5rem]">
          <ion-title size="large" class="mt-[2.5rem] z-10">Domov</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="p-4 md:mt-20 w-52 h-screen bg-red-500 z-[50000]">
        <h1 class="text-2xl text-white">IDK</h1>
      </div>
      

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
