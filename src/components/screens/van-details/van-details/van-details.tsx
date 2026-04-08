import { VanBadge } from "@/components/ui/van-badge";
import { useStyles } from "@/hooks/useStyles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ratings } from "../ratings";
import { Reviews } from "../reviews";
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
        {van.ratings && <Ratings {...van.ratings} />}
        {van.reviews && van.reviews.length > 0 && (
          <Reviews reviews={van.reviews} />
        )}
      </View>
    </View>
  );
};
