"use client";
import styled from "styled-components";
import { AudioPlayer } from "./AudioPlayer";

interface AudioInterface {
	src: string;
	title: string;
  id?: number;
}

const AudioContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.5rem;
	max-width: 100%;
	height: auto;
	width: fit-content;
	position: relative;
	background: none;
  margin-bottom: 2rem;
`;

const Title = styled.div`
	justify-self: start;
	font-size: ${(props) => props.theme.fontSize.p};
	// font-weight: bold;
	text-wrap: nowrap;
`;


export const Audio = ({ src, title }: AudioInterface) => {


	return (
		<AudioContainer>
				<Title>{title}</Title>
				<AudioPlayer src={src} />
		</AudioContainer>
	);
};
