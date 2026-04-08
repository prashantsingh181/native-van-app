import { Review } from "@/types/reviews";

export interface ReviewProps {
  review: Review;
}
export interface ReviewStarsProps {
  rating: number;
  maxRating?: number;
}
