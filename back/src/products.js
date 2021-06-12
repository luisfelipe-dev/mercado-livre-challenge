const axios = require('axios');
const querystring = require('querystring');
const { BASE_API_URL } = require('./constants');
const { queryCurrencies } = require('./currencies');
const { findCategory } = require('./categories');
const { getNestedProps, getUser, mapProductItem } = require('./helpers');

//
module.exports.queryProducts = async (params) => {
  const { data } = await axios.get(`${BASE_API_URL}/sites/MLA/search?${querystring.stringify(params)}`);
  const { results } = data;

  // get currencies
  const currencies = await queryCurrencies(results.map(item => item.currency_id));

  // get categories
  const categories = (getNestedProps(data, ['filters', 0, 'values', 0, 'path_from_root']) || [])
    .map(category => category && category.name);

  // product items
  return {
    author: getUser(),
    categories,
    items: (results || [])
      .map(item => mapProductItem(item, currencies[item.currency_id]))
  };
};

//
module.exports.findProduct = async (productId) => {
  const [
    { data: product },
    { data: { plain_text: description } }
  ] = await Promise.all([
    axios.get(`${BASE_API_URL}/items/${productId}`),
    axios.get(`${BASE_API_URL}/items/${productId}/description`)
  ])

  // get currency
  const currencyId = product.currency_id;
  const currency = (await queryCurrencies([currencyId]))[currencyId];

  // get categories
  const categories = (await findCategory(product.category_id))
    .path_from_root
    .map(category => category && category.name);

  // product item
  return {
    author: getUser(),
    categories,
    item: mapProductItem(product, currency, false, description)
  };
};
