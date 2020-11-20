import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sidebar from './reducers/sidebar';


const CseShopStore= ()=>{
    return createStore(combineReducers({sidebar}),applyMiddleware(thunkMiddleware))
}

export default CseShopStore