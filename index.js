let faker = require('faker');
faker.locale = "es_MX";

// products CSV
// foto,nombre,color,precio,compania
let productos = 'foto,nombre,color,precio,compania\n' 
for(let i = 0; i < 30; i++) {
  productos += `${faker.image.imageUrl()},${faker.commerce.product()},${faker.commerce.color()},${faker.commerce.price()},${faker.company.companyName()}\n`;
}

console.log(productos)
