<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <!-- NAVBAR NA PC -->
      <nav class="h-20 bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-700 max-md:hidden">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[0.6rem] pb-0">
          <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/img/yocrewlogo.png" class="h-16" alt="YoCrew Logo">
          </router-link>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Otvoriť menu</span>
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

      <!-- TAB PRE MOBILY -->
      <div class="relative">
        <div class="w-full h-10 absolute top-[-39px] left-0 z-10 md:hidden flex justify-center items-center bg-black" v-if="isYoCrewRoute">
          <div class="inline-flex rounded-md shadow-sm mt-2">
            <router-link
              to="/yocrew"
              type="button"
              aria-current="page" 
              :class="[
                'px-16 py-2 text-sm font-medium border border-gray-200 rounded-s-lg focus:z-10 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:focus:ring-blue-500',
                route.path === '/yocrew' ? 'bg-gray-700 text-white' : 'bg-gray-900'
              ]">
              Náš tím
            </router-link>
            <router-link 
              to="/galeria"
              type="button"
              :class="[
                'px-16 py-2 text-sm font-medium border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 dark:border-gray-700',
                route.path === '/galeria' ? 'bg-gray-700 text-white' : 'bg-gray-900'
              ]">
              Galéria
            </router-link>
          </div>
        </div>

        <ion-tab-bar slot="bottom" class="md:hidden relative z-0">
          <ion-tab-button tab="Domov" href="/">
            <ion-icon aria-hidden="true" :icon="home" :class="[route.path === '/' ? 'text-green-500' : 'text-gray-400']" />
          </ion-tab-button>

          <ion-tab-button tab="Turnaje" href="/turnaje-servery">
            <ion-icon aria-hidden="true" :icon="ribbon" :class="[route.path === '/turnaje-servery' ? 'text-green-500' : 'text-gray-400']"/>
          </ion-tab-button>

          <ion-tab-button tab="Články" href="/clanky">
            <ion-icon aria-hidden="true" :icon="library" :class="[route.path === '/clanky' ? 'text-green-500' : 'text-gray-400']"/>
          </ion-tab-button>

          <ion-tab-button tab="YoCrew" href="/yocrew">
            <ion-icon aria-hidden="true" :icon="peopleCircle" :class="[route.path === '/yocrew' || route.path === '/galeria' ? 'text-green-500' : 'text-gray-400']"/>
          </ion-tab-button>
        </ion-tab-bar>
      </div>
    </ion-tabs>
  </ion-page>
</template>



<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, ribbon, library, gameController, peopleCircle } from 'ionicons/icons';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isYoCrewRoute = computed(() => route.path === '/yocrew' || route.path === '/galeria');

</script>

<style scoped>
.group:hover .group-hover\\:block {
  display: block;
}
.group:hover .group-hover\\:hidden {
  display: none;
}
</style>
