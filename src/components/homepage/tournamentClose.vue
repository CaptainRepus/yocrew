<template>
  <div class="h-full w-full flex flex-col py-3 max-lg:hidden">
    <div class="h-full w-full px-3 max-md:p-0 md:flex-1 flex flex-col justify-between">
      <h1 class="py-3 pb-0 font-bold text-2xl max-md:mb-2 max-md:ps-0 max-lg:hidden">Mohlo by Vás zaujímať</h1>
      <div class="md:flex-1 flex flex-col gap-2 justify-center overflow-hidden">
        <div class="w-full h-1/2 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <NewsPanel />
        </div>
        <div class="md:flex-1 flex flex-col gap-2">
          <template v-for="index in 2" :key="index">
            <a v-if="sortedTournaments[index - 1]" :href="sortedTournaments[index - 1].link" class="relative h-full w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0">
              <div class="flex justify-center items-center opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]">
                <svg fill="#00C55E" class="absolute top-[-10%] right-[-15%] opacity-65" width="700px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M9.103.435a1.753 1.753 0 0 1 1.652-.362c.218.072.406.203.609.333.16.101.348.145.493.261.072.058.014.16.014.232.189.45.29.942.13 1.42-.13.16-.362.203-.55.276-.03.203.043.39.072.594-.043.029-.072.058-.116.087.276-.015.551-.073.827-.13.101-.102.26-.044.39-.059.015-.203.088-.391.088-.594a.34.34 0 0 0 .116-.029c.014.145 0 .29.043.435.073.058.189.029.276.043 0 .058 0 .116.014.174 1.681-.014 3.377 0 5.058 0v.247h.16V2.42h.188c0 .26-.014.507 0 .768a.11.11 0 0 0 .073.029c0 .029.014.087.014.116.058-.058.13-.102.218-.073.014.044.029.087.043.145-.058.058-.087.13-.058.218.464.014.928 0 1.406 0 .044-.058.116-.087.189-.116a.464.464 0 0 1 .087.058h.68a.874.874 0 0 1 .015.333h-.696a.46.46 0 0 1-.087.073c-.072-.044-.13-.073-.202-.116h-1.261c-.247.072-.508.058-.754.014v.275H16.16a.532.532 0 0 1-.29.13c.044.218-.202.276-.29.436a.45.45 0 0 1-.231.174c-.073.449.087.87.203 1.29-.13.029-.276.072-.406.101-.073.29-.145.594-.203.884a.848.848 0 0 1-.507.58c-.174.203-.406.406-.682.42-.101.03-.174-.043-.246-.101-.362.029-.696-.145-1.015-.29-.347-.16-.666-.363-1-.55.03.202-.072.376-.145.55.16.072.377.13.464.304.058.13.116.276.116.435-.014.522-.072 1.044-.101 1.565.014.377-.174.754-.435 1.03-.174-.015-.319-.088-.478-.16-.058.13-.189.26-.116.42.058.189.058.392.145.566a6.674 6.674 0 0 1 1.217 1.753c.304.624.536 1.276.783 1.928.043 0 .13-.015.174-.015.058.189 0 .406.116.58.101.16.072.348.072.536-.029.435-.058.87-.101 1.305-.03.304-.102.609-.145.913.014.232.116.464.101.696-.014.217-.014.449-.188.608.014.493-.116.986.058 1.464.232.32.493.623.768.899.304.145.667.174.928.435.1.16.043.347.014.521a6.732 6.732 0 0 1-1.87 0c-.246-.058-.478-.159-.724-.188-.334.014-.725.145-1.03-.087-.028-.391.117-.768.189-1.145.029-.13.16-.217.145-.348-.03-.45-.058-.913-.087-1.362-.058-.03-.16-.058-.145-.145 0-.218-.072-.435-.13-.638a10.821 10.821 0 0 1-.16-1.681c-.014-.16.087-.276.203-.377.03-.246.058-.507.073-.754-.044-.13-.145-.232-.203-.348-.261.03-.638.087-.797-.188-.377-.565-.769-1.145-1.145-1.71-.16-.015-.348 0-.493-.102-.16-.174-.261-.405-.363-.623-.043.174-.072.362-.174.507-.087.145-.231.247-.333.377-.101.232-.188.464-.275.696-.102.29-.247.58-.276.899a1.543 1.543 0 0 1-.101.449c-.073.116-.203.16-.319.217-.087.189-.145.377-.275.537-.087.101-.232.13-.29.26-.058.174-.145.334-.218.493-.029.174.087.363.03.536-.102.435-.32.841-.522 1.232-.102.29-.174.595-.32.87-.057.116-.202.145-.318.16-.13.318-.276.623-.362.956a5.437 5.437 0 0 0-.03.971c0 .145.088.261.146.391.057.174.014.348-.015.522-.565.073-1.145.13-1.696-.043-.058-.044-.043-.116-.058-.174-.043-.261-.072-.536.015-.783.188-.681.348-1.362.536-2.043-.072-.073-.174-.13-.174-.247-.014-.188 0-.391.044-.58.087-.319.318-.565.434-.87.044-.13.03-.26.044-.39 0-.305.174-.551.304-.812.13-.218.232-.45.406-.638.116-.101.116-.26.203-.391.087-.16.232-.29.232-.479.029-.231-.058-.463-.03-.695.059-.681.19-1.348.305-2.03-.058-.072-.145-.144-.174-.246.015-.072.03-.13.044-.203l-.13-.217c.057-.087.115-.188.173-.275-.058-.044-.13-.102-.188-.145.072-.218.043-.537.304-.638.03.014.102.029.13.043-.043-.376-.043-.768-.086-1.145a3.534 3.534 0 0 1-.073-1.232c.145-.217.42-.304.667-.318-.319-.073-.638-.102-.942-.203-.015-.261.029-.522.072-.783.13-.507.073-1.029.145-1.55.073-.146.261-.175.42-.146.189.03.377-.029.566-.087 0-.072.014-.16 0-.232-.116-.507-.087-1.029 0-1.521.116-.638.377-1.261.855-1.71.319-.305.783-.45 1.217-.435.145 0 .232.145.348.232.058-.058.116-.116.16-.174-.073-.247-.189-.508-.174-.769.029-.58.217-1.174.652-1.565m4.522 4.102c.029.029.029.029 0 0m.203.029c.014.101.043.203-.015.29-.072.029-.16.029-.232.072.203 0 .406.015.61 0 .159-.043.1-.246.1-.362-.1-.116-.318-.044-.463 0m-.507.609c.145.159.217.405.347.565.189-.247.334-.508.551-.725-.26-.015-.522.015-.782-.015-.044.058-.073.116-.116.174z"/></svg>
              </div>
              <div class="h-1/4 w-full flex items-end">
                <h1 :class="titleClass(sortedTournaments[index - 1].name)" class="m-0 font-bold z-20 text-white">{{ sortedTournaments[index - 1].name }}</h1>
              </div>
              <div class="h-3/4 w-full flex flex-col gap-2">
                <p class="font-semibold z-20 text-white">{{ sortedTournaments[index - 1].game }}</p>
                <p class="font-semibold z-20 text-white">{{ formatDate(sortedTournaments[index - 1].date) }}</p>
                <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[index - 1].description) }}</p>
              </div>
            </a>
            <div v-else class="h-full w-full bg-gray-900 border border-gray-800 rounded-xl flex justify-center items-center text-3xl p-5 text-center font-semibold">
              Pripravujeme pre Vás turnaje...
            </div>
          </template>
        </div>
      </div>
      <div class="flex justify-center pt-3 w-full">
        <router-link to="/turnaje-servery" class="w-full">
          <ion-button @click="toTurnaje" class="w-full">
            Pozrieť všetky turnaje
          </ion-button>
        </router-link>
      </div>
    </div>
  </div>

  <!-- MOBILE VIEW -->
  <div class="h-full w-full flex flex-col py-3 md:hidden">
    <h1 class="ps-3 py-3 font-bold text-2xl max-md:mb-2 max-md:ps-0">Mohlo by Vás zaujímať</h1>
    <div class="h-full w-full px-3 max-md:p-0 flex flex-col justify-between">
      <div class=" flex flex-col gap-2 justify-center overflow-hidden">
        <div class="w-full bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <NewsPanel />
        </div>
        <div class="flex flex-col gap-2">
          <template v-for="index in 2" :key="index">
            <a v-if="sortedTournaments[index - 1]" :href="sortedTournaments[index - 1].link" class="relative h-52 w-full px-3 rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:bg-slate-600 hover:border-green-500 hover:border-2 flex flex-col gap-0">
              <div class="absolute flex justify-center items-center opacity-30 text-[20rem] max-md:text-[10rem] max-md:top-[-2.5rem] text-green-500 z-10 top-[-1rem] right-[-2rem]">
                <svg fill="#00C55E" width="700px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M9.103.435a1.753 1.753 0 0 1 1.652-.362c.218.072.406.203.609.333.16.101.348.145.493.261.072.058.014.16.014.232.189.45.29.942.13 1.42-.13.16-.362.203-.55.276-.03.203.043.39.072.594-.043.029-.072.058-.116.087.276-.015.551-.073.827-.13.101-.102.26-.044.39-.059.015-.203.088-.391.088-.594a.34.34 0 0 0 .116-.029c.014.145 0 .29.043.435.073.058.189.029.276.043 0 .058 0 .116.014.174 1.681-.014 3.377 0 5.058 0v.247h.16V2.42h.188c0 .26-.014.507 0 .768a.11.11 0 0 0 .073.029c0 .029.014.087.014.116.058-.058.13-.102.218-.073.014.044.029.087.043.145-.058.058-.087.13-.058.218.464.014.928 0 1.406 0 .044-.058.116-.087.189-.116a.464.464 0 0 1 .087.058h.68a.874.874 0 0 1 .015.333h-.696a.46.46 0 0 1-.087.073c-.072-.044-.13-.073-.202-.116h-1.261c-.247.072-.508.058-.754.014v.275H16.16a.532.532 0 0 1-.29.13c.044.218-.202.276-.29.436a.45.45 0 0 1-.231.174c-.073.449.087.87.203 1.29-.13.029-.276.072-.406.101-.073.29-.145.594-.203.884a.848.848 0 0 1-.507.58c-.174.203-.406.406-.682.42-.101.03-.174-.043-.246-.101-.362.029-.696-.145-1.015-.29-.347-.16-.666-.363-1-.55.03.202-.072.376-.145.55.16.072.377.13.464.304.058.13.116.276.116.435-.014.522-.072 1.044-.101 1.565.014.377-.174.754-.435 1.03-.174-.015-.319-.088-.478-.16-.058.13-.189.26-.116.42.058.189.058.392.145.566a6.674 6.674 0 0 1 1.217 1.753c.304.624.536 1.276.783 1.928.043 0 .13-.015.174-.015.058.189 0 .406.116.58.101.16.072.348.072.536-.029.435-.058.87-.101 1.305-.03.304-.102.609-.145.913.014.232.116.464.101.696-.014.217-.014.449-.188.608.014.493-.116.986.058 1.464.232.32.493.623.768.899.304.145.667.174.928.435.1.16.043.347.014.521a6.732 6.732 0 0 1-1.87 0c-.246-.058-.478-.159-.724-.188-.334.014-.725.145-1.03-.087-.028-.391.117-.768.189-1.145.029-.13.16-.217.145-.348-.03-.45-.058-.913-.087-1.362-.058-.03-.16-.058-.145-.145 0-.218-.072-.435-.13-.638a10.821 10.821 0 0 1-.16-1.681c-.014-.16.087-.276.203-.377.03-.246.058-.507.073-.754-.044-.13-.145-.232-.203-.348-.261.03-.638.087-.797-.188-.377-.565-.769-1.145-1.145-1.71-.16-.015-.348 0-.493-.102-.16-.174-.261-.405-.363-.623-.043.174-.072.362-.174.507-.087.145-.231.247-.333.377-.101.232-.188.464-.275.696-.102.29-.247.58-.276.899a1.543 1.543 0 0 1-.101.449c-.073.116-.203.16-.319.217-.087.189-.145.377-.275.537-.087.101-.232.13-.29.26-.058.174-.145.334-.218.493-.029.174.087.363.03.536-.102.435-.32.841-.522 1.232-.102.29-.174.595-.32.87-.057.116-.202.145-.318.16-.13.318-.276.623-.362.956a5.437 5.437 0 0 0-.03.971c0 .145.088.261.146.391.057.174.014.348-.015.522-.565.073-1.145.13-1.696-.043-.058-.044-.043-.116-.058-.174-.043-.261-.072-.536.015-.783.188-.681.348-1.362.536-2.043-.072-.073-.174-.13-.174-.247-.014-.188 0-.391.044-.58.087-.319.318-.565.434-.87.044-.13.03-.26.044-.39 0-.305.174-.551.304-.812.13-.218.232-.45.406-.638.116-.101.116-.26.203-.391.087-.16.232-.29.232-.479.029-.231-.058-.463-.03-.695.059-.681.19-1.348.305-2.03-.058-.072-.145-.144-.174-.246.015-.072.03-.13.044-.203l-.13-.217c.057-.087.115-.188.173-.275-.058-.044-.13-.102-.188-.145.072-.218.043-.537.304-.638.03.014.102.029.13.043-.043-.376-.043-.768-.086-1.145a3.534 3.534 0 0 1-.073-1.232c.145-.217.42-.304.667-.318-.319-.073-.638-.102-.942-.203-.015-.261.029-.522.072-.783.13-.507.073-1.029.145-1.55.073-.146.261-.175.42-.146.189.03.377-.029.566-.087 0-.072.014-.16 0-.232-.116-.507-.087-1.029 0-1.521.116-.638.377-1.261.855-1.71.319-.305.783-.45 1.217-.435.145 0 .232.145.348.232.058-.058.116-.116.16-.174-.073-.247-.189-.508-.174-.769.029-.58.217-1.174.652-1.565m4.522 4.102c.029.029.029.029 0 0m.203.029c.014.101.043.203-.015.29-.072.029-.16.029-.232.072.203 0 .406.015.61 0 .159-.043.1-.246.1-.362-.1-.116-.318-.044-.463 0m-.507.609c.145.159.217.405.347.565.189-.247.334-.508.551-.725-.26-.015-.522.015-.782-.015-.044.058-.073.116-.116.174z"/></svg>
              </div>
              <div class="h-1/4 w-full flex items-end">
                <h1 :class="titleClass(sortedTournaments[index - 1].name)" class="m-0 font-bold z-20 text-white">{{ sortedTournaments[index - 1].name }}</h1>
              </div>
              <div class="h-3/4 w-full flex flex-col gap-2">
                <p class="text-lg font-semibold z-20 text-white">{{ sortedTournaments[index - 1].game }}</p>
                <p class="text-lg font-semibold z-20 text-white">{{ formatDate(sortedTournaments[index - 1].date) }}</p>
                <p class="text-sm z-20 text-white">{{ truncateDescription(sortedTournaments[index - 1].description) }}</p>
              </div>
            </a>
            <div v-else class="h-20 w-full bg-gray-900 border border-gray-800 rounded-xl flex justify-center items-center text-3xl font-semibold">
              Niesú žiadne turnaje
            </div>
          </template>
        </div>
      </div>
      <div class="flex justify-center pt-3 w-full">
        <router-link to="/turnaje-servery" class="w-full">
          <ion-button @click="toTurnaje" class="w-full">
            Pozrieť všetky turnaje
          </ion-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IonIcon, IonButton } from '@ionic/vue';
import { ref, computed } from 'vue';
import { useTournamentStore } from '@/store/useTournamentStore.js';
import { useBlogStore } from '@/store/useBlogStore.js';
import { gameController, calendar } from 'ionicons/icons';
import NewsPanel from './newsPanel.vue';

const tournamentStore = useTournamentStore();
const blogStore = useBlogStore();

// Ensure that the tournamentStore.tournament is an array
if (!Array.isArray(tournamentStore.tournament)) {
  tournamentStore.tournament = [];
}

// Filter out past tournaments but include those happening today
const upcomingTournaments = computed(() => {
  const currentDate = new Date();
  return tournamentStore.tournament.filter((turnaj) => {
    const tournamentDate = new Date(turnaj.date);
    return tournamentDate >= currentDate;
  });
});

const sortedTournaments = computed(() => {
  return [...upcomingTournaments.value].sort((a, b) => new Date(a.date) - new Date(b.date));
});

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString('sk-SK', options);
}

const toTurnaje = () =>{
  this.$router.push('/turnaje-servery')
}

const truncateDescription = (description) => {
  if (!description) return '';
  const words = description.split(' ');
  return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : description;
};

const titleClass = (title) => {
  if (!title) return '';
  return title.split(' ').length > 2 ? 'text-xl max-md:text-lg' : 'text-2xl max-md:text-xl';
};


</script>
