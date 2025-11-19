export type T_AccountCard = {
  type: "Debit" | "Virtual";
  balance: string;
  cardNumber: string;
};

export type Transaction = {
  id: string;
  name: string;
  category: string;
  amount: string;
  date: string;
  icon: any;
};

export type TransactionGroup = {
  date: string;
  transactions: Transaction[];
};
