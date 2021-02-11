import card from './components/card.js';
import {createStore} from "./redux/store.js";
import {products} from "./redux/productInitialState.js";
import {deleteProduct} from './redux/actions.js'
import {productReducer} from "./redux/productReducer.js";

const URL = 'http://localhost:3000/items';
const items = document.querySelector('.items');

const store = createStore(productReducer, products);

const render = data => {
  items.querySelectorAll('.card').forEach(item => item.remove());
  items.append(...data.map(product => card(product, (id) => store.dispatch(deleteProduct(product.id)))));
}

render(store.getState());
store.subscribe(() => render(store.getState()));
