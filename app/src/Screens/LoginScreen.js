import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../Components/Button";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log(response.data);
      // Stocker le token ou naviguer vers la page suivante
      navigation.navigate("Liste");
    } catch (err) {
      setError(err.response ? err.response.data.message : "Erreur de connexion.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <CustomButton title="Se connecter" onPress={handleLogin} />
      <CustomButton title="Créer un compte" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#f8f9fa" },
  title: { fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20 },
  input: { width: "80%", padding: 10, 
    marginBottom: 10, 
    borderWidth: 1, borderRadius: 5 },
  error: { color: "red", marginBottom: 10 },
});
