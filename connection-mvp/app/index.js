import { Link } from "expo-router";
import { View, Image, Text } from "react-native";
import { styles } from "./login-styles";

// This project is using expo-router, a file-based routing system for react-native-expo projects
// This type of a project would typically be using react-navigation, but expo-router is more like typical react

// Welcome screen page
export default function Page() {
  // Logo is using a local image and routing is using the expo-router link component
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./connection.png")} />
      <Text style={styles.welcome}>
        Please choose one of the log in options below.
      </Text>
      <Link href="/loved-one" style={[styles.button, styles.field]}>
        Loved One
      </Link>
      <Link href="/staff" style={[styles.button, styles.field]}>
        Staff
      </Link>
    </View>
  );
}
