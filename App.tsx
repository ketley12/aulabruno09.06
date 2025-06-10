import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import CustomCard from './CustomCard';
function Card(props:{ texto: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.texto}</Text>
    </View>
  );
}

export default function App() {
  const handleCardPress = () => {
    Alert.alert('Card Clicado', 'Você tocou no card!');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Minha Tela Estilizada</Text>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.content}>
        <TouchableOpacity
  style={styles.actionButton}
  onPress={() => Alert.alert('Ação', 'Botão de ação clicado!')}
>
  <Text style={styles.buttonText}>Ação</Text>
</TouchableOpacity>
        <Image
          source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
          style={styles.image}
        />
        <Text style={styles.subtitle}>Explorando Estilos no React Native</Text>
      </View>

      {/* Seção de Cards */}
      <View style={styles.cardSection}>
        <CustomCard
          titulo="Card 1: Estilização"
          corFundo="lightblue"
          onPress={() => Alert.alert('Custom Card', 'Card 1 clicado!')}
        />
        <CustomCard
          titulo="Card 2: Layout"
          corFundo="lightblue"
          onPress={() => Alert.alert('Custom Card', 'Card 2 clicado!')}
        />
      </View>
      <CustomCard titulo="meu app" corFundo='green' onPress={handleCardPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
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
    width:170
   
  },


  cardText: {
    fontSize: 16,
    color: '#333',
  },


  actionButton: {
  backgroundColor: '#28a745',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 20,
  marginBottom: 20,
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
});


