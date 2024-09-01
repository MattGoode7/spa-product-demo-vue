<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/productStore';
import ProductList from '@/components/ProductList.vue';

// Obtener el store de productos
const productStore = useProductStore();
const router = useRouter();

// Computed properties para manejar el estado de carga y error
const isLoading = computed(() => productStore.isLoading);
const error = computed(() => productStore.error);
const products = computed(() => productStore.products);

const goToAddProduct = () => {
  router.push({ name: 'add-product' });
};
</script>

<template>
  <v-row class="pa-3 align-center">
    <v-col cols="6">
      <h1>Lista de Productos</h1>
    </v-col>
    <v-col cols="6" class="text-right">
      <v-btn color="primary" @click="goToAddProduct">Nuevo producto</v-btn>
    </v-col>
  </v-row>

  <!-- Mostrar un mensaje de error si ocurre un error -->
  <div v-if="error" class="error-message">{{ error }}</div>

  <!-- Mostrar un loader mientras los productos están cargando -->
  <div v-if="isLoading" class="loader">Cargando productos...</div>

  <!-- Mostrar los productos una vez que se hayan cargado -->
  <v-row v-else>
    <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
      <ProductList :product="product" />
    </v-col>
  </v-row>
</template>

<style scoped>
.error-message {
  color: red;
  font-weight: bold;
}

.loader {
  font-size: 1.5em;
  text-align: center;
}

.text-right {
  text-align: right;
}
</style>