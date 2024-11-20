import { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';
import { Navigate } from "react-router-dom";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (credentials: { email: string; password: string }) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => Promise.resolve(false),
  logout: () => { },
});


function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn');
    return savedIsLoggedIn === 'true';
  });

  const login = async (_credentials: { email: string; password: string }) => {
    // Simulate successful login
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export { AuthContext, AuthProvider, ProtectedRoute };