import { StyleSheet, View, Text } from "react-native";


export default function Card(props:{texto:string}){
    return(
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    flex:1,
    marginHorizontal:5
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },})