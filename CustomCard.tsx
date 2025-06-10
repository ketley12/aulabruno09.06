

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function CustomCard( props:{ titulo: string, corFundo: string, onPress:()=> void  }) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.card, { backgroundColor: props.corFundo }]}>
      <Text style={styles.cardText}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CustomCard;