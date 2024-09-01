<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/stores/productStore';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const productId = route.params.id;
const loading = ref(true);

onMounted(async () => {
  await productStore.fetchProducts();
  loading.value = false;
});

const product = computed(() => {
  return productStore.products.find(p => p.id.toString() === productId.toString());
});

const editProduct = () => {
  router.push({ name: 'edit-product', params: { id: productId } });
};

const deleteProduct = async () => {
  productStore.deleteProduct(productId);
  router.push({ name: 'products' });
};
</script>

<template>
  <div class="container">
    <v-row v-if="loading">
      <v-col>
        <v-alert type="info">
          Cargando producto...
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-else-if="product" align="center">
      <v-col cols="3">
        <v-img :src="product.image" width="200" height="200" class="mx-auto"></v-img>
      </v-col>
      <v-col cols="4">
        <h3>{{ product.title }}</h3>
        <h1>${{ product.price }}</h1>
        <h4 class="font-weight-light mb-3">{{ product.category }}</h4>
        <p>{{ product.description }}</p>
      </v-col>
      <v-col class="d-flex align-center justify-center flex-column">
        <v-btn color="primary" class="mb-2" width="200" @click="editProduct">Editar Producto</v-btn>
        <v-btn color="error" width="200" @click="deleteProduct">Borrar Producto</v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-alert type="error">
          No se encuentra el producto con ID {{ productId }}
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.container {
  width: 95%;
  margin: auto;
  margin-top: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>