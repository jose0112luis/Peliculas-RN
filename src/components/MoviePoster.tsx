import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  // console.log(movie.poster_path);
  
  return (
    <View 
      style={{ 
        width: 300, 
        height: 420, 
        // backgroundColor: 'red' 
      }}
    >
      <View style={ styles.imageContainer }>
        <Image 
          source={{ uri }}
          style={ styles.image }
        />
      </View>
    </View>
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