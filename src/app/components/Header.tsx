import styled from "styled-components"
import { useEffect, useRef } from "react"
import Typed from "typed.js"


const Title = styled.div`
  font-size: ${props => props.theme.fontSize.h1};
  font-weight: bold;
  line-height: 1.4;
  white-space: nowrap;

  @media (max-width: 580px) {
    font-size: ${props => props.theme.fontSize.h2}
  }

`
const Subtitle = styled.div`
  font-size: ${props => props.theme.fontSize.p};
  @media (max-width: 375px) {
    font-size: ${props => props.theme.fontSize.mp}
  }
`
const StyledHeader = styled.div`
  margin: 2em 2em 0.5em 2em;

  @media (orientation: portrait) {
    margin-top: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export function Header() {
  const headerEl = useRef(null)
  const typed = useRef<null | Typed>(null)

  useEffect(() => {
    const options = {
      strings: ["Taiwan", "台灣"],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      showCursor: false
    }

    typed.current = new Typed(headerEl.current, options)

    return () => {
      typed.current?.destroy()
    }
  }, [])

  return (
    <StyledHeader>
      <Title>
      I Miss my <span ref={headerEl} onMouseOver={() => {typed.current?.reset(true);}} />
      </Title>
      <Subtitle>Immerse yourself in the sounds of Taiwan</Subtitle>
    </StyledHeader>
  )
}