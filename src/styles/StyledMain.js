import styled from "@emotion/styled";

export const StyledMain = styled.main`
	.main {
		&__picture {
			border-radius: 24px;
			margin: 10px;
			object-fit: cover;
			width: calc(100% - 20px);
			height: 40vh;
			min-height: 300px;
			max-height: 400px;
		}
	}
`;
