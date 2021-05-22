import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

const addProductToCart = (state, product) => {
  const copy = [...state.cart];
  const currItemIdx = copy.findIndex((i) => i.product.id === product.id);

  if (currItemIdx < 0) {
    copy.push({ product, quantity: 1 });
  } else {
    const copyItem = { ...copy[currItemIdx] };
    copyItem.quantity++;
    copy[currItemIdx] = copyItem;

    return { ...state, cart: copy };
  }
};

const RemoveProductFromCart = (state, product) => {
  const copy = [...state.cart];
  const currItemIdx = copy.findIndex((i) => i.product.id === product.id);

  if (currItemIdx > 0) {
   const curItem = {...copy[currItemIdx]};
   curItem.quantity--;

   if(curItem.quantity <= 0){
    copy.splice(currItemIdx, 1)
   } else{
    copy[currItemIdx] = curItem;
    return {...state.cart, copy}
   }
  } else {
    const copyItem = { ...copy[currItemIdx] };
    copyItem.quantity++;
    copy[currItemIdx] = copyItem;

    return { ...state, cart:copy };
  }
};

const ClearCart = (state) => {
  return {
    ...state,
    cart: []
  }
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProductToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return RemoveProductFromCart(state, action.payload);
    case CLEAR_CART:
      return ClearCart(state);
    default:
      return state;
  }
};

