<template>
  <ion-modal :is-open="isOpen" @will-dismiss="closeModal" class="custom-modal">
    <ion-header>
      <ion-toolbar>
        <ion-title mode="ios">Článok</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal" class="font-bold">Zavrieť</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" v-if="tournament">
      <h1 class="text-2xl font-bold mb-1 text-center">{{ tournament.name }}</h1>
      <h3 class="text-lg mb-5 text-center">{{ tournament.game }}</h3>
      <p class="mb-7">{{ tournament.description }}</p>
      <h1 class="text-2xl font-bold mb-2">Základné informácie:</h1>
      <p class="text-lg mb-2">Dátum: {{ formatDate(tournament.date) }}</p>
      <p class="text-lg mb-2">Prizepool: {{ tournament.prizepool }}€</p>
      <p class="text-lg mb-7">Počet tímov: {{ tournament.teams }}</p>

      <a :href="tournament.link">
        <button class="z-20 w-full px-10 flex justify-center  items-center py-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300" fill="outline">
          <p class="text-center font-bold text-xl" v-if="tournament.name == 'Hlavný Turnaj - 5v5 SERIES'">Pozrieť turnaj</p>
          <p class="text-center font-bold text-xl" v-else>Prihlásiť sa na turnaj</p>
        </button>
      </a>
    </ion-content>
  </ion-modal>
</template>

<script>
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/vue';

export default {
  name: 'TournamentModal',
  setup(){
  // Function to format the date to a human-readable format
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  return {
    formatDate,
  };
  },
  components: {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
  },
  props: {
    tournament: {
      type: Object,
      default: null,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>