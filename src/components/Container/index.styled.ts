import styled from 'styled-components';

export const MasterContainer = styled.div<{
	bgColor?: string;
	bgImage?: string;
	withPadding?: boolean;
}>`
	min-height: 724px;

	${(props) => (props.bgColor ? `background:${props.bgColor}` : '')};
	${(props) =>
		props.bgImage
			? `background: url(${props.bgImage}) center/cover no-repeat;`
			: ''}
	${(props) =>
		props.withPadding
			? `padding-top: 70px;
  padding-bottom: 70px;`
			: ''}
  position: relative;
	overflow: hidden;
`;

export const StyledContentContainer = styled.div<{
	isFullScreen?: boolean;
}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	${(props) => (props.isFullScreen ? '' : `max-width: 1176px;`)}
`;

export const StyledSplitContainer = styled.div<{
	isFullScreen?: boolean;
	isFullHeight?: boolean;
	isGapped?: boolean;
	isReversed?: boolean;
}>`
	display: flex;
	/* height: 100vh; */
	${(props) => (props.isFullScreen ? '' : `max-width: 1176px;`)}
	${(props) => (props.isGapped ? `grid-gap: 3rem;` : '')}
  margin: 0 auto;

	@media (max-width: 820px) {
		${(props) =>
			props.isReversed
				? `flex-direction: column-reverse;`
				: `flex-direction: column;`}
		grid-gap: 0;
	}
	@media (min-width: 1025px) {
		flex-direction: row;
	}
`;

export const StyledItemContainer = styled.div<{ isExtended?: boolean }>`
	width: 100%;
	${(props) => (props.isExtended ? `height: 120vh;` : `height: 100vh;`)}
	display: grid;
	align-items: center;

	@media (max-width: 540px) {
		height: 80vh;
	}
`;

export const StyledTextContainer = styled.div<{ isCentered?: boolean }>`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 3rem;
	${(props) => (props.isCentered ? `align-items:center` : '')}
`;
