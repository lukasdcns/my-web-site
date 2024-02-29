import styled from "@emotion/styled";

export const StyledMain = styled.main`
	.main {
		&__header {
			&__picture {
				object-fit: cover;
				width: 378px;
				height: 395.56px;
				border-radius: 25px;
				flex: none;
				order: 0;
				flex-grow: 0;
			}

			&__row-container {
				margin: 0 20px;
			}

			&__projects {
				margin: 20px 0;
			}
		}

		&__folders {
			display: flex;
			flex-direction: column;
		}
	}

	@media screen and (min-width: 768px) {
		.main {
			&__header {
				display: flex;
				justify-content: space-between;

				&__picture {
					height: auto;
					width: calc((100% / 2) - 12.5px);
				}

				&__right {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: calc((100% / 2) - 12.5px);
				}
			}

			&__double-folder {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}

			&__contact {
				&__card {
					width: calc(100% - 50px);
					margin: 25px auto;
				}
			}
		}
	}

	@media screen and (min-width: 1024px) {
		.main {
			&__header {
				&__picture {
					> picture {
						> img {
							object-position: 0 -20px;
						}
					}
				}

				&__right {
					&__card {
						height: 10rem;
						justify-content: space-evenly;
					}
				}
			}
		}
	}

	@media screen and (min-width: 1440px) {
		.main {
			&__header {
				&__picture {
					> picture {
						> img {
							object-position: 0 -10px;
						}
					}
				}
			}
		}
	}
`;
