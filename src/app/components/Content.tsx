import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { DayTaiwanGraphic } from "./svg/DayTaiwanGraphic"
import { NightTaiwanGraphic } from "./svg/NightTaiwanGraphic"


const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const Content = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledContent>
      <div>audio1</div>
      {themeContext?.name === 'light' ?
        <DayTaiwanGraphic />
        :
        <NightTaiwanGraphic />
      }
      <div>audio3</div>
    </StyledContent>
  )
}