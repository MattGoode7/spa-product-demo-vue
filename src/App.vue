<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppBar from '@/components/navigation/AppBar.vue';
import Footer from '@/components/Footer.vue';
import { useAuthStore } from '@/stores/authStore';

const theme = ref('light');
const authStore = useAuthStore();
const router = useRouter();

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};

onMounted(() => {
  if (!authStore.user) {
    router.push({ name: 'login' });
  }
});
</script>

<template>
  <v-app :theme="theme">
    <AppBar :theme="theme" @toggle-theme="toggleTheme"></AppBar>
    <v-main class="main">
      <v-container>
        <RouterView></RouterView>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<style scoped>
.main {
  min-height: 100vh;
  margin-top: 85px;
}
</style>