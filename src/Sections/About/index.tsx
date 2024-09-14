import React from 'react';
import {
	StyledTextSp,
	StyledTitleText,
} from '../../components/Text/index.styled.ts';
import { StyledDarkButton } from '../../components/Buttons/index.styled.ts';
import Lottie from 'lottie-react';
import animationData from '../../assets/man.json';
import {
	StyledItemContainer,
	MasterContainer,
	StyledSplitContainer,
	StyledTextContainer,
} from '../../components/Container/index.styled.ts';
import bgImage from '../../assets/svg/blob-scene-haikei.svg';
import { SpecialTextContainer } from './index.styled.ts';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<MasterContainer bgImage={bgImage} withPadding={true}>
			<StyledSplitContainer isFullScreen={false} isGapped={true} id="about">
				<StyledItemContainer>
					<Lottie animationData={animationData} />
				</StyledItemContainer>
				<StyledItemContainer isExtended={true}>
					<StyledTextContainer>
						<StyledTitleText textColor={'dark'}>About Me</StyledTitleText>
						<SpecialTextContainer>
							<StyledTextSp>
								Hi! my name is Vanz. I am a Software engineer with over 4 years
								of experience in the industry. My expertise primarily focuses in
								Frontend Development and Software Automation, along with a
								familiar understanding of Backend Development. Continuously
								learning new technologies.
							</StyledTextSp>
						</SpecialTextContainer>
						<Link
							to={'/profile'}
							target="_blank"
							rel="noopener noreferrer"
							style={{ display: 'inline-block', maxWidth: '150px' }}
						>
							<StyledDarkButton>View My CV</StyledDarkButton>
						</Link>
					</StyledTextContainer>
				</StyledItemContainer>
			</StyledSplitContainer>
		</MasterContainer>
	);
};

export default About;
