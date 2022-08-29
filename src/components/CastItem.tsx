import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast,
}

export const CastItem = ({ actor }: Props) => {
  
  const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

  return (
    <View style={ styles.container }>
      {
        actor.profile_path && <Image source={{ uri }} style={{ width: 50, height: 60, borderRadius: 10 }} />
      }

      <View style={ styles.actorInfo }>
        <Text style={{ fontSize: 18, fontWeight: '400', color: '#333' }}>{ actor.name }</Text>
        <Text style={{ fontSize: 18, color: '#777' }}>{ actor.character }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 60,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 16,
    },
    shadowOpacity: 0.74,
    shadowRadius: 6.27,
    elevation: 15,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    paddingTop: 5,
  }
});