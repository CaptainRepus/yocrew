<template>
  <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-slate-800 p-6 rounded-lg shadow-lg w-96 h-1/2 flex flex-col justify-center relative">
      <div class="absolute top-5 right-5 mb-10">
        <button @click="closeModal" class="text-gray-400 active:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="text-center">
        <img :src="adImage" alt="Sponsor" class="w-40 mx-auto mb-4" />
        <h2 class="text-xl font-bold mb-2">{{ sponsorName }}</h2>
        <p class="text-gray-200">Tento obsah je podporený naším partnerom. Vďaka ich spolupráci môžeme zlepšovať služby a prinášať kvalitný obsah.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Array of sponsor data with name and image
const sponsors = [
{ name: 'DEV1S', image: '/img/sponsors/DEV1S.png' },
        { name: 'GetGear', image: '/img/sponsors/GetGear.png' },
        { name: 'Walzel', image: '/img/sponsors/logo_Walzel.png' },
        { name: 'NUGOSU', image: '/img/sponsors/nugosu-logo-head-typo-black (2).svg' },
        { name: 'NUTREND', image: '/img/sponsors/NUTREND.png' },
        { name: 'Pizzeria Papa Mafia', image: '/img/sponsors/pizzeria Papa Mafia.svg' },
        { name: 'Emka - Jazyková škola', image: '/img/sponsors/emka.png' },
];

// Reactive state variables
const showModal = ref(false);
const adImage = ref(); // Default to the first sponsor image
const sponsorName = ref(); // Default to the first sponsor name

// Function to close the modal
const closeModal = () => {
  showModal.value = false;
};

// Function to show the ad modal
const showAdModal = () => {
  // Select a random sponsor from the array
  const randomSponsor = sponsors[Math.floor(Math.random() * sponsors.length)];
  
  sponsorName.value = randomSponsor.name;
  adImage.value = randomSponsor.image;
  
  showModal.value = true;
  
  // Close modal automatically after 10 seconds
  setTimeout(() => {
    closeModal();
  }, 10000); // 10 seconds
};

onMounted(() => {
  // Show the modal at random intervals between 3 and 5 minutes (180,000ms to 300,000ms)
  setInterval(() => {
    showAdModal();
  }, Math.floor(Math.random() * (300000 - 180000 + 1)) + 180000);
});

</script>

<style scoped>
/* Optional styling for smooth transitions (optional) */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
