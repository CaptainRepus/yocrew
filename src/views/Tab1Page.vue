<!-- src/views/Tab1Page.vue -->
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

      <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0 bg-slate-900">
        <jumbotron class="max-md:hidden"/>
        <div class="flex flex-col justify-center md:flex-col md:px-20">
          <!-- TURNAJE -->
          <div class="font-bold text-3xl pt-5 md:pb-3 md:text-2xl max-md:mb-3">Aktuálne turnaje</div>
          <tournaments />
          <div class="flex justify-end items-center mt-3 max-md:hidden">
            <router-link to="/turnaje-servery" class="w-1/3 rounded-2xl overflow-hidden font-bold">
              <ion-button class="w-full rounded-2xl overflow-hidden font-bold">
                Pozrieť všetky turnaje
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </ion-button>
            </router-link>
          </div>
          <!-- KONIEC TURNAJOV -->
           <!-- GIVEAWAY -->
          <giveaway v-if="giveawayStore.giveaway !== '' "/>
          <!-- BLOG -->
          <div class="font-bold text-3xl pt-5 md:pb-3 md:text-2xl max-md:mb-3">Najnovšie články</div>
          <div class="flex justify-center flex-col md:flex-row gap-3 md:mt-3">
            <div class="w-full md:flex-1">
              <newestArticle />
            </div>
            <div class="w-full md:flex-1">
              <blog />
            </div>
          </div>
          <!-- BUTTON NA PRESMEROVANIE -->
          <div class="flex justify-end items-center mt-2 max-md:hidden">
            <router-link to="/clanky" class="w-1/3 rounded-2xl overflow-hidden font-bold">
              <ion-button class="w-full rounded-2xl overflow-hidden font-bold">
                Pozrieť všetky články
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </ion-button>
            </router-link>
          </div>
          <!-- KONIEC BLOGU -->
        </div>
        <foter />
        <sponsorBox class="md:hidden"/>
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
import sponsorBox from '../components/sponsorBox.vue';
import newestArticle from '../components/homepage/newestArticle.vue';
import tournaments from '../components/homepage/tournaments.vue';

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