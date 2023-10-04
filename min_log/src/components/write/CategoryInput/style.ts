import { styled } from "styled-components";

export const CategoryInputBox = styled.form`
	width: 100%;
	display: flex;
	flex-flow: row wrap;

	& > input,
	& > div {
		margin: 0 10px 10px 0;
		padding: 0.5rem 1rem;
		background: #ededed;
		color: #707070;
		border-radius: 5px;
		font-size: 12px;
		line-height: 1.2;
	}

	& > input:focus {
		color: #212529;
	}
`;