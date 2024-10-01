import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
      <Button mode="contained" onPress={() => alert("🎉🎉🎉")}>
        Click Me
      </Button>
    </View>
  );
}
