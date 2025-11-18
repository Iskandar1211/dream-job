import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

type TransactionItemProps = {
  id: string;
  name: string;
  category: string;
  amount: string;
  date: string;
  icon?: ImageSourcePropType;
};

export function TransactionItem({
  name,
  category,
  amount,
  date,
  icon,
}: TransactionItemProps) {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={styles.leftSection}>
        <View
          style={[styles.iconContainer, { backgroundColor: colors.surface }]}
        >
          <Image source={icon} style={styles.icon} />
        </View>
        <View>
          <ThemedText
            style={[styles.name, { color: colors.text }]}
          >
            {name}
          </ThemedText>
          <ThemedText style={[styles.category, { color: colors.textSecondary }]}>
            {category}
          </ThemedText>
        </View>
      </View>
      <View style={styles.rightSection}>
        <ThemedText style={[styles.amount, { color: colors.text }]}>
          {amount}
        </ThemedText>
        <ThemedText style={[styles.date, { color: colors.textSecondary }]}>
          {date}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  category: {
    fontSize: 14,
    fontWeight: "400",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    fontWeight: "400",
  },
});
