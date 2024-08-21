
interface NightToggle {
  onClick: any;
}

export const NightToggle = ({onClick}: NightToggle) => {
  return (
    <svg width="51" height="63" viewBox="0 0 51 63" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 56.1843C18.8908 52.4961 33.1474 35.8556 33.1474 15.8853C33.1474 10.2534 32.0136 4.88639 29.9617 0C42.2413 4.51823 51 16.3199 51 30.1673C51 47.9148 36.6128 62.302 18.8653 62.302C11.8165 62.302 5.2978 60.0325 0 56.1843Z" fill="#F9F6A9"/>
</svg>

  )
}