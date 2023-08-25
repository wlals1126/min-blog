import { createGlobalStyle } from 'styled-components';

export const InitStyle = createGlobalStyle`
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	html, body {
		margin: 0;
		padding: 0;
	}
	body {
		line-height: 1;
		font-size: 14px;
		font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
		-webkit-font-smoothing: antialiased;
		color: rgb(33, 37, 41);
		background: #fafafa;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	button {
		outline: none;
		border: none;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		outline: none;
		word-break: break-word;
		border: none;
	}
`;
