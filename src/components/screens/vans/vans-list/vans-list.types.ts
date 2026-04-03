import { Van } from "@/types/vans";

export interface VansListProps {
  vans: Van[] | null;
  loading: boolean;
  error: Error | null;
}
