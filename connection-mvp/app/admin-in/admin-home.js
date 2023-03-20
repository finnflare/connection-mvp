import { Link } from "expo-router";
import { View, Image, Text, TouchableOpacity } from "react-native";

const adminHome = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          textAlign: "center",
          width: 300,
        }}
      >
        This page is where admin can assign tasks to staff.
      </Text>
    </View>
  );
};

export default adminHome;
