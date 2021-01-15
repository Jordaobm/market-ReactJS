import styled, { css } from 'styled-components';

interface CardProductProps {
  available: boolean;
}

export const CardProduct = styled.div<CardProductProps>`
  width:100%;
  display:flex;
  flex-direction:column;
  padding:20px;
  border:2px solid #F1F1F1;
  border-radius:10px;

  ${(props) => props.available && css`
    border:2px solid #F23016;
  `}
`;

export const NotAvailable = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:10px;

  svg {
     margin-right:8px;
  }

  p {
    color:#F23016;
  }
`;

export const CardImg = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:260px;

  img {
    width:150px;
  }
`;

export const CardDescription = styled.div`
  width:100%;
  margin:15px 0;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150.1%;
    /* identical to box height, or 24px */

    letter-spacing: 0.005em;

    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150.1%;
    /* identical to box height, or 21px */

    letter-spacing: 0.005em;

    color: #000000;
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150.1%;
    /* identical to box height, or 24px */

    letter-spacing: 0.005em;

    color: #000000;
  }
`;
export const ButtonAddProductToCart = styled.div`
  width:100%;
  height:60px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  border:2px solid #363636;
  border-radius:5px;
  transition:0.2s;
  padding:15px;
  background-color:#363636;



  p {
    margin:0 15px;
    color:white;
    text-align:center;
  }

  svg {
    color:white;
  }

  :hover {
    background-color:#242323;
  }

`;
