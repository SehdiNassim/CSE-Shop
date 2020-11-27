import c from '../../constants'


const removeProduct=(index)=>{
    return {
        type: c.REMOVE_PRODUCT,
        index
    }
} 

export default removeProduct    