import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';


const DATA = [
{id: '1', title: 'Item 1', description: 'Descrição do item 1'},
{id: '2', title: 'Item 2', description: 'Descrição do item 2'},
{id: '3', title: 'Item 3', description: 'Descrição do item 3'},
{id: '4', title: 'Item 4', description: 'Descrição do item 4'}, 
{id: '5', title: 'Item 5', description: 'Descrição do item 5'},
];  



export default function HomeScreen({ navigation }:any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
if (count === 5) {
  alert('Parabéns!\nVocê atingiu 5 cliques!', );
} else if (count === 0) {
  alert('Resetado\nO contador foi zerado!');
};

}, [count]);

const renderItem = ({ item }:any) => (
<TouchableOpacity
style={styles.card}
onPress={() => navigation.navigate('Details', { item})}
>
<Text style={styles.cardTitle}>{item.title}</Text>
<Text style={styles.cardDescription}>{item.description}</Text>
</TouchableOpacity>
);

  return (
<View style={styles.container}>
  <Text style={styles.title}>Lista ou Itens</Text> 

  <View style={styles.counterContainer}>
    <Text style={styles.counterText}>Contador: {count}</Text>
  <TouchableOpacity
    style={styles.counterButton}
    onPress={() => setCount((prev) => prev + 1)}
  >
    <Text style={styles.buttonText}>Incrementar</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.counterButton}
    onPress={() => setCount((prev) => prev - 1)}
  >
    <Text style={styles.buttonText}>Decrementar</Text>
  </TouchableOpacity>
</View>

  <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    style={styles.list}
  />
  <TouchableOpacity
    style={[styles.counterButton, { backgroundColor: '#dc3545' }]}
    onPress={() => setCount(0)}
  >
    <Text style={styles.buttonText}>Resetar</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.button, { backgroundColor: '#28a745', marginTop: 20 }]}
    onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.buttonText}>Ir para Perfil</Text>
  </TouchableOpacity>
</View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',

  },
  list: {
    flex: 1,
  },
  card:{
backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  counterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  counterButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});


