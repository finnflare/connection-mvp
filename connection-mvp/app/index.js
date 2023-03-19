import { Link } from "expo-router";
import { View, Image, Text } from "react-native";
import { styles } from "./login-styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./connection.png")} />
      <Text style={styles.welcome}>
        Please choose one of the log in options below.
      </Text>
      <Link href="/loved-one" style={styles.button}>
        Loved One
      </Link>
      <Link href="/staff" style={styles.button}>
        Staff
      </Link>
    </View>
  );
}
