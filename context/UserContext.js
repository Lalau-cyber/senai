import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [userType, setUserType] = useState('aluno');

  const setUserTypeWrapper = (type) => setUserType(type);

  // derived saldo and helpers to keep older code working
  const saldo = user?.saldo ?? 0;
  const setSaldo = (newSaldo) => {
    setUser((prev) => (prev ? { ...prev, saldo: newSaldo } : { saldo: newSaldo }));
  };

  const recargaSaldo = (amount) => {
    setUser((prev) => {
      const updated = prev ? { ...prev, saldo: (prev.saldo ?? 0) + amount } : { saldo: amount };
      return updated;
    });
    const entry = { id: `${Date.now()}-recarga`, tipo: 'Recarga', item: 'Recarga', data: new Date().toLocaleString(), valor: amount };
    setHistorico((h) => [...h, entry]);
  };

  const addHistorico = (entry) => {
    setHistorico((h) => [...h, entry]);
  };

  const value = {
    user,
    setUser,
    historico,
    setHistorico,
    userType,
    setUserType: setUserTypeWrapper,
    // backward-compatible helpers
    saldo,
    setSaldo,
    recargaSaldo,
    addHistorico,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
