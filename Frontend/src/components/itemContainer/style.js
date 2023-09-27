import styled from "styled-components";

const ItemContainerStyles = styled.div `

  width: 100%;
  height: 100%;
  z-index: 0;

  .container {
    width: 90%;
    height: 40rem;
    max-height: 85vh;
    margin: 0 auto;
    position: relative;
    background-color: ${(props) => {return props.theme.bgNavBar}};
    box-shadow: 0 1px 5px -2px black};
    margin-top: 2rem;

  }

  .wrapper {
    width: 100%;
    height: 100%;
  }

`;

export default ItemContainerStyles;