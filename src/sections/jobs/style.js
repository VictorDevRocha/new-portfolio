import styled from "styled-components";

export const ContainerJobs = styled.section`
  padding: 88px 0;
  background-color: var(--gray06);

  div.container {
    .top_jobs {
      text-align: center;
      margin-bottom: 2rem;
    }

    .bottom_jobs {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slider_jobs {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .text_content_slider {
      max-width: 355px;
    }

    .slider_jobs img {
      max-width: 600px;
      width: 100%;
    }

    .link a {
      text-decoration: underline;
      color: blueviolet;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--brown) !important;
    fill: var(--brown) !important;
    stroke: var(--brown) !important;
  }

  .swiper-pagination-bullet {
    background-color: var(--brown);
  }

  .swiper-pagination {
    position: static !important;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;
