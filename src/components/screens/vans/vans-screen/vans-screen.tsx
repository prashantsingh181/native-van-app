import { useStyles } from "@/hooks/useStyles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Filters } from "../filters";
import { generateVansScreenStyles } from "./vans-screen.styles";

export const VansScreen = () => {
  const styles = useStyles(generateVansScreenStyles);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Explore our van options</Text>
      <Filters />
    </SafeAreaView>
  );
};
