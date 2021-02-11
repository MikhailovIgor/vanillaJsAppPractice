import {DELETE_PRODUCT, SET_PRODUCTS} from './types.js';
import API from '../api/products.js';
import {dispatch} from "./index.js";

export const deleteProduct = (id) =>
  API.delProduct(id)
    .then( () => dispatch(({type: DELETE_PRODUCT, payload: id})))
    .catch(err => console.log(err))

export const getProducts = () =>
  API.getProducts()
    .then((products) => dispatch({type: SET_PRODUCTS, payload: products}))
    .catch(err => console.log(err))
