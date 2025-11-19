import {
  NotificationGroup,
  T_NofiticationTabs,
} from "@/shared/types/notificaton";
import Travel from "@/assets/svg/travel.svg";
import Transfer from "@/assets/svg/transfer-icon.svg";
import Shield from "@/assets/svg/shield-icon.svg";

export const TABS: T_NofiticationTabs[] = [
  { label: "All", value: "all" },
  { label: "Payments", value: "payments" },
  { label: "System", value: "system" },
  { label: "Delivery", value: "delivery" },
  { label: "Travel", value: "travel" },
];

export const NOTIFICATION_GROUPS: NotificationGroup[] = [
  {
    date: "TODAY, 17 JUNE",
    notifications: [
      {
        id: "1",
        type: "payment",
        title: "Received from Anna",
        amount: "+$110",
        cardDetails: "Debit •• 4385",
        balance: "$4,098.12",
        timestamp: "17 June 2025, 17:49",
        category: "Payments",
        avatar: require("@/assets/images/anna.png"),
        isUnread: true,
      },
    ],
  },
  {
    date: "YESTERDAY, 16 JUNE",
    notifications: [
      {
        id: "2",
        type: "travel",
        title: "See our limited offer!",
        description:
          "Would you like to visit new countries? Maybe it's your time!",
        timestamp: "16 June 2025, 23:08",
        category: "Travel",
        isUnread: false,
        icon: <Travel width={20} height={20} />,
      },
      {
        id: "3",
        type: "payment",
        title: "Sent to •• 2041",
        amount: "-$14.62",
        cardDetails: "Debit •• 4385",
        balance: "$3,987.5",
        timestamp: "16 June 2025, 06:18",
        category: "Payments",
        isUnread: false,
        icon: <Transfer width={20} height={20} />,
      },
    ],
  },
  {
    date: "24 MARCH, 2025",
    notifications: [
      {
        id: "4",
        type: "system",
        title: "New login into account",
        description:
          "You have logged in from a new location: iOS 26.0.1 • 109.255.84.7 • Spain",
        timestamp: "24 March 2025, 15:44",
        category: "System",
        isUnread: false,
        icon: <Shield width={20} height={20} />,
      },
    ],
  },
];
