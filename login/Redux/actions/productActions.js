import axios from 'axios';
import * as types from '../constants/productConstant';
import { url } from '@/host';

export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (products) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: products
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
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}


export const fetchQueryProductsSuccess = (products) => ({
    type: types.FETCH_QUERY_PRODUCTS_SUCCESS,
    payload: products
});

export function fetchQueryProducts(query) {
    return (dispatch) => {
        dispatch(fetchProductsBegin());
        return axios.get(`${url}/getQueryproduct?q=${query}`)
            .then((res) => {
                dispatch(fetchQueryProductsSuccess(res.data));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error));
            })
    }
}

export const fetchProductsbyIdSuccess = (products) =>
({
    type: types.FETCH_PRODUCTS_BY_ID_SUCCESS,
    payload: products,

});

export function fetchProductsById(query) {
    return (dispatch) => {
        dispatch(fetchProductsBegin());
        return axios.get(`${url}/getproductbyId?q=${query}`)
            .then((res) => {
                dispatch(fetchProductsbyIdSuccess(res.data));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error));
            })
    }
}