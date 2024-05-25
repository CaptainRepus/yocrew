<template>
  <div class="h-full w-full">
    <h1 class="p-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0">Naše akcie a turnaje</h1>
    <div class="h-full w-full p-3 max-md:p-0">
      <div class="flex flex-col gap-2 justify-center overflow-hidden h-[34.2rem] max-md:h-[40rem]">
        <a v-if="tournamentStore.tournament.length > 0" :href="sortedTournaments[0].link" class="relative h-1/3 w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0">
          <ion-icon aria-hidden="true" class="absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]" :icon="gameController" />
          <div class="h-1/4 w-full flex items-end">
            <h1 :class="titleClass(sortedTournaments[0].tournament)" class="font-bold z-20 text-white">{{ sortedTournaments[0].tournament }}</h1>
          </div>
          <div class="h-3/4 w-full flex flex-col gap-0">
            <h3 class="text-lg font-semibold pb-5 z-20 text-white">{{ sortedTournaments[0].game }}</h3>
            <h3 class="text-lg font-semibold pb-1 z-20 text-white">{{ sortedTournaments[0].date }}</h3>
            <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[0].description) }}</p>
          </div>
        </a>
        <div v-else class="h-1/3 w-full bg-gray-500">
          Loading...
        </div>

        <a v-if="tournamentStore.tournament.length > 0" :href="sortedTournaments[1].link" class="relative h-1/3 w-full px-3 rounded-xl bg-gray-900 border border-gray-800 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2">
          <ion-icon aria-hidden="true" class="absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]" :icon="calendar" />
          <div class="h-1/4 w-full flex items-end">
            <h1 :class="titleClass(sortedTournaments[1].tournament)" class="font-bold z-20 text-white">{{ sortedTournaments[1].tournament }}</h1>
          </div>
          <div class="h-3/4 w-full flex flex-col gap-0">
            <h3 class="text-lg font-semibold pb-1 z-20 text-white">{{ sortedTournaments[1].game }}</h3>
            <h3 class="text-lg font-semibold pb-1 z-20 text-white">{{ sortedTournaments[1].date }}</h3>
            <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[1].description) }}</p>
          </div>
        </a>
        <div v-else class="h-1/3 w-full bg-gray-500">
          Loading...
        </div>

        <a v-if="tournamentStore.tournament.length > 0" :href="sortedTournaments[2].link" class="relative h-1/3 w-full px-3 rounded-xl bg-gray-900 border border-gray-800 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2">
          <ion-icon aria-hidden="true" class="absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]" :icon="calendar" />
          <div class="h-1/4 w-full flex items-end">
            <h1 :class="titleClass(sortedTournaments[2].tournament)" class="font-bold z-20 text-white">{{ sortedTournaments[2].tournament }}</h1>
          </div>
          <div class="h-3/4 w-full flex flex-col gap-0">
            <h3 class="text-lg font-semibold z-20 text-white">{{ sortedTournaments[2].game }}</h3>
            <h3 class="text-lg font-semibold z-20 text-white">{{ sortedTournaments[2].date }}</h3>
            <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[2].description) }}</p>
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
import { gameController, calendar } from 'ionicons/icons';

export default {
  setup() {
    const tournamentStore = useTournamentStore();

    // Ensure that the tournamentStore.tournament is an array
    if (!Array.isArray(tournamentStore.tournament)) {
      tournamentStore.tournament = [];
    }

    const sortedTournaments = computed(() => {
      return [...tournamentStore.tournament].sort((a, b) => new Date(a.date) - new Date(b.date));
    });

    const truncateDescription = (description) => {
      const words = description.split(' ');
      return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : description;
    };

    const titleClass = (title) => {
      return title.split(' ').length > 2 ? 'text-xl max-md:text-lg' : 'text-2xl max-md:text-xl';
    };

    return {
      tournamentStore,
      sortedTournaments,
      gameController,
      calendar,
      truncateDescription,
      titleClass
    };
  },
};
</script>