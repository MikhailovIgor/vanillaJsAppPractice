import {DELETE_PRODUCT} from './types.js'

export const deleteProduct = (id) => ({type: DELETE_PRODUCT, payload: id});