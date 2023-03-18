import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

const staff = () => {
  return (
    <KeyboardAvoidingView style={styles.conatiner} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="email"
          //value={}
          //onChangeText{text =>}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          //value={}
          //onChangeText{text =>}
          style={styles.input}
          secureTextEntry
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default staff;

const styles = StyleSheet.create({
  container: {
    justifyContent: "50%",
    alignItems: "50%",
    flex: 1,
  },
});
