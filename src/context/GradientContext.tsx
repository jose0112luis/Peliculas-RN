import React from 'react';

import { createContext, useState } from 'react';

interface ImageColor {
  primary: string,
  secondary: string,
}

interface ContextProps {
  colors: ImageColor,
  prevColors: ImageColor,
  setMainColors: (colors: ImageColor) => void, 
  setMainPrevColors: (colors: ImageColor) => void,
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

  const [colors, setColors] = useState<ImageColor>({
    primary: 'red',
    secondary: 'blue'
  });

  const [prevColors, setPrevColors] = useState<ImageColor>({
    primary: 'transparent',
    secondary: 'transparent'
  });
  
  const setMainColors = ( colors: ImageColor ) => {
    setColors( colors );
  }

  const setMainPrevColors = ( colors: ImageColor ) => {
    setPrevColors( colors );
  }

  return (
    <GradientContext.Provider 
      value={{ 
        colors,
        prevColors,
        setMainColors,
        setMainPrevColors
      }}
    >
      { children }
    </GradientContext.Provider>
  );
}