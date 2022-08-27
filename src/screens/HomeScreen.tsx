import React from 'react';

import { View, ActivityIndicator, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

// import { StackScreenProps } from '@react-navigation/stack';
// interface Props extends StackScreenProps<any, any> { }

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      
      <View style={{ height: 440 }}>
        <Carousel 
          data={ peliculasEnCine }   //arereglo de datos
          renderItem={ ({ item }) => <MoviePoster movie={ item } /> }  //retorna un React.ReactElement/JSX
          mode='parallax'  //muestra el estilo "parallax" del paquete
          style={{ width: windowWidth, justifyContent: 'center'}}   //se refiere al contenedor del carrusel, no al elemento en sí
          pagingEnabled={ true }  //la paginación en falso permite hacer un desplazamiento ultrarrápido
          // windowSize={ 2 }  //y ese desplazamiento ultrarrápido se detiene en múltiplos de tamaño de ventana
          snapEnabled   // el chasquido ayuda a detenerse exactamente en 1 elemento, no en medio de dos más o menos
          width={ 300 }   // estos accesorios son para el artículo en el medio
          height={ 420 }   // estos accesorios son para el artículo en el medio
          modeConfig={{
            parallaxScrollingScale: 0.9,   // Cómo se verá el elemento "principal"
            parallaxScrollingOffset: 40,   // Qué tan separados estarán los elementos adyacentes
            parallaxAdjacentItemScale: 0.75,   // Qué tan grandes se verán los elementos adyacentes en comparación con el elemento "principal"
          }}
        />
      </View>
      
    </View>
  );
}


// return (
//   <View style={{ marginTop: top + 20 }}>
//     {/* height added to show shadowbox entirely  */}
//     <View style={{height: 440}} >
//       <Carousel
//         // Just one of the many styles from the Carousel module
//         mode="parallax"
//         // This style prop regards to the carousel container not to the item itself
//         style={{ width: windowWidth, justifyContent: 'center'}}
//         // Paging in false allows to do superfast scroll
//         pagingEnabled={ false }
//         // and that superfast scroll stops on multiples of windowSize
//         windowSize={ 2 }
//         // the snap helps to stop exactly in 1 item, no in the middle of two or so
//         snapEnabled
//         // This props are for the item in the middle
//         width={ 300 }
//         height={ 420 }
//         modeConfig={{
//           // How the "main" item will look
//           parallaxScrollingScale: 0.9,
//           // How separate the adjacent items will be
//           parallaxScrollingOffset: 40,
//           // How big the adjacent items will look compared to the "main" item
//           parallaxAdjacentItemScale: 0.75,
//         }}
//         data={ moviesNowPlaying }
//         renderItem={ ({ item } ) => <MovieCard movie={ item }/>}
//       />
//     </View>
//   </View>
// );