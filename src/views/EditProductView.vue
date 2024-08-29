<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/stores/productStore';
import ProductForm from '@/components/ProductForm.vue';

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
    <v-row v-else-if="product">
      <ProductForm :product="product" />
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

<style scoped></style>