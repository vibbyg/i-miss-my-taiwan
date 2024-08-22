export const PauseButton = ({ onClick, className }: { onClick?: any, className?: any}) => {
  return (
    <svg width="18" height="21" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className}>
        <rect width="4" height="14" rx="2" />
        <rect x="8" width="4" height="14" rx="2" />
</svg>


  )
}