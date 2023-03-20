import { StyleSheet } from "react-native";

// This stylesheet covers the welcome and log in screens styling

const styles = StyleSheet.create({
  // Container (main)
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  // A style for margin on top of the text fields
  field: {
    marginTop: 85,
  },
  // A style for margin on top of the buttons
  buttonField: {
    marginTop: 25,
  },
  // Style of text input fields
  input: {
    backgroundColor: "#397478",
    height: 30,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#397478",
    paddingLeft: 10,
    color: "#d5e7e7",
  },

  // Style for register buttons
  button: {
    color: "#67a0a1",
    fontSize: 24,
  },

  // Style for administration information message
  warning: {
    fontSize: 18,
    textAlign: "center",
    width: 325,
    color: "#cc5500",
    top: 50,
  },
});

export { styles };
