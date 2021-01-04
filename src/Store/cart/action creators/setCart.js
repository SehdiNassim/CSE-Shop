import c from '../actions'


const setCart=(cart=[])=>{
    return {
        type: c.SET_STATE,
        cart
    }
} 

export default setCart