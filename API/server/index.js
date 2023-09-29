const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const data = require('../Desafio_FrontEnd_v2.0.json');

app.get('/api/items', (req, res) => {

  const paymentTypeFilter = req.query.paymentType;
  const cardBrandFilters = req.query.cardBrand;

  let filteredItems = data.items;

  if (paymentTypeFilter) {
    filteredItems = filteredItems.filter(item => item.paymentType === paymentTypeFilter);
  }

  if (cardBrandFilters) {
    const cardBrands = Array.isArray(cardBrandFilters) ? cardBrandFilters : [cardBrandFilters];

    filteredItems = filteredItems.filter(item => cardBrands.includes(item.cardBrand));
  }

  const cardBrandCounts = {};
  filteredItems.forEach(item => {
    if (cardBrandCounts[item.cardBrand]) {
      cardBrandCounts[item.cardBrand]++;
    } else {
      cardBrandCounts[item.cardBrand] = 1;
    }
  });

  const response = {
    totalItems: filteredItems.length,
    cardBrandCounts,
    items: filteredItems,
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.json(response);
});


/* 
  cardBrand quant: http://localhost:3000/api/items?cardBrand=Mastercard

  multiple cardBrand quant: http://localhost:3000/api/items?cardBrand[]=Mastercard&cardBrand[]=Visa

*/

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});