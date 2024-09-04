import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
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
        // Hacer la solicitud a json-server para obtener los productos de db.json
        const response = await fetch("http://localhost:3001/products"); // Asegúrate de que json-server esté corriendo en el puerto 3001

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsear la respuesta como JSON
        const data = await response.json();

        // Asignar los productos al estado
        this.products = data;
      } catch (error) {
        console.error("Error fetching products:", error);
        this.error = "Error fetching products";
      } finally {
        console.log(this.products);
        this.isLoading = false;
      }
    },
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    editProduct(updatedProduct) {
      const index = this.products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
      } else {
        console.error("Product not found");
      }
    },
    deleteProduct(productId) {
      this.products = this.products.filter((product) => product.id !== productId);
    },
  },
});