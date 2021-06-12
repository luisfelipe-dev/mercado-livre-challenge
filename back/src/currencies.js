const axios = require('axios');
const { BASE_API_URL } = require('./constants');

// get currencies from currency ids
module.exports.queryCurrencies = async (currencyIds) => {
  const currencies = await Promise.all(currencyIds
    .filter((currencyId, index, self) => currencyId && self.indexOf(currencyId) === index)
    .map((currencyId) => axios.get(`${BASE_API_URL}/currencies/${currencyId}`))
  );

  return currencies
    .reduce((acc, { data: currency }) => {
      acc[currency.id] = currency
      return acc;
    }, {});
}