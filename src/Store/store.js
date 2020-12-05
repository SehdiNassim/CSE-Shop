import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sidebar from './reducers/sidebar';
import cart from './reducers/cart';


const CseShopStore= (initialState={
    sidebar:{
        isOpen:false,
    },
    cart:[]
})=>{
    return applyMiddleware(thunkMiddleware)(createStore)(
        combineReducers({sidebar,cart}),
        (
            localStorage['cart'] ?
            {
                ...initialState,
                cart: JSON.parse(localStorage['cart']),
            } :
            initialState
        )
    )
}

export default CseShopStore