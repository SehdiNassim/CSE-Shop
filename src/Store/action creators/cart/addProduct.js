import c from '../../constants'


const addProduct=(product)=>{
    return {
        type: c.ADD_PRODUCT,
        product
    }
} 

export default addProduct