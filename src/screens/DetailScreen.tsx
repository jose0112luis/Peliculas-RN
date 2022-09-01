import React from 'react';

import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import IconI from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height; 

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  
  return (
    <ScrollView>

      <View style={ styles.imgContainer }>
        <View style={ styles.imgBorder }>
          <Image 
            source={{ uri }}
            style={ styles.posterImage }
          />
        </View>
      </View>
  
      {/* Información de la película */}
      <View style={ styles.marginContainer }>
        <Text style={ styles.subTitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>
      { 
        isLoading 
          ? <ActivityIndicator size={ 35 } color='grey' style={{ marginTop:20 }} /> 
          : <MovieDetails moveiFull={ movieFull! } cast={ cast } />
      }

      {/* Botón para regresar */}
      <TouchableOpacity 
        style={ styles.backButton }
        onPress={ () => navigation.goBack() }
        activeOpacity={ 0.4 }
      >
        <View style={ styles.fondoBTN }></View>
        <IconI name='arrow-back' color='#FFF' size={ 40 } />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: screenHeight * 0.65, //65% del screen
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 16,
    },
    shadowOpacity: 0.74,
    shadowRadius: 6.27,
    elevation: 15,
  },
  imgBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000'
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 20,
  },
  fondoBTN: {
    position: 'absolute',
    width: 45,
    height: 45,
    top: -1.5,
    left: -3.5,
    backgroundColor: '#000',
    opacity: 0.5,
    borderRadius: 50,
  },
});