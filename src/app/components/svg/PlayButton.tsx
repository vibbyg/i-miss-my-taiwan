

export const PlayButton = ({ onClick, className }: { onClick?: any, className?: any }) => {
  return (
    <svg width="16" height="18" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className}>
      <path d="M12.4806 7.13176C13.1524 7.51565 13.1524 8.48435 12.4806 8.86824L1.49614 15.1451C0.829482 15.526 -1.63321e-07 15.0446 -1.72477e-07 14.2768L-3.22178e-07 1.72318C-3.31334e-07 0.955357 0.829482 0.47399 1.49614 0.854937L12.4806 7.13176Z" fill="black"/>
    </svg>
  )
}