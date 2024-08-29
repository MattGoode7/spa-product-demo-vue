<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const router = useRouter();

const goToProductDetail = () => {
    router.push(`/products/${props.product.id}`);
};
</script>

<template>
    <v-card class="ms-2 mt-3 me-2">
        <v-card-title class="truncate">{{ product.title }}</v-card-title>
        <v-card-subtitle>{{ product.category }}</v-card-subtitle>
        <v-img :src="product.image" width="200" height="200" class="mx-auto"></v-img>
        <h3 class="text-center mt-3">${{ product.price }}</h3>
        <v-card-actions class="d-flex justify-center">
            <v-btn @click="goToProductDetail">Ver más</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
}
</style>