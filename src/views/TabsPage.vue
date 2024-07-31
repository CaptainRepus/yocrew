<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <!-- NAVBAR -->
      <nav class="h-20 bg-gray-900 border-b-4 fixed w-full z-20 top-0 start-0 border-[rgb(101,120,174)]">
        <div class="relative max-w-screen-xl flex flex-wrap items-center justify-end mx-auto h-full">
          <router-link to="/" class="absolute bottom-[-60%] md:bottom-[-70%] left-[38%] md:left-5 flex items-center rtl:space-x-reverse logo">
            <img src="/img/yocrewlogo.png" class="h-24 md:h-[6.5rem]" alt="YoCrew Logo">
          </router-link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              @click="toggleModal"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <router-link
                  to="/"
                  class="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Domov
                </router-link>
              </li>
              <li>
                <router-link
                  to="/clanky"
                  class="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Články
                </router-link>
              </li>
              <li>
                <router-link
                  to="/turnaje-servery"
                  class="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Turnaje / CS2 Servery
                </router-link>
              </li>
              <li class="relative group">
                <Menu as="router-link" class="relative inline-block text-left">
                  <router-link to="/yocrew">
                    <MenuButton
                      class="flex items-center cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      YoCrew
                      <ChevronDownIcon
                        class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </MenuButton>
                  </router-link>
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none group-hover:block"
                    >
                      <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                            <router-link
                            to="/yocrew"
                              :class="[
                                active ? 'bg-green-600 text-white' : 'text-gray-100',
                                'group text-white flex w-full items-center rounded-md px-2 py-2 text-sm',
                              ]"
                            >
                            Náš tím
                          </router-link>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <router-link
                          to="/galeria"
                            :class="[
                              active ? 'bg-green-600 text-white' : 'text-gray-100',
                              'group text-white flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]"
                          >
                            Galéria
                          </router-link>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- MOBILE MODAL -->
      <transition name="fade">
        <div v-if="isModalOpen" class="fixed inset-0 z-30 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div class="bg-slate-800 shadow-lg w-full md:w-1/2 lg:w-1/3 relative">
            <button @click="toggleModal" class="absolute top-3 right-3 text-white active:text-green-500">
              <span class="sr-only">Zatvoriť menu</span>
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul class="flex flex-col p-5 pt-16 h-screen w-screen space-y-4">
              <li class="border-b-2 border-white pb-2">
                <router-link @click.native="handleLinkClick" to="/" class="text-white text-3xl font-semibold hover:text-green-700">
                  <ion-icon :icon="home" class="ms-2 me-5" />Domov
                </router-link>
              </li>
              <li class="border-b-2 border-white pb-2">
                <router-link @click.native="handleLinkClick" to="/clanky" class="text-white text-3xl font-semibold hover:text-green-700">
                  <ion-icon :icon="newspaper" class="ms-2 me-5" />Články
                </router-link>
              </li>
              <li class="border-b-2 border-white pb-2">
                <router-link @click.native="handleLinkClick" to="/turnaje-servery" class="text-white text-3xl font-semibold hover:text-green-700">
                  <ion-icon :icon="gameController" class="ms-2 me-5 text-3xl" />Turnaje / CS2 Servery
                </router-link>
              </li>
              <li class="border-b-2 border-white pb-2 relative">
                <div @click="toggleYoCrewDropdown" class="text-white text-3xl font-semibold hover:text-green-700 flex items-center cursor-pointer">
                  <ion-icon :icon="people" class="ms-2 me-5 text-3xl" />YoCrew
                  <ChevronDownIcon class="ml-2 h-8 w-8 text-white" />
                </div>
                <transition name="fade">
                  <ul v-if="isYoCrewDropdownOpen" class="pl-16 my-5 space-y-2">
                    <li class="border-b-2 border-white pb-2 relative">
                      <router-link @click.native="handleLinkClick" to="/yocrew" class="text-white text-2xl font-semibold hover:text-green-700">
                        Náš tím
                      </router-link>
                    </li>
                    <li class="pb-2 relative">
                      <router-link @click.native="handleLinkClick" to="/galeria" class="text-white text-2xl font-semibold hover:text-green-700">
                        Galéria
                      </router-link>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonTabs, IonRouterOutlet } from '@ionic/vue';
import { home, newspaper, gameController, people } from 'ionicons/icons';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isYoCrewRoute = computed(() => route.path === '/yocrew' || route.path === '/galeria');

const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const isYoCrewDropdownOpen = ref(false);
const toggleYoCrewDropdown = () => {
  isYoCrewDropdownOpen.value = !isYoCrewDropdownOpen.value;
};

const handleLinkClick = () => {
  isModalOpen.value = false;
  isYoCrewDropdownOpen.value = false;
};

const handleScroll = () => {
  const logo = document.querySelector('.logo');
  if (window.scrollY > 50) {
    logo.classList.add('logo-left');
  } else {
    logo.classList.remove('logo-left');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
.group:hover .group-hover\:hidden {
  display: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: max-height 0.3s ease-in;
}
.dropdown-enter-from, .dropdown-leave-to {
  max-height: 0;
}

.logo-left {
  left: 0 !important;
  bottom: 0 !important;
  transition: left 0.3s, bottom 0.3s;
}
</style>

