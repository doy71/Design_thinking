import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
// import styles from './styles';

const CardPage = ({ route, navigation }) => {
  useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('MovePage'); 
        }, 3000);
    
        return () => clearTimeout(timer); 
      }, [navigation]);

  const { cart } = route.params;

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const total = calculateTotal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>카드 결제 안내</Text>
      <View style={styles.table}>
        {cart.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.quantity} 개</Text>
            <Text style={styles.tableCell}>{item.price * item.quantity} 원</Text>
          </View>
        ))}
      </View>
      <Text style={styles.total}>총 금액: {total} 원</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>뒤로 가기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  total: {
    fontSize: 20,
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default CardPage;