import { VanTypes } from "@/enums";
import { useStyles } from "@/hooks/useStyles";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { generateFilterStyles } from "./filters.styles";
import { FitlersProps } from "./filters.types";

export const Filters = ({
  activeFilters,
  handleSelectFilter,
  handleClearFilters,
}: Readonly<FitlersProps>) => {
  const styles = useStyles(generateFilterStyles);
  const vanTypes = Object.values(VanTypes);

  function getActiveFilterStyles(type: VanTypes) {
    switch (type) {
      case VanTypes.Simple:
        return styles.activeSimpleFilter;
      case VanTypes.Rugged:
        return styles.activeRuggedFilter;
      case VanTypes.Luxury:
        return styles.activeLuxuryFilter;
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {vanTypes.map((type) => (
          <TouchableOpacity key={type} onPress={() => handleSelectFilter(type)}>
            <Text
              style={[
                styles.filter,
                activeFilters.includes(type) && getActiveFilterStyles(type),
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleClearFilters}>
        <Text style={styles.clearFilter}>Clear Filters</Text>
      </TouchableOpacity>
    </View>
  );
};
