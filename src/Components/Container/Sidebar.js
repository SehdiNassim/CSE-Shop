import {connect} from 'react-redux'
import Sbar from './../Presentational/sidebar';
import closeSidebar from './../../Store/action creators/sidebar/closeSidebar';

const mapStateToProps=(state)=>({
    isOpen: state.sidebar.isOpen
})

const mapDispatchToProps=(dispatch)=>({
    onClose(){
        dispatch(closeSidebar())
    }
})

const Sidebar= connect(mapStateToProps,mapDispatchToProps)(Sbar)

export default Sidebar