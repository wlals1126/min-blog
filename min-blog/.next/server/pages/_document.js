import Document from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const originalRenderPage = ctx.renderPage;

		// renderPage :  초기 페이지 로드 시 서버 측 자식 구성 요소의 스타일을 분석
		ctx.renderPage = () =>
			originalRenderPage({
				// useful for wrapping the whole react tree
				enhanceApp: (App) => App,
				// useful for wrapping in a per-page basis
				enhanceComponent: (Component) => Component,
			});

		// Run the parent `getInitialProps`, it now includes the custom `renderPage`
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}
}

export default MyDocument;
