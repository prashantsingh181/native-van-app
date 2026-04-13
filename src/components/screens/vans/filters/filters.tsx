import { VanBadge } from "@/components/ui/van-badge";
import { VanTypes } from "@/enums";
import { useStyles } from "@/hooks/use-styles";
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

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        {vanTypes.map((type) => (
          <VanBadge
            key={type}
            type={type}
            selectable
            isSelected={activeFilters.includes(type)}
            onPress={() => handleSelectFilter(type)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleClearFilters}>
        <Text style={styles.clearFilter}>Clear Filters</Text>
      </TouchableOpacity>
    </View>
  );
};
