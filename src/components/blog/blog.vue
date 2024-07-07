<template>
  <div>
    <!-- Desktop view -->
    <div class="p-3 pe-4 max-md:hidden">
      <h1 class="pb-0 font-bold text-4xl mb-4 mt-4">Najnovšie články</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(blog, index) in sortedBlog"
          :key="index"
          class="max-w-sm bg-gray-900 border border-gray-700 rounded-lg shadow h-[26rem]"
        >
          <a :href="blog.link" class="relative">
            <img
              class="rounded-t-lg h-1/2 w-full"
              :src="blog.image_path"
              alt="Blog Image"
            />
            <div class="absolute top-2 right-2 py-1 px-3 rounded-xl font-bold"
              :class="bgFunction(blog.tag)">
                {{ blog.tag.toUpperCase() }}
              </div>
          </a>
          <div class="p-5">
            <a :href="blog.link">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                {{ truncatedBlogName(blog.title) }}
              </h5>
            </a>
            <p class="mb-1 font-normal text-white">Autor: {{ blog.autor }}</p>
            <p class="mb-3 ">{{ blog.date }}</p>
            <button
              @click="openModal(blog)"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              Pozrieť viac
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile view -->
    <div class="p-3 px-0 md:hidden mt-5">
      <div class="grid grid-cols-1 gap-4">
        <div
          v-for="(blog, index) in sortedBlog"
          :key="index"
          class="max-w-sm bg-gray-900 border border-gray-600 rounded-lg shadow"
        >
          <a :href="blog.link" class="w-full relative">
            <img
              class="rounded-t-lg h-48 w-full"
              :src="blog.image_path"
              alt="Blog Image"
            />
            <div class="absolute top-4 right-4 py-3 px-5 rounded-xl font-bold"
              :class="bgFunction(blog.tag)">
                {{ blog.tag.toUpperCase() }}
              </div>
          </a>
          <div class="p-5 pt-2">
            <a :href="blog.link">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                {{ truncatedBlogName(blog.title) }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-white">Autor: {{ blog.autor }}</p>
            <p class="mb-3 ">{{ blog.date }}</p>
            <button
              @click="openModal(blog)"
              class="px-10 inline-flex items-center py-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              Pozrieť viac
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import { IonButton } from '@ionic/vue';

export default {
  components: {
    IonButton,
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

    const selectedBlog = ref(null);
    const isModalOpen = ref(false);

    function openModal(blog) {
      selectedBlog.value = blog;
      isModalOpen.value = true;
    }

    function closeModal() {
      selectedBlog.value = null;
      isModalOpen.value = false;
    }

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
      selectedBlog,
      isModalOpen,
      openModal,
      closeModal,
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