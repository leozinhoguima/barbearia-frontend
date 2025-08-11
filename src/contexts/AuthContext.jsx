import { createContext, useContext, useState, useEffect } from "react";

// Criar o contexto
const AuthContext = createContext();

// Provider que envolve toda a aplicação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Carrega usuário salvo no localStorage ao iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Função de login (simples para teste)
  const login = (username) => {
    const userData = { name: username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acessar o contexto
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
