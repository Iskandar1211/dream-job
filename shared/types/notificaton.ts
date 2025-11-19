import { ReactElement } from "react";
import { ImageSourcePropType } from "react-native";

export interface T_NofiticationTabs {
  label: string;
  value: string;
}

type NotificationType = "payment" | "system" | "delivery" | "travel";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  description?: string;
  amount?: string;
  cardDetails?: string;
  balance?: string;
  timestamp: string;
  category: string;
  icon?: ReactElement;
  avatar?: ImageSourcePropType;
  isUnread?: boolean;
};

export type NotificationGroup = {
  date: string;
  notifications: Notification[];
};
