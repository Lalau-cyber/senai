// context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [saldo, setSaldo] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [userType, setUserType] = useState (null)

  // Carregar histórico e saldo salvos
  useEffect(() => {
    const carregarDados = async () => {
      const historicoSalvo = await AsyncStorage.getItem('@historico');
      const saldoSalvo = await AsyncStorage.getItem('@saldo');

      if (historicoSalvo) setHistorico(JSON.parse(historicoSalvo));
      if (saldoSalvo) setSaldo(Number(saldoSalvo));
    };
    carregarDados();
  }, []);

  // Salvar histórico sempre que mudar
  useEffect(() => {
    AsyncStorage.setItem('@historico', JSON.stringify(historico));
  }, [historico]);

  // Salvar saldo sempre que mudar
  useEffect(() => {
    AsyncStorage.setItem('@saldo', saldo.toString());
  }, [saldo]);

    return (
    <AppContext.Provider value={{ user, setUser, 
    saldo, setSaldo, 
    historico, setHistorico,
    userType, setUserType }}>
      {children}
    </AppContext.Provider>
  );
};
