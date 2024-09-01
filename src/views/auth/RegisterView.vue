<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const username = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const register = async () => {
  loading.value = true;
  error.value = '';
  try {
    await authStore.register({ email: email.value, username: username.value, password: password.value });
    router.push('/');
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container>
    <v-card class="pa-5" align="center" justify="center">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="register">
          <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
          <v-text-field v-model="username" label="Username" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-alert v-if="error" type="error">{{ error }}</v-alert>
          <v-btn :loading="loading" type="submit" color="primary">Register</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.pa-5 {
  padding: 20px;
}
</style>