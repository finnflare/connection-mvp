import { Link } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Let's get connected!</Text>
      </View>
      <Link href="/loved-one">Loved One</Link>
      <Link href="/staff">Staff</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    marginTop: "25%",
    fontSize: 24,
    fontWeight: "bold",
  },
});
