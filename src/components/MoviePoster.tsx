import React from 'react';

import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie,
  height?: number,
  width?: number,
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      onPress={ () => navigation.navigate('DetailScreen', movie) }  //es un error pero si funciona la app, para quitar ese error utilizar los props de navigation
      activeOpacity={ 0.8 }
      style={{ 
        width, 
        height, 
        marginHorizontal: 8, 
      }}
    >
      <View style={ styles.imageContainer }>
        <Image 
          source={{ uri }}
          style={ styles.image }
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 16,
    },
    shadowOpacity: 0.74,
    shadowRadius: 6.27,
    elevation: 25,
  },
});