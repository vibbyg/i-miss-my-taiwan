

interface AudioInterface {
  src: string;
  pause?: boolean;
  mute?: boolean;
}


export const Audio = ({ src }: AudioInterface) => {

  return (
    <audio controls>
      <source src={src} type="audio/mp3" />
    </audio>
  )
}