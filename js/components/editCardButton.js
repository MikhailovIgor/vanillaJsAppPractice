export const editCardButton = (onClick) => {
  const editBtn = document.createElement('button');
  editBtn.classList.add('editCardBtn');
  
  editBtn.addEventListener('click', onClick)
  return editBtn;
};
