import { Tabs } from "expo-router";
import React from "react";

import AlarmClock from "@/assets/svg/alarm-clock.svg";
import ChatTwoBubbles from "@/assets/svg/chat-two-bubbles.svg";
import Home from "@/assets/svg/home.svg";
import Payments from "@/assets/svg/payments.svg";
import PieChart from "@/assets/svg/pie-chart.svg";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarActiveBackgroundColor: colors.background,
        tabBarIconStyle: {
          color: colors.tabIconDefault,
        },
        tabBarInactiveTintColor: colors.text,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => <Payments color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => <AlarmClock color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => <PieChart color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",

          tabBarIcon: ({ color }) => <ChatTwoBubbles color={color} />,
        }}
      />
    </Tabs>
  );
}
