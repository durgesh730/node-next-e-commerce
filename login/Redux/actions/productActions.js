import axios from 'axios';
import * as types from '../constants/productConstant';
import { url } from '@/host';

export const fetchProductsBegin = () => ({
    type:types.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (products) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload:products
});

export const fetchProductsFailure = (error) => ({
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: error
});

export function fetchProducts() {
    return (dispatch) => {
        dispatch(fetchProductsBegin());
        return axios.get(`${url}/getproduct`)
            .then(response => {
                dispatch(fetchProductsSuccess(response.data));
                return response.data;
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}