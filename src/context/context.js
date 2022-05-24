import { createContext, useState } from 'react';
const UserContext = createContext();

function ContextProvider({ children }) {
    const [user, setUser] = useState("Tiger");
    const [count, setCount] = useState(0);

    const value = { user, setUser, count, setCount };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export { ContextProvider, UserContext }