import {DELETE_PRODUCT, GET_PRODUCTS, OPEN_MODAL, CLOSE_MODAL, ADD_PRODUCT } from './types.js';
import API from '../api/products.js';
import {dispatch} from "./index.js";

export const deleteProduct = (id) =>
  API.delProduct(id)
    .then( () => dispatch(({type: DELETE_PRODUCT, payload: id})))
    .catch(err => console.log(err));

export const getProducts = () =>
  API.getProducts()
    .then((products) => dispatch({type: GET_PRODUCTS, payload: products}))
    .catch(err => console.log(err));

export const showModal = () => ({type:OPEN_MODAL});

export const closeModal = () => ({type:CLOSE_MODAL});

export const addProduct = (product) =>
  API.addProduct(product)
    .then((prod) => dispatch({type: ADD_PRODUCT, payload: prod}))
    .catch(err => console.log(err));