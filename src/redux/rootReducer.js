import { combineReducers } from 'redux';
import shopReducer from "./shopping/shopping-reducer"

const rootReducers = combineReducers({
    shop: shopReducer
})

export default rootReducers;