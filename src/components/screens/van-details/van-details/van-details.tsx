import { VanBadge } from "@/components/ui/van-badge";
import { useStyles } from "@/hooks/useStyles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { generateVanDetailsStyles } from "./van-details.styles";
import { VanDetailsProps } from "./van-details.types";

export const VanDetails = ({ van }: Readonly<VanDetailsProps>) => {
  const styles = useStyles(generateVanDetailsStyles);
  return (
    <View>
      <Image source={van.imageKey} style={styles.image} />
      <View>
        <VanBadge type={van.type} />
        <Text style={styles.name}>{van.name}</Text>
        <Text>
          <Text style={styles.price}>${van.price}</Text>
          <Text style={styles.perDayLabel}>/day</Text>
        </Text>
        <Text style={styles.description}>{van.description}</Text>
        <TouchableOpacity>
          <Text style={styles.rentBtn}>Rent this van</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
