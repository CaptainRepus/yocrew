<template>
    <div class="w-full h-auto md:px-3 mb-10">
        <h1 class="text-4xl font-bold mt-5">Counter-Strike 2</h1>
        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 mt-3">
            <a v-for="(turnaj, index) in tournamentStore.tournament" :href="turnaj.link"
                :key="index"
                :class="{'hidden': hidden(turnaj.game)}"
                class="relative bg-gray-900 w-full h-96 rounded-xl flex flex-row border border-gray-700 overflow-hidden hover:border-2 hover:border-green-500 hover:bg-gray-700">
                <ion-icon :icon="getIcon(index)" class="text-green-500 z-10 absolute bottom-[-7rem] right-[-13rem] text-[25rem] opacity-20"></ion-icon>
                <div class="w-full flex flex-col justify-center items-start px-5">
                    <p class="text-red-500 font-bold text-2xl mb-3 z-20" v-if="isLive(turnaj.date)">
                        <span class="animate-pulse">●</span> LIVE
                    </p>
                    <p class="text-sm text-center z-20">{{ turnaj.game }} ● {{ formatDate(turnaj.date) }}</p>
                    <h1 class="text-2xl md:text-4xl font-bold mb-3 z-20">{{ turnaj.name }}</h1>
                    <p class="pe-20 z-20 mb-1">{{ turnaj.description }}</p>
                    <p class="pe-20 z-20 font-bold">Počet tímov: {{ turnaj.teams }}</p>
                </div> 
            </a>
        </div>
    </div>
</template>

<script setup>
import { useTournamentStore } from '@/store/useTournamentStore.js';
import { 
    gameController,
    ribbon,
    skull
} from 'ionicons/icons';

// Initialize the tournament store
const tournamentStore = useTournamentStore();

// Function to format the date to a human-readable format
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

const getIcon = (index) => {
    return index % 2 === 0 ? gameController : ribbon;
};

const hidden = (game) => {
    return game === 'CS2' || game === 'Counter-Strike 2' ? false : true;
};

// Function to check if the tournament is live
const isLive = (dateOfTournament) => {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedTournamentDate = new Date(dateOfTournament).toISOString().split('T')[0];
    return formattedCurrentDate === formattedTournamentDate;
};

// Fetch the tournament data
const getTournament = () => {
    tournamentStore.getTournament();
};
getTournament();
</script>