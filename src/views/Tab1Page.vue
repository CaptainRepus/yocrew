<template>
  <ion-page class="overflow-hidden">
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

      <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0">
        <giveaway v-if="giveawayStore.giveaway !== '' "/>
        <jumbotron class="max-md:hidden"/>
        <div class="flex flex-col md:flex-row md:px-10">
          <div class="flex flex-col md:flex-row md:px-28 gap-1 md:mt-3">
            <div class="w-full md:flex-1">
              <blog />
            </div>
            <div class="w-full md:flex-1 md:h-full md:hidden lg:block">
              <tournamentClose />
            </div>
        </div>

      </div>

        <foter />
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { onMounted } from 'vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import { useGiveawayStore } from '@/store/useGiveawayStore.js';
import { useTournamentStore } from '@/store/useTournamentStore.js';
import giveaway from '../components/homepage/giveaway.vue';
import foter from '../components/footer.vue';
import blog from '../components/homepage/blog.vue';
import jumbotron from '../components/homepage/jumbotron.vue';
import tournamentClose from '../components/homepage/tournamentClose.vue';

const blogStore = useBlogStore();
const giveawayStore = useGiveawayStore();
const tournamentStore = useTournamentStore();
const getBlog = () =>{
  blogStore.getBlog();
}
const getGiveaway = () =>{
  giveawayStore.getGiveaway();
}
const getTournaments = () =>{
  tournamentStore.getTournament();
}

onMounted(() => {
  getBlog();
  getGiveaway();
  getTournaments();
});
</script>
