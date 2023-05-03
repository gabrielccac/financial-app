import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 1.25rem;

  .grid-flow {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    /* flex-wrap: wrap; */
  }

  @media (max-width: 1180px) {
    .grid-flow {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid-flow > div:nth-child(1),
    .grid-flow > div:nth-child(2) {
      margin-bottom: 0;
    }
    .grid-flow > div:nth-child(3),
    .grid-flow > div:nth-child(4) {
      margin-top: 0;
    }
  }
`;
