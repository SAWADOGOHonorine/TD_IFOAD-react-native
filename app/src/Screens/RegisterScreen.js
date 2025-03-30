import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../Components/Button";
import axios from "axios";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:4000/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      // Si l'inscription est réussie, rediriger vers la page de connexion
      navigation.navigate("Login");
    } catch (err) {
      setError(err.response ? err.response.data.message : "Erreur d'inscription.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
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
      <Button title="S'inscrire" onPress={handleRegister} />
      <Button title="Se connecter" onPress={() => navigation.navigate("Login")} />
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
  input: { width: "80%", 
    padding: 10, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderRadius: 5 },
  error: { color: "red", 
    marginBottom: 10 },
});
