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
    position: absolute;
    font-size: 1.25rem;
    bottom: 0;
    right: 0;
    padding: 1rem;
  }

`;

export default ChartStyles;