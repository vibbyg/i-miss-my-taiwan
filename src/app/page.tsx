'use client'
import styled from "styled-components";
import { Header } from "./components/Header";
import { Content } from "./components/Content";


const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Home() {

  return (
    <Main>
      <Header />
      <Content />
    </Main>
  );
}
