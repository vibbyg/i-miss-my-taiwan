import styled from "styled-components";
import { DayToggle } from "./svg/DayToggle";
import { NightToggle } from "./svg/NightToggle";

interface Toggle {
  mode: string | undefined;
  onModeClick?: any;
}

const DayToggleDiv = styled.div`
  width: 74px;
  height: 74px;

  @media (max-width: 375px) {
    width: 54px;
    height: 54px;
  }
`
const NightToggleDiv = styled.div`
  width: 51px;
  height: 63px;

  @media (max-width: 375px) {
    width: 37px;
    height: 46px;
  }
`

export const Toggle = ({mode, onModeClick}: Toggle) => {
  return (
    mode === 'light' ?
    <DayToggleDiv>
      <DayToggle onClick={onModeClick} />
    </DayToggleDiv>
    :
    <NightToggleDiv>
      <NightToggle onClick={onModeClick} />
    </NightToggleDiv>
  )
}