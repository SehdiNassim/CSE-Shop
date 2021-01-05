import { connect } from 'react-redux'
import Hdr from './../Presentational/common/header';

const mapStateToProps=(state)=>({
    cartLength:state.cart.length
})

const mapDispatchToProps = (dispatch) => ({
    onShopClick() {
        dispatch({
            type:'OPEN_SIDEBAR'
        })
    }
})

const Header = connect(mapStateToProps, mapDispatchToProps)(Hdr)

export default Header