import { Link } from "expo-router";
import { View, Text } from "react-native";
import { useSearchParams } from "expo-router";

const lovedOneHome = () => {
  const { email } = useSearchParams();
  return (
    <View>
      <Text>{email}</Text>
    </View>
  );
};

export default lovedOneHome;
