import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

//localhost:3001/api/items?q=iphone

export const searchProduct = async (q) =>
  await api.get(`/items?q=${q}`).then((res) => {
    const { author, categories, items } = res.data;

    const products = items.splice(0, 6);

    return { author, categories, products };
  });

export const infosProduct = (id) => {
  return api.get(`/item/${id}`).then((res) => {
    return res.data;
  });
};

export const suggestionProduct = async (q) =>
  await axios
    .get(
      `https://api.mercadolibre.com/sites/MLA/autosuggest?showFilters=true&limit=6&api_version=2&q=${q}`
    )
    .then((res) => {
      return res.data.suggested_queries;
    })
    .catch(() => {
      return [];
    });
