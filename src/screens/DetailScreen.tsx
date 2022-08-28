import React from 'react';

import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  
  console.log(movie.title);
  
  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>{movie.title}</Text>
      <Text>{movie.original_title}</Text>
      <Text>{movie.overview}</Text>
    </View>
  );
}
