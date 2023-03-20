import { Link } from "expo-router";
import { View, Image, Text } from "react-native";

const staffHome = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          textAlign: "center",
          width: 300,
        }}
      >
        This page is where staff members will check their care needs off,
        automatically sending notifications to loved ones as they do.
      </Text>
    </View>
  );
};

export default staffHome;
