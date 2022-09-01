import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      {/* <GestureHandlerRootView style={{ flex: 1 }}>{ }</GestureHandlerRootView>; */}
      {/* <Navigation /> */}
      <FadeScreen />
    </NavigationContainer>
  );
}

export default App;