import styled from 'styled-components';

export const Container = styled.div`
  .modal-background {
    background-color: hsla(0, 0%, 0%, 0.75);
    backdrop-filter: blur(1px);
    height: 100vh;
    width: 100%;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    place-content: center;
  }

  .hidden {
    display: none;
  }

  .modal {
    position: relative;
  }

  .grid-flow {
    display: grid;
    gap: 1rem;
  }

  button.close-modal {
    background: transparent;
    border: none;
    position: absolute;
    right: 1rem;
    top: 1rem;

    &:hover {
      filter: brightness(1.25);
    }
  }

  h1 {
    font-size: 1.25rem;
    color: black;
    font-weight: var(--fw-medium);
    text-align: center;
    margin-bottom: 1.5rem;
  }

  form {
    width: 30rem;
    border-radius: 1rem;
    background-color: var(--clr-background);
    padding: 3rem;
  }

  label {
    position: relative;
  }

  select {
    appearance: none;
    color: var(--clr-neutral-400);
    position: relative;

    &:focus {
      color: var(--clr-neutral-100);
    }
  }

  img.drop-down {
    width: .75rem;
    position: absolute;
    right: 10px;
    top: 44%;

    transition: transform 0.2s ease-in-out;
  }

  .rotate {
    transform: rotate(180deg);
  }

  input,
  select {
    font-weight: var(--fw-medium);
    padding: 1rem;
    width: 100%;
    background-color: var(--clr-neutral-900);
    border: 1px solid var(--clr-outlines);
    border-radius: 0.75rem;
    transition: all 0.1s ease-in-out;

    &:focus,
    &:active {
      outline: 1px solid #9775fe;
      box-shadow: #d0bfff 0px 0px 0px 3.5px;
      filter: brightness(0.99);
    }

    &:valid {
      color: var(--clr-neutral-100);
    }
  }

  .transaction-btn {
    font-weight: var(--fw-medium);
    display: flex;
    gap: 0.5rem;
    background-color: transparent;
    padding: 1rem 0;
    justify-content: center;
    border: 1px solid var(--clr-outlines);
    border-radius: 0.75rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.95);
    }
  }

  .layout-btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin-top: 1.25rem;
  }

  button.submit {
    font-weight: var(--fw-medium);
    color: #fff;
    background-color: #9775fe;
    width: 100%;
    padding: 1rem;
    margin-top: 1.25rem;
    border: none;
    border-radius: 0.75rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.25);
    }
  }

  .active-deposit {
    background-color: #d3f9d8;
    border: none;
  }

  .active-withdraw {
    background-color: #fee2e2;
    border: none;
  }
`;
