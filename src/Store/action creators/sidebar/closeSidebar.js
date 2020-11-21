import C from './../../constants';

const closeSidebar = () => {
    document.querySelector('body').style.overflowY = 'scroll'
    return {
        type: C.CLOSE_SIDEBAR
    }
}

export default closeSidebar