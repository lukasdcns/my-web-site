import styled from "@emotion/styled";

export const StyledMobileNav = styled.nav`
	padding-top: 20px;

	.nav-list {
		padding: 0 20px;
		list-style: none;

		&__item {
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
				display: block;
				height: 60px;
				width: 100%;
				padding-left: 10px;
			}
		}
	}
`;
