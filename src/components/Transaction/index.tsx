import { Container } from './styles.ts';

interface transactionProps {
  transaction: {
    name: string;
    status: string;
    value: string;
    category: string;
    type: string;
    date: Date;
  };
}

export function Transaction({transaction}: transactionProps) {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  };
  
  return (
    <Container>
      <td>{transaction.name}</td>
      <td><span className={transaction.status}>{transaction.status}</span></td>
      <td>${transaction.value} </td>
      <td>{transaction.category}</td>
      <td>{transaction.date.toLocaleString(undefined, options)}</td>
    </Container>
  );
}
