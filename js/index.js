import itemsList from './components/itemsList.js';
import modal from './components/modal.js';
import {getProducts} from './redux/actions.js';
import {getState, dispatch, subscribe} from './redux/index.js';

const root = document.getElementById('root');

const render = data => {
  root.innerHTML = '';
  root.append(itemsList(data), modal());
};

subscribe(() => render(getState()));

dispatch(getProducts());
