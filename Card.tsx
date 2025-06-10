import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CardProps = {
    texto: string;
};

function Card(props:{ texto: string }) {

    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        margin: 8,
    },
    cardText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Card;