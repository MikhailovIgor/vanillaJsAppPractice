import {DELETE_PRODUCT} from './types.js'

export const deleteProduct = (id) => ({type: DELETE_PRODUCT, payload: id});

export const getProducts = () =>
  API.getProducts().then(
    (products) => dispatch({ type: SET_PRODUCTS, payload: products }),
    () => alert('Ooops, something went wrong')
  );
  