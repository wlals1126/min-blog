import styled from 'styled-components';

export const AppFooterBox = styled.div`
	position: absolute;
	width: 100%;
	padding: 2rem;
	font-size: 14px;
	line-height: 1.5;
	background: #f2f2f2;

	& > a > div {
		width: 4px;
		height: 4px;
	}
	& > div {
		margin: 0 auto;
		width: fit-content;
		justify-content: flex-start;

		& > div,
		a {
			display: flex;
			align-items: center;
			margin-bottom: 10px;

			& > img {
				width: 18px;
				height: 18px;
				color: #fff;
				margin-right: 0.5rem;
			}

			& > div {
				width: 18px;
				height: 18px;
				border-radius: 9px;
				margin-right: 0.5rem;
				background: #212529;
				position: relative;

				img {
					position: absolute;
					top: 2px;
					left: 2px;
					margin: auto;
					width: 14px;
					height: 14px;
					color: #fff;
				}
			}
			&:nth-child(2) {
				margin-bottom: 0;
			}
		}
	}
`;
