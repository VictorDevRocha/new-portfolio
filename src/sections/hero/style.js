import styled from "styled-components";

export const ContainerHero = styled.div`
  background-image: url("./hero/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;

  section.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 350px;

    button {
      border: 1px solid #fff;
      background: transparent;
    }
  }

  .content h1 {
    margin: 4px 0 8px;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;

    a:last-of-type button {
      height: 100%;
    }
  }

  @media (max-width: 1224px) {
    section.container {
      padding: 80px 20px 120px;
    }
  }

  @media (max-width: 1150px) {
    background-color: #fff;
    background-image: none;

    section.container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
      gap: 2rem;

      .image_content img {
        max-width: 300px;
        width: 100%;
      }

      h5 {
        color: var(--brown-light);
      }

      h1 {
        color: var(--brown);
      }

      h4 {
        color: var(--brown);
      }
    }
  }

  @media (max-width: 768px) {
    height: calc(90vh);
    section.container {
      padding: 60px 20px 0;
    }
  }
`;
