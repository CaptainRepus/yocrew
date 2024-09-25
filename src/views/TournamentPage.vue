<template>
  <ion-page v-if="tournament">
    <ion-header>
      <ion-toolbar>
        <ion-title>Turnaj</ion-title>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="px-0 py-2 w-full z-[50000] md:pt-0 bg-slate-900 pb-20">
        <div class="w-full h-80 max-md:h-56 overflow-hidden">
          <img :src="imgSwitch(tournament.game_name)" class="w-full h-full object-cover" alt="">
        </div>
        <div class="w-full h-full px-48 max-md:px-4">
          <div class="w-full flex justify-center items-center mt-5 border-b-2 border-gray-500 pb-5">
            <h1 class="text-5xl font-bold">{{ tournament.name }}</h1>
          </div>
          <div class="w-full h-auto flex  mb-10 gap-5 md:gap-0">
            <div class="w-1/2 mt-4">
              <a :href="tournament.link">
                <div class="px-2 py-1 bg-green-600 font-bold text-lg rounded-2xl w-full md:w-1/3 flex justify-center items-center">
                  Registrácia
                </div>
              </a>
            </div>
            <div class="w-1/2 mt-4 flex justify-end text-lg font-bold">
              Registrácia končí: {{ formatDate(tournament.date_reg) }}
            </div>
          </div>
          <div class="w-full h-auto flex gap-4 max-md:flex-col">
            <div class="w-full md:w-2/3">
              <div class="grid grid-cols-2 gap-2 md:mt-8 h-72">
                <div class="w-full h-full bg-white rounded-xl overflow-hidden flex text-black">
                  <div class="w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="people" class="text-black text-5xl" /> 
                  </div>
                  <div class="w-2/3 h-full flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold text-green-500">
                      Počet tímov
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-2xl font-bold">
                      {{ tournament.team_count }}
                    </div>
                  </div>
                </div>

                <div class="w-full h-full bg-white rounded-xl overflow-hidden flex text-black">
                  <div class="w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="gitBranch" class="text-black text-5xl" /> 
                  </div>
                  <div class="w-2/3 h-full flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold text-green-500">
                      Tip bracketov
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-2xl font-bold">
                      {{ tournament.bracket }}
                    </div>
                  </div>
                </div>

                <div class="w-full h-full bg-white rounded-xl overflow-hidden flex text-black">
                  <div class="w-1/2 md:w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="idCard" class="text-black text-5xl" /> 
                  </div>
                  <div class="w-2/3 h-full flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold text-green-500 text-center">
                      Čas na check-in
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-2xl font-bold">
                      {{ tournament.team_count }}
                    </div>
                  </div>
                </div>

                <div class="w-full h-full bg-white rounded-xl overflow-hidden flex text-black">
                  <div class="w-1/2 md:w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="gameController" class="text-black text-5xl" /> 
                  </div>
                  <div class="w-2/3 h-full flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold text-green-500">
                      Štýl turnaja
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-2xl font-bold">
                      {{ tournament.format }}
                    </div>
                  </div>
                </div>

                <div class="w-full h-full bg-white rounded-xl overflow-hidden flex text-black col-span-2">
                  <div class="w-1/4 md:w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="calendar" class="text-black text-5xl" /> 
                  </div>
                  <div class="w-3/4 h-full md:w-2/3 flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold text-green-500">
                      Dátum a čas začiatku turnaja
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-xl md:text-2xl font-semibold">
                      {{ formatDateStart(tournament.date_start) }}
                    </div>
                  </div>
                </div>

              </div>
              <div class="mt-10 h-auto">
                <h1 class="text-4xl font-bold text-white max-md:text-3xl">Informácie k turnaju</h1>
                <p class="text-white mt-5">{{ tournament.description }}</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 sticky top-10 h-72">
              <div class="h-8 w-full">
                <h1 class="text-white text-xl font-semibold">Distribúcia cien:</h1>
              </div>
              <div class="grid grid-cols-1 gap-2 h-full">
                <!-- BOX -->
                <div class="w-full h-full bg-[hsl(224.38,31.06%,53.92%)] rounded-xl overflow-hidden flex text-white">
                  <div class="w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="trophy" class="text-white text-5xl" /> 
                  </div>
                  <div class="w-2/3 h-full flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold text-white">
                      Prvé miesto
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-2xl font-bold text-white">
                      {{ tournament.team_count }}
                    </div>
                  </div>
                </div>
                <!-- BOX -->
                <div class="w-full h-full bg-[hsl(224.38,31.06%,53.92%)] rounded-xl overflow-hidden flex text-white">
                  <div class="w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="trophy" class="text-5xl" /> 
                  </div>
                  <div class="w-2/3 h-full flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold">
                      Druhé miesto
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-2xl font-bold">
                      {{ tournament.bracket }}
                    </div>
                  </div>
                </div>
                <!-- BOX -->
                <div class="w-full h-full bg-[hsl(224.38,31.06%,53.92%)] rounded-xl overflow-hidden flex text-white">
                  <div class="w-1/3 h-full flex justify-center items-center">
                    <ion-icon :icon="trophy" class="text-5xl" /> 
                  </div>
                  <div class="w-2/3 h-full flex justify-center items-center flex-col">
                    <div class="w-full h-1/2 flex justify-center items-center font-semibold">
                      Tretie miesto
                    </div>
                    <div class="w-full h-1/2 flex justify-center items-center text-2xl font-bold">
                      {{ tournament.team_count }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </ion-content>
  </ion-page>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonIcon } from '@ionic/vue';
import { useTournamentStore } from '@/store/useTournamentStore';
import { close, people, gitBranch, idCard, gameController, calendar, trophy } from 'ionicons/icons';

const tournament = ref(null);
const error = ref(null);

const route = useRoute();
const tournamentStore = useTournamentStore();

onMounted(async () => {
  try {
    await tournamentStore.getTournament();
    const tournamentSlug = route.params.slug;
    tournament.value = tournamentStore.tournament.find(t => t.slug === tournamentSlug);

    if (!tournament.value) {
      error.value = 'Tournament not found';
    }
  } catch (err) {
    error.value = 'Failed to load tournament';
    console.error('Error fetching tournaments:', err);
  }
});

const imgSwitch = (game_name) =>{
  switch(game_name){
    case 'CS2':
    case 'Counter Strike 2':
    case 'Counter-Strike 2':
      return '/img/tournaments/cs2_3.webp';
    case 'LoL':
      return '';
    case 'Brawl Stars':
      return '';
    default:
      return '/img/tournaments/yocrew-example.png';
  }
}

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('sk-SK', options);
};
const formatDateStart = (date) => {
  // Options for the date part
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  // Options for the time part, to get hours and minutes
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

  // Create a new Date object
  const dateTime = new Date(date);

  // Get the formatted date and time separately
  const formattedDate = dateTime.toLocaleDateString('sk-SK', dateOptions);
  const formattedTime = dateTime.toLocaleTimeString('sk-SK', timeOptions);

  // Combine the date and time in the desired format and return
  return `${formattedDate} ${formattedTime}`;
};
</script>