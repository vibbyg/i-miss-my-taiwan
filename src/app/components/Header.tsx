import styled from "styled-components"


const Title = styled.div`
  font-size: ${props => props.theme.fontSize.h1};
  font-weight: bold;

`
const Subtitle = styled.div`
  font-size: ${props => props.theme.fontSize.p};
`
const StyledHeader = styled.div`
  margin: 3em;
  margin-bottom: 1em;
`

export function Header() {

  return (
    <StyledHeader>
      <Title>I Miss My 台灣</Title>
      <Subtitle>Immerse yourself in the sounds of Taiwan</Subtitle>
    </StyledHeader>
  )
}