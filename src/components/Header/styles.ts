import styled from 'styled-components';

export const Navigate = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;

`;

export const Logo = styled.div`
  a {
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;

    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150.1%;
    /* identical to box height, or 24px */

    letter-spacing: 0.005em;

    color: #363636;
    margin:0px 15.5px;
  }
`;

export const Links = styled.div`
  display:flex;
  align-items:center;

  a {
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150.1%;
    /* identical to box height, or 24px */

    letter-spacing: 0.005em;

    color: #363636;
    margin:0px 15.5px;
  }
`;

export const NumberProductsToCart = styled.div`
  position:relative;
  top:10px;
  left:-10px;
  display:flex;
  justify-content:center;
  justify-content:center;
  color:white;

  background-color:red;
  width:20px;
  height:20px;
  border-radius:50%;

  span {
    font-size:11px;
  }
`;
