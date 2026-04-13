import { useStyles } from "@/hooks/use-styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";
import {
    generateReviewStarsStyles,
    generateReviewStyles,
} from "./review.styles";
import { ReviewProps, ReviewStarsProps } from "./review.types";

export const Review = ({ review }: Readonly<ReviewProps>) => {
  const styles = useStyles(generateReviewStyles);
  return (
    <View>
      <ReviewStars rating={review.rating} />
      <View style={styles.nameDateContainer}>
        <Text style={styles.author}>{review.author}</Text>
        <Text style={styles.date}>{review.date}</Text>
      </View>
      <Text style={styles.body}>{review.body}</Text>
    </View>
  );
};

function ReviewStars({ rating, maxRating = 5 }: Readonly<ReviewStarsProps>) {
  const styles = useStyles(generateReviewStarsStyles);
  const filledStars = Math.min(Math.round(rating), maxRating);
  const emptyStars = maxRating - filledStars;
  return (
    <View style={styles.container}>
      {new Array(filledStars).fill(null).map((_, index) => (
        <AntDesign
          key={index}
          name="star"
          size={20}
          style={styles.starIconFilled}
        />
      ))}
      {new Array(emptyStars).fill(null).map((_, index) => (
        <AntDesign key={index} name="star" size={20} style={styles.starIcon} />
      ))}
    </View>
  );
}
