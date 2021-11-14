import { createContext, useContext, useEffect, useState } from "react";
import { init, logIn as authLogin, logOut as authLogout } from "../lib/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    init((user) => {
      setUser(user);
    });
  }, []);

  function logIn() {
    authLogin((user) => {
      setUser(user);
    });
  }
  function logOut() {
    authLogout(() => {
      setUser(undefined);
    });
  }

  const contextValue = { user, logIn, logOut };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export function Auth() {
  return useContext(AuthContext);
}
