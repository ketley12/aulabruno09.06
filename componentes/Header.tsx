import { StyleSheet, View, Text } from "react-native";


export default function Header(props:{texto:string}){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
    backgroundColor:'#fff',
    padding:15,
    borderRadius:10,
    marginTop:20,
    borderWidth:1,
    borderColor:'#ccc',
    },
    headerText: {
     fontSize:16,
     color:'#333',   

    }
})