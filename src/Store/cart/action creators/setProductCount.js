import c from '../actions'

const setProductCount = (index, count) => {
    return {
        type: c.SET_PRODUCT_COUNT,
        index,
        count,
    }
}

export default setProductCount