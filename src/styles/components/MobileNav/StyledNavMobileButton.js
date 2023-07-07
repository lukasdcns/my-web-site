import styled from "@emotion/styled";

export const StyledNavMobileButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	margin: -20px;
	padding: 0;
	transform: scale(0.34);

	.line {
		fill: none;
		stroke: #000;
		transition: stroke-dasharray 0.6s cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.line1 {
		stroke-dasharray: 60 207;
	}

	.line2 {
		stroke-dasharray: 60 60;
	}

	.line3 {
		stroke-dasharray: 60 207;
	}

	.line,
	.line1 {
		stroke-width: 6;
	}

	.line2,
	.line3 {
		stroke-width: 6;
	}

	.open .line1 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}

	.open .line2 {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
		stroke-width: 6;
	}

	.open .line3 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
`;
