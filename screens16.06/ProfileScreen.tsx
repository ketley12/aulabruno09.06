import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
export default function ProfileScreen({ navigation }:any) {
return (
<View style={styles.container}>
<Text style={styles.title}>Meu Perfil</Text>
<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate('Home')}
>
<Text style={styles.buttonText}>Voltar para Home</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate('Details', { mensagem: 'Olá do Perfil!'  })}
>
<Text style={styles.buttonText}>Ir para Details</Text>
</TouchableOpacity>

</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#17a2b8',
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
backgroundColor: 'blue',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
marginTop: 20 
},
buttonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
});
 