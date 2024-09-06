'use client'
import styled, { ThemeContext } from "styled-components";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Toggle } from "./components/Toggle";
import { useUpdateTheme } from "./theme-wrapper";
import { useContext } from "react";
import { darkTheme, lightTheme } from "./theme";


interface HomeInterface {
  mode: string,
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

const ToggleStyle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 5%;

  @media (orientation: portrait) {
    position: relative;
    top: 0%;
    right: 0%;
  }
`

export default function Home() {
  const updateTheme = useUpdateTheme();
  const currentTheme = useContext(ThemeContext);

  const handleThemeChange = () => {
    console.log(currentTheme?.name);
    if (currentTheme?.name == 'light') {
      updateTheme(darkTheme)
    }
    else {
      updateTheme(lightTheme)
    }
  }

  return (
    <Main>
      <ToggleStyle>
        <Toggle mode={currentTheme?.name} onModeClick={handleThemeChange} />
      </ToggleStyle>
      <Header />
      <Content />
      <Footer />
    </Main>
  );
}
