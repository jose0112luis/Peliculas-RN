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
    <View style={{ height: title ? 250 : 220,}}>
      {
        title && <Text style={{ fontSize: 24, fontWeight: '500', color: '#000', marginLeft: 10, marginBottom: 5 }}>{ title }</Text>
      }
      <FlatList
        data={ movies }    //arreglo de datos
        renderItem={ ({ item }: any) => (    //retorna un React.ReactElement/JSX
          <MoviePoster movie={ item } width={ 140 } height={ 200 } />
        )}
        keyExtractor={ ( item ) => item.id.toString() }   //necesita un key como .map(key) de tipo string
        horizontal={ true }    //true para un scroll horizontal - false para un scroll vertical
        showsHorizontalScrollIndicator={ false }  //false para ocultar la barra de scroll
      />
    </View>
  );
}
