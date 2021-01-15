export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
  removeProductCart = 'REMOVE_PRODUCT_TO_CART',


}

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  measure: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number
}

export interface ICartState {
  items: ICartItem[],
  failedStockCheck: number[]
}
