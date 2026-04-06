import { ScrollView } from "react-native";
import { Footer } from "./footer";

export const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      {children}
      <Footer />
    </ScrollView>
  );
};
