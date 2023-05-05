import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  font-weight: var(--fw-medium);

  .flex-group {
    margin-left: 1rem;
    display: flex;
    gap: 2.5rem;
    margin-bottom: 0;
    padding: 0;

  }

  .flex-flow {
    display: flex;
    gap: .25rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  .table {
    border: 1px solid var(--clr-outlines);
    border-radius: 1rem;
    padding: 1rem 2.5rem 1rem;
  }

  a {
    color: var(--clr-neutral-400);
    font-weight: var(--fw-medium);
    margin-bottom: 1.5rem;
    position: relative;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: brightness(1.25);
    }
  }

  a.active {
    color: var(--clr-neutral-100);

    &:after {
      content: '';
      display: block;
      width: 3rem;
      height: 0.125rem;
      border-radius: 1px;
      background-color: var(--clr-primary);
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(1.625rem);
      top: 1.125rem;
    }
  }

  table {
    min-width: 100%;
    /* border-collapse: collapse; */
    /* border-spacing: 1rem 0.5rem; */
    margin: 0 auto;
  }

  th {
    border-top: 1px solid var(--clr-outlines);
    padding-top: 1rem;
    text-align: left;
    color: var(--clr-neutral-400);
  }

  td {
    padding: 1.25rem 0;
    width: 10rem;
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
