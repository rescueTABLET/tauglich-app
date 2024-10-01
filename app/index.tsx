import { ThemedText } from "@/components/ThemedText";
import { getFirestore } from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function Index() {
  const [data, setData] = useState<any>({ state: "loading" });

  useEffect(() =>
    getFirestore()
      .collection("users")
      .doc("WQdXRLTAJAy7WSJ2Z4eoUuhLDYjKKFnTTYNHDOJIysVKo32I")
      .onSnapshot(
        (doc) => setData({ state: "ready", data: doc.data() }),
        (error) => setData({ state: "error", error })
      )
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        padding: 16,
      }}
    >
      {data.state === "loading" && <ProgressBar indeterminate />}
      {data.state === "error" && <ThemedText>{data.error.message}</ThemedText>}
      {data.state === "ready" && (
        <>
          {data.data ? (
            <>
              <ThemedText>{JSON.stringify(data.data, null, 2)}</ThemedText>
            </>
          ) : (
            <ThemedText>Benutzer nicht gefunden.</ThemedText>
          )}
        </>
      )}
    </View>
  );
}
