import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
