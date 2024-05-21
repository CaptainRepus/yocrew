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
        <giveaway /> 
        <div class="w-full h-auto flex flex-col md:flex-row">
          <div class="w-full h-full">
            <streamWidget />
            <div class="w-full">
              <tournamentClose />
            </div>
          </div>
          <div class="w-full h-full max-md:mt-5">
            <blog />
          </div>
        </div>
        <div class="w-full h-full max-md:mt-5  py-2 max-md:pt-0">
          <gallery />
        </div>
        <foter />
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import giveaway from '../components/homepage/giveaway.vue';
import { useGiveawayStore } from '@/store/useGiveawayStore.js';
import { useTournamentStore } from '../store/useTournamentStore.js';
import blog from '../components/homepage/blog.vue';
import streamWidget from '../components/homepage/streamWidget.vue';
import tournamentClose from '../components/homepage/tournamentClose.vue';
import gallery from '../components/homepage/gallery.vue';
import foter from '../components/footer.vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    giveaway,
    blog,
    streamWidget,
    tournamentClose,
    gallery,
    foter,
  },
  setup(){
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
    return {
      blogStore,
      getBlog,
      getGiveaway,
      giveawayStore,
      tournamentStore,
      getTournaments,
    }
  },
  mounted(){
    this.getBlog();
    this.getGiveaway();
    this.getTournaments();
  }
}
</script>
