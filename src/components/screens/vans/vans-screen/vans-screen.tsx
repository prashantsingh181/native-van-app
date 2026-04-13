import { VanTypes } from "@/enums";
import { useFetch } from "@/hooks/use-fetch";
import { useStyles } from "@/hooks/use-styles";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Filters } from "../filters";
import { VansList } from "../vans-list";
import { generateVansScreenStyles } from "./vans-screen.styles";

export const VansScreen = () => {
  const styles = useStyles(generateVansScreenStyles);
  const [activeFilters, setActiveFilters] = useState<VanTypes[]>([]);
  const {
    data: vans,
    loading,
    error,
    fetchData,
  } = useFetch(() => api.getVans({ type: activeFilters }));

  useEffect(() => {
    fetchData();
  }, [activeFilters]);

  function handleSelectFilter(type: VanTypes) {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(type)
        ? prevFilters.filter((filterType) => filterType !== type)
        : [...prevFilters, type],
    );
  }

  function handleClearFilters() {
    setActiveFilters([]);
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.heading}>Explore our van options</Text>
      <Filters
        activeFilters={activeFilters}
        handleSelectFilter={handleSelectFilter}
        handleClearFilters={handleClearFilters}
      />
      <View style={{ flex: 1, marginTop: 30, marginBottom: 20 }}>
        <VansList vans={vans} loading={loading} error={error} />
      </View>
    </SafeAreaView>
  );
};
