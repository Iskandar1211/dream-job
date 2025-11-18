import { View } from "react-native";

export const CircleSeparator = ({ color }: { color: string }) => (
    <View
      style={{
        width: 6,
        height: 6,
        borderRadius: 4,
        backgroundColor: color,
      }}
    />
  );
  