import { VanTypes } from "@/enums";
import { useStyles } from "@/hooks/use-styles";
import { StyleProp, Text, TextStyle, TouchableOpacity } from "react-native";
import { generateVanBadgeStyles } from "./van-badge.styles";
import { VanBadgeProps } from "./van-badge.types";

export const VanBadge = (props: Readonly<VanBadgeProps>) => {
  const styles = useStyles(generateVanBadgeStyles);

  const badgeStyle: StyleProp<TextStyle> = [styles.typeBadge];

  function getSelectedBadgeStyles(type: VanTypes) {
    switch (type) {
      case VanTypes.Simple:
        return styles.simpleTypeBadge;
      case VanTypes.Rugged:
        return styles.ruggedTypeBadge;
      case VanTypes.Luxury:
        return styles.luxuryTypeBadge;
      default:
        return null;
    }
  }

  if (props.selectable) {
    return (
      <TouchableOpacity key={props.type} onPress={props.onPress}>
        <Text
          style={[
            styles.typeBadge,
            props.isSelected && getSelectedBadgeStyles(props.type),
          ]}
        >
          {props.type}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <Text style={[badgeStyle, getSelectedBadgeStyles(props.type)]}>
        {props.type}
      </Text>
    );
  }
};
