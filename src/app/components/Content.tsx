import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { DayTaiwanGraphic } from "./svg/DayTaiwanGraphic"
import { NightTaiwanGraphic } from "./svg/NightTaiwanGraphic"
import { Audio } from "./Audio/Audio"


const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center
`

export const Content = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledContent>
      <div>
        <Audio src="audio/garbage-truck.mp3" title='Garbage Truck'/>
      </div>
      {themeContext?.name === 'light' ?
        <DayTaiwanGraphic />
        :
        <NightTaiwanGraphic />
      }
      <div>audio3</div>
    </StyledContent>
  )
}