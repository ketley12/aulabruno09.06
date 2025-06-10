import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    
    backgroundColor: 'green',
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
   
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
;