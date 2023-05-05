import React, { useState } from 'react';

import { Container } from './styles';

import closeModalBtn from '../../assets/closeModal.svg';
import depositIcon from '../../assets/deposit.svg';
import withdrawIcon from '../../assets/withdraw.svg';
import dropDown from '../../assets/dropDown.svg';

const closeModal = () => {
  const modalEl = document.querySelector('.modal-background');
  modalEl?.classList.add('hidden');
};

export function Modal() {
  const [activeButton, setActiveButton] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, buttonName: string) => {
    e.preventDefault();
    setActiveButton(buttonName);
  };

  return (
    <Container>
      <div className='modal-background hidden'>
        <div className='modal'>
          <button
            className='close-modal'
            onClick={closeModal}>
            <img
              src={closeModalBtn}
              alt=''
            />
          </button>
          <form
            action=''
            method='GET'>
            <div className='form grid-flow'>
              <h1>New transaction</h1>
              <label htmlFor='description'>
                <input
                  type='text'
                  placeholder='Description'
                />
              </label>
              <label htmlFor='price'>
                <input
                  type='text'
                  placeholder='Price'
                />
              </label>
              <label htmlFor='category'>
                <select
                  onFocus={() => setIsActive(true)}
                  onBlur={() => setIsActive(false)}
                  name='category'
                  id=''>
                  <option
                    disabled
                    selected
                    value=''>
                    Category
                  </option>
                  <option value=''>Compra</option>
                  <option value=''>Venda</option>
                  <option value=''>Aluguel</option>
                  <option value=''>Salário</option>
                  <option value=''>Freelance</option>
                </select>
                <img
                  className={`drop-down ${isActive ? 'rotate' : ''}`}
                  src={dropDown}
                  alt=''
                />
              </label>
            </div>
            <div className='layout-btns'>
              <button
                onClick={(e) => handleButtonClick(e, 'deposit')}
                className={`transaction-btn ${activeButton === 'deposit' ? 'active-deposit' : ''}`}>
                <img
                  src={depositIcon}
                  alt=''
                />
                Deposit
              </button>
              <button
                onClick={(e) => handleButtonClick(e, 'withdraw')}
                className={`transaction-btn ${
                  activeButton === 'withdraw' ? 'active-withdraw' : ''
                }`}>
                <img
                  src={withdrawIcon}
                  alt=''
                />
                Withdraw
              </button>
            </div>
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
