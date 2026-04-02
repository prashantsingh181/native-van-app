import { Layout } from "@/components/layout";
import { Hero, Mission } from "@/components/screens/home";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Layout>
        <Hero />
        <Mission />
      </Layout>
    </ScrollView>
  );
}
