import styled from "styled-components";

export const NavStyles = styled.nav`

.teste {
    color: red;
}
.nav-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    gap: 0.5rem;
    background-color: ${(props) => {return props.theme.bgNavBar}};;
  }
  
  .nav-logo-container {
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }
  
  .nav-options {
    padding: 1rem;
    box-sizing: border-box;
    list-style: none;
    margin-bottom: 15rem;
  }
  
  .nav-content {
    width: 100%;
    align-items: center;
  }
  
  .nav-items {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: default;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .list-items {
    width: 100%;
    align-items: center;
    gap: 0.25rem;
  }
  
  .list-Link {
    width: 100%;
    height: 1.5rem;
    font-size: 1.25rem;
    padding: 0.35rem 0;
    justify-content: center;
    position: relative;
  }
  
  .list-active {
    border-radius: 0.3rem;
    background-color: var(--active-list-bg);
  }
  
  .link-text {
    width: 70%;
    position: absolute;
    left: 2rem;
    color: black;
    text-decoration: none;
  }
  
  .list-title {
    width: 85%;
    gap: 0.75rem;
  }
  
  .icon-active {
    width: 1rem;
    height: 1rem;
    background-image: url(/src/assets/navIcons/Active.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  
  .icon-inactive {
    width: 1rem;
    height: 1.75rem;
    background-image: url(/src/assets/navIcons/Inactive.svg);
    background-repeat: no-repeat;
    background-size: 100% 55%;
    background-position: center;
  }
  
  .nav-bottom-decoration {
    width: 100%;
    height: 15rem;
    position: absolute;
    bottom: 0rem;
    background-image: url(/src/img/AppHub/Rectangle\ 28.svg), url(/src/img/AppHub/Rectangle\ 27.svg);
    background-repeat: no-repeat, no-repeat;
    background-position: bottom;
    background-size: contain, contain;
    z-index: 999;
  }
  


`;