import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomButton from '../componentes/CustomButton';


export default function DetailsScreen({ navigation, route }) {
    const { task, mensagem } = route.params || {};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do Item</Text>
            {task ? (
                <>
                    <Text style={styles.itemTitle}>{task.title}</Text>
                    <Text style={styles.itemDescription}>{task.description}</Text>
                    <CustomButton
                        title="Editar Tarefa"
                        onPress={() => navigation.navigate('AddTask', { task })}
                        color="green"
                    />
                </>
            ) : (
                <Text style={styles.message}>Nenhum item selecionado</Text>
            )}
            {mensagem && <Text style={styles.message}>{mensagem}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8cdcdff',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        color:'#333',
    },
    itemTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#333',
        marginBottom:10,
    },
    itemDescription:{
        fontSize:16,
        color:'#666',
        marginBottom:20,
        textAlign:'center',
    },
    button:{
        backgroundColor:'#631e9bff',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    message: {
        fontSize:18,
        color:'#333',
        marginBottom:20,
    },
})