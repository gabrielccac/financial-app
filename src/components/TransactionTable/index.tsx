import React, { useState } from 'react';
import categoryArrow from '../../assets/categoriesArrow.svg';
import { Container } from './styles';
import { Transaction } from '../Transaction';

interface Transaction {
  name: string;
  status: string;
  value: string;
  category: string;
  type: string;
  date: Date;
}

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
  const transactionList = [
    {
      name: 'Desenvolvimento de Site',
      status: 'Completed',
      value: '1000,00',
      category: 'Development',
      date: new Date(2022, 1, 10),
      type: 'deposit',
    },
    {
      name: 'Curso de Programação',
      status: 'Pending',
      value: '59,99',
      category: 'Education',
      date: new Date(2022, 2, 10),
      type: 'withdraw',
    },
    {
      name: 'Compra do mês',
      status: 'Completed',
      value: '198,99',
      category: 'Alimentação',
      date: new Date(2022, 3, 10),
      type: 'withdraw',
    },
    {
      name: 'Salary',
      status: 'Failed',
      value: '3000,00',
      category: 'Income',
      date: new Date(2022, 4, 10),
      type: 'deposit',
    },
  ];

  // transactionList.map((transaction) => {
  //   const [day, month, year] = transaction.date.split('/');
  //   transaction.date = new Date(`${month}/${day}/${year}`);
  // });

  transactionList.sort(
    (a, b) => parseFloat(a.value.replace(',', '.')) - parseFloat(b.value.replace(',', '.'))
  );

  const [selectedType, setSelectedType] = useState('all');
  const [transactions, setTransactions] = useState<Transaction[]>(transactionList);
  const [dateSort, setDateSort] = useState(false);
  const [valueSort, setValueSort] = useState(false);

  function handleArrow(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.classList.toggle('rotate');
    if (!valueSort) setTransactions((prevTransactionList) => [...prevTransactionList].reverse());
    else setTransactions([...transactionList]);
    setValueSort(!valueSort);
  }

  function handleDateArrow(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.classList.toggle('rotate');
    const dateSorted = [...transactionList].sort((a, b) => a.date.getTime() - b.date.getTime());
    if (!dateSort) setTransactions(dateSorted);
    else setTransactions([...transactionList]);
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
                    return <Transaction transaction={transaction} />;
                  })) ||
                  (selectedType === 'deposit' &&
                    transactions
                      .filter((transaction) => transaction.type === 'deposit')
                      .map((transaction) => {
                        return <Transaction transaction={transaction} />;
                      })) ||
                  (selectedType === 'withdraw' &&
                    transactions
                      .filter((transaction) => transaction.type === 'withdraw')
                      .map((transaction) => {
                        return <Transaction transaction={transaction} />;
                      }))}
              </tbody>
            </table>
          </section>
        </main>
      </Container>
    </>
  );
}
