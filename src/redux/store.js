import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

 //Для разработки с подкл redux и утилиты
/*  const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk))); */

 //production
const store = createStore(reducer,applyMiddleware(thunk));  
export default store;
