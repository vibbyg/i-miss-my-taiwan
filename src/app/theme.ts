import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    gradientBackground: '#FFF8D1',
    solidBackground: '#FFF8D1',
    primary: '#000000',
    red: '#8C3939',
  },
  fontSize: {
    p: '1.2rem',
    h3: '2rem',
    h2: '3rem',
    h1: '4.5rem'
  }
}

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    gradientBackground: 'radial-gradient(#2E4482, #100D36)',
    solidBackground: '#100D36',
    primary: '#FFF8D1',
    red: '#8C3939'
  },
  fontSize: {
    p: '1.2rem',
    h3: '2rem',
    h2: '3rem',
    h1: '4.5rem'
  }
}