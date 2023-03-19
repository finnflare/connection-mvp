// KAV is a special component to make sure the keyboard doesn't cover the input fields
// TO is a component standing in as a button, but it can be traditionally styled (onPress is used on TO)
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
// This gives the router method, returning the current router, which can be used for navigation in the file-system
import { useRouter } from "expo-router";

// This screen is an exact copy of loved-one.js, but the words and future routings are changed
// STE is a special attribute to TI to make the chars non-visible when inputting

// Loved ones log in screen
const lovedOne = () => {
  const router = useRouter();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.logo} source={require("./connection.png")} />
      <Text style={styles.indicator}>Loved One</Text>
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

export default lovedOne;
