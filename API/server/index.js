const express = require('express');
const app = express();
const port = 3000; // Choose a port for your API

// Middleware to parse JSON requests
app.use(express.json());

// Read the JSON data file
const data = require('../Desafio_FrontEnd_v2.0.json');

// Define an API endpoint to get all items
app.get('/api/items', (req, res) => {
  // Get filter parameters from query
  const paymentTypeFilter = req.query.paymentType;
  const cardBrandFilters = req.query.cardBrand; // Accept an array of cardBrands

  // Initialize an array to hold the filtered items
  let filteredItems = data.items;

  // Apply filters based on query parameters
  if (paymentTypeFilter) {
    filteredItems = filteredItems.filter(item => item.paymentType === paymentTypeFilter);
  }

  if (cardBrandFilters) {
    // Check if cardBrandFilters is an array or a single value
    const cardBrands = Array.isArray(cardBrandFilters) ? cardBrandFilters : [cardBrandFilters];

    // Filter items based on the selected cardBrands
    filteredItems = filteredItems.filter(item => cardBrands.includes(item.cardBrand));
  }

  // Count the occurrences of each cardBrand in the filtered data
  const cardBrandCounts = {};
  filteredItems.forEach(item => {
    if (cardBrandCounts[item.cardBrand]) {
      cardBrandCounts[item.cardBrand]++;
    } else {
      cardBrandCounts[item.cardBrand] = 1;
    }
  });

  // Create a response object with the filtered data and cardBrand counts
  const response = {
    totalItems: filteredItems.length,
    cardBrandCounts,
    items: filteredItems,
  };

  // Set the necessary headers in the response
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (you may want to restrict this in production)

  res.json(response);
});


/* 
  cardBrand types: http://localhost:3000/api/cardBrands

  cardBrand quant: http://localhost:3000/api/items?cardBrand=Mastercard

  multiple cardBrand quant: http://localhost:3000/api/items?cardBrand[]=Mastercard&cardBrand[]=Visa


*/

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});