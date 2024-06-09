<template>
  
  <div class="h-full w-full flex flex-col py-3 max-lg:hidden">
    <div class="h-full w-full px-3 max-md:p-0 md:flex-1 flex flex-col justify-between">
      <h1 class="py-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0 max-lg:hidden">Mohlo by Vás zaujímať</h1>
      <div class="md:flex-1 flex flex-col gap-2 justify-center overflow-hidden">
        <div class="w-full h-1/2 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <NewsPanel />
        </div>
        <div class="md:flex-1 flex flex-col gap-2">
          <template v-for="index in 2" :key="index">
            <a v-if="sortedTournaments[index - 1]" :href="sortedTournaments[index - 1].link" class="relative h-full w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0">
              <ion-icon aria-hidden="true" class="absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-0.5rem] right-[-4rem]" :icon="gameController" />
              <div class="h-1/4 w-full flex items-end">
                <h1 :class="titleClass(sortedTournaments[index - 1].name)" class="m-0 font-bold z-20 text-white">{{ sortedTournaments[index - 1].name }}</h1>
              </div>
              <div class="h-3/4 w-full flex flex-col gap-2">
                <p class="text-lg font-semibold z-20 text-white">{{ sortedTournaments[index - 1].game }}</p>
                <p class="text-lg font-semibold z-20 text-white">{{ formatDate(sortedTournaments[index - 1].date) }}</p>
                <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[index - 1].description) }}</p>
              </div>
            </a>
            <div v-else class="h-full w-full bg-gray-500 rounded-xl">
              Loading...
            </div>
          </template>
        </div>
      </div>
      <div class="flex justify-center pt-3 w-full">
        <router-link to="/turnaje-servery" class="w-full">
          <ion-button @click="toTurnaje" class="w-full">
            Pozrieť všetky turnaje
          </ion-button>
        </router-link>
        
      </div>
    </div>
  </div>

  <!-- MOBILE VIEW -->
  <div class="h-full w-full flex flex-col py-3 md:hidden">
    <h1 class="ps-3 py-3 font-bold text-2xl max-md:mb-2 max-md:ps-0">Najbližšie turnaje</h1>
    <div class="h-full w-full px-3 max-md:p-0 flex flex-col justify-between">
      <div class=" flex flex-col gap-2 justify-center overflow-hidden">
        <div class="flex flex-col gap-2">
          <template v-for="index in 3" :key="index">
            <a v-if="sortedTournaments[index - 1]" :href="sortedTournaments[index - 1].link" class="relative h-52 w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0">
              <ion-icon aria-hidden="true" class="absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]" :icon="gameController" />
              <div class="h-1/4 w-full flex items-end">
                <h1 :class="titleClass(sortedTournaments[index - 1].name)" class="m-0 font-bold z-20 text-white">{{ sortedTournaments[index - 1].name }}</h1>
              </div>
              <div class="h-3/4 w-full flex flex-col gap-2">
                <p class="text-lg font-semibold z-20 text-white">{{ sortedTournaments[index - 1].game }}</p>
                <p class="text-lg font-semibold z-20 text-white">{{ formatDate(sortedTournaments[index - 1].date)  }}</p>
                <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[index - 1].description) }}</p>
              </div>
            </a>
            <div v-else class="h-full w-full bg-gray-500 rounded-xl flex justify-center items-center text-3xl">
              Loading...
            </div>
          </template>
        </div>
      </div>
      <div class="flex justify-center pt-3 w-full">
        <router-link to="/turnaje-servery" class="w-full">
          <ion-button @click="toTurnaje" class="w-full">
            Pozrieť všetky turnaje
          </ion-button>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { IonIcon, IonButton } from '@ionic/vue';
import { ref, computed } from 'vue';
import { useTournamentStore } from '@/store/useTournamentStore.js';
import { useBlogStore } from '@/store/useBlogStore.js';
import { gameController, calendar } from 'ionicons/icons';
import NewsPanel from './newsPanel.vue';

  const tournamentStore = useTournamentStore();

  // Ensure that the tournamentStore.tournament is an array
  if (!Array.isArray(tournamentStore.tournament)) {
    tournamentStore.tournament = [];
  }

  const sortedTournaments = computed(() => {
    return [...tournamentStore.tournament].sort((a, b) => new Date(a.date) - new Date(b.date));
  });

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric"};
    return new Date(date).toLocaleDateString('sk-SK', options);
  }

  const truncateDescription = (description) => {
    if (!description) return '';
    const words = description.split(' ');
    return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : description;
  };

  const titleClass = (title) => {
    if (!title) return '';
    return title.split(' ').length > 2 ? 'text-xl max-md:text-lg' : 'text-2xl max-md:text-xl';
  };

</script>