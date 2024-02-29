import styled from "@emotion/styled";

export const StyledFolder = styled.section`
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	jeustify-content: center;
	align-items: center;

	.folder {
		&__container {
			background: rgba(214, 210, 203, 0.5);
			border-radius: 25px;
			width: calc(100% - 20px);
			height: 136.44px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 10px;
			padding: 10px 0;
		}

		&__name {
			margin-top: 10px;
			font-family: var(--font-main);
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 20px;
		}
	}

	@media screen and (min-width: 768px) {
		.folder {
			&__container {
				width: 100%;
			}
		}
	}
`;
