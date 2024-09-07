'use client'
import styled, { ThemeContext } from "styled-components";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Toggle } from "./components/Toggle";
import { useUpdateTheme } from "./theme-wrapper";
import { useContext } from "react";
import { darkTheme, lightTheme } from "./theme";


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
    width: 80px;
    align-self: center;
  }
`

const NavBar = styled.div`
  @media (orientation: portrait) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (orientation: portrait) and (max-width: 480px) {
    gap: 0.5rem;
    margin: 0.5rem 0.5rem 0rem 0.5rem;
  }

  @media (orientation: portrait) and (max-width: 800px) {
    gap: 1rem;
    margin: 0.5rem 0.9rem 0rem 0.9rem;
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
      <NavBar>
      <Footer />
      <ToggleStyle>
        <Toggle mode={currentTheme?.name} onModeClick={handleThemeChange} />
      </ToggleStyle>
      </NavBar>
      <Header />
      <Content />
    </Main>
  );
}
