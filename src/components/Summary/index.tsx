import { DataBox } from '../DataBoxes';
import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';
import { useContext } from 'react';

import arrowDown from '../../assets/arrowDown.svg';
import arrowUp from '../../assets/arrowUp.svg';
import coins from '../../assets/coins.svg';
import bag from '../../assets/bag.svg';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  const depositSize = transactions.filter(transaction => transaction.type === 'deposit').length;
  const withdrawSize = transactions.filter(transaction => transaction.type === 'withdraw').length;

  const allDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return acc + parseFloat(transaction.value.replace(',', '.'));
    }
    return acc;
  }, 0.00);

  const allWithdraws = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
      return acc + parseFloat(transaction.value.replace(',', '.'));
    }
    return acc;
  }, 0.00);

  return (
    <>
      <Container>
        {/* <TransactionsContext.Consumer>
          {(data) => {
            console.log(data);

            return (<p>ok</p>);
          }}
        </TransactionsContext.Consumer> */}
        <h2>SUMMARY</h2>
        <div className='grid-flow'>
          <DataBox
            icon={arrowDown}
            title='Deposits'
            value={`${allDeposits.toFixed(2).replace('.', ',')}` || ' Pending'} 
          />
          <DataBox
            icon={arrowUp}
            title='Withdraws'
            value={`${allWithdraws.toFixed(2).replace('.', ',')}`  || ' Pending'}
          />
          <DataBox
            icon={coins}
            title='Avg. Deposits'
            value={`${(allDeposits / depositSize).toFixed(2).replace('.', ',')}` || ' Pending'}
          />
          <DataBox
            icon={bag}
            title='Avg. Withdraws'
            value={`${(allWithdraws / withdrawSize).toFixed(2).replace('.', ',')}` || ' Pending'}
          />
        </div>
      </Container>
    </>
  );
}
