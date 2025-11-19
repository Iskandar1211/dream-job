import { T_AccountCard, TransactionGroup } from "@/shared/types/transaction";

export const TRANSACTION_GROUPS: TransactionGroup[] = [
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
];

export const ACCOUNT_CARDS: T_AccountCard[] = [
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
