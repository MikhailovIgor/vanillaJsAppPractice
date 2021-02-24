export const delButton = (onClick) => {
  const delBtn = document.createElement('button');
  delBtn.classList.add('card__delete');
  
  delBtn.addEventListener('click', onClick);
  return delBtn;
};
