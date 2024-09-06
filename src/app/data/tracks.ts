interface AudioTrackInterface {
  src: string;
  title: string;
  id?: number;
}

export const taiwanAudioTracks: AudioTrackInterface[] = [
  {
    src: 'audio/garbage-truck.mp3',
    title: 'Garbage Trucks'
  },
  {
    src: 'audio/temple-procession.mp3',
    title: 'Temple Procession'
  },
  {
    src: 'audio/sky-lantern.mp3',
    title: 'Sky Lanterns'
  },
  {
    src: '/audio/markets-of-taiwan.mp3',
    title: 'Street Markets'
  },
  // {
  //   src: '/audio/orange-line.mp3',
  //   title: 'MRT Orange Line'
  // },
  {
    src: '/audio/mrt-entrance.mp3',
    title: 'Entrance to MRT'
  },
  {
    src: '/audio/longshan-temple.mp3',
    title: 'Longshan Temple'
  },
  {
    src: '/audio/mrt-fuxing.mp3',
    title: 'MRT Fuxing Station'
  },
  {
    src: '/audio/scooters.mp3',
    title: 'Scooters !'
  }
]