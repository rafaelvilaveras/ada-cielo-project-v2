import styled from "styled-components";

const ChartStyles = styled.div `

  width: 100%;
  height: 100%;
  position: relative;

  .chart-container {
    min-width: 100%;
    height: 100%;
  }

  .chart-items {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
  }

`;

export default ChartStyles;