import styled from 'styled-components';


export const Container = styled.header`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto 2rem;
  
  hr {
    border: 1px solid var(--clr-outlines);
    margin: 0 auto;
    width: 100%;
    border-radius: 1px;
  }
`;

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0;

  .flex-group {
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--clr-neutral-300);
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.75rem 1.25rem;
    background: transparent;
    border: none;
    border-radius: 1.75rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.25);
      /* transform: translateY(-5px); */
    }
  }

  button {
    color: #f8f9fa;
    background: linear-gradient(218.4deg, #717DFF 4.59%, #7950F2 94.99%);
  }

  a {
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    filter: brightness(1.25);
  }

  a.links {
    background-color: var(--clr-neutral-900);
    padding: 0.825rem;
    border-radius: 50%;
    transition: filter .2s ease-in-out;

    &:hover {
      filter: brightness(.97);
    }
  }
`;
