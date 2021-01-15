import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrAdd } from 'react-icons/gr';
import { FcCancel } from 'react-icons/fc';
import {
  ButtonAddProductToCart,
  CardDescription,
  CardImg,
  CardProduct,
  NotAvailable
} from './styles';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { formatValue } from '../../utils/format';
import { IState } from '../../store';

interface CartProductProps {
  product: IProduct;
}
const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch])

  const hasFailedStockCheck = useSelector<IState, boolean>(
    (state) => state.cart.failedStockCheck.includes(product.id)
  );

  if (product) {
    return (
      <CardProduct available={hasFailedStockCheck}>
        <CardImg>
          <img src={product.img} alt={product.name} />
        </CardImg>
        <CardDescription>
          <h3>{product.name}</h3>
          <p>{product.measure}</p>
          <h4>{formatValue(product.price)}</h4>
        </CardDescription>
        {!hasFailedStockCheck ? <ButtonAddProductToCart
          onClick={() => handleAddProductToCart(product)}
        >
          <GrAdd size={20} />
          <p>Adicionar ao carrinho</p>
        </ButtonAddProductToCart>
          : <NotAvailable>
            <FcCancel size={20} />
            <p>Indisponível</p>
          </NotAvailable>}
      </CardProduct>
    )
  }
  return <p />
}

export default CartProduct;
