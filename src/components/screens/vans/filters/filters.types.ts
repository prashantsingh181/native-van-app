import { VanTypes } from "@/enums";

export interface FitlersProps {
  activeFilters: VanTypes[];
  handleSelectFilter: (type: VanTypes) => void;
  handleClearFilters: () => void;
}
