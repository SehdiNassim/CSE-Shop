import { combineReducers } from 'redux';
import sidebar from './sidebar/reducers';
import cart from './cart/reducers';
import crud from './crud/reducers';

export default combineReducers({
    sidebar,
    cart,
    crud
})