import { useRef } from 'react';
import { Animated } from 'react-native';


export const useFade = () => {

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

  return {
    opacity,
    fadeIn,
    fadeOut
  }
} 
