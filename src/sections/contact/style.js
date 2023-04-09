import styled from "styled-components";

export const ContainerContact = styled.section`
  padding: 88px 0;

  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .left_contact {
      max-width: 496px;
      width: 100%;

      .socials {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        a button {
          padding: 12px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }

    .right_contact {
      max-width: 496px;
      width: 100%;

      form {
        width: 100%;
        padding: 32px;
        border: 1px solid var(--brown);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-radius: 8px;

        h3 {
          text-align: center;
        }

        button {
          width: 100%;
          padding: 1rem;
          text-align: center;
          background-color: var(--brown);
        }

        input {
          padding: 10px 1rem;
          font-size: 1rem;
          background: var(--gray06);
          border: none;
          width: 100%;
          border-radius: 4px;
        }

        input:focus-visible {
          outline: 1px solid var(--brown);
        }

        input::placeholder {
          color: var(--gray02);
        }
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 60px 20px;

    div.container {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
