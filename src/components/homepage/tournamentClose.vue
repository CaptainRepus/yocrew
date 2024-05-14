<template>
    <div class="h-full w-full">
      <h1 class="p-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0">Naše akcie a turnaje</h1>
      <div class="h-full w-full p-3 max-md:p-0">
        <div class="flex flex-col gap-3 justify-center overflow-hidden h-[34.2rem] max-md:h-72">
            <a v-if="tournamentStore.tournament.length > 0" :href="sortedTournaments[0].link" class="h-1/3 w-full px-3 rounded-xl border border-slate-700 bg-slate-800 overflow-hidden hover:bg-slate-600">
                <div class="h-1/4 w-full flex items-end">
                  <h1 class="font-bold text-2xl z-4">{{ sortedTournaments[0].tournament }}</h1>
                </div>
                <div class="h-1/3 w-full flex flex-col">
                  <h3 class="text-lg font-semibold pb-1 z-4">{{ sortedTournaments[0].game }}</h3>
                  <h3 class="text-lg font-semibold pb-1 z-4">{{ sortedTournaments[0].date }}</h3>
                  <p class="text-sm">{{ sortedTournaments[0].description }}</p>
                </div>
            </a>
          <div v-else class="h-1/3 w-full bg-gray-500">
            Loading...
          </div>

          <a v-if="tournamentStore.tournament.length > 0" :href="sortedTournaments[1].link" class="h-1/3 w-full px-3 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden hover:bg-slate-600">
            <div class="h-1/4 w-full flex items-end">
              <h1 class="font-bold text-2xl">{{ sortedTournaments[1].tournament }}</h1>
            </div>
            <div class="h-1/3 w-full flex flex-col">
              <h3 class="text-lg font-semibold pb-1">{{ sortedTournaments[1].game }}</h3>
              <h3 class="text-lg font-semibold pb-1">{{ sortedTournaments[1].date }}</h3>
              <p class="text-sm">{{ sortedTournaments[1].description }}</p>
            </div>
          </a>
          <div v-else class="h-1/3 w-full bg-gray-500">
            Loading...
          </div>

          <a v-if="tournamentStore.tournament.length > 0" :href="sortedTournaments[2].link" class="h-1/3 w-full px-3 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden hover:bg-slate-600">
            <div class="h-1/4 w-full flex items-end">
              <h1 class="font-bold text-2xl">{{ sortedTournaments[2].tournament }}</h1>
            </div>
            <div class="h-1/3 w-full flex flex-col">
              <h3 class="text-lg font-semibold pb-1">{{ sortedTournaments[2].game }}</h3>
              <h3 class="text-lg font-semibold pb-1">{{ sortedTournaments[2].date }}</h3>
              <p class="text-sm">{{ sortedTournaments[2].description }}</p>
            </div>
          </a>
          <div v-else class="h-1/3 w-full bg-gray-500">
            Loading...
          </div>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useTournamentStore } from '@/store/useTournamentStore.js';
  import { gameController } from 'ionicons/icons';
  
  export default {
    setup() {
      const tournamentStore = useTournamentStore();
  
      // Ensure that the tournamentStore.tournament is an array
      if (!Array.isArray(tournamentStore.tournament)) {
        tournamentStore.tournament = [];
      }
  
      // Computed property to get sorted tournaments by date
      const sortedTournaments = computed(() => {
        return [...tournamentStore.tournament].sort((a, b) => new Date(a.date) - new Date(b.date));
      });
  
      return {
        tournamentStore,
        sortedTournaments,
        gameController
      };
    },
  };
  </script>