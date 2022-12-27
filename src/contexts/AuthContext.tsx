import React, { createContext, useEffect, useState } from 'react';
import { getDirectusAPI } from '../lib/directus';
import { AuthContextType, User } from './types';

export const AuthContext = createContext<AuthContextType>({
  ...getDirectusAPI(),
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const api = getDirectusAPI();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    return () => {
      console.log(user);
    };
  }, [user]);
  
  const login = async (username: string, password: string) => {
    try {
      const signedInUser = await api.login(username, password);
      setUser(signedInUser);
      return signedInUser
    } catch (e) {
      console.error(e);
    }
  };


  const register = async (username: string, password: string) => {
    try {
      const signedInUser = await api.register(username, password);
      setUser(signedInUser);
      return signedInUser;
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
