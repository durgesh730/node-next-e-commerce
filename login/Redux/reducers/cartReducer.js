import * as types from '../constants/cartConstant';

const initialState = {
    cart: [],
    loading: false,
    error: null,
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
                error: action.payload,
                cart: []
            };
        default:
            return state;
    }
}
