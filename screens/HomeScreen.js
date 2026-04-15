import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Welcome to SETC!</Text>
      <Text style={styles.subtext}>Computer Parts & Accessories Trading</Text>
      
      {/* Product placeholder - will expand later */}
      <View style={styles.productCard}>
        <Text style={styles.productTitle}>Intel Core i9-13900K</Text>
        <Text style={styles.productPrice}>₱32,995</Text>
      </View>
      <View style={styles.productCard}>
        <Text style={styles.productTitle}>RTX 4070 Ti</Text>
        <Text style={styles.productPrice}>₱54,500</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  welcome: { fontSize: 28, fontWeight: 'bold', marginTop: 40, marginBottom: 5 },
  subtext: { fontSize: 16, color: '#666', marginBottom: 30 },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productTitle: { fontSize: 18, fontWeight: '600' },
  productPrice: { fontSize: 16, color: '#FF6B35', marginTop: 5 },
});