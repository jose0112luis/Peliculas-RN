import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      {/* <GestureHandlerRootView style={{ flex: 1 }}>{ }</GestureHandlerRootView>; */}
      <Navigation />
    </NavigationContainer>
  );
}

export default App;