import styled from "styled-components";

export const AppHubStyle = styled.main`

  .ah-container {
    width: 100%;
    height: fit-content;
    align-self: center;
    justify-self: center;
  }
  
  .ah-nav-wrapper {
    min-width: 14.5rem;
    position: relative;
  }
  
  .ah-showNav {
    display: none;
  }
  
  .ah-nav {
    min-width: 220px;
    max-width: 277px;
    height: 100%;
    background-color: ${(props) => {return props.theme.bgNavBar}};
  }
  
  .ah-content {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 750px) {
    .ah-nav-hidden {
      position: absolute;
      left: -220px;
    }
  
    .ah-nav-visible {
      position: absolute;
      left: 0;
      z-index: 99;
    }
  
    .ah-showNav {
      position: absolute;
      display: flex;
      padding: 0.75rem 0.75rem 0.75rem 0.25rem;
      border-radius: 0 2rem 2rem 0;
      text-align: end;
      top: 3.25rem;
      right: -1.55rem;
      background-color: ${(props) => {return props.theme.bgNavBar}};
      cursor: pointer;
    }
  }


`;