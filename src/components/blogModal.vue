<template>
  <TransitionRoot appear :show="!!blog" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-white">
                {{ blog.title }}
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-200">
                  {{ blog.content }}
                </p>
              </div>
              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-red-700 bg-red-200 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  @click="$emit('close')"
                >
                  Zavrieť
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

function closeModal() {
  // Emit close event to parent
  emit('close');
}
</script>
  