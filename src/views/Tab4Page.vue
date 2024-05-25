<template>
    <ion-page>
        <ion-header>
      <ion-toolbar mode="ios" class="md:hidden">
        <ion-title size="large" class="mt-5">CS2 Servery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="md:hidden">
        <ion-toolbar class="mt-[-6.5rem]">
          <ion-title size="large" class="mt-[2.5rem] z-10">CS2 Servery</ion-title>
        </ion-toolbar>
      </ion-header>

        <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0">
          <jumbotron 
          title="CS2 Servery"
          description="Preži najlepšie herné momenty na našich CS2 serveroch"
          class="bg-[url('/img/jumbotron_blog.jpg')] bg-cover"
          />
          <listOfTournaments />
        </div>

      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import jumbotron from '../components/jumbotron.vue';
  import listOfTournaments from '../components/servery/listOfTournaments.vue';
  import { useServerStore } from '@/store/useServerStore.js';

  const serverStore = useServerStore();
  const getServers = () =>{
    serverStore.getServers();
  }
  getServers();
  </script>