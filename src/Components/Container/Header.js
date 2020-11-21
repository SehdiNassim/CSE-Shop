import { connect } from 'react-redux'
import Hdr from './../Presentational/header';
import openSidebar from './../../Store/action creators/sidebar/openSidebar';

const mapDispatchToProps = (dispatch) => ({
    onShopClick() {
        dispatch(openSidebar())
    }
})

const Header = connect(null, mapDispatchToProps)(Hdr)

export default Header