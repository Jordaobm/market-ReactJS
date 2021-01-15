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

export const ShowCase = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  margin:60px 0;
`;

export const ProductImg = styled.div`
  width:500px;
  display:flex;
  align-items:center;
  justify-content:center;
`;
export const ProductDescription = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-left:20px;
`;

export const ProductDescriptionChildren = styled.div`
  max-width:500px;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150.1%;
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

`;

export const ListOfRecentlyAddedProducts = styled.div`
  background-color:#F1F1F1;
  padding:30px 0;
`;

export const TitleRecent = styled.h3`
  position:relative;
  top:-51px;

  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 150.1%;
      /* or 42px */

  letter-spacing: 0.005em;

  color: #363636;
`;

export const GridListProducts = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr;
  grid-gap:28px;
`;
