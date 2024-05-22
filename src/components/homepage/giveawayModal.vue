<template>
    <ion-header>
      <ion-toolbar class="hidden">
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-modal ref="modal" trigger="open-modal">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Zrušiť</ion-button>
            </ion-buttons>
            <ion-title mode="ios">Giveaway</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm()">Prihlásiť</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <h1 class="text-2xl font-bold text-center mb-5">{{ giveawayStore.giveaway.name }}</h1>
            <p class="text-lg mb-5 px-2">{{ giveawayStore.giveaway.popis }}</p>
            <div class="w-full h-52 rounded-xl border-2 border-green-500 mb-10">
                <img :src="giveawayStore.giveaway.img" alt="Obrazok">
            </div>
            
            <div class="flex flex-col w-full mb-28">
                <h1 class="font-bold text-2xl mb-2 text-center">Tu sa prihlásiš</h1>
                <p class="text-center mb-5">Vyplň tento formulár pre zapojenie sa do giveaway a vyskúšaj svoje šťastie!</p>
                <ion-input
                mode="md"
                label="Tu nahoď svoje meno"
                label-placement="stacked"
                ref="inputName"
                type="text"
                placeholder="Tvoje meno"
                />
                <ion-input
                mode="md"
                label="Tu nahoď svoj email"
                label-placement="stacked"
                ref="inputEmail"
                type="text"
                placeholder="Tvoj email"
                />
            </div>
        </ion-content>
      </ion-modal>
    </ion-content>
  </template>
  
  <script setup>
    import {
      IonButtons,
      IonButton,
      IonModal,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
      IonInput,
    } from '@ionic/vue';
    import { ref } from 'vue';
    import { useGiveawayStore } from '@/store/useGiveawayStore.js';
  
  
    const modal = ref();
    const inputName = ref();
    const inputEmail = ref();
    const giveawayStore = useGiveawayStore();
  
    const cancel = () => modal.value.$el.dismiss(null, 'cancel');
  
    const confirm = () => {
      const name = inputName.value.$el.value;
      const email = inputEmail.value.$el.value;
      cancel();
    };
  
  </script>