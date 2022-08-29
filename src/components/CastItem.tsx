import React from 'react';

import { View, Text } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast,
}

export const CastItem = ({ actor }: Props) => {
  return (
    <View>
      <Text>{actor.name}</Text>
    </View>
  );
}
