<template>
  <div class="h-full w-full">
    <h1 class="p-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0">Naše akcie a turnaje</h1>
    <div class="h-full w-full p-3 max-md:p-0">
      <div class="flex flex-col gap-2 justify-center overflow-hidden h-[34.2rem] max-md:h-[40rem]">
        <template v-for="index in 3" :key="index">
          <a v-if="sortedTournaments[index - 1]" :href="sortedTournaments[index - 1].link" class="relative h-1/3 w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0">
            <ion-icon aria-hidden="true" class="absolute opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]" :icon="index === 0 ? gameController : calendar" />
            <div class="h-1/4 w-full flex items-end">
              <h1 :class="titleClass(sortedTournaments[index - 1].name)" class="font-bold z-20 text-white">{{ sortedTournaments[index - 1].name }}</h1>
            </div>
            <div class="h-3/4 w-full flex flex-col gap-0">
              <h3 class="text-lg font-semibold pb-5 z-20 text-white">{{ sortedTournaments[index - 1].game }}</h3>
              <h3 class="text-lg font-semibold pb-1 z-20 text-white">{{ sortedTournaments[index - 1].date }}</h3>
              <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[index - 1].description) }}</p>
            </div>
          </a>
          <div v-else class="h-1/3 w-full bg-gray-500 rounded-xl">
            Loading...
          </div>
        </template>
      <ion-button @click="this.$router.push('/turnaje')">
        Pozrieť všetky turnaje
      </ion-button>
      </div>
    </div>
  </div>
</template>

<script>
import { IonIcon, IonButton } from '@ionic/vue';
import { ref, computed } from 'vue';
import { useTournamentStore } from '@/store/useTournamentStore.js';
import { gameController, calendar } from 'ionicons/icons';

export default {
  components: {
    IonIcon
  },
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
      if (!description) return '';
      const words = description.split(' ');
      return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : description;
    };

    const titleClass = (title) => {
      if (!title) return '';
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
