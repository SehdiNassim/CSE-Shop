import c from './actions'

const crud = (state = {
    loading: false,
    products:[],
    items:[],
    bundles:[],
    product:{},
    categories:[],
    featuredProduct:{},
    latestProducts:[]
}, action) => {
    switch (action.type) {
        case c.SET_STATE:
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}

export default crud