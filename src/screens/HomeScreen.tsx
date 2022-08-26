import React from 'react';

import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

export const HomeScreen = ( { navigation: { navigate } }: Props ) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text></Text>
      <Button title='Ii detalle' onPress={() => navigate('DetailScreen')} />
    </View>
  );
}
