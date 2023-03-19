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
import { useState, useEffect } from "react";
// Importing necessary firebase methods
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// Using exported "auth" instance b/c, if don't, might not initialize firebase
import { auth } from "../../firebaseConfig";

// This screen is an exact copy of loved-one.js, but the words and future routings are changed
// STE is a special attribute to TI to make the chars non-visible when inputting

// Loved ones log in screen
const lovedOne = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Listening for user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("../loved-one-in/loved-one-home");
      }
    });

    return unsubscribe;
  }, []);

  // Checking the log in credentials
  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("in");
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

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
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#d5e7e7"
          adjustFontSizeToFit
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.field} onPress={handleLogIn}>
        <Text style={styles.button}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.field} onPress={() => router.back()}>
        <Text style={styles.button}>Back</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default lovedOne;
