const express = require('express');
const {PORT} = require('./src/constants');
const { findProduct, queryProducts } = require('./src/products');
require('dotenv').load();

const app = express();

// manage errors
const handleError = (error, res) => {
  console.log(error);
  const { status, data, statusText } = error.response;
  return res.status(status).json({message: data.message || statusText});
};

// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api/items?q=pc
app.get("/api/items", async (req, res) => {
  try {
    const response = await queryProducts(req.query);
    res.json(response);
  } catch (error) {
    handleError(error, res);
  }  
});

// api/item/MLU-460523537
app.get('/api/item/:id', async (req, res) => {
  try {
    const response = await findProduct(req.params.id);
    return res.json(response);
  } catch (error) {
    handleError(error, res);
  }  
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});