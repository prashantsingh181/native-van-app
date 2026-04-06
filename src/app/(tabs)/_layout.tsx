import { CustomTabBar } from "@/components/ui/tab-bar";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";

function renderTabBar(props: BottomTabBarProps) {
  return <CustomTabBar {...props} />;
}

export default function TabsLayout() {
  return (
    <Tabs tabBar={renderTabBar} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="vans" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
