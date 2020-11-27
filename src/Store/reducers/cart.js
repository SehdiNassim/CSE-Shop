import c from '../constants'

const updateLocalStorage=(state=[])=>{
    localStorage['cart'] = JSON.stringify(state)
    return state
}

const cart = (state = [], action) => {
    switch (action.type) {
        case c.ADD_PRODUCT:
            return updateLocalStorage([...state, action.product])
        case c.REMOVE_PRODUCT:
            return updateLocalStorage(state.filter((product, i) => i !== action.index))
        case c.SET_PRODUCT_COUNT:
            return updateLocalStorage(state.map((product, i) =>{
                return i===action.index ? {
                    ...product,
                    count: action.count
                }: {...product}
            }))
        case c.SET_CART:
            return updateLocalStorage([...action.cart])
        case c.CLEAR_CART:
            return updateLocalStorage([])
        default:
            return [...state]
    }
}

export default cart