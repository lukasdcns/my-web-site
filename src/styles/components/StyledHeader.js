import styled from "@emotion/styled";

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;

	.header {
		display: flex;
		align-items: center;
		margin-left: 20px;

		&__title {
			text-transform: uppercase;
			font-size: 1rem;
			font-family: var(--font-medium);
			margin-left: 0.65rem;
		}
	}

	.mobile-nav.close {
		position: fixed;
		width: 100vw;
		height: 100vh;
		right: 0;
		left: 0;
		bottom: 0;
		top: 75px;
		background: #fff;
		opacity: 0;
		transition: transform 0.25s ease, opacity 0.2s;
		transform-origin: right top;
		transform: translate(100%);
		z-index: 2000;
	}

	.mobile-nav.open {
		position: fixed;
		width: 100vw;
		height: 100vh;
		inset: 75px 0 0;
		background: rgb(255, 255, 255);
		opacity: 0.99;
		transition: transform 0.25s ease 0s, opacity 0.2s ease 0s;
		transform-origin: right top;
		transform: translate(0px);
		z-index: 2000;
	}

	.desktop {
		display: none;
	}

	@media (min-width: 768px) {
		.mobile {
			display: none;
		}

		.desktop {
			display: flex;
		}
	}
`;
