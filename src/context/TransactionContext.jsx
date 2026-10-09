import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [history, setHistory] = useState(() => {
    try {
      const savedTransactions = localStorage.getItem("thazzpedia_history");
      return savedTransactions ? JSON.parse(savedTransactions) : [];
    } catch (error) {
      console.error("Gagal memuat data dari database lokal:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("thazzpedia_history", JSON.stringify(history));
    } catch (error) {
      console.error("Gagal menyimpan data ke database lokal:", error);
    }
  }, [history]);

  const addTransaction = (transaction) => {
    setHistory((prevHistory) => [transaction, ...prevHistory]);
  };

  return (
    <TransactionContext.Provider value={{ history, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}