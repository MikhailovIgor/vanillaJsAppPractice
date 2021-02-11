import {DELETE_PRODUCT, SET_PRODUCTS} from './types.js';
import API from '../api/products.js';
import {dispatch} from "./index.js";

export const deleteProduct = (id) => ({type: DELETE_PRODUCT, payload: id});

export const getProducts = () =>
  API.getProducts().then(
    (products) => dispatch({type: SET_PRODUCTS, payload: products}),
    () => alert('Ooops, something went wrong')
  );
  