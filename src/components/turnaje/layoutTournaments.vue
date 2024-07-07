<template>
  <div class="w-full h-auto md:px-3 mt-10">
    <h1 class="text-4xl font-bold mt-5">Aktuálne turnaje</h1>
    <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-3 mt-3" v-if="displayTournaments && displayTournaments.length > 0">
      <router-link
        v-for="(tournament, index) in displayTournaments"
        :key="index"
        to="/"
        class="relative w-full h-full md:h-[26rem] rounded-2xl overflow-hidden flex flex-col hover-link"
        @mouseenter="scaleImage"
        @mouseleave="resetImage">
        <img
          :src="imgSwitch(tournament ? tournament.game : ' ')"
          alt="Tournament image"
          class="absolute h-56 md:h-full w-full object-cover transition ease-in z-10"
        />
        <div class="relative w-full h-1/3 md:h-3/5 overflow-hidden z-20">
          <div v-if="tournament" class="absolute bottom-0 left-3">
            <h1 class="font-semibold text-sm text-white hover:text-gray-300 transition ease-in">{{ tournament.game }}</h1>
            <h1 class="font-bold text-lg text-white hover:text-gray-300 transition ease-in">{{ tournament.name }}</h1>
          </div>
          <div v-else class="absolute bottom-0 left-3">
            <h1 class="font-semibold text-sm text-white">--/--</h1>
            <h1 class="font-bold text-lg text-white transition ease-in hover:text-gray-300">Na turnaji pracujeme</h1>
          </div>
        </div>
        <div :class="['w-full h-1/2 md:h-[30%] flex flex-col px-4 z-20', bgSwitch(tournament ? tournament.game : '')]">
          <div v-if="tournament" class="h-1/3 w-full flex justify-start items-center text-sm text-white transition ease-in hover:text-gray-300">
            Registrácia do: 9/11/2001 | 15:00
          </div> <!--INPUT DATE REGISTRACIE-->
          <div v-else class="h-1/3 w-full flex justify-start items-center text-sm text-white">
            --/--
          </div>
          <div class="h-1/4 w-full flex justify-start items-center gap-2">
            <div class="h-5/6 w-[45%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in">
              <ion-icon :icon="gitNetwork" class="text-black text-sm me-2" />
              Tip Bracketov
            </div> <!--INPUT BRACKETOV-->
            <div class="h-5/6 w-[30%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in">
              <ion-icon :icon="shieldHalf" class="text-black text-sm me-2" />
              5v5
            </div> <!--INPUT BRACKETOV-->
            <div class="h-5/6 w-[25%] bg-white text-xs text-black rounded-lg flex justify-center items-center hover:bg-gray-300 transition ease-in">
              <ion-icon :icon="people" class="text-black text-sm me-2" />
              8
            </div> <!--INPUT BRACKETOV-->
          </div>
          <div class="h-[42%] w-full flex justify-start items-center overflow-hidden text-white">
            <p class="text-sm hover:text-gray-300 transition ease-in">{{ tournament ? truncatedTournamentName(tournament.description) : 'Tento turnaj ešte pre Vás ešte pripravujeme...' }}</p>
          </div>
        </div>
        <div :class="['w-full h-[16.6667%] md:h-[10%] z-20 flex justify-center items-center text-white px-2', bgsubSwitch(tournament ? tournament.game : '')]">
          <div class="w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold transition ease-in hover:text-gray-300">{{ tournament ? formatDate(tournament.date) : 'Dátum' }} | 13:00</div> <!--INPUT DATE-->
          <div class="w-1/2 h-full flex justify-center items-center text-[0.9rem] font-bold ps-2 transition ease-in hover:text-gray-300">{{ tournament ? tournament.prizepool + '€' : 'Prizepool' }} <ion-icon :icon="trophy" class="text-white text-sm ms-2" /></div>
        </div>
      </router-link>
    </div>
    <div class="w-full h-[30vh] flex justify-center items-center" v-else>
      <h1 class="font-bold text-3xl">Pripravujeme pre Vás ďalšie turnaje...</h1>
    </div>
  </div>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { gitNetwork, shieldHalf, trophy, people } from 'ionicons/icons';
import { useTournamentStore } from '@/store/useTournamentStore.js';
import { computed, onMounted } from 'vue';

const tournamentStore = useTournamentStore();

const sortedTournament = computed(() => {
  return [...tournamentStore.tournament].sort((a, b) => new Date(b.date) - new Date(a.date));
});

const upcomingTournaments = computed(() => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Reset time to the start of the day
  return sortedTournament.value.filter((turnaj) => {
    const tournamentDate = new Date(turnaj.date);
    tournamentDate.setHours(0, 0, 0, 0); // Reset time to the start of the day
    return tournamentDate >= currentDate;
  });
});

const displayTournaments = computed(() => {
  const tournaments = upcomingTournaments.value;
  return tournaments.length > 0 ? tournaments : null;
});

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('sk-SK', options);
};

const truncatedTournamentName = (name) => {
  const words = name.split(' ');
  return words.length > 20 ? words.slice(0, 15).join(' ') + '...' : name;
};

const bgSwitch = (game) => {
  switch (game) {
    case 'CS2':
    case 'Counter Strike 2':
    case 'Counter-Strike 2':
      return 'bg-[#ea580cf2]';
    case 'LoL':
      return 'bg-sky-600';
    case 'Brawl Stars':
      return 'bg-red-500';
    default:
      return 'bg-green-600';
  }
};
const bgsubSwitch = (game) => {
  switch (game) {
    case 'CS2':
    case 'Counter Strike 2':
    case 'Counter-Strike 2':
      return 'bg-[#9a3412f2]';
    case 'LoL':
      return 'bg-sky-800';
    case 'Brawl Stars':
      return 'bg-red-700';
    default:
      return 'bg-green-900';
  }
};

const imgSwitch = (game) => {
  switch(game){
    case 'CS2':
    case 'Counter Strike 2':
    case 'Counter-Strike 2':
      return '/img/tournaments/cs2_2.jpg';
    case 'LoL':
      return '';
    case 'Brawl Stars':
      return '';
    default:
      return '/img/tournaments/yocrew-example.png';
  }
}

const scaleImage = (event) => {
  const image = event.currentTarget.querySelector('img');
  image.style.transform = 'scale(1.2)';
};

const resetImage = (event) => {
  const image = event.currentTarget.querySelector('img');
  image.style.transform = 'scale(1)';
};

onMounted(() => {
  tournamentStore.getTournament();
});
</script>

<style scoped>
.hover-link img {
  transition: transform 0.3s ease-in-out;
}
</style>