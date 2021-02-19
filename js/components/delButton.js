export const delButton = (onClick) => {
  const delBtn = document.createElement('button');
  delBtn.classList.add('delBtn');
  
  delBtn.addEventListener('click', onClick);
  
  return delBtn;
};
