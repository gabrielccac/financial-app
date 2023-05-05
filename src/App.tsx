// import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer, Model } from 'miragejs';
import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          description: 'Freelance de website',
          status: 'Completed',
          value: '6000,00',
          category: 'Development',
          type: 'deposit',
          createdAt: new Date('2022-05-23'),
        },
        {
          description: 'Rent',
          status: 'Pending',
          value: '1100,00',
          category: 'Housing',
          type: 'withdraw',
          createdAt: new Date('2022-01-14'),
        }
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

export function App() {
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </TransactionsProvider>
  );
}

