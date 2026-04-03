import { VanCard } from "@/components/ui/van-card/van-card";
import { colors } from "@/tokens/colors/semantics";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { VansListProps } from "./vans-list.types";

export const VansList = ({ vans, loading, error }: Readonly<VansListProps>) => {
  let content;
  if (loading) {
    content = <ActivityIndicator size="large" color={colors.bgBrandEmphasis} />;
  } else if (error) {
    content = <Text>Error loading vans: {error.message}</Text>;
  } else {
    content = (
      <FlatList
        data={vans}
        renderItem={({ item }) => <VanCard van={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 16 }}
      />
    );
  }
  return <View style={{ marginTop: 30, flex: 1 }}>{content}</View>;
};
