import styled from "@emotion/styled";

export const StyledProjectCard = styled.a`
	text-decoration: none;
	background-color: #f8f8f8;
	width: calc(100% - 20px);
	height: 30vh;
	min-height: 300px;
	max-height: 400px;
	margin: 10px;
	border-radius: 25px;
	display: flex;
	flex-direction: row;
	transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
	font-family: var(--font-regular);
	color: #2f2f2f;

	.project-card {
		&__left {
			width: 40%;
			padding: 40px;
			padding-right: 0;

			&__title {
				font-size: 25px;
				font-family: var(--font-semibold);
			}

			&__tag {
				margin: 5px 0;
				span {
					transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
					background: #e5e5e5;
					padding: 0.2rem 0.5rem;
					border-radius: 7px;
					color: #2f2f2f;
					font-size: 12px;
					letter-spacing: -0.5px;
					font-family: var(--font-regular);
				}
			}

			&__job {
				transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
				padding-top: 5px;
				font-size: 12px;
				letter-spacing: -0.5px;
			}
		}

		&__right {
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			&__icon {
				width: 100%;
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
				filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
			}
		}
	}
`;
