/*import {
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
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

// This screen is almost an exact copy of the other two log in screens, but it is used for administrational registrations

// Admin user registration screen
const register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signing up a new user
  // If the sign up is successful, routing the admin back to the welcome screen
  const handleLovedOneSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(db, "loved-one", auth.currentUser.uid), {
          email: email,
        });
        router.back();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleStaffSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(db, "staff", auth.currentUser.uid), { email: email });
        router.back();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.logo} source={require("./connection.png")} />
      <Text style={styles.indicator}>Admin</Text>
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
      <TouchableOpacity style={styles.field} onPress={handleLovedOneSignUp}>
        <Text style={styles.button}>Register New Loved One</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.field} onPress={handleStaffSignUp}>
        <Text style={styles.button}>Register New Staff</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.field} onPress={() => router.back()}>
        <Text style={styles.button}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.warning}>
        If the registration is successful, you will be routed back to the main
        screen. User data can be managed on the Firebase Authentication &
        Firestore--Database Consoles.
      </Text>
    </KeyboardAvoidingView>
  );
};

export default register;*/
