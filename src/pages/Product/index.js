import React from 'react';
import {View, Text} from 'react-native';

import {Container} from './styles';

export default function Product() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20}}>Mostra detalhes do produto!</Text>
    </View>
  );
}
