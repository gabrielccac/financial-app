import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import { Modal } from '../Modal';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
      <Modal />
    </Container>
  );
}