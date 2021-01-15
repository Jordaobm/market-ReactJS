import React, { useEffect, useState } from 'react';
import {
  Container,
  ContainerHeader,
  GridListProducts,
  ListOfRecentlyAddedProducts,
  ProductDescription,
  ProductDescriptionChildren,
  ProductImg,
  ShowCase,
  TitleRecent
} from './styled';
import product from '../../assets/product.svg';
import CartProduct from '../../components/CartProduct';
import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      const { data } = response;
      setProducts(data);
    })
  }, []);

  return (
    <>
      <ContainerHeader>

        <Header />

        <ShowCase>
          <ProductImg>
            <img src={product} alt="Produto em destaque" />
          </ProductImg>
          <ProductDescription>
            <ProductDescriptionChildren>
              <h3>COFFEE SS20 COLLECTION</h3>
              <p>
                The latest release of authentic,
                American-grown coffee comes from Bakersfield,
                California. This limited release has been in high
                demand due to the surge in brewing activity across
                the country. 100% proceeds goes to local businesses.
              </p>
            </ProductDescriptionChildren>
          </ProductDescription>
        </ShowCase>
      </ContainerHeader>

      <ListOfRecentlyAddedProducts>
        <Container>
          <TitleRecent>RECENT DROPS</TitleRecent>
          <GridListProducts>

            {products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}

          </GridListProducts>
        </Container>
      </ListOfRecentlyAddedProducts>
    </>
  )
}

export default Home;
