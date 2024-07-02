<template>
    <ion-page v-if="article">
      <ion-header>
        <ion-toolbar>
          <ion-title>Článok</ion-title>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-0">
            <h1 class="text-2xl font-bold mb-1 text-center">{{ article.name }}</h1>
            <h3 class="text-lg mb-5 text-center">Autor: {{ article.autor }}</h3>
            <div class="w-full h-1/3 md:h-2/3 rounded-xl border border-green-500 overflow-hidden mb-5">
            <img :src="article.cesta_obrazku" class="w-1/3 h-full">
            </div>
            <p class="text-lg" v-html="article.description"></p>
        </div>
      </ion-content>
    </ion-page>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent } from '@ionic/vue';
  import { useBlogStore } from '@/store/useBlogStore';
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
        article: null,
        error: null
      };
    },
    async created() {
      const blogStore = useBlogStore();
      try {
        await blogStore.getBlog();
        const articleSlug = this.$route.params.slug;
        this.article = blogStore.articles.find(article => article.slug === articleSlug);
  
        if (!this.article) {
          this.error = 'Article not found';
        }
      } catch (error) {
        this.error = 'Failed to load article';
        console.error('Error fetching articles:', error);
      }
    }
  };
  </script>  