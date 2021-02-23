import {delButton as btn} from './delButton.js';
import {dispatch} from '../redux/index.js';
import {closeModal, addProduct} from "../redux/actions.js";

const modal = () => {

  const closeModalButton  = btn(() => dispatch(closeModal()));
  closeModalButton.classList.add('form__close');
  
  const modalBackdrop = document.createElement('div');
  modalBackdrop.classList.add('modalBackdrop');
  
  const form = document.createElement('form');
  form.classList.add('form');
  
  form.append(closeModalButton);
 
  form.insertAdjacentHTML('beforeend', `
    <div class="form__container">
          <label for="deviceModel" class="form__label form__label--required">Enter device model:</label>
          <input id="deviceModel" class="form__input" type="text" placeholder="model" required>
          <label for="imgUrl" class="form__label form__label--required">Enter picture address:</label>
          <input id="imgUrl" class="form__input" type="text" placeholder="picture address">
          <div class="form__prices">
            <div class="form__column">
              <label for="price" class="form__label form__label--required">Enter price:</label>
              <input id="price" class="form__input" type="number" placeholder="add price" min="1" step="0.01" required>
            </div>
            <div class="form__column">
              <label for="discount" class="form__label">Discount:</label>
              <input id="discount" class="form__input" type="number" placeholder="%" min="1" max="99" step="1">
            </div>
          </div>
          <label for="description" class="form__label form__label--required">Enter description:</label>
          <textarea id="description" rows="5" placeholder="..." maxlength="180" required></textarea>

          <div class="form__footer">
            <div class="form__column">
              <div class="form__row">
                <input id="isHot" class="form__customCheckbox" type="checkbox">
                <label for="isHot" class="form__checkboxLabel">hot</label>
              </div>
              <div class="form__row">
                <input id="isNew" class="form__customCheckbox" type="checkbox">
                <label for="isNew" class="form__checkboxLabel">new</label>
              </div>
            </div>
            <button class="form__submit" type="submit">ADD CARD</button>
          </div>
        </div>
  `);
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const byId = document.getElementById.bind(document);
    
    const product = {
      title: byId('deviceModel').value,
      image: byId('imgUrl').value,
      description: byId('description').value,
      price: +byId('price').value,
      discount: byId('discount').value ? +byId('discount').value : null,
      labels: {
        hot: byId('isHot').checked,
        new: byId('isNew').checked
      }
    };
    
    dispatch(addProduct(product))
    dispatch(closeModal());
  })
  
  modalBackdrop.appendChild(form);

  return modalBackdrop;
};

export default modal;
