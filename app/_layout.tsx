import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import ChevronLeft from "@/assets/svg/chevron-left.svg";
import MessageCheck from "@/assets/svg/message-check.svg";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { TouchableOpacity, StyleSheet } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "dark"];
  const router = useRouter();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="notifications"
          options={{
            title: "Payments",

            headerShown: true,
            headerTitle: "Notifications",
            headerTitleStyle: {
              fontSize: 21,
              fontWeight: "500",
            },
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                activeOpacity={0.7}
              >
                <ChevronLeft color={colors.text} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.7}>
                <MessageCheck color={colors.text} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
