<template>
    <ion-page>
        <ion-header class="hidden">
      <ion-toolbar mode="ios" class="md:hidden">
        <ion-title size="large" class="mt-5">YoCrew</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="md:hidden">
        <ion-toolbar class="mt-[-6.5rem]">
          <ion-title size="large" class="mt-[2.5rem] z-10">YoCrew</ion-title>
        </ion-toolbar>
      </ion-header>

        <div class="pt-20 md:mt-20 w-full z-[50000] md:pt-0 md:px-0 bg-slate-900">
          <jumbotron 
          title="Galéria"
          description="Ešport pre každého, kdekoľvek!"
          class="bg-[url('/img/jumbotron_blog.jpg')] bg-cover"
          />
        <gallery />
        </div>

      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import jumbotron from '../components/jumbotron.vue';
  import gallery from '../components/yocrew/gallery.vue';
  </script>