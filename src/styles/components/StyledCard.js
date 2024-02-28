import styled from "@emotion/styled";
import { BluredBG3 } from "../../images";

export const StyledCard = styled.section`
	background-image: url(${BluredBG3});
	border-radius: 25px;
	margin: 25px 0;
	padding: 25px;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.card {
		&__header {
			&__title {
				font-family: var(--font-main);
				font-size: 20px;
				font-weight: bold;
			}
		}

		&__article {
			font-family: var(--font-main);
			font-weight: regular;
			font-size: 16px;
			text-align: left;
			margin-top: 20px;
			line-height: 20px;
		}
	}
`;
