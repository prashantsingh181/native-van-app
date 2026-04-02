import { Layout } from "@/components/layout";
import { VansScreen } from "@/components/screens/vans";
import { View } from "react-native";

export default function Vans() {
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <VansScreen />
      </View>
    </Layout>
  );
}
