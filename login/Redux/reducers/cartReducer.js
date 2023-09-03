import * as types from '../constants/cartConstant';

const initialState = {
    cart: [],
    loading: false,
    error: null,
    dataCart: [],
    deleteProduct: [],
    IncreaseCnt: [],
};

export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case types.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload
            };

        case types.ADD_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                cart: []
            };

        case types.FETCH_USER_CART:
            return {
                ...state,
                loading: false,
                dataCart: action.payload,
            };

        case types.DELETE_PRODUCTS_CART:
            return {
                ...state,
                loading: false,
                dataCart: state.dataCart.filter(item => item.productId !== action.payload)
            }
        case types.INCREASE_ITEM:
            return {
                ...state,
                loading: false,
                IncreaseCnt: action.payload,
            }
        default:
            return state;
    }
}
