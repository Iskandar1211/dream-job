import cardBgGray from "@/assets/images/card-bg-gray.png";
import cardBgOrange from "@/assets/images/card-bg-orange.png";
import MasterCard from "@/assets/svg/master-card.svg";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CircleSeparator } from "./ui/circle-separator";

type T_AccountCardType = {
  type: "Debit" | "Virtual";
};

const imageMap: Record<T_AccountCardType["type"], ImageSourcePropType> = {
  Debit: cardBgOrange,
  Virtual: cardBgGray,
};

type AccountCardProps = {
  type: T_AccountCardType["type"];
  balance: string;
  cardNumber: string;
};

export function AccountCard({ type, balance, cardNumber }: AccountCardProps) {
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme];

  return (
    <View style={styles.card}>
      <MasterCard style={styles.masterCard} />
      <View style={styles.bgImageContainer}>
        <Image source={imageMap[type]} style={styles.bgImage} />
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.balance, { color: colors.text }]}>{balance}</Text>
        <View style={styles.cardInfo}>
          <Text style={[styles.cardType, { color: colors.text }]}>{type}</Text>
          <View style={styles.cardNumberContainer}>
            <CircleSeparator color={colors.text} />
            <CircleSeparator color={colors.text} />
            <Text style={[styles.cardNumber, { color: colors.text }]}>
              {cardNumber}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 142,
    height: 98,
    borderRadius: 16,
    padding: 12,
    overflow: "hidden",
    position: "relative",
  },
  masterCard: {
    zIndex: 2,
    marginBottom: 13,
  },
  bgImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
    zIndex: 1,
  },
  balance: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardType: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 4,
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: "400",
  },
  cardNumberSeparator: {
    width: 1,
    height: 16,
    marginHorizontal: 4,
    borderRadius: 1,
  },
  cardNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
