import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import dataReducer from './dataReducer'
import {sortReducer} from './sortReducer'

export const rootReducer = combineReducers({
    data : dataReducer,
    cart : cartReducer,
    sort : sortReducer
})