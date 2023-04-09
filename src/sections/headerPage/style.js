import styled from "styled-components";

export const ContainerHeader = styled.div`
  background: var(--brown);
  padding: 1rem 0;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      border: 1px solid #fff;
    }
  }

  .links ul {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .mobile_click {
    display: flex;
    flex-direction: column;
    gap: 12px;
    display: none;

    div {
      width: 32px;
      background-color: #fff;
      height: 2px;
    }
  }

  .active {
    display: block !important;
  }

  .mobile {
    position: fixed;
    top: 0;
    margin: 0 auto;
    background-color: #fff;
    height: 100vh;
    width: 100vw;
    display: none;
  }

  .close_menu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid var(--brown);
    position: absolute;
    right: 25px;
    top: 25px;
    padding-left: 2px;
    padding-top: 2px;
  }

  .links_mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }

  .links_mobile ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .links_mobile ul li a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 130px;
    height: 40px;
    text-align: center;
    border: 2px solid var(--brown);
    color: var(--brown);
  }

  .button_link_mobile {
    margin-top: 2rem;
  }

  @media (max-width: 1224px) {
    nav {
      padding: 0 20px;
    }
  }

  @media (max-width: 768px) {
    .button_header {
      display: none;
    }

    .links {
      display: none;
    }

    .mobile_click {
      display: flex;
    }
  }
`;
