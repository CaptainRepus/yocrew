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
      <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0 bg-slate-900">
        <div class="w-full h-80 overflow-hidden">
          <img src="/img/tournaments/cs2_2.jpg" class="w-full h-full object-cover" alt="">
        </div>
        <div class="w-full h-full px-48">
          <div class="w-full flex justify-center items-center mt-5 border-b-2 border-gray-500 pb-5">
            <h1 class="text-5xl font-bold">{{ tournament.name }}</h1>
          </div>
          <div class="w-full h-auto flex">
            <div class="w-1/2 mt-4">
              <a :href="tournament.link">
                <div class="px-2 py-1 bg-green-600 font-bold text-lg rounded-2xl w-1/3 flex justify-center items-center">
                  Registrácia
                </div>
              </a>
            </div>
            <div class="w-1/2 mt-4 flex justify-end text-lg font-bold">
              Registrácia končí {{ formatDate(tournament.date) }}
            </div>
          </div>
          <div class="w-full h-auto flex">
            <div class="w-1/2 h-96">
              <div class="grid grid-cols-2 gap-4 mt-5">
                <div class="w-full h-full bg-white rounded-xl overflow-hidden flex text-black">
                  <div class="w-1/2 h-full">
                    
                  </div>
                  <div class="w-1/2 h-full">

                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        
      </div>
    </ion-content>
  </ion-page>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent } from '@ionic/vue';
import { useTournamentStore } from '@/store/useTournamentStore';
import { close } from 'ionicons/icons';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    close
  },
  data() {
    return {
      tournament: null,
      error: null
    };
  },
  async created() {
    const tournamentStore = useTournamentStore();
    try {
      await tournamentStore.getTournament();
      const tournamentSlug = this.$route.params.slug;
      this.tournament = tournamentStore.tournament.find(tournament => tournament.slug === tournamentSlug);

      if (!this.tournament) {
        this.error = 'Tournament not found';
      }
    } catch (error) {
      this.error = 'Failed to load tournament';
      console.error('Error fetching tournaments:', error);
    }
  },
  setup(){
    const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('sk-SK', options);
};
return{
  formatDate
}
  },
};
</script>
