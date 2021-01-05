import { connect } from 'react-redux'
import Sbar from '../Presentational/Sidebar/sidebar';
import removeProduct from './../../Store/cart/action creators/removeProduct';
import setProductCount from './../../Store/cart/action creators/setProductCount';

const mapStateToProps = (state) => ({
    isOpen: state.sidebar.isOpen,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    onClose: () => {
        dispatch({
            type:'CLOSE_SIDEBAR'
        })
    },
    onDelete: (index) => {
        dispatch(removeProduct(index))
    },
    onSetCount: (index,count)=>{
        dispatch(setProductCount(index,count))
    }
})

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Sbar)

export default Sidebar