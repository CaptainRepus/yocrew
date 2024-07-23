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
      <div class="px-4 py-2 md:mt-20 w-full z-[50000] md:pt-0 md:px-48">
        <div class="w-2/3 h-full">
          <div class="w-full h-56 md:h-2/3 rounded-xl overflow-hidden mb-2">
            <img :src="article.image_path" class="w-full h-full object-cover transition ease-in hover:scale-105">
          </div>
          <p class="text-white text-sm mb-5">Zdroj: idklololoolol</p>
          <h1 class="text-5xl font-bold mb-3">{{ article.title }}</h1>
          <div class="w-full h-auto flex justify-start items-center gap-3 mb-10">
            <div class="w-[10%] h-8 flex justify-center items-center px-3 rounded-2xl font-bold text-lg transition ease-in" :class="bgFunction(article.tag)">
              {{ article.tag.toUpperCase() }}
            </div>
            <p class="text-white flex justify-start items-center">
              {{ article.author }}, 
              {{ whenUploaded(article.date) }} | 
              <ion-icon :icon="time" class="text-gray-400 ms-4 me-1" />
              {{ calculateReadingTime(article.content) }}min. čítania
            </p>
          </div>
          <p v-html="article.content"></p>
        </div>
        <div class="w-full h-56 bg-white mt-10 rounded-xl flex">
          <div class="h-full w-1/3 flex justify-center items-center">
            <img :src="getAuthorImage(article.author)" alt="Blog author" class="w-40 h-40 object-cover rounded-full">
          </div>
          <div class="h-full w-2/3 flex justify-center items-center flex-col">
            <h3 class="text-black font-bold text-2xl mb-1">{{ article.author }}</h3>
            <p class="text-lg text-gray-500">Autor článku</p>
          </div>
        </div>
        <div class="h-56 w-full mt-5 grid grid-cols-3 gap-4">
          <div v-for="relatedArticle in relatedArticles" :key="relatedArticle.id" class="rounded-xl">
            <img :src="relatedArticle.image_path" alt="Article Image" class="w-full h-32 object-cover rounded-t-xl mb-2">
            <h3 class="text-white font-bold text-xl">{{ relatedArticle.title }}</h3>
            <p class="text-white">{{ relatedArticle.content }}</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonIcon } from '@ionic/vue';
import { useBlogStore } from '@/store/useBlogStore';
import { personCircle, time } from 'ionicons/icons';

const article = ref(null);
const error = ref(null);
const route = useRoute();
const blogStore = useBlogStore();

const fetchArticle = async () => {
  try {
    await blogStore.getBlog();
    const articleSlug = route.params.slug;
    article.value = blogStore.articles.find(article => article.slug === articleSlug);

    if (!article.value) {
      error.value = 'Article not found';
    }
  } catch (err) {
    error.value = 'Failed to load article';
    console.error('Error fetching articles:', err);
  }
};

onMounted(fetchArticle);

const relatedArticles = computed(() => {
  if (!article.value) return [];
  return blogStore.articles.filter(blog => blog.tag === article.value.tag && blog.slug !== article.value.slug);
});

const bgFunction = (color) => {
  switch (color) {
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

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('sk-SK', options);
};

const whenUploaded = (date) => {
  const today = new Date();
  const givenDate = new Date(date);
  if (today.toDateString() === givenDate.toDateString()) {
    return 'DNES';
  } else if (new Date(today.setDate(today.getDate() - 1)).toDateString() === givenDate.toDateString()) {
    return 'VČERA';
  } else {
    return date;
  }
};

const calculateReadingTime = (description) => {
  if (!description) return ''; // Return an empty string if description is undefined
  const wordsPerMinute = 200; // You can adjust this value based on your needs
  const words = description.split(' ').length; // Split by whitespace and count the words
  const readingTimeMinutes = words / wordsPerMinute;
  const roundedReadingTime = Math.ceil(readingTimeMinutes);
  return roundedReadingTime;
};

// Author data
const authorImages = {
  'Jan "J0hnis" Štál': '/img/members/Jan _J0hnis_ Stal.JPG',
  'Štefánia "Lathy" Kadlečíková': '/img/members/Stefania _Lathy_ Kadlecikova.jpg',
  'Adam "MoJaVec" Moravec': '/img/members/Adam _MoJaVec_ Moravec.jpg',
  'Maroš "TadyMaroš" Vorek': '/img/members/Maros _TadyMaros_ Vorek.jpg',
  'Chrimsie': '/img/streamers/chrimsie.png',
  'EXP4NSIVE': '/img/streamers/expansive.png',
  'JaroslavManTV': '/img/streamers/JaroslavManTV2.png',
  'Lathy': '/img/streamers/Lathy.png',
  'MarineCZ': '/img/streamers/marinecz.png',
  '2oldVolt': '/img/streamers/Volt.jpg',
  'Mikajla': '/img/streamers/mikajla.png',
  'byXby': '/img/streamers/byxby.png',
  'DanuskaTeyron': '/img/streamers/danuskateyron.png',
  'Lery478': '/img/streamers/lery478.png',
  'Michal "Yodoch" Fröhlich': '/img/members/Michal _Yodoch_ Frohlich.jpg',
  'Michal "Kakadu" Vacl': '/img/profile.jpg',
  'Ondra "Harasal" Minčev': '/img/members/Ondra _Harasal_ Mincev.jpg',
  'Martin "Jafress" Rada': '/img/members/Martin _Jafress_ Rada.jpg',
  'Marek "Sasuk" Horvát': '/img/members/Marek _Sasuk_ Horvat.jpg',
  'Patrik "Pípo" Dian': '/img/members/Patrik _Pipo_ Dian.jpg',
  'Romi "Yodoška" Garaiová': '/img/members/Romi _Yodoska_ Garaiova.jpg',
  'Marek "Seso" Jurko': '/img/members/Marek _Seso_ Jurko.jpg',
  'Kristína "Chrimsie" Štyriaková': '/img/members/Kristina _Chrimsie_ Styriakova.jpg',
  'Jafress': '/img/members/Martin _Jafress_ Rada.jpg',
};

// Function to get author image URL
const getAuthorImage = (authorName) => {
  return authorImages[authorName] || '/path/to/default/image.jpg'; // Default image path if not found
};
</script>
