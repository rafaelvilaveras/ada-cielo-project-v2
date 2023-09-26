const express = require('express');
const app = express();
const port = 3000; // Choose a port for your API

// Middleware to parse JSON requests
app.use(express.json());

// Read the JSON data file
const data = require('../Desafio_FrontEnd_v2.0.json');

// Define an API endpoint to get all items
app.get('/api/items', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if no 'page' parameter is provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default to 10 items per page if no 'pageSize' parameter is provided
  
    // Calculate the start and end indices for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    // Slice the data array to get the items for the current page
    const itemsForPage = data.items.slice(startIndex, endIndex);
  
    // Create a response object with the current page data
    const response = {
      page,
      pageSize,
      totalItems: data.items.length,
      totalPages: Math.ceil(data.items.length / pageSize),
      items: itemsForPage,
    };
  
    res.json(response);
  });
  

  // http://localhost:3000/api/items?page=1&pageSize=10

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});