import * as types from '../constants/productConstant';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            };

        case types.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: []
            };

        default:
            return state;
    }
}
