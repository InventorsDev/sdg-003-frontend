import * as actionTypes from "./shopping-types";
const INITIAL_STATE = {
    product: [], //id, name, qty, price, img
    cart: [],
    currentItem: null
}
const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action){
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        default:
            return state
    }
}

export default shopReducer 



