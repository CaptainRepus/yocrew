<template>
  <ion-page>
    <ion-header class="hidden">
      <ion-toolbar mode="ios" class="md:hidden">
        <ion-title size="large" class="mt-5">
          <div>Turnaje</div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="md:hidden">
        <ion-toolbar class="mt-[-6.5rem]">
          <ion-title size="large" class="mt-[2.5rem] z-10">
            <div>Turnaje</div>
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="md:mt-20 w-full z-[50000] md:px-0 bg-slate-900">
        <jumbotron
        title="Turnaje"
        description="Bojisko pre skutočných ešportových majstrov."
        class="bg-[url('/img/IMG_0129(1).JPG')] bg-cover mb-5 md:mb-10" 
        />
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
