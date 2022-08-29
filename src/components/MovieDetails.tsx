import React from 'react';

import { View, Text } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';

interface Props {
  moveiFull: MovieFull,
  cast: Cast[],
}

export const MovieDetails = ({ moveiFull, cast }: Props) => {
  return (
    <>
    {/* Detalles */}
    <View style={{ marginHorizontal: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        {/* Calificacióon de la película */}
        <IconI name='star' color='#FA9C18' size={ 16 } />
        <Text>  { moveiFull.vote_average }</Text>
        {/* Géneros */}
        <Text style={{ marginLeft: 10 }}>
          |   { moveiFull.genres.map(gen => gen.name).join(', ') }
        </Text>
      </View>

      {/* Historia / Resumen */}
      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: '500', color: '#000' }}>Historia</Text>
      <Text style={{ fontSize: 16 }}>{ moveiFull.overview }</Text>

      {/* Presupuesto */}
      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: '500', color: '#000' }}>Presupuesto</Text>
      <Text style={{ fontSize: 18 }}>{ currencyFormatter.format( moveiFull.budget, {code: 'USD'} ) }</Text>
    </View>

    {/* Casting */}
    <View style={{ marginTop: 10, marginBottom: 150 }}>
      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: '500', color: '#000', marginHorizontal: 20 }}>Actores</Text>
      <CastItem actor={cast[0]} />
    </View>

    <View>
      {}
    </View>
    </>
  );
}
