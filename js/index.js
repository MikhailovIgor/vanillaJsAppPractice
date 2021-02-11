import card from './components/card.js';
import {deleteProduct, getProducts} from './redux/actions.js'
import {getState, dispatch, subscribe} from './redux/index.js';

const items = document.querySelector('.items');

const render = data => {
  items.querySelectorAll('.card').forEach(item => item.remove());
  items.append(...data.map(product => card(product, (id) => dispatch(deleteProduct(product.id)))));
}

subscribe(() => render(getState()));

dispatch(getProducts());
