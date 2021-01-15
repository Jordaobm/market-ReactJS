import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, ICartState } from './types';

let INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
}

const localCart = localStorage.getItem('@Market:cart');
const localNotAvailable = localStorage.getItem('@Market:notAvailable')

if (localCart) {
  if (localNotAvailable) {
    const localCartItems = JSON.parse(localCart);
    const localFailedStockCheck = JSON.parse(localNotAvailable)
    INITIAL_STATE = {
      items: localCartItems,
      failedStockCheck: localFailedStockCheck,
    }
  } else {
    const localCartItems = JSON.parse(localCart);
    INITIAL_STATE = {
      items: localCartItems,
      failedStockCheck: [],
    }
  }
}
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess:

        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex((item) =>
          item.product.id === product.id);

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }

        localStorage.setItem('@Market:cart', JSON.stringify(draft.items))

        break;

      case ActionTypes.addProductToCartFailure:
        const nostockprodutcs = draft.failedStockCheck.includes(action.payload.productId)

        if (!nostockprodutcs) {
          draft.failedStockCheck.push(action.payload.productId);
          localStorage.setItem('@Market:notAvailable', JSON.stringify(draft.failedStockCheck))
        }
        break;
      case ActionTypes.removeProductCart:
        const produto = action.payload.product;

        const findIndexProduct = draft.items.findIndex((item) =>
          item.product.id === produto.id)

        if (findIndexProduct >= 0) {
          if (draft.items[findIndexProduct].quantity > 0) {
            draft.items[findIndexProduct].quantity--;
            draft.failedStockCheck.splice(findIndexProduct, 1)
          }
          if (draft.items[findIndexProduct].quantity === 0) {
            draft.items.splice(findIndexProduct, 1);
          }
        }
        localStorage.setItem('@Market:cart', JSON.stringify(draft.items))
        localStorage.setItem('@Market:notAvailable', JSON.stringify(draft.failedStockCheck))

        break;
      default:
        return draft;
    }
  });
}

export default cart;
