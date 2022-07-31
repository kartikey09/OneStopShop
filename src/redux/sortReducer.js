import { SORT_BY_ORDER } from "./ActionTypes"

const initialState = {
    order : 'default'
}

export const sortReducer = (state = initialState, action)=>{
    switch(action.type){
        case SORT_BY_ORDER : return {
            ...state,
            order : action.payload
        }
        default : return state;
    }
}