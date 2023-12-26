import axios from 'axios';
import * as types from '../constants/productConstant';
import { url } from '@/host';

// Action creator for fetching products
const fetchProductsBegin = () => ({ type: types.FETCH_PRODUCTS_BEGIN });
const fetchProductsSuccess = (type, products) => ({
    type,
    payload: products,
});
const fetchProductsFailure = (type, error) => ({
    type,
    payload: error,
});

const fetchProducts = (url, type, query) => (dispatch) => {
    dispatch(fetchProductsBegin());
    return axios
        .get(url)
        .then((response) => {
            dispatch(fetchProductsSuccess(type, response.data));
        })
        .catch((error) => dispatch(fetchProductsFailure(type, error)));
};

// Fetch all products
export const fetchAllProducts = () => fetchProducts(`${url}/product/getproduct`, types.FETCH_PRODUCTS_SUCCESS);

// Fetch products by query
export const fetchQueryProducts = (query) => fetchProducts(`${url}/product/getQueryproduct/${query}`, types.FETCH_QUERY_PRODUCTS_SUCCESS);

export const fetchProductsById = (query) => fetchProducts(`${url}/product/getproductbyId/${query}`, types.FETCH_PRODUCTS_BY_ID_SUCCESS);
// Fetch products by ID

