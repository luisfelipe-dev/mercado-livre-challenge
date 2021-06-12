const axios = require("axios");
const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

const axiosFetch = axios.create({
    baseURL: "https://api.mercadolibre.com",
    header: {Auth: "Simple AUTH"},
    timeout: 5000,
})

/* api endpoint de los productos por filtro de busqueda  (TOP 4 delcarado en limit) consumido ItemList.js*/

app.get("/api/items:search", (req, res) => {

  axiosFetch.get("/sites/MLA/search?q=" + req.params['search'] + "&limit=4")
  .then((response) => {
      res.json(FormatFetchItemList(response.data));
    }).catch(function(error) {
    res.json("Error occured!")
  })

})

/* api endpoint del producto por filtro de id consumido por Detail.js */

app.get("/api/items/:id", (req, res) => {

   axiosFetch.get("/items/" + req.params['id'])
   .then(function(responseItem) {

    axiosFetch.get("/items/" + req.params['id'] +  "/description")
    .then(function(responseItemDescritpion) {

      res.json(FormatFetchItem(responseItem.data,responseItemDescritpion.data))

    }).catch(function(error) {
      res.json("Error occured!")
    })

   }).catch(function(error) {
    res.json("Error occured!")
  })

})

/* */

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})

/*FUCIONES DE CONVERSION DE FORMATO*/
/*Pasa los datos retornados por el endpoint /api/items al formato requerido*/
function FormatFetchItemList(data) {
  var item_array = [];
//estructura json definida por el ejercicio:
   data.results.map((item =>
    item_array.push({
      "id" : item.id,
      "title" : item.title,
      "price" : {
        "price" : item.price,
        "currency" : item.installments.currency_id,
        "amount"  : item.installments.amount
      },
      "picture" : item.thumbnail,
      "condition" : item.condition,
      "free_shipping" : item.shipping.free_shipping,
      "state" : item.address.city_name,
    })
  ));

  var jsonResponse =
      {
        'autor': {
        'name' : 'Luis',
        'lastname' : 'Oliveira',
        },
        'items' : item_array
      }

  return jsonResponse;
}

/*Pasa los datos retornados por el endpoint /api/items/:id  (pantalla Deatail.js) al formato requerido*/

function FormatFetchItem(dataItem,dataItemDescription) {

  var jsonResponse =
      {
        'autor': {
        'name' : 'Luis',
        'lastname' : 'Oliveira',
        },
        'item' : {
          "id" : dataItem.item,
          "title" : dataItem.title,
          "price" : {
            "price" : dataItem.price,
            "currency" : dataItem.currency_id,
            "amount" : dataItem.available_quantity
          },
          "picture" : dataItem.pictures[0].secure_url,
          "condition" : dataItem.condition,
          "free_shipping" : dataItem.shipping.free_shipping,
          "sold_quantity" : dataItem.sold_quantity,
          "description" : dataItemDescription.plain_text
        }
      }

  return jsonResponse;
}