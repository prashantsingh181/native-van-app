import { VanTypes } from "@/enums";
import { useStyles } from "@/hooks/useStyles";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { generateVanCardStyles } from "./van-card.styles";
import { VanCardProps } from "./van-card.types";

export const VanCard = ({ van }: Readonly<VanCardProps>) => {
  const styles = useStyles(generateVanCardStyles);
  const badgeStyle: StyleProp<TextStyle> = [styles.typeBadge];
  switch (van.type) {
    case VanTypes.Simple:
      badgeStyle.push(styles.simpleTypeBadge);
      break;
    case VanTypes.Luxury:
      badgeStyle.push(styles.luxuryTypeBadge);
      break;
    case VanTypes.Rugged:
      badgeStyle.push(styles.ruggedTypeBadge);
      break;
  }
  return (
    <Link asChild href={`/vans/${van.id}`}>
      <TouchableOpacity style={styles.card}>
        <Image source={van.imageKey} style={styles.image} />
        <View style={styles.info}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name} numberOfLines={1}>
              {van.name}
            </Text>
            <Text style={badgeStyle}>{van.type}</Text>
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
