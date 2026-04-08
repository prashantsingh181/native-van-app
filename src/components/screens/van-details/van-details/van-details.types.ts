import { VanRatingSummary } from "@/types/ratings";
import { Review } from "@/types/reviews";
import { Van } from "@/types/vans";

export interface VanDetailsProps {
  van: Van & { ratings: VanRatingSummary | undefined; reviews: Review[] };
}
