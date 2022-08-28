import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string,
  movies: Movie[],
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View 
      style={{ 
        backgroundColor: 'red', 
        height: title ? 260 : 220,
      }}
    >
      {
        title && <Text style={{ fontSize: 30, fontWeight: '500', color: '#000', marginLeft: 10 }}>{ title }</Text>
      }
      <Text>{movies[0].title}</Text>
      {/* <FlatList
        data={ movies }
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      /> */}
    </View>
  );
}
