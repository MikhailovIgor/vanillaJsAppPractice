
const HOT = `<div class='card__label card__label--hot'>HOT</div>`;
const NEW = `<div class='card__label card__label--new'>NEW</div>`;

const getPrice = (price, discount = 0) => {
  const discountPrice = Math.round(price - (price * discount));
  return discount ? `<del class='card__oldPrice'>${price}</del><p>$${discountPrice}</p>` : `<p>$${price}</p>`
}


const card = (item) => {
  const {image, title, labels, description, price, discount} = item;
  
  const element = document.createElement('li');
  element.classList.add('card');
  
  const delButton = document.createElement('button');
  delButton.classList.add('card__delete');
  delButton.addEventListener('click', () => (console.log('!!!!!')));
  
   element.insertAdjacentHTML('beforeend', `
         <div class='card__image'>
           <img class='card__picture' src='${image}' alt='${title}'>
             <div class='card__labels'>
               ${labels.hot ? HOT : ''}
               ${labels.new ? NEW : ''}
             </div>
         </div>
         <div class='card__info'>
           <h4 class='card__title'>
             ${title.toUpperCase()}
           </h4>
           <p class='card__description'>
             ${description}
           </p>
           <div class='card__price'>
            ${getPrice(price, discount)}
           </div>`)
  
  element.appendChild(delButton)

  return element;
};

export default card;



