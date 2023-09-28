import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import CartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: CartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
