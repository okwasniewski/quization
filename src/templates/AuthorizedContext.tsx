import React, { createContext, useContext, useState } from 'react';
import { User } from 'firebase/auth';

interface AuthContextValues {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthContextProvider');
  }
  return context;
};

const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [user, setUser] = useState<User | null>(null);

  const values = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthContextProvider };
