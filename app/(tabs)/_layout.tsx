import { Tabs } from "expo-router";
import React from "react";
import QrCode from "@/assets/svg/qr-code.svg";
import AlarmClock from "@/assets/svg/alarm-clock.svg";
import ChatTwoBubbles from "@/assets/svg/chat-two-bubbles.svg";
import Home from "@/assets/svg/home.svg";
import Payments from "@/assets/svg/payments.svg";
import PieChart from "@/assets/svg/pie-chart.svg";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ThemedText } from "@/components/themed-text";
import { TouchableOpacity, StyleSheet } from "react-native";
import Avatar from "@/assets/svg/avatar.svg";
import ChevronRight from "@/assets/svg/chevron-right.svg";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveTintColor: colors.tabIconDefault,
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
          headerShown: true,
          headerTitle: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.profileSection} activeOpacity={0.7}>
              <Avatar />
              <ThemedText style={[styles.profileName, { color: colors.text }]}>
                Charlotte
              </ThemedText>
              <ChevronRight />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.qrCodeSection} activeOpacity={0.7}>
              <QrCode />
            </TouchableOpacity>
          ),
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

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  profileName: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardsSection: {
    marginVertical: 24,
    gap: 12,
  },
  qrCodeSection: {
    marginRight: 16,
  },
});
