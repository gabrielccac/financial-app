import styled from 'styled-components';

export const Container = styled.header`
  hr {
    border: 1px solid var(--clr-outlines);
    margin: 0 auto;
    max-width: 1200px;
    width: 80%;
    border-radius: 1px;
  }
`;

export const Content = styled.div`

  max-width: 1200px;
  width: 80%;
  margin: 1.25rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .flex-group {
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.75rem 1.25rem;
    background: transparent;
    border: 1px solid #dbdbdb;
    border-radius: 1.75rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.25);
    }
  }


  button {
    color: #f8f9fa;
    background: linear-gradient(218.4deg, #505fff 4.59%, #4424be 94.99%);
  }
`;
