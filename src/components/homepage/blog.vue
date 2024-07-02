<template>
  <div class="h-full md:h-auto">
    <!-- Desktop view -->
    <div class="max-lg:hidden">
      <div class="flex flex-col gap-4">
        <router-link
          :to="{ name: 'Article', params: { slug: blog.slug } }"
          v-for="(blog, index) in sortedBlog.slice(1, 6)"
          :key="index"
          class="rounded-lg shadow flex h-36 w-[45vw]">
          <div class="w-full md:w-[30%] h-[200px] md:h-auto transition ease-in rounded-lg overflow-hidden">
            <img
              class="rounded-lg h-full w-full object-cover hover:scale-110 transition ease-in"
              :src="blog.cesta_obrazku"
              alt="Blog Image"
            />
          </div>
          <div class="ps-3 w-full md:w-[70%] flex flex-col justify-center items-start">
            <div class="mb-2 flex">
              <div class="flex justify-center items-center px-3 rounded-2xl font-bold text-xs transition ease-in" :class="bgFunction(blog.tag)">{{ blog.tag.toUpperCase() }}</div>
              <div class="ms-2 text-md flex items-center justify-center hover:text-gray-400 transition ease-in">|<span class="text-xs ms-2">{{ whenUploaded(blog.date) }}</span></div>
            </div>
            <div>
              <h5 class="mb-1 mt-0 font-semibold tracking-tight text-white text-[1.3rem] hover:text-gray-400 transition ease-in">{{ blog.name }}</h5>
            </div>
            <p class="mb-1 font-normal text-white text-sm hover:text-gray-400 transition ease-in">{{ truncatedBlogDescription(blog.description) }}</p>
            <p class="text-[0.6rem] text-slate-400 flex flex-row justify-center items-center">
              <ion-icon :icon="personCircle" class="text-gray-400 text-sm me-1" />{{ blog.autor }}
              <ion-icon :icon="time" class="text-gray-400 text-sm ms-4 me-1" /> {{ calculateReadingTime(blog.description) }} min. čítania
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Mobile view -->
    <div class="p-3 px-0 lg:hidden">
      <div class="grid grid-cols-1 gap-4">
        <router-link
          :to="{ name: 'Article', params: { slug: blog.slug } }"
          v-for="(blog, index) in sortedBlog.slice(1, 3)"
          :key="index"
          class="max-w-sm bg-gray-900 border border-gray-600 rounded-lg shadow"
        >
          <div class="relative">
            <img
              class="rounded-t-lg h-48 w-full"
              :src="blog.cesta_obrazku"
              alt="Blog Image"
            />
            <div class="absolute top-4 right-4 py-3 px-5 rounded-xl font-bold" :class="bgFunction(blog.tag)">
              {{ blog.tag.toUpperCase() }}
            </div>
          </div>
          <div class="p-5">
            <div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ truncatedBlogName(blog.name) }}</h5>
            </div>
            <p class="mb-3 text-sm">{{ truncatedBlogDescription(blog.description) }}</p>
          </div>
        </router-link>
        <ion-button @click="click">Pozrieť všetky články</ion-button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import { IonButton, IonIcon } from '@ionic/vue';
import { personCircle, time } from 'ionicons/icons';

export default {
  components: {
    IonButton,
    IonIcon
  },
  setup() {
    const blogStore = useBlogStore();
    const sortedBlog = computed(() => {
      return [...blogStore.articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    const bgFunction = (color) => {
      switch(color){
        case 'CS2':
          return 'bg-yellow-600 text-white hover:bg-yellow-800';
        case 'Gaming':
          return 'bg-green-500 text-white hover:bg-green-700';
        case 'LOL':
          return 'bg-blue-500 text-white hover:bg-blue-700';
        case 'ESPORT':
          return 'bg-purple-500 text-white hover:bg-purple-700';
        case 'SVET':
          return 'bg-lime-500 text-white hover:bg-lime-700';
        case 'BRAWL STARS':
          return 'bg-red-500 text-white hover:bg-red-700';
        default:
          return 'bg-red-500 text-white hover:bg-red-700';
      }
    };

    const whenUploaded = (date) =>{
      switch(date){
        case new Date():
          return 'DNES';
        case new Date().setDate(new Date().getDate() - 1):
          return 'VČERA';
        default:
          return date;
      }
    }

    function truncatedBlogName(name) {
      const words = name.split(' ');
      if (words.length > 6) {
        return words.slice(0, 6).join(' ') + '...';
      }
      return name;
    }

    function calculateReadingTime(description) {
      const wordsPerMinute = 200; // You can adjust this value based on your needs
      const words = description.split(' ').length; // Split by whitespace and count the words
      const readingTimeMinutes = words / wordsPerMinute;
      const roundedReadingTime = Math.ceil(readingTimeMinutes);
      return roundedReadingTime;
    }

    function truncatedBlogDescription(description) {
      const words = description.split(' ');
      if (words.length > 15) {
        return words.slice(0, 17).join(' ') + '...';
      }
      return description;
    }

    return {
      sortedBlog,
      bgFunction,
      truncatedBlogName,
      truncatedBlogDescription,
      personCircle,
      time,
      calculateReadingTime,
      whenUploaded
    };
  },
  methods: {
    click() {
      this.$router.push('/clanky');
    }
  },
  async created() {
    const blogStore = useBlogStore();
    try {
      await blogStore.getBlog();
    } catch (error) {
      console.error('Error fetching blog articles:', error);
    }
  }
};
</script>