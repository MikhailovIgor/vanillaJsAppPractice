const URL = 'http://localhost:3000/items';

 const getProducts = async () => {
  const resp = await fetch(URL);
  return await resp.json();
 };
 
 const delProduct = async (id) => {
  const resp = await fetch(`${URL}/${id}`, {
   method: 'DELETE'
  })
 }
 
 export default {
  getProducts,
  delProduct,
 };
 