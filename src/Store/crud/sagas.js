import { put, call, takeEvery, all } from 'redux-saga/effects'
import { getBundles, getItems, getCategories } from '../../services/crud'
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

export default function* crudSaga() {
    yield all([
        takeEvery(actions.GET_CATEGORIES,GET_CATEGORIES),
        takeEvery(actions.GET_BUNDLES,GET_BUNDLES),
        takeEvery(actions.GET_ITEMS,GET_ITEMS),
        GET_CATEGORIES(),
        GET_ITEMS(),
        GET_BUNDLES()
    ])
}