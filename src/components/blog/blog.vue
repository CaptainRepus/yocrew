<template>
  <newestArticle />
  <div>

  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import { IonButton } from '@ionic/vue';
import newestArticle from './newestArticle.vue';

export default {
  components: {
    IonButton,
    newestArticle
  },
  setup() {
    const blogStore = useBlogStore();
    const sortedBlog = computed(() => {
      return [...blogStore.articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('sk-SK', options);
    };

    const bgFunction = (color) =>{
      switch(color){
        case 'CS2':
          return 'bg-yellow-600 text-white';
        case 'Gaming':
          return 'bg-green-500 text-white';
        case 'LOL':
          return 'bg-blue-500 text-white';
        case 'ESPORT':
          return 'bg-purple-500 text-white';
        case 'SVET':
          return 'bg-lime-500 text-white';
        case 'BRAWL STARS':
          return 'bg-red-500 text-white'
        default:
          return 'bg-red-500 text-white';
      }
    }

    function truncatedBlogName(title) {
      const words = title.split(' ');
      if (words.length > 6) {
        return words.slice(0, 6).join(' ') + '...';
      }
      return title;
    }

    return {
      sortedBlog,
      truncatedBlogName,
      formatDate,
      bgFunction
    };
  },
  methods: {
    click() {
      this.$router.push('/clanky');
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) and (min-height: 768px) {
    :host {
        --width: 800px;
        --height: 500px;
    }
}
</style>