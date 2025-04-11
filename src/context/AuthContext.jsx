import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [authenticate, setAuthenticate] = useState(false);
    return <AuthContext.Provider value={{ authenticate, setAuthenticate }}>{children}</AuthContext.Provider>;
};
const useAuthData = () => useContext(AuthContext);
export { AuthProvider, useAuthData };
