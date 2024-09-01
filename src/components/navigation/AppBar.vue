<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  theme: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['toggle-theme']);
</script>

<template>
  <v-app-bar height="80px" app >
    <v-row align="center" no-gutters>
      <v-col cols="2">
        <v-img src="@/assets/logo-market.svg" alt="Logo" max-height="50"></v-img>
      </v-col>
      <v-col cols="4">
        <v-app-bar-title class="text-h5 font-weight-bold">MyTienda</v-app-bar-title>
      </v-col>
      <v-col>
        <v-btn class="me-3"><router-link class="text-decoration-none text-black" to="/">Home</router-link></v-btn>
        <v-btn class="me-3"><router-link class="text-decoration-none text-black" to="/products">Productos</router-link></v-btn>
        <v-btn class="me-3"><router-link class="text-decoration-none text-black" to="/">Ofertas</router-link></v-btn>
      </v-col>
    </v-row>
    <v-text-field label="Buscar" class="mt-6 me-3" variant="outlined" prepend-icon="mdi-magnify"></v-text-field>
    <v-btn
      :prepend-icon="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      @click="emit('toggle-theme')"
      text
      slim
    >
      Theme
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
.text-black {
  color: black;
}
</style>
