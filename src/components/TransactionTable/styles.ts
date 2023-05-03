import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;

  .flex-group {
    display: flex;
    gap: 2.5rem;
    margin-bottom: 0;
    padding: 0;
    border-bottom: 1px solid var(--clr-outlines);
  }

  .table {
    border: 1px solid var(--clr-outlines);
    border-radius: 1rem;
    padding: 1rem 2.5rem 0;
  }

  h2 {
    color: var(--clr-neutral-400);
    font-weight: var(--fw-medium);
    position: relative;
  }

  h2.active {
    color: var(--clr-neutral-100);
  }

  h2.active::after  {
    content: '';
    display: block;
    width: 3rem;
    height: 0.125rem;
    border-radius: 1px;
    background-color: var(--clr-primary);
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(1.625rem);
    top: 1rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  table {
    min-width: 100%;
    border-collapse: collapse;
    /* border-spacing: 1rem 0.5rem; */
    margin: 0 auto;
    margin-top: 1.5rem;
  }

  th {
    text-align: left;
    color: var(--clr-neutral-400);
  }

  td {
    padding: 1.25rem 0;
  }

  tr {
    border-bottom: 1px solid var(--clr-outlines);
  }

  tr:last-child {
    border-bottom: none;
  }

  img {
    width: 0.5rem;
    height: 0.5rem;
  }

  button {
    background: none;
    border: none;

    &:hover {
      filter: brightness(1.25);
    }
  }

  .rotate {
    transform: rotate(180deg);
  }
`;
