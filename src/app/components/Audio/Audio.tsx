"use client";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PlayButton } from "../svg/PlayButton";
import { PauseButton } from "../svg/PauseButton";

interface AudioInterface {
	src: string;
	title: string;
}

const AudioContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.75rem;
	max-width: 100%;
	height: auto;
	width: fit-content;
	position: relative;
	background: none;
`;

const Title = styled.div`
	justify-self: start;
	font-size: ${(props) => props.theme.fontSize.p};
	// font-weight: bold;
	text-wrap: nowrap;
`;

const AudioSlider = styled.input`
	display: block;
	margin: 0;
	cursor: pointer;
	appearance: none;
	background: none;
	height: 1.5rem;
	justify-self: center;

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
`;

const AudioComponent = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
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

export const Audio = ({ src, title }: AudioInterface) => {
	const [playAudio, setPlayAudio] = useState<boolean>(false);
	const [volume, setVolume] = useState<number>(50);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
		<AudioContainer>
			<audio src={src} ref={audioRef} />
				<Title>{title}</Title>
				<AudioComponent>
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
		</AudioContainer>
	);
};
