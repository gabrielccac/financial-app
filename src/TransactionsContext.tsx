import { createContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  description: string;
  status: string;
  value: string;
  category: string;
  type: string;
  createdAt: Date;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

// We need a provider to wrap our components that will use the context
// As this context might be used by multiple components, we need to wrap them all
// So we can create a new component to wrap the hole application with this context
const localHost = `http://localhost:${window.location.port}/api/transactions`;

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api(localHost).then((response) => {
      const transactionList = response.data.transactions.map((transaction: Transaction) => {
        return {
          ...transaction,
          createdAt: new Date(transaction.createdAt),
        };
      });
      setTransactions(transactionList);
    });
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});
    const { transaction } = response.data; 

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions, setTransactions, createTransaction}}>{children}</TransactionsContext.Provider>
  );
}
