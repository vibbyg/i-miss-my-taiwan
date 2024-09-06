import { DayToggle } from "./svg/DayToggle";
import { NightToggle } from "./svg/NightToggle";

interface Toggle {
  mode: string | undefined;
  onModeClick?: any;
}

export const Toggle = ({mode, onModeClick}: Toggle) => {
  return (
    mode === 'light' ?
    <DayToggle onClick={onModeClick} />
    :
    <NightToggle onClick={onModeClick} />
  )
}