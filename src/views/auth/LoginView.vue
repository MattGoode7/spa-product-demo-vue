<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const login = async () => {
  loading.value = true;
  error.value = '';
  try {
    await authStore.login({ email: email.value, password: password.value });
    router.push('/');
  } catch (err) {
    error.value = 'Login failed. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5" max-width="400">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-alert v-if="error" type="error">{{ error }}</v-alert>
          <v-btn :loading="loading" type="submit" color="primary">Login</v-btn>
        </v-form>
        <RouterLink to="/register">
          <v-btn text class="mt-4">¿No tienes cuenta? Regístrate</v-btn>
        </RouterLink>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>