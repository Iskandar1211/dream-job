import { ThemedText } from "@/components/themed-text";
import { TABS } from "@/constants/notification";
import { Colors } from "@/constants/theme";
import {
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
    View
} from "react-native";

const FilterTabs = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const colorSchema = useColorScheme();
  const colors = Colors[colorSchema ?? "dark"];
  return (
    <View
      style={[
        styles.tabsContainer,
        { borderBottomWidth: 1, borderBottomColor: colors.surfaceSecondary },
      ]}
    >
      <View style={styles.tabsContent}>
        {TABS.map((item) => (
          <TouchableOpacity
            key={item.value}
            onPress={() => setSelectedTab(item.value)}
            style={[
              styles.tab,
              {
                borderBottomWidth: 1,
                borderBottomColor:
                  selectedTab === item.value
                    ? colors.orange.primary
                    : "transparent",
              },
            ]}
            activeOpacity={0.7}
          >
            <ThemedText
              style={[
                styles.tabLabel,
                {
                  color:
                    selectedTab === item.value
                      ? colors.orange.primary
                      : colors.text,
                },
              ]}
            >
              {item.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FilterTabs;

const styles = StyleSheet.create({
  tabsContainer: {
    maxHeight: 50,
    marginBottom: 8,
    borderBottomWidth: 1,
  },
  tabsContent: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  tab: {
    paddingVertical: 12,
    flex: 1,
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
  },
});
