const URL = 'http://localhost:3000/items';

 const getProducts = async () => {
  const resp = await fetch(URL);
  return await resp.json();
 };
 
 export default {getProducts};
 