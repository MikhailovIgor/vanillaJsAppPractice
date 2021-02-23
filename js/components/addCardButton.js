
export const addCardButton = (onClick) => {
  const addButton = document.createElement('button');
  addButton.classList.add('addCardBtn');
  
  addButton.addEventListener('click', onClick);
  
  return addButton;
};
