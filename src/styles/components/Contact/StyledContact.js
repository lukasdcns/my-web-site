import styled from "@emotion/styled";

export const StyledContact = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.contact-email {
		&__link {
			cursor: pointer;
			text-decoration: none;
			display: flex;
			align-items: center;
			width: 100%;
			margin: 1.5rem 0;

			&__button {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #1d1d1d;
				border: none;
				outline: none;
				height: 50px;
				border-radius: 30px;
				transition: background 0.2s;
				cursor: pointer;

				&__title {
					font-family: var(--font-medium);
					font-style: normal;
					font-weight: 600;
					font-size: 14px;
					line-height: 17px;
					letter-spacing: -0.01em;
					color: #fff;
				}
			}
		}
	}

	.contact-icons {
		width: calc(100% / 2);
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-end;
		margin: auto 0 0;

		.contact-email {
			&__link {
				max-width: 175px;
				margin-right: 15px;
				margin-bottom: 0;
			}
		}

		.contact-icons {
			justify-content: flex-start;
		}
	}
`;
