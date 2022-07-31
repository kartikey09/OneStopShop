import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, SET_CART_ITEM, SET_CART_VALUE, SORT_BY_ORDER } from "./ActionTypes"
import exportData from '../dataSource'

export const fetchDataRequest = ()=>{
    return {
        type : GET_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data) =>{
    return {
        type : GET_DATA_SUCCESS,
        payload : data
    }
}

export const fetchDataFailure = (error)=>{
    return {
        type : GET_DATA_FAILURE,
        payload : error
    }
}

export const setCartVal = (val)=>{
    return{
        type : SET_CART_VALUE,
        payload : val
    }
}

export const setCartItem = (item)=>{
    return{
        type : SET_CART_ITEM,
        payload : item
    }
}

export const setSortOrder = (order) =>{
    return {
        type : SORT_BY_ORDER,
        payload : order
    }
}

export const fetchData = () =>{
    return (dispatch)=>{
        dispatch(fetchDataRequest());
        let data = exportData();
        if(data.length <= 0){
            dispatch(fetchDataFailure('cannot fetch data at the moment'));
        } else {
            dispatch(fetchDataSuccess(data));
        }
    }
}