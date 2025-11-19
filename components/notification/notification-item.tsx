import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { Notification } from "@/shared/types/notificaton";
import { Image, StyleSheet, useColorScheme, View } from "react-native";

const NotificationItem = ({ item }: { item: Notification }) => {
  const colorSchema = useColorScheme();
  const colors = Colors[colorSchema ?? "dark"];
  if (item.type === "payment") {
    return (
      <View
        style={[
          styles.notificationContainer,
          { borderBottomWidth: 1, borderBottomColor: colors.surfaceSecondary },
        ]}
      >
        <View style={styles.notificationContent}>
          <View style={styles.leftSection}>
            {item.avatar ? (
              <Image source={item.avatar} style={styles.avatar} />
            ) : (
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: colors.surface },
                ]}
              >
                {item.icon}
              </View>
            )}
            <View style={styles.textSection}>
              <ThemedText
                style={[styles.notificationTitle, { color: colors.text }]}
              >
                {item.title}
              </ThemedText>
              {item.amount && (
                <ThemedText
                  style={[
                    styles.amount,
                    {
                      color: colors.orange.primary,
                    },
                  ]}
                >
                  {item.amount}
                </ThemedText>
              )}
              {item.cardDetails && (
                <ThemedText
                  style={[styles.cardDetails, { color: colors.textSecondary }]}
                >
                  {item.cardDetails}
                </ThemedText>
              )}
              {item.balance && (
                <ThemedText
                  style={[styles.balance, { color: colors.textSecondary }]}
                >
                  {item.balance}
                </ThemedText>
              )}
              <ThemedText
                style={[styles.timestamp, { color: colors.textTertiary }]}
              >
                {item.timestamp} • {item.category}
              </ThemedText>
            </View>
          </View>
          {item.isUnread && (
            <View
              style={[
                styles.unreadDot,
                { backgroundColor: colors.orange.primary },
              ]}
            />
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.notificationContainer]}>
      <View style={styles.notificationContent}>
        <View style={styles.leftSection}>
          <View
            style={[styles.iconContainer, { backgroundColor: colors.surface }]}
          >
            {item.icon}
          </View>
          <View style={styles.textSection}>
            <ThemedText
              style={[styles.notificationTitle, { color: colors.text }]}
            >
              {item.title}
            </ThemedText>
            {item.description && (
              <ThemedText
                style={[styles.description, { color: colors.textSecondary }]}
              >
                {item.description}
              </ThemedText>
            )}
            <ThemedText
              style={[styles.timestamp, { color: colors.textTertiary }]}
            >
              {item.timestamp} • {item.category}
            </ThemedText>
          </View>
        </View>
        {item.isUnread && (
          <View
            style={[
              styles.unreadDot,
              { backgroundColor: colors.orange.primary },
            ]}
          />
        )}
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  notificationContainer: {},
  notificationContent: {
    flexDirection: "row",
    padding: 16,
    alignItems: "flex-start",
  },
  leftSection: {
    flexDirection: "row",
    flex: 1,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 16,
    marginRight: 12,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  securityIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
  },
  securityIconInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  textSection: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  amount: {
    fontSize: 21,
    fontWeight: "600",
  },
  cardDetails: {
    fontSize: 14,
    fontWeight: "400",
  },
  balance: {
    fontSize: 14,
    fontWeight: "400",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 8,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    fontWeight: "400",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
    marginTop: 4,
  },
});
