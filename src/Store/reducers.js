import { combineReducers } from 'redux';
import sidebar from './sidebar/reducers';
import cart from './cart/reducers';

export default combineReducers({
    sidebar,
    cart,
})