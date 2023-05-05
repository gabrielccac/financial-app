import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: max-content;
  width: 100%;
  margin: 1.25rem auto;
  padding: 1.25rem;
  border: 1px solid var(--clr-outlines);
  border-radius: 1rem;

  img {
    color: var(--clr-primary);
    background-color: #F3F0FF;
    padding: 1rem;
    border-radius: .875rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: var(--fw-bold);
  }

  .dollar-sign {
    font-size: .875rem;
    font-weight: var(--fw-medium);
    color: var(--clr-neutral-300);
  }

  .flex {
    display: flex;
    align-items: center;
    gap: .125rem;
  }

  .flex-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: start;
  }
`;
