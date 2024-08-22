'use client'

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { Toggle } from "./components/Toggle";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.gradientBackground};
    color: ${(props) => props.theme.colors.primary};
    transition: background 0.5s ease-in, color 0.5s ease-in;
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
  }
`
const ToggleStyle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 5%;
`

export const ThemeWrapper = ({
  children 
}: { 
  children: React.ReactNode; 
}) => {
  const [mode, setMode] = useState('light');

  const handleModeClick = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToggleStyle>
        <Toggle mode={mode} onModeClick={handleModeClick} />
      </ToggleStyle>
      {children}
      </ThemeProvider>
  )
}