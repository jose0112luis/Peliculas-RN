import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import movieDB from '../api/movieDB';
// import axios from 'axios';

export const HomeScreen = () => {

  useEffect(() => {
    movieDB.get('/now_playing')
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => console.log(err));
  }, [])
  
  return (
    <View>
      <Text style={{ marginTop:50, fontSize: 24 }}>HomeScreen</Text>
      <Text>{}</Text>
      <Text>HomeScreen</Text>
    </View>
  );
}
