import styled from "@emotion/styled";

export const StyledContactIcon = styled.div`
	.contact-icon {
		&__link {
			width: 48px;
			height: 48px;
			border-radius: 50%;
			background-color: rgba(255, 255, 255, 0.8);
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			text-decoration: none;

			&___icon {
			}
		}
	}

	@media (min-width: 768px) {
		.contact-icon {
			&__link {
				margin-right: 15px;
			}
		}
	}
`;
