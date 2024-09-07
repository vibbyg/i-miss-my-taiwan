import styled from "styled-components";
import { PauseButton } from "../svg/PauseButton";
import { PlayButton } from "../svg/PlayButton";
import { Ref, useEffect, useRef, useState } from "react";


const AudioSlider = styled.input`
	display: block;
	margin: 0;
	cursor: pointer;
	appearance: none;
	background: none;
	height: 1rem;
	justify-self: center;
	width: 15rem;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 1rem;
		height: 1rem;
		border-radius: 100%;
		background: ${(props) => props.theme.colors.primary};
		border: 0.2rem solid ${(props) => props.theme.colors.solidBackground};
		margin-top: -0.4rem;
	}

	&::-webkit-slider-runnable-track {
		border: none;
		border-radius: 0.1rem;
		height: 0.2rem;
		background: ${(props) => props.theme.colors.primary};
	}

	@media (max-width: 480px) and (orientation: portrait) {
		&::-webkit-slider-thumb {
			width: 0.85rem;
			height: 0.85rem;
			margin-top: -0.3rem;
		}

		&::-webkit-slider-runnable-track {
			height: 0.15rem;
		}
	}
`;

const AudioComponent = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
  align-items: center;
`;

const StyledPlayButton = styled(PlayButton)`
	cursor: pointer;
	& path {
		fill: ${(props) => props.theme.colors.primary};
	}
`;

const StyledPauseButton = styled(PauseButton)`
	cursor: pointer;
	& rect {
		fill: ${(props) => props.theme.colors.primary};
	}
`;

interface AudioPlayerInterface {
  src: string;
	loop?: boolean;
}

const loopBeforeEnd = (audio: HTMLAudioElement) => {
	const buffer = 0.44;
	if (audio.currentTime > audio.duration - buffer) {
		audio.currentTime = 0
		audio.play()
	}
}

export const AudioPlayer = ({src, loop}: AudioPlayerInterface) => {
  const [playAudio, setPlayAudio] = useState<boolean>(false);
	const [volume, setVolume] = useState<number>(70);
  const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		audioRef.current?.addEventListener("timeupdate", () => {
			const buffer = 0.44
			if(audioRef.current && audioRef.current.currentTime > audioRef.current.duration - buffer) {
				audioRef.current.currentTime = 0
				audioRef.current.play()
			}
		})
	}, [])
	if (audioRef.current) {
		audioRef.current.loop = loop || true;
	}

  const handlePlayClick = () => {
    if (!playAudio) {
      audioRef.current?.play();
    }
    else {
      audioRef.current?.pause();
    }
		setPlayAudio(!playAudio);
	};

	const handleSliderMove = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(audioRef.current) {
      audioRef.current.volume = event.currentTarget.valueAsNumber / 100;
    } 
		setVolume(event.currentTarget.valueAsNumber);
	};
  
  return (
    <AudioComponent>
      <audio src={src} ref={audioRef} />
					{playAudio ? (
						<StyledPauseButton onClick={handlePlayClick} />
					) : (
						<StyledPlayButton onClick={handlePlayClick} />
					)}
					<AudioSlider
						type="range"
						min="1"
						max="100"
						value={volume}
						onChange={handleSliderMove}
					/>
				</AudioComponent>
  )
}