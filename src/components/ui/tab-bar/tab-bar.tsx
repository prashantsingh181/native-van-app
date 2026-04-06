import { useStyles } from "@/hooks/useStyles";
import { colors } from "@/tokens/colors/semantics";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { Pressable, Text, View, type LayoutChangeEvent } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { generateTabBarStyles, PILL_INSET_H } from "./tab-bar.styles";
import { TabConfig } from "./tab-bar.types";

const TAB_CONFIG: Record<string, TabConfig> = {
  index: { label: "Home", icon: "home-outline", activeIcon: "home" },
  vans: { label: "Vans", icon: "car-outline", activeIcon: "car" },
  profile: { label: "Profile", icon: "person-outline", activeIcon: "person" },
};

export function CustomTabBar({
  state,
  navigation,
}: Readonly<BottomTabBarProps>) {
  const insets = useSafeAreaInsets();
  const translateX = useSharedValue(0);
  const tabWidth = useSharedValue(0);
  const tabWidthRef = useRef(0);
  const hasLayout = useSharedValue(false);
  const styles = useStyles(generateTabBarStyles);

  const onContainerLayout = (e: LayoutChangeEvent) => {
    const tw = e.nativeEvent.layout.width / state.routes.length;
    tabWidthRef.current = tw;
    tabWidth.value = tw;
    translateX.value = state.index * tw;
    hasLayout.value = true;
  };

  useEffect(() => {
    if (tabWidthRef.current > 0) {
      translateX.value = withSpring(state.index * tabWidthRef.current, {
        damping: 18,
        stiffness: 180,
        mass: 0.8,
      });
    }
  }, [state.index, translateX]);

  const pillStyle = useAnimatedStyle(() => ({
    opacity: hasLayout.value ? 1 : 0,
    width: tabWidth.value - PILL_INSET_H * 2,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={[
        styles.wrapper,
        { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 },
      ]}
    >
      <View style={styles.container} onLayout={onContainerLayout}>
        <Animated.View style={[styles.pill, pillStyle]} pointerEvents="none" />

        {state.routes.map((route, index) => {
          const isActive = state.index === index;
          const config = TAB_CONFIG[route.name] ?? {
            label: route.name,
            icon: "ellipse-outline" as keyof typeof Ionicons.glyphMap,
            activeIcon: "ellipse" as keyof typeof Ionicons.glyphMap,
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={styles.tabItem}
              accessibilityRole="button"
              accessibilityLabel={config.label}
              accessibilityState={{ selected: isActive }}
            >
              <Ionicons
                name={isActive ? config.activeIcon : config.icon}
                size={22}
                color={isActive ? colors.textInverted : colors.textMuted}
              />
              <Text
                style={[
                  styles.label,
                  {
                    color: isActive ? colors.textInverted : colors.textMuted,
                  },
                ]}
              >
                {config.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
