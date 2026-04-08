import { vanRatingSummaries } from "@/data/ratings";
import { reviews } from "@/data/reviews";
import { vans } from "@/data/vans";
import { VanTypes } from "@/enums";

class Api {
  async fakeDataFetch<T>(
    data: T,
    delay: number = 1000,
    errorRate: number = 0,
  ): Promise<T> {
    const randomNumber = Math.random();
    if (randomNumber < errorRate) {
      throw new Error("An error occurred");
    }
    return new Promise((resolve) => setTimeout(() => resolve(data), delay));
  }

  getVans = (filter?: { type: VanTypes[] }) => {
    if (!filter || filter.type.length === 0) {
      return this.fakeDataFetch(vans);
    }
    const filteredVans = vans.filter((van) => filter.type.includes(van.type));
    return this.fakeDataFetch(filteredVans);
  };

  getVanDetails = (id: string) => {
    const van = vans.find((van) => van.id === id);
    const vanRatings = vanRatingSummaries.find((rating) => rating.vanId === id);
    const vanReviews = reviews.filter((review) => review.vanId === id);
    if (!van) throw new Error(`Van with id "${id}" not found`);
    return this.fakeDataFetch({
      ...van,
      ratings: vanRatings,
      reviews: vanReviews,
    });
  };
}

export const api = new Api();
