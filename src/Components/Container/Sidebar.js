import { connect } from 'react-redux'
import Sbar from '../Presentational/Sidebar/sidebar';
import closeSidebar from './../../Store/action creators/sidebar/closeSidebar';
import removeProduct from './../../Store/action creators/cart/removeProduct';
import setProductCount from './../../Store/action creators/cart/setProductCount';

const mapStateToProps = (state) => ({
    isOpen: state.sidebar.isOpen,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    onClose: () => {
        dispatch(closeSidebar())
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