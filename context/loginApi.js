import { createContext, useContext, useState} from "react";

    const UserContext = createContext();
    
    export const UseProvider = ({ children }) => {
    
    const [users, setUsers] = useState([]);
    
    const adduser = (user) => {
    
    }; setUsers((prevUsers) => [...prevUsers, user]);
    
    const removeUser = (userId) => {
    
    }; setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    
    return (
    
    <UserContext.Provider value={{ users, addUser, removeUser }}>
    
    {children}
    
    </UserContext.Provider>
    
    )};
    
    export const useUserContext = () => useContext(UserContext);