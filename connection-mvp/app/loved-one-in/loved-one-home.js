import { Link } from "expo-router";
import { View, Text } from "react-native";

const lovedOneHome = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          textAlign: "center",
          width: 300,
        }}
      >
        This page is where loved ones will get a notification every time a staff
        member delivers a care need to a resident.
      </Text>
    </View>
  );
};

export default lovedOneHome;
