<template>
  <div class="overflow-hidden relative">
    <div class="flex animate-slide">
      <div
        v-for="(sponsor, index) in sponsors"
        :key="'original-' + index"
        class="flex-none w-48 h-32 bg-gray-500 flex items-center justify-center rounded-lg shadow-lg mx-2"
      >
        <img :src="sponsor.logo" :alt="sponsor.name" class="max-h-full max-w-full" />
      </div>
      <!-- Duplicate sponsor boxes multiple times to create infinite loop effect -->
      <div
        v-for="(sponsor, index) in sponsors.concat(sponsors).concat(sponsors)"
        :key="'duplicate-' + index"
        class="flex-none w-48 h-32 bg-gray-500 flex items-center justify-center rounded-lg shadow-lg mx-2"
      >
        <img :src="sponsor.logo" :alt="sponsor.name" class="max-h-full max-w-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorSlider',
  data() {
    return {
      sponsors: [
        { name: 'DEV1S', logo: '/img/sponsors/DEV1S.png' },
        { name: 'GetGear', logo: '/img/sponsors/GetGear.png' },
        { name: 'Walzel', logo: '/img/sponsors/logo_Walzel.png' },
        { name: 'NUGOSU', logo: '/img/sponsors/nugosu-logo-head-typo-black (2).svg' },
        { name: 'NUTREND', logo: '/img/sponsors/NUTREND.png' },
        { name: 'Pizzeria Papa Mafia', logo: '/img/sponsors/pizzeria Papa Mafia.svg' },
        { name: 'Emka - Jazyková škola', logo: '/img/sponsors/emka.png' },
      ],
      slideDuration: 50, // Duration for a full slide (seconds)
    };
  },
};
</script>

<style>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-270.333%); /* Adjust to one third to match the three sets of panels */
  }
}
@keyframes slidepc {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-300%); /* Adjust to one third to match the three sets of panels */
  }
}
.animate-slide {
  display: flex;
  animation: slidepc linear infinite;
  animation-duration: 60s; /* Adjust duration as needed */
}
@media only screen and (max-width: 768px) {
  .animate-slide {
    animation: slide linear infinite;
    animation-duration: 15s; /* Faster animation duration for mobile */
  }
}
</style>
