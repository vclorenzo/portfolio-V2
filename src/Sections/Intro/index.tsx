import React from 'react';
import Typewriter from 'typewriter-effect';
import {
	StyledSubtitleText,
	StyledTitleText,
} from '../../components/Text/index.styled.ts';
import { VideoBg } from './index.styled.ts';
import Video from '../../assets/bokeh.mp4';
import { StyledLightButton } from '../../components/Buttons/index.styled.ts';
import {
	StyledContentContainer,
	MasterContainer,
	StyledTextContainer,
} from '../../components/Container/index.styled.ts';

const Intro = () => {
	return (
		<MasterContainer>
			<StyledContentContainer id="intro">
				<VideoBg autoPlay loop muted src={Video} typeof="video/mp4" />
				<StyledTextContainer isCentered={true}>
					<StyledTitleText>
						<h1>Vanz Lorenzo</h1>
					</StyledTitleText>
					<StyledSubtitleText>I specialize in</StyledSubtitleText>
					<StyledSubtitleText>
						<Typewriter
							options={{
								strings: ['Frontend Development', 'Backend Development'],
								cursor: '',
								autoStart: true,
								loop: true,
							}}
						/>
					</StyledSubtitleText>
					<a href="#projects">
						<StyledLightButton>View Projects</StyledLightButton>
					</a>
				</StyledTextContainer>
			</StyledContentContainer>
		</MasterContainer>
	);
};

export default Intro;
