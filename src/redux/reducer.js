import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    product: productReducer,
    cart: cartReducer 
});

export default rootReducers;