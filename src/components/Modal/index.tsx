import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

import closeModalBtn from '../../assets/closeModal.svg';
import depositIcon from '../../assets/deposit.svg';
import withdrawIcon from '../../assets/withdraw.svg';
import dropDown from '../../assets/dropDown.svg';

const closeModal = () => {
  const modalEl = document.querySelector('.modal-background');
  modalEl?.classList.add('hidden');
};

export function Modal() {
  const {createTransaction} = useContext(TransactionsContext);

  const [type, setType] = useState('deposit');
  const [isActive, setIsActive] = useState(false);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const statuses = ['Pending', 'Completed', 'Failed'];
  const status = statuses[Math.floor(Math.random() * statuses.length)];


  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, buttonName: string) => {
    e.preventDefault();
    setType(buttonName);
  };

  // OnSubmit function
  async function handleCreateNewTransaction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await createTransaction({
      description,
      status,
      value,
      category,
      type,
    });

    setDescription('');
    setValue('');
    setCategory('');
    setType('deposit');
    closeModal();
  }

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
            method='GET'
            onSubmit={handleCreateNewTransaction}>
            <div className='form grid-flow'>
              <h1>New transaction</h1>
              <label htmlFor='description'>
                <input
                  type='text'
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <label htmlFor='price'>
                <input
                  type='text'
                  placeholder='Value'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </label>
              <label htmlFor='category'>
                <select
                  onFocus={() => setIsActive(true)}
                  onBlur={() => setIsActive(false)}
                  name='category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}>
                  <option
                    value=''
                    hidden>
                    Select a Category
                  </option>
                  <option value='Compra'>Compra</option>
                  <option value='Venda'>Venda</option>
                  <option value='Aluguel'>Aluguel</option>
                  <option value='Salario'>Salário</option>
                  <option value='Freelance'>Freelance</option>
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
                className={`transaction-btn ${type === 'deposit' ? 'active-deposit' : ''}`}>
                <img
                  src={depositIcon}
                  alt=''
                />
                Deposit
              </button>
              <button
                onClick={(e) => handleButtonClick(e, 'withdraw')}
                className={`transaction-btn ${type === 'withdraw' ? 'active-withdraw' : ''}`}>
                <img
                  src={withdrawIcon}
                  alt=''
                />
                Withdraw
              </button>
            </div>
            <button className='submit'>Register</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
