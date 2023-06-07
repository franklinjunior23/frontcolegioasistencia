import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
 const auth = useContext(AuthContext)
 return auth
};

export const Authprovider = ({ children }) => {
  const [isAuthenticated, setisAuthenticated] = useState(window.localStorage.getItem('Seccion_docente')??false);

  const login = (datos) => {
    window.localStorage.setItem('Seccion_docente',datos)
    setisAuthenticated(true)
  };

  const logout = () => {
    window.localStorage.removeItem('Seccion_docente')
    setisAuthenticated(false)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
