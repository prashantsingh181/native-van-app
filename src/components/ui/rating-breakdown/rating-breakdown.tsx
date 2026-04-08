import { useStyles } from "@/hooks/useStyles";
import { Text, View } from "react-native";
import {
  generateRatingBarStyles,
  generateRatingBreakdownStyles,
} from "./rating-breakdown.styles";
import {
  RatingBarProps,
  RatingDistributionProps,
} from "./rating-breakdown.types";

export const RatingBreakdown = ({
  ratingBreakdown,
}: Readonly<RatingDistributionProps>) => {
  const styles = useStyles(generateRatingBreakdownStyles);

  const ratingEntries = Object.entries(ratingBreakdown).sort(
    ([ratingA], [ratingB]) => Number(ratingB) - Number(ratingA),
  );
  const totalRatings = ratingEntries.reduce(
    (acc, [_, count]) => acc + count,
    0,
  );

  return (
    <View style={styles.container}>
      {ratingEntries.map((ratingEntry, index) => (
        <RatingBar
          key={`${index}-${ratingEntry[0]}`}
          ratingEntry={ratingEntry}
          totalRatings={totalRatings}
        />
      ))}
    </View>
  );
};

function RatingBar({ ratingEntry, totalRatings }: Readonly<RatingBarProps>) {
  const styles = useStyles(generateRatingBarStyles);
  const percentage = ((ratingEntry[1] / totalRatings) * 100).toFixed();
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.starLabel}>
        {Number(ratingEntry[0]) > 1
          ? `${ratingEntry[0]} stars`
          : `${ratingEntry[0]} star`}
      </Text>
      <View style={styles.ratingLine}>
        <View
          style={[styles.ratingCovered, { width: `${Number(percentage)}%` }]}
        ></View>
      </View>
      <Text style={styles.percentage}>{percentage}%</Text>
    </View>
  );
}
