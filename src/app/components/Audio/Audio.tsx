"use client";
import styled from "styled-components";
import { AudioSlider } from "./AudioSlider";

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
  margin: 0.5rem;
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
				<AudioSlider src={src} />
		</AudioContainer>
	);
};
