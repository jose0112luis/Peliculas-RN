import React from 'react';

import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }
    
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top -10 }}>

          {/* carousel principal - grande */}
          <View style={{ height: 400 }}>
            <Carousel 
              data={ nowPlaying }    //arreglo de datos
              renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }   //retorna un React.ReactElement/JSX
              width={ 280 }   // estos accesorios son para el artículo en el medio
              height={ 400 }   // estos accesorios son para el artículo en el medio
              mode='parallax'    //muestra el estilo "parallax" del paquete
              style={{ width: windowWidth, justifyContent: 'center' }}   //se refiere al contenedor del carrusel, no al elemento en sí
              pagingEnabled={ true }    //la paginación en falso permite hacer un desplazamiento ultrarrápido
              // windowSize={ 2 }  //y ese desplazamiento ultrarrápido se detiene en múltiplos de tamaño de ventana
              snapEnabled   // el chasquido ayuda a detenerse exactamente en 1 elemento, no en medio de dos más o menos
              modeConfig={{
                parallaxScrollingScale: 0.8,   // Cómo se verá el elemento "principal"
                parallaxScrollingOffset: 50,   // Qué tan separados estarán los elementos adyacentes
                parallaxAdjacentItemScale: 0.65,   // Qué tan grandes se verán los elementos adyacentes en comparación con el elemento "principal"
              }}
            />
          </View>

          {/* carousel de películas populares */}
          <HorizontalSlider title='Populares' movies={ popular } />

          {/* carousel de películas mejor valoradas */}
          <HorizontalSlider title='Mejor valoradas' movies={ topRated } />

          {/* carousel de películas próximas */}
          <HorizontalSlider title='Próximos estrenos' movies={ upcoming } />

        </View>
      </ScrollView>
    </GradientBackground>
  );
}
