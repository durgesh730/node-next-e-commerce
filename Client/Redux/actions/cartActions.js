import { url } from '@/host';
import * as types from '../constants/cartConstant';
import axios from 'axios';

export const AddToCartBegin = () => ({
    type: types.ADD_TO_CART_BEGIN
});

export const AddToCartSuccess = (products) => ({
    type: types.ADD_TO_CART_SUCCESS,
    payload: products
});

export const AddToCartFailure = (error) => ({
    type: types.ADD_TO_CART_FAILURE,
    payload: error
});

export function AddtoCart(productId) {
    return (dispatch) => {
        dispatch(AddToCartBegin)
        return axios.post(`${url}/cart/createproducts`, { productId }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                dispatch(AddToCartSuccess(response.data));
            })
            .catch(error => dispatch(AddToCartFailure(error)));
    }
}

export const FetchUserCartSuccess = (data) => ({
    type: types.FETCH_USER_CART,
    payload: data
});

export function FetchUsercart() {
    return (dispatch) => {
        dispatch(AddToCartBegin)
        return axios.get(`${url}/cart/getproducts`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                dispatch(FetchUserCartSuccess(response.data))
            })
            .catch((error) => {
                dispatch(AddToCartFailure(error))
            })
    }
}

export const DeletePruductsFromCart = (deleteData) => ({
    type: types.DELETE_PRODUCTS_CART,
    payload: deleteData
})

export function DeleteProductsCarts(id) {
    return (dispatch) => {
        dispatch(AddToCartBegin)
        return axios.delete(`${url}/cart/deleteproducts${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                dispatch(DeletePruductsFromCart(res.data))
            })
            .catch((error) => {
                dispatch(AddToCartFailure(error))
            })
    }
}

export const IncreaseItem = (IncreaseItem) => ({
    type: types.INCREASE_ITEM,
    payload: IncreaseItem
})

export function IncreaseItemFromCart(id, totalItem) {
    return (dispatch) => {
        dispatch(AddToCartBegin)
        return axios.put(`${url}/cart/updateproducts/${id}`, { totalItem }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                dispatch(IncreaseItem(res.data.updatedData))
            })
            .catch((error) => {
                dispatch(AddToCartFailure(error))
            })
    }
}