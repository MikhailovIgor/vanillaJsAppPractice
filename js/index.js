import itemsList from './components/itemsList.js';
import modal from './components/modal.js';
import {addCardButton} from "./components/addCardButton.js";
import {getProducts, showModal} from './redux/actions.js';
import {getState, dispatch, subscribe} from './redux/index.js';

const root = document.getElementById('root');

const render = store => {
  root.innerHTML = '';
  root.append(
    itemsList(store.products),
    store.modal.isOpened ? modal() : '',
    addCardButton(() => dispatch(showModal()))
  );
};

subscribe(() => render(getState()));

dispatch(getProducts());
