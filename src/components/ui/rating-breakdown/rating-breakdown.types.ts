import { VanRatingSummary } from "@/types/ratings";

export interface RatingDistributionProps {
  ratingBreakdown: VanRatingSummary["ratingBreakdown"];
}

export interface RatingBarProps {
  ratingEntry: [string, number];
  totalRatings: number;
}
