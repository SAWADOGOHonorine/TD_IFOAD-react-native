import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import Button from "../Components/Button";

const users = [
    { id: 1, 
      nom: "Doe", 
      prenom: "John", 
      telephone: "0601020304", 
      mail: "john.doe@example.com", 
      ville: "Ouagadougou", 
      bio: "Développeur passionné", 
      photo: "https://randomuser.me/api/portraits/men/1.jpg" 
      },
      
    { id: 2, 
      nom: "Smith", 
      prenom: "Jane", 
      telephone: "0705060708", 
      mail: "jane.smith@example.com", 
      ville: "Bobo-Dioulasso", 
      bio: "Designer UI/UX", 
      photo: "https://randomuser.me/api/portraits/women/2.jpg" 
      },
  
    { id: 3, 
          nom: "Smith", 
          prenom: "Jane", 
          telephone: "0705060708", 
          mail: "jane.smith@example.com", 
          ville: "Bobo-Dioulasso", 
          bio: "Designer UI/UX", 
          photo: "https://randomuser.me/api/portraits/women/2.jpg" 
          },
  
    { id: 4, 
              nom: "Smith", 
              prenom: "Jane", 
              telephone: "0705060708", 
              mail: "jane.smith@example.com", 
              ville: "Bobo-Dioulasso", 
              bio: "Designer UI/UX", 
              photo: "https://randomuser.me/api/portraits/women/2.jpg" 
              },
  
    { id: 5, 
                nom: "Smith", 
                prenom: "Jane", 
                telephone: "0705060708", 
                mail: "jane.smith@example.com", 
                ville: "Bobo-Dioulasso", 
                bio: "Designer UI/UX", 
                photo: "https://randomuser.me/api/portraits/women/2.jpg" 
                }
  ];

export default function ListeScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users");
        setUsers(response.data.users);
      } catch (err) {
        setError("Erreur lors du chargement des utilisateurs.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des utilisateurs</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
      <Button title="Retour à l'accueil" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, 
    backgroundColor: "#f8f9fa" },
  title: { fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20 },
  error: { color: "red", 
    marginBottom: 10 },
  userItem: { marginBottom: 10, 
    padding: 10, 
    backgroundColor: "#e9ecef", 
    borderRadius: 5 },
});
