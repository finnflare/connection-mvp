import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./login-styles";
import { useRouter } from "expo-router";

// This screen is an exact copy of loved-one.js, but the words and future routings are changed

// Staff log in screen
const staff = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.logo} source={require("./connection.png")} />
      <Text style={styles.indicator}>Staff</Text>
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#d5e7e7"
          adjustFontSizeToFit
          //value={}
          //onChangeText{text =>}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#d5e7e7"
          adjustFontSizeToFit
          //value={}
          //onChangeText{text =>}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.field}>
        <Text style={styles.button}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.field} onPress={() => router.back()}>
        <Text style={styles.button}>Back</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default staff;
