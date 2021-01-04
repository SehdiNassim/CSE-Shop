import constants from './actions';

const sidebar= (state={
    isOpen:false
}, action)=>{
    switch (action.type) {
        case constants.OPEN_SIDEBAR:
            return {
                isOpen: true
            }
        case constants.CLOSE_SIDEBAR:
            return {
                isOpen: false
            }
        default:
            return {
                ...state
            }
    }
}

export default sidebar