<template>
    <div class="w-full h-auto md:px-3 mb-10">
      <h1 class="text-4xl font-bold mt-5">Counter-Strike 2</h1>
      <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 mt-3">
        <div
          v-for="(turnaj, index) in sortedTournament"
          :key="turnaj.id"
          :class="{ hidden: hidden(turnaj.game) }"
          class="relative bg-gray-900 w-full h-96 rounded-xl flex flex-row border border-gray-700 overflow-hidden hover:border-2 hover:border-green-500 hover:bg-gray-700"
        >
          <IonIcon
            :icon="getIcon(index)"
            class="text-green-500 z-10 absolute bottom-[-7rem] right-[-13rem] text-[25rem] opacity-20"
          ></IonIcon>
          <div class="w-full flex flex-col justify-center items-start px-5">
            <p class="text-red-500 font-bold text-2xl mb-3 z-20" v-if="isLive(turnaj.date)">
              <span class="animate-pulse">●</span> LIVE
            </p>
            <p class="text-sm text-center z-20">{{ turnaj.game }} ● {{ formatDate(turnaj.date) }}</p>
            <h1 class="text-2xl md:text-4xl font-bold mb-3 z-20">{{ turnaj.name }}</h1>
            <p class="pe-20 z-20 mb-1">{{ truncateDescription(turnaj.description) }}</p>
            <p class="pe-20 z-20 font-bold mb-5">Počet tímov: {{ turnaj.teams }}</p>
            <button
              @click="openModal(turnaj)"
              class="z-20 px-10 inline-flex items-center py-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
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
      <modal :tournament="selectedTournament" :is-open="isModalOpen" @close="closeModal" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useTournamentStore } from '@/store/useTournamentStore.js';
  import { gameController, ribbon } from 'ionicons/icons';
  import { IonIcon } from '@ionic/vue';
  import modal from '../modalTournament.vue';
  
  // Initialize the tournament store
  const tournamentStore = useTournamentStore();
  
  // Function to format the date to a human-readable format
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('sk-SK', options);
};

  
  // Computed property for sorted tournaments
  const sortedTournament = computed(() => {
    return [...tournamentStore.tournament].sort((a, b) => new Date(a.date) - new Date(b.date));
  });
  
  const selectedTournament = ref(null);
  const isModalOpen = ref(false);
  
  const openModal = (tournament) => {
    selectedTournament.value = tournament;
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
    selectedTournament.value = null;
  };
  
  const truncateDescription = (desc) => {
    if (!desc) return '';
    const words = desc.split(' ');
    return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : desc;
  };
  
  // Function to get the icon based on index
  const getIcon = (index) => {
    return index % 2 === 0 ? gameController : ribbon;
  };
  
  // Function to check if the game should be hidden
  const hidden = (game) => {
    return game !== 'CS2' && game !== 'Counter-Strike 2';
  };
  
  // Function to check if the tournament is live
  const isLive = (dateOfTournament) => {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedTournamentDate = new Date(dateOfTournament).toISOString().split('T')[0];
    return formattedCurrentDate === formattedTournamentDate;
  };
  
  // Fetch the tournament data on component mount
  onMounted(() => {
    tournamentStore.getTournament();
  });
  </script>
  