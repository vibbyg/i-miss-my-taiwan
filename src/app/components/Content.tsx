import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { DayTaiwanGraphic } from "./svg/DayTaiwanGraphic"
import { NightTaiwanGraphic } from "./svg/NightTaiwanGraphic"
import { Audio } from "./Audio/Audio"
import { taiwanAudioTracks } from "../data/tracks"
import { Header } from "./Header"


const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (orientation: portrait) {
    flex-direction: column;
    gap: 1rem;
  }
  

`
const TracksContainer = styled.div`
  justify-self: flex-start;
  margin-right: 1rem;

  @media (orientation: portrait) {
    margin-right: 0rem;
  }
`
const SvgContainer = styled.div`
  width: 75%;
  min-width: 400px;
`


export const Content = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledContent>
      {/* <TracksContainer>
        {taiwanAudioTracks.slice(0, 3).map((track, index) => {
          return (
            <Audio key={index} src={track.src} title={track.title} />
          )
        })}
      </TracksContainer> */}
      <SvgContainer>
      {themeContext?.name === 'light' ?
        <DayTaiwanGraphic />
        :
        <NightTaiwanGraphic />
      }
      </SvgContainer>
      <TracksContainer>
        {taiwanAudioTracks.map((track, index) => {
          return (
            <Audio key={index} src={track.src} title={track.title} />
          )
        })}
      </TracksContainer>
    </StyledContent>
  )
}