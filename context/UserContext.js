import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [saldo, setSaldo] = useState(0);
  
  const [historico, setHistorico] = useState([]);
  // Carrega histórico salvo ao iniciar
  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@historico');
        if (jsonValue != null) {
          setHistorico(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log("Erro ao carregar histórico", e);
      }
    };
    carregarHistorico();
  }, []);

  // Salva histórico sempre que mudar
  useEffect(() => {
    const salvarHistorico = async () => {
      try {
        await AsyncStorage.setItem('@historico', JSON.stringify(historico));
      } catch (e) {
        console.log("Erro ao salvar histórico", e);
      }
    };
    salvarHistorico();
  }, [historico]);

  return (
    <AppContext.Provider value={{ user, setUser, historico, setHistorico, userType, setUserType, saldo, setSaldo}}>
      {children}
    </AppContext.Provider>
  );
};
