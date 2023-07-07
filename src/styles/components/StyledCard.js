import styled from "@emotion/styled";
import { BluredBG1 } from "../../images";

export const StyledCard = styled.section`
	background-image: url(${BluredBG1});
	border-radius: 25px;
	margin: 10px;
	padding: 40px;
	position: relative;
	overflow: hidden;

	.card {
		&__header {
			&__title {
				font-family: var(--font-medium);
				font-style: normal;
				font-size: 24px;
				line-height: 116.7%;
				letter-spacing: -0.03em;
			}
		}
	}
`;
