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

          <!-- Profile Picture Upload -->
          <ion-item>
            <ion-label>Profile Picture</ion-label>
            <input type="file" @change="onProfilePictureChange" accept="image/*" />
          </ion-item>

          <!-- Profile Picture Preview -->
          <div v-if="profilePicturePreview" class="mt-4 flex justify-center">
            <img :src="profilePicturePreview" alt="Profile Picture Preview" class="rounded-full h-24 w-24 object-cover" />
          </div>

          <!-- Name Input -->
          <ion-item>
            <ion-input v-model="dataStore.name"></ion-input>
          </ion-item>

          <!-- Email Input -->
          <ion-item>
            <ion-input v-model="dataStore.email"></ion-input>
          </ion-item>

          <!-- Old Password Input -->
          <ion-item>
            <ion-input type="password" v-model="oldPassword"></ion-input>
          </ion-item>

          <!-- New Password Input -->
          <ion-item>
            <ion-input type="password" v-model="newPassword"></ion-input>
          </ion-item>

          <!-- Confirm New Password -->
          <ion-item>
            <ion-input type="password" v-model="confirmPassword"></ion-input>
          </ion-item>

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
