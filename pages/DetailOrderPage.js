// DetailOrderPage.js
import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { CartContext } from '../context/CartContext'; //수정

const DetailOrderPage = ({ navigation, route }) => {
  const { cart, setCart } = useContext(CartContext);
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [temperature, setTemperature] = useState('따듯하게');

  const addToCart = () => {
    setCart([...cart, { ...item, quantity, temperature }]);
    navigation.navigate('OrderPage');
  };

  const addToCartAndGoToCartPage = () => {
    setCart([...cart, { ...item, quantity, temperature }]);
    navigation.navigate('CartPage');
  };

  const isDrink = item.category === '음료';
  const isHot = item.name === '아메리카노' || item.name === '카페 라떼' || item.name === '녹차 라떼' || item.name === '홍차';

  return (
    <View style={styles.orderContainer}>
      <TouchableOpacity
        style={[styles.sideButton2]}
        onPress={() => navigation.navigate('OrderPage')}
      >
        <Text style={styles.backButtonText}>뒤로가기</Text>
      </TouchableOpacity>
      <Image source={item.image} style={styles.largeImage} />
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        {isDrink && isHot && (
          <View style={styles.temperatureGroup}>
            <TouchableOpacity
              style={[styles.temperatureButton, temperature === '차갑게' && styles.selectedButton]}
              onPress={() => setTemperature('차갑게')}
            >
              <Text style={[styles.temperatureButtonText, temperature === '차갑게' && styles.selectedButtonText]}>❄️차갑게</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.temperatureButton, temperature === '따듯하게' && styles.selectedButtonHot]}
              onPress={() => setTemperature('따듯하게')}
            >
              <Text style={[styles.temperatureButtonText, temperature === '따듯하게' && styles.selectedButtonText]}>♨️따듯하게</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.quantityContainer}>
          <Text>개수 :</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{quantity} 개</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => setQuantity(quantity + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Text>가격 : {item.price * quantity} 원</Text>
        <View style={styles.orderButtonGroup}>
          <TouchableOpacity style={styles.orderLargeButton} onPress={addToCartAndGoToCartPage}>
            <Text style={styles.buttonText}>📋결제하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderLargeButton} onPress={addToCart}>
            <Text style={styles.buttonText}>🛒주문 담기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailOrderPage;
