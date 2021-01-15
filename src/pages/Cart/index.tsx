import React, { useCallback } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { IState } from '../../store';
import { addProductToCartRequest, removeProductToCart } from '../../store/modules/cart/actions';
import { ICartItem, IProduct } from '../../store/modules/cart/types';
import { formatValue } from '../../utils/format';
import {
  AlterQuantityProductsInCart,
  Container,
  ContainerHeader,
  ListProductsInCart,
  MyCart,
  MyCartImg,
  MyCartText,
  NumberTotal,
  ProductDescribe,
  ProductLine,
  ProductPrice,
  Total,
  TotalProducts
} from './styles';
import cartVector from '../../assets/cartVector.jpg'

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items)
  let totalValue = 0;

  const dispatch = useDispatch();

  const handleAddProduct = useCallback((product: IProduct) => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch]);

  const mustRemoveProduct = useCallback((product: IProduct) => {
    dispatch(removeProductToCart(product))
  }, [dispatch]);

  return (
    <>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <Container>
        <MyCart>
          <MyCartText>
            My Cart
          </MyCartText>
          <MyCartImg>
            <img src={cartVector} alt='vector de carrinho' />
            <a href='https://br.freepik.com/vetores/pessoas'>Pessoas vetor criado por rawpixel.com - br.freepik.com</a>
          </MyCartImg>
        </MyCart>

        <ListProductsInCart>
          {cart.map((cart) => {
            totalValue += cart.product.price * cart.quantity
            return (
              <ProductLine key={cart.product.id}>
                <ProductDescribe>
                  <img src={cart.product.img} alt={cart.product.name} />
                  <div>
                    <h3>{cart.product.name}</h3>
                    <p>{cart.product.measure}</p>
                  </div>
                </ProductDescribe>
                <ProductPrice>
                  <p>{cart.quantity}</p>
                  <AlterQuantityProductsInCart>
                    <FiArrowUp size={10} onClick={() => handleAddProduct(cart.product)} />
                    <FiArrowDown size={10} onClick={() => mustRemoveProduct(cart.product)} />
                  </AlterQuantityProductsInCart>
                  <h4>{formatValue((cart.product.price * cart.quantity))}</h4>
                  <h5>{formatValue(cart.product.price)}</h5>
                </ProductPrice>
              </ProductLine>
            )
          })}

          {cart.length > 0 && <TotalProducts>
            <Total>
              <p>Total</p>
            </Total>
            <NumberTotal>
              <p>{formatValue(totalValue)}</p>
            </NumberTotal>
          </TotalProducts>}
        </ListProductsInCart>
      </Container>
    </>
  )
}

export default Cart;
