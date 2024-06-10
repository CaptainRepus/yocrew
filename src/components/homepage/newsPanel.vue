<template>
  <!-- BLOG SECTION -->
  <div v-if="!isTodayTournament" class="text-center text-xl font-bold w-full h-full relative">
    <div v-if="sortedBlog.length > 0">
      <img :src="sortedBlog[0].cesta_obrazku" alt="Blog Image" class="absolute object-cover w-full h-full opacity-50 z-10"/>
      <div class="absolute bottom-0 flex h-full w-full items-end justify-center z-20">
        <div class="bg-gray-900 w-full h-1/3 bg-opacity-80 flex justify-center items-center flex-col gap-2">
          <span class="text-white">{{ sortedBlog[0].name }}</span>
          <button
            @click="openBlogModal(sortedBlog[0])"
            class="inline-flex items-center px-16 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            Pozrieť viac
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
    <blogModal v-if="isBlogModalOpen" :blog="selectedBlog" :is-open="isBlogModalOpen" @close="closeBlogModal"/>
  </div>

  <!-- TOURNAMENT SECTION -->
  <div v-else class="w-full h-full flex flex-col">
    <div class="h-1/4 w-full flex justify-center items-center">
      <div class="text-2xl font-bold flex gap-5 max-md:p-5">
        <p class="font-bold z-20 flex justify-center items-center text-white text-xl bg-red-500 px-5 rounded-xl">
          <span class="animate-pulse">●</span> LIVE
        </p> {{ sortedTournament[0].name }}
      </div>
    </div>
    <div class="h-3/4 w-full flex flex-col justify-center items-start p-5 pt-0">
      <p class="font-bold text-xl">Hra: {{ sortedTournament[0].game }}</p>
      <p class="font-bold text-xl">Prizepool: {{ sortedTournament[0].prizepool }}€</p>
      <p class="mt-3">{{ sortedTournament[0].description }}</p>
      <button
        @click="openTournamentModal(sortedTournament[0])"
        class="z-20 px-10 flex items-center justify-center h-full max-md:h-10 w-full mt-2 max-md:mt-5 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
      >
        Pozrieť viac
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>

  <tournamentModal :tournament="selectedTournament" :is-open="isTournamentModalOpen" @close="closeTournamentModal" />
</template>

<script setup>
import { useBlogStore } from '@/store/useBlogStore.js';
import { useTournamentStore } from '@/store/useTournamentStore.js'; 
import { computed, ref } from 'vue';
import blogModal from '../blogModal.vue';
import tournamentModal from '../modalTournament.vue';

const blogStore = useBlogStore();
const tournamentStore = useTournamentStore();

const selectedBlog = ref(null);
const isBlogModalOpen = ref(false);
const selectedTournament = ref(null);
const isTournamentModalOpen = ref(false);

function openBlogModal(blog) {
  selectedBlog.value = blog;
  isBlogModalOpen.value = true;
}

function closeBlogModal() {
  selectedBlog.value = null;
  isBlogModalOpen.value = false;
}

function openTournamentModal(tournament) {
  selectedTournament.value = tournament;
  isTournamentModalOpen.value = true;
}

function closeTournamentModal() {
  selectedTournament.value = null;
  isTournamentModalOpen.value = false;
}

const sortedBlog = computed(() => {
  return [...blogStore.articles].sort((a, b) => new Date(a.date) - new Date(b.date));
});

// Filter out past tournaments but include those happening today
const upcomingTournaments = computed(() => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return tournamentStore.tournament.filter((turnaj) => {
    const tournamentDate = new Date(turnaj.date);
    tournamentDate.setHours(0, 0, 0, 0);
    return tournamentDate >= currentDate;
  });
});

const sortedTournament = computed(() => {
  return [...upcomingTournaments.value].sort((a, b) => new Date(a.date) - new Date(b.date));
});

// Check if there's a tournament today
const isTodayTournament = computed(() => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  if (sortedTournament.value.length > 0) {
    const tournamentDate = new Date(sortedTournament.value[0].date);
    tournamentDate.setHours(0, 0, 0, 0);
    return currentDate.getTime() === tournamentDate.getTime();
  }
  return false;
});
</script>