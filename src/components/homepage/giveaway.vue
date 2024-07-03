<template>
    <div class="animate relative flex justify-center items-center w-full h-auto md:h-56 bg-green-600 md:bg-white shadow-md border border-gray-700 rounded-lg md:rounded-xl overlfow-x-hidden my-[2rem] mb-5 oveflow-hidden">
        <span class="absolute top-[-2rem] left-[-1rem] text-5xl mt-2 mr-2" v-if="giveawayStore.giveaway">🎉</span>
        <span class="absolute bottom-[-1rem] right-[-2rem] text-5xl mt-2 mr-2" v-if="giveawayStore.giveaway">🎊</span>
        <div class="flex flex-col md:gap-5 p-2 md:flex-row justify-center items-center">
            <div class="md:w-1/3">
                <h1 class="p-2 text-white md:text-green-500 text-xl text-center font-bold">
                {{ giveawayStore.giveaway.name }}
            </h1>
            <h2 class="p-1 text-white md:text-green-500 text-md text-center max-md:hidden">
                {{ giveawayStore.giveaway.description }}
            </h2>
            </div>
             <div class="flex justify-center items-center" >
                <button id="open-modal" class="py-3 px-5 text-white text-md text-center bg-green-500 border border-green-900 rounded-lg mt-2 md:mt-0 hover:bg-green-700 max-md:mb-3">
                    Prihlás sa do {{ giveawayStore.giveaway.deadline }}
                </button>
            </div>
        </div>
    </div>
    <giveawayModal />
</template>


<script>
import { useGiveawayStore } from '@/store/useGiveawayStore.js';
import giveawayModal from './giveawayModal.vue';

export default {
    components: {
        giveawayModal
    },
    setup() {
        const giveawayStore = useGiveawayStore();
        const getGiveaways = () =>{
            giveawayStore.getGiveaway();
            console.log(giveawayStore);
        }
        return {
            giveawayStore,
            getGiveaways
        }
    },
    mounted(){
        this.getGiveaways();
    }
};
</script>

<style scoped>
.animate{
    animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% {
    background-color: 1;
  }
  50% {
    opacity: 1.8; 
  }
}
</style>