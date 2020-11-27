import c from '../../constants'


const setCart=(cart=[])=>{
    return {
        type: c.SET_CART,
        cart
    }
} 

export default setCart