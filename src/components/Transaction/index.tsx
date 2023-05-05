import { Container } from './styles.ts';

interface transactionProps {
  transaction: {
    description: string;
    status: string;
    value: string;
    category: string;
    type: string;
    createdAt: Date;
  };
}

export function Transaction({ transaction }: transactionProps) {
  // const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

  return (
    <Container>
      <td>{transaction.description}</td>
      <td>
        <span className={transaction.status}>{transaction.status}</span>
      </td>
      <td>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Number(transaction.value.replace(',', '.')))}
      </td>
      <td>{transaction.category}</td>
      <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
    </Container>
  );
}
