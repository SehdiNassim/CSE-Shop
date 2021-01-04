import c from '../actions'


const addProduct=(product)=>{
    return {
        type: c.ADD_PRODUCT,
        product
    }
} 

export default addProduct