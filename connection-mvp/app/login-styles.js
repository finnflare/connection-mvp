import { StyleSheet } from "react-native";

// This stylesheet covers the welcome and log in screens styling

const styles = StyleSheet.create({
  // Container (main)
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
  },
  // An easy style for margin on top
  field: {
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
  // Logo (photo) style
  logo: {
    resizeMode: "contain",
    width: "85%",
  },
  // Indicator (staff/loved one) style
  indicator: {
    fontSize: 32,
    borderWidth: 10,
    borderRadius: 30,
    padding: 5,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#397478",
    borderColor: "#397478",
    backgroundColor: "#d5e7e7",
    overflow: "hidden",
  },
  // Style for the log in and back buttons
  button: {
    color: "#67a0a1",
    fontSize: 24,
  },
  // Style for the welcome prompt
  welcome: {
    fontSize: 20,
    flex: 0.75,
    width: 250,
    textAlign: "center",
    color: "#397478",
  },
});

export { styles };
