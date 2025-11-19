import FilterTabs from "@/components/notification/filter-tabs";
import NotificationItem from "@/components/notification/notification-item";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { NOTIFICATION_GROUPS } from "@/constants/notification";
import { Colors } from "@/constants/theme";
import { Notification } from "@/shared/types/notificaton";
import { useState } from "react";
import { SectionList, StyleSheet, useColorScheme } from "react-native";

export default function NotificationsScreen() {
  const colorSchema = useColorScheme();
  const colors = Colors[colorSchema ?? "dark"];
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredGroups = NOTIFICATION_GROUPS.map((group) => ({
    ...group,
    notifications:
      selectedTab === "all"
        ? group.notifications
        : group.notifications.filter(
            (n) => n.category.toLowerCase() === selectedTab.toLowerCase()
          ),
  })).filter((group) => group.notifications.length > 0);

  const renderNotificationItem = ({ item }: { item: Notification }) => {
    return <NotificationItem item={item} />;
  };

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Filter Tabs */}
      <FilterTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Notifications List */}
      <SectionList
        sections={filteredGroups.map((group, index) => ({
          title: group.date,
          data: group.notifications,
          isFirst: index === 0,
        }))}
        renderItem={renderNotificationItem}
        renderSectionHeader={({ section }) => (
          <ThemedText
            style={[
              styles.dateHeader,
              { color: colors.textSecondary },
              (section as any).isFirst && styles.firstDateHeader,
            ]}
          >
            {section.title}
          </ThemedText>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  dateHeader: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  firstDateHeader: {
    marginTop: 8,
  },
});
