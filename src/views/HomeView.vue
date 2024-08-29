<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';
import CarouselSection from '@/components/navigation/CarouselSection.vue';
import ProductList from '@/components/ProductList.vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <CarouselSection></CarouselSection>
  <v-row no-gutters align="center" class="title-container">
    <v-col cols="4">
      <h1>Recomendados</h1>
    </v-col>
    <v-col cols="8 d-flex justify-start align-center">
    </v-col>
  </v-row>
  
  <hr class="divider">

  <!-- Mostrar un mensaje de error si ocurre un error -->
  <div v-if="productStore.error" class="error-message">{{ productStore.error }}</div>

  <!-- Mostrar un loader mientras los productos están cargando -->
  <div v-if="productStore.isLoading" class="loader">Cargando productos...</div>

  <!-- Mostrar los productos una vez que se hayan cargado -->
  <v-row v-else>
    <v-col cols="4">
      <h2 class="ms-5">Oferta del día</h2>
      <ProductList v-if="productStore.products.length > 0" :product="productStore.products[0]" />
    </v-col>
    <v-col cols="8">
      <h2 class="ms-14">Más vendidos</h2>
      <v-slide-group v-model="model" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="product in productStore.products" :key="product.id">
          <ProductList :product="product" />
        </v-slide-group-item>
      </v-slide-group>
    </v-col>
  </v-row>
</template>

<style scoped>
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.divider {
  border-top: 1px solid #ccc;
  margin: auto;
  width: 97%;
  margin-bottom: 20px;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 20px;
}

.loader {
  text-align: center;
  margin-top: 20px;
}
</style>