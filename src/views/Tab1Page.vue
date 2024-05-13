<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios" class="md:hidden">
        <ion-title size="large" class="mt-5">Domov</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="md:hidden">
        <ion-toolbar class="mt-[-6.5rem]">
          <ion-title size="large" class="mt-[2.5rem] z-10">Domov</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0">
        <giveaway /> 
        <div class="w-full h-auto flex flex-col md:flex-row">
          <div class="w-full h-full">
            <streamWidget />
            <div class="w-full bg-red-500">
              idk
            </div>
          </div>
          <div class="w-full h-full max-md:mt-5">
            <blog />
          </div>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import giveaway from '../components/homepage/giveaway.vue';
import { useGiveawayStore } from '@/store/useGiveawayStore.js';
import blog from '../components/homepage/blog.vue';
import streamWidget from '../components/homepage/streamWidget.vue';


export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    giveaway,
    blog,
    streamWidget,
  },
  setup(){
    const blogStore = useBlogStore();
    const giveawayStore = useGiveawayStore();

    const getBlog = () =>{
      blogStore.getBlog();
    }
    const getGiveaway = () =>{
      giveawayStore.getGiveaway();
    }
    return {
      blogStore,
      getBlog,
      getGiveaway,
      giveawayStore,
    }
  },
  mounted(){
    this.getBlog();
    this.getGiveaway();
  }
}
</script>
