import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { DayTaiwanGraphic } from "./svg/DayTaiwanGraphic"
import { NightTaiwanGraphic } from "./svg/NightTaiwanGraphic"
import { Audio } from "./Audio/Audio"
import { taiwanAudioTracks } from "../data/tracks"


const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const TracksContainer = styled.div`
  justify-self: center;
`

const TaiwanContainer = styled.div`
`

export const Content = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledContent>
      <TracksContainer>
        {taiwanAudioTracks.map((track, index) => {
          return (
            <Audio id={index} src={track.src} title={track.title} />
          )
        })}
      </TracksContainer>
      <TaiwanContainer>
      {themeContext?.name === 'light' ?
        <DayTaiwanGraphic />
        :
        <NightTaiwanGraphic />
      }
      </TaiwanContainer>
      <TracksContainer>
        {taiwanAudioTracks.map((track, index) => {
          return (
            <Audio id={index} src={track.src} title={track.title} />
          )
        })}
      </TracksContainer>
    </StyledContent>
  )
}