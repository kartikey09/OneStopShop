import { SET_CART_ITEM, SET_CART_VALUE } from "./ActionTypes"

const initialState = {
    cartQuantity : 0,
    items : []
}

export const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_CART_VALUE : return {
            ...state,
            cartQuantity : state.cartQuantity + action.payload
        }
        
        case SET_CART_ITEM : return {
            ...state,
            items : [...state.items, action.payload]
        }

        default : return state
    }
}