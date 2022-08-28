import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie,
  height?: number,
  width?: number,
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const aux1 = movie!

  const uri2 = `https://image.tmdb.org/t/p/w500/4VkGlhGHUzZjnkoYNasW0qhoP3R.jpg`;
  // const aux = movie.title;
  // const uri = `https://image.tmdb.org/t/p/w500${ aux }`;
  // console.log(movie.poster_path);
  
  return (
    <View 
      style={{ 
        width, 
        height, 
        marginHorizontal: 8, 
      }}
    >
      <Text>{aux1.title}</Text>
      <Text>{}</Text>
      {/* <View style={ styles.imageContainer }>
        <Image 
          source={{ uri }}
          style={ styles.image }
        />
      </View> */}
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