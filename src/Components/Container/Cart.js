import { connect } from 'react-redux'
import Crt from '../Presentational/CartPage/cart';
import removeProduct from './../../Store/action creators/cart/removeProduct';
import setProductCount from './../../Store/action creators/cart/setProductCount';

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