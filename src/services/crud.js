import Api from './../helpers/api';


export const getItems=()=>{
    return Api.get('/items')
}

export const getBundles=()=>{
    return Api.get('/bundles')
}

export const getItem=(id)=>{
    return Api.get(`/items/${id}`)
}

export const getBundle=(id)=>{
    return Api.get(`/bundles/${id}`)
}

export const getCategories=()=>{
    return Api.get('/category')
}