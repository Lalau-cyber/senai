import React, {createContext, useState }  from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [userType, setUserType] = useState(null);

    return (
        <AppContext.Provider value={{ userType, setUserType}}>
            {children}
        </AppContext.Provider>
    );
};

