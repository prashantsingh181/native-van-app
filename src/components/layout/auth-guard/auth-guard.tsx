import { useAuth } from "@/context";
import { Redirect } from "expo-router";

export const AuthGuard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }
  return <>{children}</>;
};
