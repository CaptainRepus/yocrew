<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="ios" class="md:hidden">
        <ion-title size="large" class="mt-5">Články</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="md:hidden">
        <ion-toolbar class="mt-[-6.5rem]">
          <ion-title size="large" class="mt-[2.5rem] z-10">Články</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0 bg-slate-900">
        <jumbotron
        title="Novinky zo sveta ešportu" 
        description="Tvoje epicentrum herných noviniek a recenzií"
        class="bg-[url('/img/IMG_0055(1).JPG')] bg-cover md:hidden"
        />
        <blog />
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import jumbotron from '../components/jumbotron.vue';
import blog from '../components/blog/blog.vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    jumbotron,
    blog,
  },
  setup() {
    const blogStore = useBlogStore();
    const getBlogs = () => {
      return blogStore.getBlog();
    }
    return {
      blogStore,
      getBlogs,
    };
  },
  mounted(){
    this.getBlogs();
  }
}
</script>
