import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Info({ text }) {
  return <Text style={styles.infoText}>{text}</Text>;
}

const styles = StyleSheet.create({
  infoText: {
    color: "#888",
    marginBottom: 15,
    fontSize: 16,
  },
});
