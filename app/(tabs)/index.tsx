import Avatar from "@/assets/svg/avatar.svg";
import ChevronRight from "@/assets/svg/chevron-right.svg";
import Plus from "@/assets/svg/plus.svg";
import QrCode from "@/assets/svg/qr-code.svg";
import { AccountCard } from "@/components/account-card";
import { ExpenseSummary } from "@/components/expense-summary";
import { QuickActions } from "@/components/quick-actions";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TransactionList } from "@/components/transaction-list";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type T_AccountCard = {
  type: "Debit" | "Virtual";
  balance: string;
  cardNumber: string;
};

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme as keyof typeof Colors];
  const insets = useSafeAreaInsets();
  const bottomInset = insets.bottom;
  // Mock data
  const transactionGroups = [
    {
      date: "Today",
      transactions: [
        {
          id: "1",
          name: "Matthew Billson",
          category: "Money Transfer",
          amount: "$56.19",
          date: "Jun 9, 12:08",
          icon: require("@/assets/images/matthew.png"),
        },
      ],
    },
    {
      date: "Yesterday",
      transactions: [
        {
          id: "2",
          name: "Starbucks",
          category: "Food",
          amount: "$122.47",
          date: "Jun 8, 19:21",
          icon: require("@/assets/images/starbucks.png"),
        },
        {
          id: "3",
          name: "Netflix",
          category: "Entertainment",
          amount: "$13.17",
          date: "Jun 8, 08:53",
          icon: require("@/assets/images/netflix.png"),
        },
      ],
    },
    {
      date: "Day After Tomorrow",
      transactions: [
        {
          id: "4",
          name: "Netflix",
          category: "Entertainment",
          amount: "$13.17",
          date: "Jun 8, 08:53",
          icon: require("@/assets/images/netflix.png"),
        },
        {
          id: "5",
          name: "Starbucks",
          category: "Food",
          amount: "$122.47",
          date: "Jun 8, 19:21",
          icon: require("@/assets/images/starbucks.png"),
        },
      ],
    },
  ];

  const accountCards: T_AccountCard[] = [
    {
      type: "Debit",
      balance: "$4,098.12",
      cardNumber: "4385",
    },
    {
      type: "Virtual",
      balance: "$14.71",
      cardNumber: "9081",
    },
    {
      type: "Debit",
      balance: "$10.55",
      cardNumber: "2345",
    },
    {
      type: "Virtual",
      balance: "$10.55",
      cardNumber: "6789",
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView
        style={[styles.safeArea, { paddingBottom: bottomInset }]}
        edges={["top"]}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.profileSection} activeOpacity={0.7}>
              <Avatar />
              <ThemedText style={[styles.profileName, { color: colors.text }]}>
                Charlotte
              </ThemedText>
              <ChevronRight />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <QrCode />
            </TouchableOpacity>
          </View>

          {/* Quick Actions */}
          <QuickActions />

          {/* Account Cards */}
          <FlatList
            data={accountCards}
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
        <TransactionList groups={transactionGroups} />
      </SafeAreaView>
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
