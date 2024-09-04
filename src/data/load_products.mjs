import fetch from 'node-fetch';
import fs from 'fs';

// URL de la API de DummyJSON
const dummyJsonApiUrl = 'https://dummyjson.com/products';

// Ruta al archivo db.json
const dbFilePath = './db.json';

// Función para cargar productos de la API de DummyJSON y agregarlos a db.json
async function loadProducts() {
  try {
    // Hacer la solicitud a la API de DummyJSON
    const response = await fetch(dummyJsonApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const products = data.products; // Extraer los productos del objeto de respuesta

    // Leer el contenido actual de db.json
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));

    // Agregar los productos de DummyJSON a db.json
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