import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: '#FFF8D1',
    primary: '#000000',
    red: '#8C3939',
  },
  fontSize: {
    p: '1rem',
    h3: '2rem',
    h2: '3rem',
    h1: '5rem'
  }
}

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: 'radial-gradient(#2E4482, #100D36)',
    primary: '#FFF8D1',
    red: '#8C3939'
  },
  fontSize: {
    p: '1rem',
    h3: '2rem',
    h2: '3rem',
    h1: '5rem'
  }
}