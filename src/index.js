import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
}
