// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../pages/MainPage';
import GuidePage from '../pages/GuidePage';
import PaymentPage from '../pages/PaymentPage';
import CashPage from '../pages/CashPage';
import CardPage from '../pages/CardPage';
import CompletePaymentPage from '../pages/CompletePaymentPage';
import OrderPage from '../pages/OrderPage';
import CartPage from '../pages/CartPage';
import DetailOrderPage from '../pages/DetailOrderPage';
import MovePage from '../pages/MovePage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'white',
          borderBottomColor: 'white',
          shadowColor: 'white',
          height: 100,
        },
        headerTitleAlign: 'left',
        headerTintColor: '#000',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="GuidePage" component={GuidePage} />
      <Stack.Screen name="PaymentPage" component={PaymentPage} />
      <Stack.Screen name="CashPage" component={CashPage} />
      <Stack.Screen name="CardPage" component={CardPage} />
      <Stack.Screen name="CompletePaymentPage" component={CompletePaymentPage} />
      <Stack.Screen name="OrderPage" component={OrderPage} />
      <Stack.Screen name="CartPage" component={CartPage} />
      <Stack.Screen name="DetailOrderPage" component={DetailOrderPage} />
      <Stack.Screen name="MovePage" component={MovePage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
