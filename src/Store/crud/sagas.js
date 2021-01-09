import { put, call, takeEvery, all } from 'redux-saga/effects'
import { getBundles, getItems, getCategories,getItem, getBundle } from '../../services/crud'
import actions from './actions'

export function* GET_CATEGORIES() {
    yield put({
        type: actions.SET_STATE,
        payload: {
            loading: true
        }
    })
    try {
        const categories = yield call(getCategories)
        console.log('category:',categories)
        yield put({
            type: actions.SET_STATE,
            payload: {
                loading:false,
                categories:[...categories.data].map(elt=>elt.categoryName)
            }
        })
    } catch (error) {
        yield put({
            type: actions.SET_STATE,
            payload: {
                loading: false,
            }
        })
    }
}
export function* GET_ITEMS(){
    yield put({
        type: actions.SET_STATE,
        payload: {
            loading: true,
        }
    })
    try {
        const items = yield call(getItems)
        yield put({
            type: actions.SET_STATE,
            payload: {
                loading: false,
                items:[...items.data]
            }
        })
    } catch (e) {
        yield put({
            type: actions.SET_STATE,
            payload: {
                loading: false,
            }
        })
    }
}
export function* GET_BUNDLES(){
    yield put({
        type: actions.SET_STATE,
        payload: {
            loading: true,
        }
    })
    try {
        const bundles = yield call(getBundles)
        yield put({
            type: actions.SET_STATE,
            payload: {
                loading: false,
                bundles:[...bundles.data]
            }
        })
    } catch (e) {
        yield put({
            type: actions.SET_STATE,
            payload: {
                loading: false,
            }
        })
    }
}
export function* GET_PRODUCT({payload}){
    const {id, type, onError}=payload
    yield put({
        type: actions.SET_STATE,
        payload: {
            loading: true,
        }
    })
    try {
        const product = yield call(type==="item" ? getItem : getBundle,id)
        yield put({
            type: actions.SET_STATE,
            payload: {
                product:{...product.data}
            }
        })
    } catch (e) {
        if (onError) yield call(onError)
    }
    yield put({
        type: actions.SET_STATE,
        payload: {
            loading: false,
        }
    })
}

export default function* crudSaga() {
    yield all([
        takeEvery(actions.GET_CATEGORIES,GET_CATEGORIES),
        takeEvery(actions.GET_BUNDLES,GET_BUNDLES),
        takeEvery(actions.GET_ITEMS,GET_ITEMS),
        takeEvery(actions.GET_PRODUCT,GET_PRODUCT),
        GET_CATEGORIES(),
        GET_ITEMS(),
        GET_BUNDLES(),
    ])
}