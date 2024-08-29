<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/productStore';

const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      title: '',
      price: 0,
      category: '',
      description: '',
      image: ''
    })
  },
  isNew: {
    type: Boolean,
    default: false
  }
});

const productStore = useProductStore();
const router = useRouter();

const title = ref(props.product.title);
const price = ref(props.product.price);
const category = ref(props.product.category);
const description = ref(props.product.description);
const image = ref(props.product.image);

const saveProduct = () => {
  const productData = {
    ...props.product,
    title: title.value,
    price: price.value,
    category: category.value,
    description: description.value,
    image: image.value,
  };

  if (props.isNew) {
    productStore.addProduct(productData);
  } else {
    productStore.editProduct(productData);
  }

  router.push({ name: 'products' });
};
</script>

<template>
  <h1>{{ isNew ? 'Agregar nuevo producto' : 'Editar producto' }}</h1>
  <div class="container">
    <v-row>
      <v-col cols="4">
        <v-img :src="image" width="200" height="200" class="mx-auto"></v-img>
        <v-text-field v-model="image" prepend-icon="mdi-image" label="URL de la imagen"></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field v-model="title" prepend-icon="mdi-pencil" label="Título"></v-text-field>
        <v-text-field v-model="price" prepend-icon="mdi-currency-usd" label="Precio" type="number"></v-text-field>
        <v-text-field v-model="category" prepend-icon="mdi-tag" label="Categoría"></v-text-field>
        <v-textarea v-model="description" prepend-icon="mdi-text" label="Descripción"></v-textarea>
      </v-col>
      <v-col class="d-flex align-center justify-center flex-column">
        <v-btn color="primary" class="mb-2" width="200" @click="saveProduct">{{ isNew ? 'Agregar Producto' : 'Guardar Cambios' }}</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 15px;
}
.v-text-field {
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
}
.v-img {
    margin-top: 65px;
}
.container {
    width: 95%;
    margin: auto;
    margin-bottom: 100px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>