'use client'

import { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { createContext, useCallback, useContext, useState } from "react";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.solidBackground};
    color: ${(props) => props.theme.colors.primary};
    transition: background 0.5s ease-in, color 0.5s ease-in;
    position: relative;
    margin: 0;
  }
`

const ThemeContext = createContext((changes: Partial<DefaultTheme>) => console.error('attempted to set theme outside ThemeUpdateContext.Provider'))

export const ThemeWrapper = ({
  children 
}: { 
  children: React.ReactNode; 
}) => {

  const [mode, setMode] = useState(lightTheme);
  const updateTheme = useCallback(
    (changes: Partial<DefaultTheme>) => {
      setMode({...mode, ...changes})
    },
    [mode, setMode]
  )
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <ThemeContext.Provider value={updateTheme}>
        {children}
      </ThemeContext.Provider>
      </ThemeProvider>
  )
}

export const useUpdateTheme = () => useContext(ThemeContext);