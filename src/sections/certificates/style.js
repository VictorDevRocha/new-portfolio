import styled from "styled-components";

export const ContainerCertificates = styled.section`
  background-image: url("./certificates/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 88px 0;

  div.container {
    gap: 2rem;
  }

  .bottom_certificates button {
    border: 1px solid var(--white);
    background: transparent;
    margin: 2rem auto 0;
  }

  .top_certificates {
    text-align: center;
    margin-bottom: 2rem;
  }

  .mid_certificates {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .left_certificates {
    max-width: 403px;
    width: 100%;
  }

  .right_certificates {
    max-width: 477px;
    width: 100%;
  }

  .free {
    max-width: 403px;
    width: 100%;
    padding: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--white);
    border-radius: 8px;
    height: 100%;

    .links_free {
      width: 100%;
    }

    .links_free ul {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .links_free ul li {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .dev {
    max-width: 477px;
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--white);
    border-radius: 8px;

    h3 {
      text-align: center;
    }

    .divider {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 450px) {
    span {
      font-size: 14px !important;
    }

    .free {
      padding: 1rem;
    }

    .dev {
      padding: 1rem;
    }

    .dev h5 {
      font-size: 14px;
      flex-direction: column;
      align-items: start;
    }

    .dev h6 {
      font-size: 13px;
      font-weight: 700;
    }

    .dev p {
      font-size: 12px;
    }
  }
`;
