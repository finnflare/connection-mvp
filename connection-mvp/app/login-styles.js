import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
  },
  field: {
    marginTop: 25,
  },
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
  logo: {
    resizeMode: "contain",
    width: "85%",
  },
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
  button: {
    color: "#67a0a1",
    fontSize: 24,
  },
  welcome: {
    fontSize: 20,
    flex: 0.75,
    width: 250,
    textAlign: "center",
    color: "#397478",
  },
});

export { styles };
