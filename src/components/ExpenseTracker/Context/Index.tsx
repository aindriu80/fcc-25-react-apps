import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: 0,
    description: '',
  });

  const [value, setValue] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransations, setAllTransactions] = useState([]);

  function handleFormSubmit(currentFormData) {
    if (!currentFormData.description || !currentFormData.amount) return;

    setAllTransactions([
      ...allTransations,
      { ...currentFormData, id: Date.now() },
    ]);
  }
  console.log(allTransations);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        value,
        setValue,
        allTransations,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
