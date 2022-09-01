import React, { useRef } from 'react';

import { View, Animated, Button } from 'react-native';

export const FadeScreen = () => {

  // opacity es la variable de referencia del componente hijo
  const opacity = useRef( new Animated.Value(0) ).current;  //creamos una nueva instancia de Animated

  const fadeIn = () => {
    //para manejar el tiempo
    Animated.timing(
      opacity,
      {
        toValue: 1,  //para q el valor de la opacidad pace de 0 (inicial) a 1 (establecido)
        duration: 300,  //la duración en milisegundos 
        useNativeDriver: true  //esto va hacer q tambn sea acelerado por hardware
      }
    ).start();
  }

  const fadeOut = () => {
    //para manejar el tiempo
    Animated.timing(
      opacity,
      {
        toValue: 0,  //para q el valor de la opacidad pace de 1 a 0
        duration: 300,  //la duración en milisegundos 
        useNativeDriver: true  //esto va hacer q tambn sea acelerado por hardware
      }
    ).start();
  }

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: 'grey', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Animated.View 
        style={{ 
          backgroundColor: '#084F6A', 
          width: 150, 
          height: 150, 
          borderColor: '#FFF', 
          borderWidth: 10 ,
          marginBottom: 15,
          opacity: opacity
        }} 
      />

      <Button title='Fade In' onPress={ fadeIn } />
      <Button title='Fade Out' onPress={ fadeOut } />
    </View>
  );
}
