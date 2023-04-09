import styled from "styled-components";

export const ContainerSkills = styled.section`
  padding: 88px 0;

  div.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .top_skills {
      text-align: center;

      h2 {
        margin-top: 4px;
      }
    }

    .mid_skills {
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: center;
      align-items: center;

      .title_skills {
        width: 355px;
        padding: 1rem 0;
        text-align: center;
        border-bottom: 2px solid var(--brown);
        margin: 0 auto 2rem;
      }

      .cards_softs {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;

        .card_soft {
          padding: 24px;
          border: 2px solid var(--brown);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-radius: 8px;
          width: 140px;

          img {
            margin-bottom: 4px;
          }
        }
      }

      .icons_softs {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
  }

  @media (max-width: 450px) {
    padding: 60px 20px;

    .title_skills {
      width: 100% !important;
      max-width: 355px !important;
    }
  }
`;
