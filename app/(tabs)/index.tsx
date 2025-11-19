import Plus from "@/assets/svg/plus.svg";

import { AccountCard } from "@/components/account-card";
import { ExpenseSummary } from "@/components/expense-summary";
import { QuickActions } from "@/components/quick-actions";
import { ThemedView } from "@/components/themed-view";
import { TransactionList } from "@/components/transaction-list";
import { Colors } from "@/constants/theme";
import { ACCOUNT_CARDS, TRANSACTION_GROUPS } from "@/constants/transaction";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme as keyof typeof Colors];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        {/* Quick Actions */}
        <QuickActions />

        {/* Account Cards */}
        <FlatList
          data={ACCOUNT_CARDS}
          renderItem={({ item }) => (
            <AccountCard
              type={item.type}
              balance={item.balance}
              cardNumber={item.cardNumber}
            />
          )}
          keyExtractor={(item) => item.cardNumber}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsSection}
          ListFooterComponent={() => (
            <TouchableOpacity activeOpacity={0.7}>
              <View
                style={[
                  styles.addCardButton,
                  { backgroundColor: colors.surface },
                ]}
              >
                <Plus />
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Expense Summary */}
        <ExpenseSummary />
      </View>
      {/* Transactions */}
      <TransactionList groups={TRANSACTION_GROUPS} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  safeArea: {
    flex: 1,
  },
  content: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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

  addCardButton: {
    width: 40,
    height: 98,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
