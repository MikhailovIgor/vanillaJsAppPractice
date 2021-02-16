import card from './components/card.js';
import renderModal from './components/modal.js';
import {deleteProduct, getProducts} from './redux/actions.js'
import {getState, dispatch, subscribe} from './redux/index.js';

const items = document.querySelector('.items');

const render = data => {
  items.querySelectorAll('.card').forEach(item => item.remove());
  items.append(...data.map(product => card(product, () => dispatch(deleteProduct(product.id)))));
}

const openModalButton = document.querySelector('.openModal');
openModalButton.addEventListener('click',renderModal)

subscribe(() => render(getState()));

dispatch(getProducts());
