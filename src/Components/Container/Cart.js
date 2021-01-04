import { connect } from 'react-redux'
import Crt from '../Presentational/CartPage/cart';
import setProductCount from './../../Store/cart/action creators/setProductCount';
import removeProduct from './../../Store/cart/action creators/removeProduct';

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    onDelete: (index) => {
        dispatch(removeProduct(index))
    },
    onSetCount: (index,count)=>{
        dispatch(setProductCount(index,count))
    }
})

const Cart = connect(mapStateToProps, mapDispatchToProps)(Crt)

export default Cart