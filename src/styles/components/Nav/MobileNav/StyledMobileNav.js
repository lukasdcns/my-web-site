import styled from "@emotion/styled";

export const StyledMobileNav = styled.nav`
	.nav-list {
		padding: 0 20px;
		list-style: none;

		&__item {
			margin: 30px 0;
			&__link {
				color: #000000;
				text-decoration: none;
				text-transform: capitalize;
				font-family: var(--font-medium);
				font-style: normal;
				font-weight: 600;
				font-size: 24px;
				line-height: 30px;
				letter-spacing: -0.01em;
				margin-top: 30px;
				margin-left: 20px;
			}
		}
	}
`;
