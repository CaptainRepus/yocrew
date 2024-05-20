<template>
  <ion-modal :is-open="isOpen" @will-dismiss="closeModal" class="custom-modal">
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

      <p class="text-lg" v-if="blogPart.length > 0">{{ blogPart[0] }}</p>

      <div class="w-full h-1/3 md:h-2/3 rounded-xl border border-green-500 overflow-hidden mb-5">
        <img src="/img/background.jpg" class="w-full h-full"></img>
      </div>

      <p class="text-lg" v-if="blogPart.length > 1">{{ blogPart[1] }}</p>
    </ion-content>
  </ion-modal>
</template>

<script>
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/vue';

export default {
  name: 'BlogModal',
  data() {
    return {
      blogPart: []
    }
  },
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
    },
    partTheBlog() {
      if (this.blog && this.blog.content) {
        const parts = this.blog.content.split('.').map(part => part.trim()).filter(part => part);
        if (parts.length > 1) {
          this.blogPart = [parts.slice(0, Math.ceil(parts.length / 2)).join('. '), parts.slice(Math.ceil(parts.length / 2)).join('. ')];
        } else {
          this.blogPart = [parts.join('. ')];
        }
      }
    }
  },
  mounted() {
    this.partTheBlog();
  }
};
</script>