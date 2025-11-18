import Delivery from "@/assets/svg/delivery.svg";
import Gift from "@/assets/svg/gift.svg";
import Support from "@/assets/svg/support.svg";
import Travel from "@/assets/svg/travel.svg";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

type QuickAction = {
  id: string;
  icon: React.ReactNode;
  label: string;
};

const actions: QuickAction[] = [
  { id: "1", icon: <Travel />, label: "Travel" },
  { id: "2", icon: <Delivery />, label: "Delivery" },
  { id: "3", icon: <Gift />, label: "Bonuses" },
  { id: "4", icon: <Support />, label: "Support" },
];

export function QuickActions() {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme as keyof typeof Colors];

  return (
    <View style={styles.container}>
      <FlatList
        data={actions}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.actionItem}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer]}>
              {item.icon}
              <ThemedText style={[styles.label, { color: colors.text }]}>
                {item.label}
              </ThemedText>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.actionsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 7.5,
  },
  actionItem: {
    alignItems: "center",
    gap: 8,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: 64,
    height: 64,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
});
