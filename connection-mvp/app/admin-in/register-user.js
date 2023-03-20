import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./register-styles";
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
        openLoveSuccessAlert(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        openFailAlert(email);
      });
  };

  const handleStaffSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(db, "staff", auth.currentUser.uid), { email: email });
        openStaffSuccessAlert(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        openFailAlert(email);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.warning}>
        Registering a new user will populate that user on the Firebase
        dashboard. That user will also be added to the Firestore Database. Both
        of these dashboards can be managed on the Firebase console.
      </Text>
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
      <TouchableOpacity
        style={styles.buttonField}
        onPress={handleLovedOneSignUp}
      >
        <Text style={styles.button}>Register New Loved One</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonField} onPress={handleStaffSignUp}>
        <Text style={styles.button}>Register New Staff</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonField}
        onPress={() => router.back()}
      ></TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const openLoveSuccessAlert = (email) => {
  Alert.alert(
    "Success",
    "User with email: " + email + " has been populated as a loved one."
  );
};

const openStaffSuccessAlert = (email) => {
  Alert.alert(
    "Success",
    "User with email: " + email + " has been populated as a staff member."
  );
};

const openFailAlert = (email) => {
  Alert.alert(
    "Error",
    "User with email: " +
      email +
      " is already populated as a user or invalid syntax was inputted."
  );
};

export default register;
