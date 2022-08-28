import React from 'react';

import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height; 

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
  
  return (
    <ScrollView>
      <View style={ styles.imgContainer }>
        <Image 
          source={{ uri }}
          style={ styles.posterImage }
        />
      </View>
  
      {/* Información de la película */}
      <View style={ styles.marginContainer }>
        <Text style={ styles.subTitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7, //70% del screen
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 16,
    },
    shadowOpacity: 0.74,
    shadowRadius: 6.27,
    elevation: 25,
    // borderBottomEndRadius: 50,
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
    fontWeight: '500',
    color: '#000'
  }
});