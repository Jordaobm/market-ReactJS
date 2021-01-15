import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  max-width:1120px;

  margin:0 auto;
`;

export const ContainerHeader = styled.div`
  width:100vw;
  max-width:1120px;

  margin:0 auto;
  padding:20px 0;
`;

export const ListProductsInCart = styled.div`
  margin:60px auto;
  width:700px;
`;

export const MyCart = styled.div`
  width:100%;
  height:77vh;

  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const MyCartText = styled.h3`
  margin-left: 15.5px;
  font-size: 70px;
  font-weight: 200;
`;

export const MyCartImg = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  img {
    width:500px;
  }

  a {
    text-decoration: none;
    margin: 10px 0;
    color: #666666;
    font-size: 10px;
  }
`;

export const ProductLine = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:30px;

  img {
    width:50px;
    margin-right:20px;
  }
`;

export const ProductDescribe = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  div {

    h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    /* identical to box height, or 36px */

    letter-spacing: 0.005em;

    color: #363636;
    }
      p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 155.1%;
      /* or 22px */


      color: #363636;
    }
  }




`;

export const ProductPrice = styled.div`
  width:50%;

  display:flex;
  justify-content:center;
  align-items:center;


  h4 {
    font-size:25px;
  }

  h5 {
    margin-left: 20px;
    color: red;
    font-size: 15px;
    font-weight: 400;
  }

  p {
    font-size: 23px;
    font-weight: 400;
  }

`;

export const AlterQuantityProductsInCart = styled.div`
  margin-left:10px;
  width:20px;
  height:24px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  margin-right:47px;

  svg {
    :hover {
      color:green;
    }
  }

  svg + svg {
    :hover {
      color:red;
    }
  }
`;

export const TotalProducts = styled.div`
  padding:10px 30px 10px 30px;
  display:flex;
  align-items:center;
`;

export const NumberTotal = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:center;

  p {
    font-size: 25px;
    margin-left: 39px;
    color: green;
    font-weight: 600;
  }
`;

export const Total = styled.div`
  width:50%;

  p {
    font-size: 25px;
    color: red;
    font-weight:600;
  }

`;
