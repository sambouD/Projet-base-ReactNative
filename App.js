import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Touit from './components/Touit';

export default function App() {

  const [listTouit, setListTouit] = useState([]);

  const [pseudo, setPseudo] = useState('');

  const [message, setMessage] = useState('');

  useEffect(()=>{
    fetch('https://node-event78250.herokuapp.com/touits/')
    .then(response => response.json())
    .then(data => setListTouit(data));
    // axios 
  }, []);

  const displayTouit = ({item}) => {
    return <Touit pseudo={item.pseudo} message={item.message} />
  }

  const addTouit = () => {
    fetch('https://node-event78250.herokuapp.com/addtouit/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pseudo: pseudo, message: message})
    })
    .then(response => response.json())
    .then(response => console.log(response));
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Pseudo</Text>
        <TextInput onChangeText={setPseudo} />
        <Text>Message</Text>
        <TextInput onChangeText={setMessage} />
        <Button title="Envoyer le touit" onPress={()=>{addTouit()}} />
      </View>
      <FlatList data={listTouit} keyExtractor={item => item._id} renderItem={displayTouit} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Fetch est une API Javascript qui permet d'envoyer des requêtes HTTP. 
 * (On parle aussi d'AJAX = Asynchronous Javascript XML)
 * 
 * 
 * 
 * 
 */