<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import AppBar from '@/components/navigation/AppBar.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <AppBar></AppBar>
  <div class="main-content">
    <RouterView></RouterView>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.main-content {
  margin-top: 100px; /* Ajusta este valor según la altura de tu AppBar */
}
</style>