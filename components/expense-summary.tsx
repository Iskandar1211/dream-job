import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { StyleSheet, View } from "react-native";

export function ExpenseSummary() {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>
          <ThemedText
            style={{ fontSize: 21, fontWeight: "500", color: colors.text }}
          >
            Expenses in{" "}
          </ThemedText>
          <ThemedText style={[styles.title, { color: colors.orange.primary }]}>
            June
          </ThemedText>
        </ThemedText>
        <ThemedText style={[styles.total, { color: colors.textSecondary }]}>
          $5,091
        </ThemedText>
      </View>
      <View style={styles.barsContainer}>
        {[
          colors.orange.dark,
          colors.orange.primary,
          colors.orange.medium,
          colors.orange.light,
        ].map((color, index) => (
          <View
            key={index}
            style={[
              styles.bar,
              {
                backgroundColor: color,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  total: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  barsContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  bar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
  },
});
