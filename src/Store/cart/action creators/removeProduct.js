import c from '../actions'


const removeProduct=(index)=>{
    return {
        type: c.REMOVE_PRODUCT,
        index
    }
} 

export default removeProduct    