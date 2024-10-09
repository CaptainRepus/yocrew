<template>
  <ion-page>
    <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>Články</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense" class="mt-[-0.5rem]">
      <ion-toolbar>
        <ion-title size="large">Články</ion-title>
      </ion-toolbar>
    </ion-header>

      <div class="md:mt-20 w-full z-[50000] md:px-0 bg-slate-900">
        <blog/>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import jumbotron from '../components/jumbotron.vue';
import blog from '../components/blog/blog.vue';
import sponsorBox from '../components/sponsorBox.vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    jumbotron,
    blog,
    sponsorBox,
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
