import {INIT, DELETE_PRODUCT} from './types.js'

export const init = () => ({type: INIT});

export const deleteProduct = (id) => ({type: DELETE_PRODUCT, payload: id});