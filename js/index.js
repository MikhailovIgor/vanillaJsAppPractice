import card from './components/card.js';
import {createStore} from "./redux/store.js";
import {products} from "./redux/productInitialState.js";
import {init, deleteProduct} from './redux/actions.js'
import {productReducer} from "./redux/productReducer.js";
import {DELETE_PRODUCT} from "./redux/types.js";

const URL = 'http://localhost:3000/items';
const items = document.querySelector('.items');

const store = createStore(productReducer, products);

// console.log(store.getState())
//
//
//
// console.log(store.getState())


//  const fetchProducts =  async () => {
//   const result = await fetch(URL);
//   return await result.json();
// }

// const render = data => data.forEach(item => items.insertAdjacentElement('beforeend', card(item)));
//    const render = data => data.map(li => items.append(card(li)));
   const render = data => {
     items.querySelectorAll('.card').forEach(item => item.remove()) // items.innerHTML='';
     items.append(...data.map(product => card(product, () => console.log("Logged"))))
   }
// (async () => {
//   // const data = await fetchProducts();

render(store.getState())
store.subscribe(() => render(store.getState()));
  // render()
  store.dispatch(deleteProduct(1));
  store.dispatch(deleteProduct(2));
// })();
