import styled from "styled-components";

export const ContainerAbout = styled.section`
  padding: 120px 0;
  background-color: var(--gray06);

  div.container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .left_about {
      max-width: 600px;
    }

    .left_about h2 {
      padding: 4px 0 8px;
    }

    .left_about p:last-of-type {
      margin-top: 8px;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 2rem;

      button {
        border-radius: 4px;
      }

      .button_download {
        padding: 12px 24px;
      }

      .buttons_socials {
        display: flex;
        align-items: center;
        gap: 1rem;

        .icon_social {
          padding: 12px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }
    }

    .right_about img {
      width: 100%;
      max-width: 496px;
    }
  }

  @media (max-width: 1130px) {
    padding: 60px 20px;

    div.container {
      justify-content: center;
    }
  }

  @media (max-width: 450px) {
    .buttons {
      justify-content: center;
    }

    div.container .left_about p:nth-child(3),
    div.container .left_about p:nth-child(4) {
      font-size: 14px;
    }

    .right_about {
      display: none;
    }
  }
`;
