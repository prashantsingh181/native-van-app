import { useStyles } from "@/hooks/use-styles";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { VanBadge } from "../van-badge";
import { generateVanCardStyles } from "./van-card.styles";
import { VanCardProps } from "./van-card.types";

export const VanCard = ({ van }: Readonly<VanCardProps>) => {
  const styles = useStyles(generateVanCardStyles);

  return (
    <Link asChild href={`/vans/${van.id}`}>
      <TouchableOpacity style={styles.card}>
        <Image source={van.imageKey} style={styles.image} />
        <View style={styles.info}>
          <View style={{ flex: 1, gap: 10 }}>
            <Text style={styles.name} numberOfLines={1}>
              {van.name}
            </Text>
            <VanBadge type={van.type} selectable={false} />
          </View>
          {van.price !== 0 && (
            <View>
              <Text style={styles.price}>${van.price}</Text>
              <Text style={styles.perDayLabel}>/day</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};
