import { StorageKeys } from "@/enums/storage-keys";
import { useStorage } from "@/hooks/use-storage";
import { User } from "@/types/user";
import { createContext, useContext } from "react";
import { AuthContextType } from "./auth-context.types";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useStorage<User | null>(StorageKeys.USER, null);
  const logout = () => {
    setUser(null);
  };
  const isLoggedIn = !!user;
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
