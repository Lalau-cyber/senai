// context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);

  const [user, setUser] = useState({
    id: null,
    nome: "",
    matricula: "",
    saldo: 0,
    historico: []
  });

  const registrarCompra = (item, preco) => {
    setUser((prev) => {
      const novoUser = {
        ...prev,
        saldo: (prev.saldo ?? 0) - preco,
        historico: [
          ...(prev.historico ?? []),
          { data: new Date().toISOString().split('T')[0], item, valor: -preco }
        ]
      };
      salvarDados(novoUser);
      return novoUser;
    });
  };

  const recargaSaldo = (valor) => {
    setUser((prev) => {
      const novoUser = {
        ...prev,
        saldo: (prev.saldo ?? 0) + valor,
        historico: [
          ...(prev.historico ?? []),
          { data: new Date().toISOString().split('T')[0], item: 'Recarga', valor }
        ]
      };
      salvarDados(novoUser);
      return novoUser;
    });
  };

  // ✅ Função auxiliar para salvar com defaults
  const salvarDados = async (dadosUser) => {
    const userComDefaults = {
      ...dadosUser,
      saldo: dadosUser.saldo ?? 0,
      historico: dadosUser.historico ?? []
    };
    await AsyncStorage.setItem('@user', JSON.stringify(userComDefaults));
  };

  // ✅ Carregar dados salvos e normalizar
  useEffect(() => {
    const carregarDados = async () => {
      const userSalvo = await AsyncStorage.getItem('@user');
      if (userSalvo) {
        const parsed = JSON.parse(userSalvo);
        setUser({
          ...parsed,
          saldo: parsed.saldo ?? 0,
          historico: parsed.historico ?? []
        });
      }
    };
    carregarDados();
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, userType, setUserType, recargaSaldo, registrarCompra }}>
      {children}
    </AppContext.Provider>
  );
};
