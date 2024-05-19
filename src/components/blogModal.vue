<template>
  <ion-modal :is-open="isOpen" @will-dismiss="closeModal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Článok</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal" class="font-bold">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1 class="text-2xl font-bold mb-1 text-center">{{ blog.title }}</h1>
      <h3 class="text-lg mb-5 text-center">Autor: {{ blog.author }}</h3>

      <div class="w-full h-1/3 md:h-2/3 rounded-xl border border-green-500 overflow-hidden mb-5">
        <img src="/img/background.jpg" class="w-full h-full"></img>
      </div>
      
      <p class="text-lg">{{ blog.content }}</p>
    </ion-content>
  </ion-modal>
</template>

<script>
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/vue';

export default {
  name: 'BlogModal',
  components: {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent
  },
  props: {
    blog: {
      type: Object,
      default: null
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>