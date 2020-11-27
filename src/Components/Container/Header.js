import { connect } from 'react-redux'
import Hdr from './../Presentational/header';
import openSidebar from './../../Store/action creators/sidebar/openSidebar';

const mapStateToProps=(state)=>({
    cartLength:state.cart.length
})

const mapDispatchToProps = (dispatch) => ({
    onShopClick() {
        dispatch(openSidebar())
    }
})

const Header = connect(mapStateToProps, mapDispatchToProps)(Hdr)

export default Header