import { Review } from "@/components/ui/review";
import { useStyles } from "@/hooks/useStyles";
import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { generateReviewsStyles } from "./reviews.styles";
import { ReviewsProps } from "./reviews.types";

export const Reviews = ({ reviews }: Readonly<ReviewsProps>) => {
  const styles = useStyles(generateReviewsStyles);
  return (
    <View>
      <Text style={styles.heading}>Reviews({reviews.length})</Text>
      <View style={styles.container}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </View>
    </View>
  );
};
