import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      if (this.products.length > 0) {
        return;
      }
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error("Error fetching products:", error);
        this.error = "Error fetching products";
      } finally {
        this.isLoading = false;
      }
    },
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    editProduct(updatedProduct) {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
      } else {
        console.error("Product not found");
      }
    },
    deleteProduct(productId) {
      this.products = this.products.filter(p => p.id.toString() !== productId.toString());
    }
  }
});