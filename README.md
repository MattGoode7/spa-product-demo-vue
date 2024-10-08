# Gestión de Productos

## Descripción del Proyecto

Este proyecto tiene como objetivo construir una aplicación sencilla para gestionar productos en una tienda. La aplicación es una Single Page Application (SPA) desarrollada con Vue.js 3 y Composition API. Los usuarios pueden ver una lista de productos, agregar nuevos, editar los existentes y eliminarlos.

## Requisitos del Proyecto

- **Vue.js 3** con Composition API.
- **Vue Router** para la navegación entre vistas.
- **Pinia** o **Vuex** para la gestión del estado si se desea implementar una lógica más compleja.
- **Fetch API** o **Axios** para simular una API de productos.
- **CSS** o **SCSS** para el estilizado de la aplicación.

## Funcionalidades

1. **Vista de Lista de Productos**:
   - Mostrar una lista de productos con su nombre, precio, y una breve descripción.
   - Cada producto tendrá opciones para editar o eliminar.

2. **Agregar Producto**:
   - Formulario para agregar un nuevo producto con los campos: nombre, precio y descripción.
   - Validación básica de formularios.

3. **Editar Producto**:
   - Capacidad para seleccionar un producto y modificar sus detalles.

4. **Eliminar Producto**:
   - Confirmación antes de eliminar un producto.

5. **Detalles del Producto**:
   - Vista individual del producto con más detalles.

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas:

- **src/components**:
  - `ProductList.vue`: Componente que muestra la lista de productos.
  - `ProductItem.vue`: Componente para un solo producto con botones para editar/eliminar.
  - `ProductForm.vue`: Componente de formulario para agregar o editar productos.

- **src/views**:
  - `HomeView.vue`: Vista principal que muestra `ProductList`.
  - `ProductDetailView.vue`: Vista para mostrar los detalles de un producto individual.
  - `AddProductView.vue`: Vista con el formulario de `ProductForm` para agregar un producto.
  - `EditProductView.vue`: Vista con el formulario de `ProductForm` para editar un producto.

- **src/store**:
  - `index.js`: Gestión del estado con Pinia o Vuex para manejar la lista de productos.

- **src/router**:
  - Configuración de rutas para navegar entre las vistas.

## Pasos para Implementar el Proyecto

1. **Configurar el Proyecto**:
   - Crear un nuevo proyecto Vue 3 usando Vue CLI o Vite.
   - Instalar las dependencias necesarias como Vue Router y Pinia/Vuex.

2. **Desarrollo de Componentes**:
   - Crear y organizar los componentes dentro de la carpeta `components`.
   - Implementar la lógica de los componentes usando Composition API.

3. **Configurar el Router**:
   - Definir rutas para las vistas de la lista de productos, detalles, agregar y editar.

4. **Gestionar el Estado**:
   - Implementar la gestión del estado global de la aplicación (opcionalmente usando Pinia/Vuex).

5. **Estilizar la Aplicación**:
   - Aplicar estilos básicos para hacer la aplicación visualmente atractiva.

