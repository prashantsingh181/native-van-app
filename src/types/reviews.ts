export interface Review {
  id: string;
  vanId: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  body: string;
}
