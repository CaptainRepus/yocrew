<template>
  <ion-page>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>Turnaje</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense" class="mt-[-0.5rem]">
      <ion-toolbar>
        <ion-title size="large">Turnaje</ion-title>
      </ion-toolbar>
    </ion-header>

      <div class="md:mt-20 w-full z-[50000] md:px-0 bg-slate-900">

        <layout />
        <ListOfServers />
        <foter />
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import jumbotron from '../components/jumbotron.vue';
import layout from '../components/turnaje/layoutTournaments.vue';
import { useSectionStore } from '@/store/useSectionStore.js';
import ListOfServers from '../components/servery/listOfServers.vue';
import { useServerStore } from '@/store/useServerStore.js';
import foter from '@/components/footer.vue'

const sectionStore = useSectionStore();
const serverStore = useServerStore();

const getServers = () =>{
  serverStore.getServers();
}


getServers();
</script>
