import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details', { mensagem: 'Olá do Home!'})}
      >
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={[styles.button, { backgroundColor: '#28a745',marginTop: 20 }]}
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});