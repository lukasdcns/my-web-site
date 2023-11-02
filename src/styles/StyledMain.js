import styled from "@emotion/styled";

export const StyledMain = styled.main`
	.main {
		&__picture {
			border-radius: 24px;
			margin: 10px;
			object-fit: cover;
			width: calc(100% - 20px);
			height: 40vh;
			min-height: 300px;
			max-height: 400px;
		}
	}

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;

		.main {
			&__row-container {
				display: flex;
				flex-direction: row-reverse;
				justify-content: center;
				margin: 10px 0;
			}

			&__projects {
				flex-wrap: wrap;
				flex-direction: row;
			}

			&__picture {
				width: calc(40vw - 40px);
				min-width: 200px;
				max-width: 460px;
				height: 500px;
				max-height: 570px;

				> picture {
					> img {
						object-position: -1rem;
					}
				}
			}
		}
	}
`;
