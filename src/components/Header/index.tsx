import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import {
  Links,
  Logo,
  Navigate,
  NumberProductsToCart
} from './styles';

const Header: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items)
  return (
    <Navigate>
      <Logo>
        <Link to="/">Market</Link>
      </Logo>
      <Links>
        <Link to="/">Browse</Link>
        <Link to="/">News</Link>
        <Link to="/">Bulk</Link>
        <Link to="/">Pantry</Link>
        <Link to="/">Help</Link>
        <a href="/cart">
          <FiShoppingCart size={25} />
          {cart.length > 0 && <NumberProductsToCart>
            <span>{cart.length}</span>
          </NumberProductsToCart>}
        </a>
      </Links>
    </Navigate>
  )
}

export default Header;
