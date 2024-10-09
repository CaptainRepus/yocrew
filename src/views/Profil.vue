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
            <img :src="profilePicturePreview || ''" alt="Avatar" class="rounded-full h-20 w-20">
          </div>
          <h2 class="text-lg font-bold">{{ dataStore?.name || 'Guest' }}</h2>
          <p class="text-sm text-gray-500">{{ dataStore?.email || 'N/A' }}</p>
          <button class="flex justify-center items-center py-3 w-1/2 text-lg text-center bg-green-500 border border-green-900 rounded-lg mt-4 md:mt-0 active:bg-green-700 max-md:mb-3" color="primary" @click="openEditProfileModal">
            <ion-icon :icon="create" slot="start"></ion-icon>
            Upraviť profil
          </button>
        </div>

        <!-- Preferences section -->
        <div class="mt-6">
          <h3 class="text-xl font-medium text-gray-100 mb-2">Nastavenia</h3>

          <!-- Push Notifications Toggle -->
          <div class="flex justify-between items-center py-2 border-b">
            <div class="flex items-center">
              <ion-icon :icon="notifications" class="mr-2"></ion-icon>
              <span>Upozornenia</span>
            </div>
            <ion-toggle slot="end" checked></ion-toggle>
          </div>

          <!-- Face ID Toggle -->
          <div class="flex justify-between items-center py-2 border-b mt-2">
            <div class="flex items-center">
              <ion-icon :icon="help" class="mr-2"></ion-icon>
              <span>Pomoc</span>
            </div>
          </div>
        </div>

        <!-- Logout Button -->
        <div class="mt-6">
          <button class="flex justify-center items-center py-3 w-full text-lg text-center bg-red-500 border border-red-900 rounded-lg mt-2 md:mt-0 active:bg-red-700 max-md:mb-3"@click="handleLogout">
            <ion-icon :icon="logOut" slot="start" class="me-2"></ion-icon>
            Odhlásiť sa
          </button>
        </div>
      </div>

      <!-- Edit Profile Modal -->
      <ion-modal :is-open="isEditProfileModalOpen" @will-dismiss="closeEditProfileModal">
        <div class="p-5">
          <h3 class="text-3xl font-bold mb-10">Upraviť profil</h3>

          <h3 class="text-xl font-bold mb-2">Osobné údaje a profilová fotka</h3>
          <!-- Profile Picture Upload -->
            <ion-label>Nastaviť profilovú fotku</ion-label>
            <input type="file" @change="onProfilePictureChange" accept="image/*" />
          <!-- Profile Picture Preview -->
          <div v-if="profilePicturePreview" class="mt-4 flex justify-center">
            <img :src="profilePicturePreview" alt="Profile Picture Preview" class="rounded-full h-24 w-24 object-cover" />
          </div>

          <!-- Name Input -->
          <ion-input
            class="text-xl"
            mode="md"
            label="Zmena mena"
            label-placement="stacked"
            ref="inputName"
            type="text"
            placeholder="Tvoje meno"
          />

          <!-- Email Input -->
          <ion-input
            class="text-xl"
            mode="md"
            label="Zmena emailu"
            label-placement="stacked"
            ref="inputName"
            type="email"
            placeholder="Tvoje meno"
          />

          <h3 class="text-xl font-bold mt-10">Zmena hesla</h3>
          <router-link 
          to="/reset-password" 
          class="text-sm text-green-500 mb-3" 
          @click="closeEditProfileModal">
          Zabudol si heslo?
          </router-link>
          <!-- Old Password Input -->
          <ion-input
            class="text-xl"
            mode="md"
            label="Tu nahoď svoje staré heslo"
            label-placement="stacked"
            ref="inputName"
            type="pasword"
            placeholder="Tvoje meno"
          />

          <!-- New Password Input -->
          <ion-input
            class="text-xl"
            mode="md"
            label="Tu nahoď svoje nové heslo"
            label-placement="stacked"
            ref="inputName"
            type="password"
            placeholder="Tvoje meno"
          />

          <!-- Confirm New Password -->
          <ion-input
            class="text-xl mb-10"
            mode="md"
            label="Tu nahoď svoje nové heslo znova"
            label-placement="stacked"
            ref="inputName"
            type="password"
            placeholder="Tvoje meno"
          />

          <ion-button expand="block" color="primary" class="mt-4" @click="saveProfile">
            Uložiť
          </ion-button>
          <ion-button expand="block" color="light" class="mt-2" @click="closeEditProfileModal">
            Zrušiť
          </ion-button>
        </div>
      </ion-modal>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from '@/store/auth/userData.js';
import { IonPage, IonContent, IonButton, IonIcon, IonModal, IonItem, IonLabel, IonInput, IonToggle, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { useLoginStore } from '../store/auth/login';
import { RouterLink } from 'vue-router';
import { create, notifications, help, logOut } from 'ionicons/icons';

const dataStore = useDataStore()?.userData || { name: 'Guest', email: 'N/A' };

const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const isEditProfileModalOpen = ref(false);
const profilePicturePreview = ref(''); // To store the preview URL of the profile picture

// Handle opening and closing the Edit Profile modal
const openEditProfileModal = () => {
  isEditProfileModalOpen.value = true;
};

const handleLogout = () => {
  useLoginStore().logout();
};

const closeEditProfileModal = () => {
  isEditProfileModalOpen.value = false;
  profilePicturePreview.value = ''; // Reset preview when modal is closed
};

// Handle profile picture change
const onProfilePictureChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    // Generate a preview URL for the selected profile picture
    profilePicturePreview.value = URL.createObjectURL(file);
    console.log('Profile picture selected:', file);
  }
};

// Save the profile
const saveProfile = () => {
  if (newPassword.value && newPassword.value !== confirmPassword.value) {
    alert('New password and confirmation do not match.');
    return;
  }

  // Example of how you'd verify the old password
  if (oldPassword.value) {
    // Add logic to check if oldPassword is correct via an API call
    const isOldPasswordCorrect = true; // Assume API returns true for simplicity
    if (!isOldPasswordCorrect) {
      alert('Old password is incorrect.');
      return;
    }
  }

  // Continue to save profile information (including new password if applicable)
  console.log('Profile saved with updated information.');
  
  // Example: Save logic to call the API and update the user profile
  closeEditProfileModal();
};
</script>
