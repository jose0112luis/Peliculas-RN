import React, { useEffect } from 'react';

import { View, Text, ActivityIndicator } from 'react-native';

import movieDB from '../api/movieDB';
import { useMovies } from '../hooks/useMovies';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

export const HomeScreen = () => {

  const { nowPlaying, isLoading } = useMovies();

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }
    
  return (
    <View>
      <Text style={{ marginTop:50, fontSize: 24 }}>HomeScreen</Text>
      <Text>{ nowPlaying[0]?.title }</Text>
      <Text>HomeScreen</Text>
    </View>
  );
}
