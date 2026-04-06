import { VanTypes } from "@/enums";

export interface SimpleVanBadgeProps {
  type: VanTypes;
  selectable?: false;
}

export interface SelectableVanBadgeProps {
  type: VanTypes;
  selectable: true;
  isSelected: boolean;
  onPress: () => void;
}

export type VanBadgeProps = SimpleVanBadgeProps | SelectableVanBadgeProps;
