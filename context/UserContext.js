import  {createContext, useState }  from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [userType, setUserType] = useState(null);
    const [user, setUser] = useState(null);
    const [saldo, setSaldo] = useState(0);
    const [historico, setHistorico] = useState([]);


    return (
        <AppContext.Provider value={{ userType, setUserType, user, setUser, saldo, setSaldo, historico, setHistorico}}>
            {children}
        </AppContext.Provider>
    );
};

