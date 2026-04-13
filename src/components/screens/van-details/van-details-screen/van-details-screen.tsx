import { useFetch } from "@/hooks/use-fetch";
import { useStyles } from "@/hooks/use-styles";
import { api } from "@/services/api";
import { colors } from "@/tokens/colors/semantics";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { VanDetails } from "../van-details";
import { generateVanDetailsScreenStyles } from "./van-details-screen.styles";

export const VanDetailsScreen = () => {
  const styles = useStyles(generateVanDetailsScreenStyles);
  const { id: vanId } = useLocalSearchParams();
  const router = useRouter();

  const {
    loading,
    error,
    data: van,
  } = useFetch(() => api.getVanDetails(vanId as string), true);

  let content;
  if (loading) {
    content = <ActivityIndicator size="large" color={colors.bgBrandEmphasis} />;
  } else if (error) {
    content = <Text>Error loading vans: {error.message}</Text>;
  } else {
    content = van && <VanDetails van={van} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={router.back}>
        <AntDesign name="arrow-left" size={14} style={styles.backBtnIcon} />
        <Text style={styles.backBtnText}>Back to all vans</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>{content}</View>
    </SafeAreaView>
  );
};
