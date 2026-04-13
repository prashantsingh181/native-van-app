import { RatingBreakdown } from "@/components/ui/rating-breakdown";
import { useStyles } from "@/hooks/use-styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";
import { generateRatingsStyles } from "./ratings.styles";
import { RatingsProps } from "./ratings.types";

export const Ratings = ({
  averageRating,
  totalReviews,
  ratingBreakdown,
}: Readonly<RatingsProps>) => {
  const styles = useStyles(generateRatingsStyles);

  return (
    <View>
      <Text style={styles.heading}>Ratings</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{averageRating}</Text>
        <AntDesign name="star" size={24} style={styles.starIcon} />
        <Text style={styles.totalReviews}>({totalReviews})</Text>
      </View>
      <RatingBreakdown ratingBreakdown={ratingBreakdown} />
    </View>
  );
};
