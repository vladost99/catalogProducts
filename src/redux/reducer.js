import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';


const rootReducers = combineReducers({
    auth: authReducer,
    product: productReducer
});

export default rootReducers;