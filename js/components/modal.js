import {delButton as btn} from './delButton.js';
import {dispatch} from '../redux/index.js';
import {closeModal} from "../redux/actions.js";

const modal = () => {

  const closeModalButton  = btn(() => dispatch(closeModal()));
  closeModalButton.classList.add('form__close');
  
  const modalBackdrop = document.createElement('div');
  modalBackdrop.classList.add('modalBackdrop');
  
  const formWrapper = document.createElement('div');
  formWrapper.classList.add('formWrap');
  
  const form = document.createElement('form');
  form.classList.add('form');
  
  form.insertAdjacentHTML('beforeend', `
    <div class="form__container">
          <label for="deviceModel" class="form__label form__label--required">Enter device model:</label>
          <input id="deviceModel" class="form__input" type="text" placeholder="model" required>
          <label for="imgUrl" class="form__label form__label--required">Enter picture address:</label>
          <input id="imgUrl" class="form__input" type="text" placeholder="picture address" required>
          <div class="form__prices">
            <div class="form__column">
              <label for="price" class="form__label form__label--required">Enter price:</label>
              <input id="price" class="form__input" type="number" placeholder="add price" required>
            </div>
            <div class="form__column">
              <label for="discount" class="form__label">Discount:</label>
              <input id="discount" class="form__input" type="number" placeholder="">
            </div>
          </div>
          <label for="description" class="form__label form__label--required">Enter description:</label>
          <textarea id="description" rows="5" placeholder="..." required></textarea>

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
            <button class="form__submit">ADD CARD</button>
          </div>
        </div>
  `);
  
  formWrapper.append(closeModalButton, form);
  modalBackdrop.appendChild(formWrapper);

  return modalBackdrop;
};

export default modal;
