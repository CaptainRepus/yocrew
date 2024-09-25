<template>
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-20">
      <div class="bg-slate-800 p-6 rounded-lg shadow-lg w-96 h-full">
        <div class="flex justify-end">
          <button @click="closeModal" class="text-gray-500 active:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="text-center">
          <img :src="adImage" alt="Sponsor" class="w-32 mx-auto mb-4" />
          <h2 class="text-xl font-bold mb-2">{{ sponsorName }}</h2>
          <p class="text-gray-400">Tento obsah je podporený naším partnerom. Vďaka ich spolupráci môžeme zlepšovať služby a prinášať kvalitný obsah.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Array of sponsor names
  const sponsorNames = ['Sponsor A', 'Sponsor B', 'Sponsor C', 'Sponsor D', 'Sponsor E'];
  
  // Reactive state variables
  const showModal = ref(false);
  const adImage = ref('https://via.placeholder.com/150'); // Example placeholder image
  const sponsorName = ref(sponsorNames[0]); // Default to the first sponsor
  
  // Function to close the modal
  const closeModal = () => {
    showModal.value = false;
  };
  
  // Function to show the ad modal
  const showAdModal = () => {
    // Select a random sponsor from the array
    sponsorName.value = sponsorNames[Math.floor(Math.random() * sponsorNames.length)];
    
    showModal.value = true;
    
    // Close modal automatically after 10 seconds
    setTimeout(() => {
      closeModal();
    }, 100000); // 10 seconds
  };
  
  // Lifecycle hook to run the interval logic
  onMounted(() => {
    // Show the modal at random intervals between 15 and 20 minutes (900,000ms to 1,200,000ms)
    setInterval(() => {
      showAdModal();
    }, Math.floor(Math.random() * (1200 - 900 + 1)) + 900);
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
  