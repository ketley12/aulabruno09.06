import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native';
import Card from './Card';
import Header from './Header';



function Card({ texto }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{texto}</Text>
    </View>
  );
}


export default function App() {
  const handleButtonPress = () => {
    Alert.alert('Botão pressionado!', 'Você clicou no botão.');
  };

  const handleTouchablePress = () => {
    Alert.alert('Botão customizado pressionado!', 'Você clicou no botão customizado.');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Bem-vindo ao React Native!</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
        style={styles.image}
      />
      <Button
        title="Clique Aqui"
        onPress={handleButtonPress}
        color="#FF00AA" // rosa choque
      />
      <TouchableOpacity style={styles.custobutton} onPress={handleTouchablePress}>
        <Text style={styles.buttonText}>Botão Customizado</Text>
      </TouchableOpacity>
      <Card texto=" Bem-vindo!" />
       <Card texto=" React Native é incrivel" />


      <TouchableOpacity
        style={[styles.custobutton, { backgroundColor: '#dc3545' }]}
        onPress={() => Alert.alert('Atenção', 'Botão Vermelho clicado!')}
      >
        <Text style={styles.buttonText}>Botão Vermelho</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={[styles.custobutton, { backgroundColor: 'blue' }]}
        onPress={() => Alert.alert('Atenção', 'Botão Azul clicado!')}
      >
        <Text style={styles.buttonText}>Botão Azul</Text>
      </TouchableOpacity>
      




       
   
  
      

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
   title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  custobutton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});