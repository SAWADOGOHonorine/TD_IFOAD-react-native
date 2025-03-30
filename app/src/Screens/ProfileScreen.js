import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../Components/Button";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Récupérer le profil de l'utilisateur
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("token");  // Récupérer le token
        if (!token) {
          setError("Token non trouvé.");
          return;
        }

        const response = await axios.get("http://localhost:4000/profile", {
          headers: {
            Authorization: token,
          },
        });
        setUserInfo(response.data);
      } catch (err) {
        setError("Erreur lors du chargement du profil.");
      }
    };

    fetchProfile();
  }, []);

  // Gérer la mise à jour du profil
  const handleUpdateProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        setError("Token non trouvé.");
        return;
      }

      const response = await axios.put("http://localhost:5000/profile", userInfo, {
        headers: {
          Authorization: token,
        },
      });

      setSuccess("Profil mis à jour avec succès.");
    } catch (err) {
      setError("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={userInfo.name}
        onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userInfo.email}
        onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Nouveau mot de passe"
        secureTextEntry
        value={userInfo.password}
        onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
      />
      <Button title="Mettre à jour" onPress={handleUpdateProfile} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
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
  success: { color: "green", 
    marginBottom: 10 },
});
