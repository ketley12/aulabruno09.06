import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
export default function FormScreen({ navigation }:any) {
const [nome, setNome] = useState('');
useEffect(() => {
  if (nome.length > 0) {
   
  }
}, [nome]);


useEffect(() => {
console.log('FormScreen montada!');
return () => {
console.log('FormScreen desmontada!');
};
}, []);




const handleSubmit = () => {
  if (nome.trim() && email.trim()) {
    navigation.navigate('Details', {
      mensagem: `Nome: ${nome}, Email: ${email}`,
    });
  } else {
    Alert.alert('Erro', 'Por favor, preencha todos os campos.');
  }

};
const [email, setEmail] = useState('');

<TextInput
style={styles.input}
placeholder="Digite seu email"
value={email}
onChangeText={setEmail}
keyboardType="email-address"
/>



return (
  <>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#dc3545' }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#dc3545' }]}
        onPress={() => {
          navigation.navigate('Scroll');
          
        }}
      >
        <Text style={styles.buttonText}>Voltar para Scroll</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FFA500' }]}
        onPress={() => {
          setEmail('');
          setNome('');
          Alert.alert('Campos limpos', 'Os campos foram limpos com sucesso!');
        }}
      >
        <Text style={styles.buttonText}>Limpar os campos</Text>
      </TouchableOpacity>
    </View>
  </>
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
input: {
width: '100%',
backgroundColor: '#fff',
padding: 10,
borderRadius: 5,
borderWidth: 1,
borderColor: '#ddd',
marginBottom: 20,
fontSize: 16,
},
button: {
backgroundColor: '#007bff',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
marginBottom: 10,
},
buttonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
});

