<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Profil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="mt-[-0.5rem]">
        <ion-toolbar>
          <ion-title size="large">Profil</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="flex flex-col px-4 pt-5">
        <!-- Profile section -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-green-200 rounded-full h-24 w-24 flex items-center justify-center mb-4">
            <img src="" alt="Avatar" class="rounded-full h-20 w-20">
          </div>
          <h2 class="text-lg font-bold">Coffeestories</h2>
          <p class="text-sm text-gray-500">mark.brock@icloud.com</p>
          <ion-button expand="block" class="mt-4" color="primary" @click="openEditProfileModal">
            <ion-icon :icon="editProfileIcon" slot="start"></ion-icon>
            Edit Profile
          </ion-button>
        </div>

        <!-- Preferences section -->
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-500 mb-2">Preferences</h3>

          <!-- Push Notifications Toggle -->
          <div class="flex justify-between items-center py-2 border-b">
            <div class="flex items-center">
              <ion-icon :icon="notificationsIcon" class="mr-2"></ion-icon>
              <span>Push Notifications</span>
            </div>
            <ion-toggle slot="end" checked></ion-toggle>
          </div>

          <!-- Face ID Toggle -->
          <div class="flex justify-between items-center py-2 border-b mt-2">
            <div class="flex items-center">
              <ion-icon :icon="helpIcon" class="mr-2"></ion-icon>
              <span>Pomoc</span>
            </div>
          </div>

          <!-- PIN Code Icon -->
          <div class="flex justify-between items-center py-2 mt-2">
            <div class="flex items-center">
              <ion-icon :icon="pinCodeIcon" class="mr-2"></ion-icon>
              <span>PIN Code</span>
            </div>
            <ion-icon :icon="lockIcon" slot="end"></ion-icon>
          </div>
        </div>

        <!-- Logout Button -->
        <div class="mt-6">
          <ion-button expand="block" color="danger" @click="handleLogout">
            <ion-icon :icon="logoutIcon" slot="start"></ion-icon>
            Odhlásiť sa
          </ion-button>
        </div>
      </div>

      <!-- Edit Profile Modal -->
      <ion-modal :is-open="isEditProfileModalOpen" @will-dismiss="closeEditProfileModal">
        <div class="p-5">
          <h3 class="text-lg font-bold mb-4">Edit Profile</h3>
          <ion-item>
            <ion-label>Name</ion-label>
            <ion-input v-model="profile.name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input v-model="profile.email"></ion-input>
          </ion-item>
          <ion-button expand="block" color="primary" class="mt-4" @click="saveProfile">
            Save
          </ion-button>
          <ion-button expand="block" color="light" class="mt-2" @click="closeEditProfileModal">
            Cancel
          </ion-button>
        </div>
      </ion-modal>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonButton, IonIcon, IonToggle, IonHeader, IonTitle, IonToolbar, IonPage, IonModal, IonItem, IonLabel, IonInput } from '@ionic/vue'; // Import Ionic components
import { ref } from 'vue'; // Vue ref for reactivity

// Import Pinia store and Vue Router
import { useLoginStore } from "@/store/auth/login.js"; // Adjust the path based on your file structure
import { useRouter } from 'vue-router';

// Get the login store and router instance
const loginStore = useLoginStore();
const router = useRouter();

// Handle Logout function
const handleLogout = () => {
  loginStore.logout(router); // Call the logout action and pass the router
};

// Import Ionicons for use in the template
import { createOutline, notificationsOutline, fingerPrintOutline, lockClosedOutline, logOutOutline, help } from 'ionicons/icons';

// Define the icons
const editProfileIcon = createOutline;
const notificationsIcon = notificationsOutline;
const faceIDIcon = fingerPrintOutline;
const pinCodeIcon = lockClosedOutline;
const lockIcon = lockClosedOutline;
const logoutIcon = logOutOutline;
const helpIcon = help;

// Modal state
const isEditProfileModalOpen = ref(false);

// Profile data for editing
const profile = ref({
  name: 'Coffeestories',
  email: 'mark.brock@icloud.com'
});

// Open the modal
const openEditProfileModal = () => {
  isEditProfileModalOpen.value = true;
};

// Close the modal
const closeEditProfileModal = () => {
  isEditProfileModalOpen.value = false;
};

// Save the profile
const saveProfile = () => {
  // Perform save logic (e.g., API call)
  console.log('Profile saved:', profile.value);
  closeEditProfileModal();
};
</script>
