import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { Transaction } from '../Transaction';
import { TransactionsContext } from '../../TransactionsContext';

import categoryArrow from '../../assets/categoriesArrow.svg';

// function handleTypeClick(e: React.MouseEvent<HTMLAnchorElement>) {
//   if (e.currentTarget.classList.contains('deposit')) {
//     const withdrawBtn = document.querySelector('.withdraw');
//     const allBtn = document.querySelector('.all');
//     withdrawBtn?.classList.remove('active');
//     allBtn?.classList.remove('active');
//   } else if (e.currentTarget.classList.contains('withdraw')){
//     const depositBtn = document.querySelector('.deposit');
//     const allBtn = document.querySelector('.all');
//     depositBtn?.classList.remove('active');
//     allBtn?.classList.remove('active');
//   } else {
//     const depositBtn = document.querySelector('.deposit');
//     const withdrawBtn = document.querySelector('.withdraw');
//     depositBtn?.classList.remove('active');
//     withdrawBtn?.classList.remove('active');
//   }
//   e.currentTarget.classList.add('active');
// }

// Props to be added to transaction {name, status, value, category, transactionDate}: Transaction

export function TransactionTable() {
  const { transactions, setTransactions } = useContext(TransactionsContext);

  const [selectedType, setSelectedType] = useState('all');
  const [dateSort, setDateSort] = useState(false);
  const [valueSort, setValueSort] = useState(false);

  // Melhorar a lógica de ordenação

  function handleArrow(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.classList.toggle('rotate');
    if (!valueSort)
      setTransactions(
        [...transactions].sort(
          (a, b) => parseFloat(a.value.replace(',', '.')) - parseFloat(b.value.replace(',', '.'))
        )
      );
    else setTransactions([...transactions].reverse());
    setValueSort(!valueSort);
  }

  function handleDateArrow(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.classList.toggle('rotate');
    const dateSorted = [...transactions].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
    if (!dateSort) setTransactions([...dateSorted].reverse());
    else setTransactions(dateSorted);
    setDateSort(!dateSort);
  }

  const handleClick = (typeName: string) => {
    setSelectedType(typeName);
  };

  return (
    <>
      <Container>
        <h2>RECENT TRANSACTIONS</h2>
        <main className='table'>
          <section className='table-header'>
            <div className='flex-group'>
              <a
                onClick={() => handleClick('all')}
                className={(selectedType === 'all' && 'active') || 'all '}>
                All
              </a>
              <a
                onClick={() => handleClick('deposit')}
                className={(selectedType === 'deposit' && 'active') || 'deposit'}>
                Deposits
              </a>
              <a
                onClick={() => handleClick('withdraw')}
                className={(selectedType === 'withdraw' && 'active') || 'withdraw'}>
                Withdraws
              </a>
            </div>
          </section>
          <section className='table-body'>
            <table className='content-table'>
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Status</th>
                  <th>
                    <div className='flex-flow'>
                      Value{' '}
                      <button onClick={handleArrow}>
                        <img
                          src={categoryArrow}
                          alt=''
                          className='catArrow'
                        />
                      </button>
                    </div>
                  </th>
                  <th>Category </th>
                  <th>
                    <div className='flex-flow'>
                      Transaction Date{' '}
                      <button onClick={handleDateArrow}>
                        <img
                          src={categoryArrow}
                          alt=''
                          className='catArrow'
                        />
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {(selectedType === 'all' &&
                  transactions.map((transaction) => {
                    return (
                      <Transaction
                        transaction={transaction}
                        key={transaction.description}
                      />
                    );
                  })) ||
                  (selectedType === 'deposit' &&
                    transactions
                      .filter((transaction) => transaction.type === 'deposit')
                      .map((transaction) => {
                        return (
                          <Transaction
                            transaction={transaction}
                            key={transaction.description}
                          />
                        );
                      })) ||
                  (selectedType === 'withdraw' &&
                    transactions
                      .filter((transaction) => transaction.type === 'withdraw')
                      .map((transaction) => {
                        return (
                          <Transaction
                            transaction={transaction}
                            key={transaction.description}
                          />
                        );
                      }))}
              </tbody>
            </table>
          </section>
        </main>
      </Container>
    </>
  );
}
