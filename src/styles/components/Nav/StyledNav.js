import styled from "@emotion/styled";

export const StyledNav = styled.nav`
	.nav-list {
		padding: 0 20px;
		padding-right: 0px;
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		&__item {
			margin-left: 50px;
			&__link {
				color: #000000;
				text-decoration: none;
				text-transform: capitalize;
				font-family: var(--font-medium);
				font-style: normal;
				font-weight: 500;
				font-size: 14px;
				line-height: 18px;
				letter-spacing: -0.01em;
			}
		}
	}
`;
