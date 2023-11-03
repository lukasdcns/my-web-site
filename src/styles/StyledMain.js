import styled from "@emotion/styled";

export const StyledMain = styled.main`
	.main {
		&__picture {
			border-radius: 24px;
			object-fit: cover;
			width: calc(100% - 20px);
			height: 40vh;
			width: 100%;
			min-height: 300px;
			max-height: 400px;
			margin-bottom: 20px;
		}

		&__row-container {
			margin: 0 20px;
		}

		&__projects {
			margin: 20px 0;
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
			}

			&__projects {
				flex-wrap: wrap;
				flex-direction: row;
				justify-content: space-between;
				margin: 20px 0;

				a:last-child {
					width: 100%;
					margin-top: 20px;

					.project-card {
						&__right {
							width: 80%;

							&__icon {
								width: 50%;
							}
						}
					}
				}
			}

			&__picture {
				width: calc(40vw - 20px);
				min-width: 200px;
				max-width: 460px;
				height: 500px;
				max-height: 570px;
				margin: 0;

				> picture {
					> img {
						object-position: -1rem;
					}
				}
			}
		}
	}

	@media (max-width: 2304px) {
		.main {
			&__picture {
				> picture {
					> img {
						object-position: -5rem;
					}
				}
			}
		}
	}
`;
