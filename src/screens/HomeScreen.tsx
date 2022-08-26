import React from 'react';

import { View, Text, ActivityIndicator } from 'react-native';
import { useMovies } from '../hooks/useMovies';

// import { StackScreenProps } from '@react-navigation/stack';
// interface Props extends StackScreenProps<any, any> { }

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    );
  }

  return (
    <View>
      {/* <Button title='Ii detalle' onPress={() => navigate('DetailScreen')} /> */}
      <Text>HomeScreen</Text>
      {/* <Text>{JSON.stringify(peliculasEnCine, null, 4)}</Text> */}
    </View>
  );
}
