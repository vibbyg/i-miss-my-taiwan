
interface DayToggle {
  onClick: any;
}

export const DayToggle = ({onClick}: DayToggle) => {
  return (
    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
<circle cx="37" cy="37" r="18" fill="#FFA800"/>
<ellipse cx="15.0711" cy="59.0711" rx="7.5" ry="2.5" transform="rotate(-45 15.0711 59.0711)" fill="#FFA800"/>
<ellipse cx="62.0711" cy="59.0711" rx="7.5" ry="2.5" transform="rotate(45 62.0711 59.0711)" fill="#FFA800"/>
<ellipse cx="62.0711" cy="15.0711" rx="7.5" ry="2.5" transform="rotate(-45 62.0711 15.0711)" fill="#FFA800"/>
<ellipse cx="15.0711" cy="15.0711" rx="7.5" ry="2.5" transform="rotate(45 15.0711 15.0711)" fill="#FFA800"/>
<ellipse cx="7.5" cy="36.5" rx="7.5" ry="2.5" fill="#FFA800"/>
<ellipse cx="66.5" cy="36.5" rx="7.5" ry="2.5" fill="#FFA800"/>
<ellipse cx="36.5" cy="66.5" rx="7.5" ry="2.5" transform="rotate(-90 36.5 66.5)" fill="#FFA800"/>
<ellipse cx="36.5" cy="7.5" rx="7.5" ry="2.5" transform="rotate(-90 36.5 7.5)" fill="#FFA800"/>
</svg>

  )
}