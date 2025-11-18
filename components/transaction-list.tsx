import { ThemedText } from "@/components/themed-text";
import { TransactionItem } from "@/components/transaction-item";
import { Colors } from "@/constants/theme";
import {
  ImageSourcePropType,
  SectionList,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedView } from "./themed-view";

type Transaction = {
  id: string;
  name: string;
  category: string;
  amount: string;
  date: string;
  icon?: ImageSourcePropType;
  avatar?: ImageSourcePropType;
};

type TransactionGroup = {
  date: string;
  transactions: Transaction[];
};

type TransactionListProps = {
  groups: TransactionGroup[];
};

export function TransactionList({ groups }: TransactionListProps) {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme];
  return (
    <ThemedView style={styles.container}>
      <SectionList
        sections={groups.map((group: TransactionGroup) => ({
          title: group.date,
          data: group.transactions,
        }))}
        renderItem={({ item }) => <TransactionItem {...item} />}
        renderSectionHeader={({ section }) => (
          <ThemedText style={[styles.dateHeader, { color: colors.text }]}>
            {section.title}
          </ThemedText>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  listContent: {
    marginTop: 24,
    gap: 4,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: "500",
    color: "#808080",
    marginBottom: 10,
  },
});
