import fetch from 'node-fetch';
import fs from 'fs';

// URL de la API de FakeStore
const fakeStoreApiUrl = 'https://fakestoreapi.com/products';

// Ruta al archivo db.json
const dbFilePath = './db.json';

// Función para cargar productos de la API de FakeStore y agregarlos a db.json
async function loadProducts() {
  try {
    // Hacer la solicitud a la API de FakeStore
    const response = await fetch(fakeStoreApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();

    // Leer el contenido actual de db.json
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));

    // Agregar los productos de FakeStore a db.json
    dbData.products = [...dbData.products, ...products];

    // Escribir los datos actualizados en db.json
    fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2));

    console.log('Productos cargados exitosamente en db.json');
  } catch (error) {
    console.error('Error cargando productos:', error);
  }
}

// Ejecutar la función para cargar productos
loadProducts();