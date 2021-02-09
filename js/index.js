import card from './card.js';

const URL = 'http://localhost:3000/items';
const items = document.querySelector('.items');

const fetchProducts =  async () => {
  const result = await fetch(URL);
  return await result.json();
}

const render = data => data.forEach(item => items.insertAdjacentHTML('beforeend', card(item)));

(async () => {
  const data = await fetchProducts();
  render(data);
})();
