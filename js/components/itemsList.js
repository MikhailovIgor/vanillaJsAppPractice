import card from './card.js';
import {dispatch} from '../redux/index.js';
import {deleteProduct} from "../redux/actions.js";

const itemsList = (data) => {
  
  const container = document.createElement('div');
  container.classList.add('container');
  const itemsList = document.createElement('ul');
  itemsList.classList.add('itemsList');
  container.appendChild(itemsList);

  itemsList.append(...data.map(item => card(item, () => dispatch(deleteProduct(item.id)))));
  
  return container;
};

export default itemsList;
