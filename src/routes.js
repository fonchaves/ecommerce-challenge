import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import ProductPage from './pages/Product';

import Header from './components/Header';

const Stack = createStackNavigator();

/* RASCUNHO - // TODO: IMPLEMENTAR TELA PROPRIA DE CHECKOUT */
function CheckoutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}>Pedido Realizado!</Text>
    </View>
  );
}

function Routes() {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        header: ({navigation}) => <Header navigation={navigation} />,
      }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Cart" component={CartPage} />
      <Stack.Screen name="Product" component={ProductPage} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

export default Routes;
