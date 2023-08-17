import * as types from '../constants/productConstant';

const initialState = {
    items: [],
    loading: false,
    error: null,
    queryItems: [],
    idItems: []
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

        case types.FETCH_QUERY_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                queryItems: action.payload
            }
        case types.FETCH_PRODUCTS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                idItems: action.payload
            }
        default:
            return state;
    }
}
