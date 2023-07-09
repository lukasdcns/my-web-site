import styled from "@emotion/styled";
import { BluredBG3 } from "../../images";

export const StyledCard = styled.section`
	background-image: url(${BluredBG3});
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
		&__article {
			font-family: var(--font-regular);
			font-weight: 400;
			text-align: justify;
			font-size: 16px;
			line-height: 151.34%;
			margin-top: 1.5rem;
		}
	}

	@media (min-width: 768px) {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		max-width: 700px;
		padding-right: 100px;
		min-width: 500px;
		display: flex;
		flex-direction: column;

		.card {
			&__header {
				&__title {
					font-size: 40px;
					line-height: 47px;
				}
			}

			&__article {
				margin-top: 3rem;
			}
		}
	}
`;
