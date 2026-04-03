import { VanTypes } from "@/enums";

export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageKey: number;
  type: VanTypes;
}
