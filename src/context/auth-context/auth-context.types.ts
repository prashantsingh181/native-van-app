import { User } from "@/types/user";
import React from "react";

export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
