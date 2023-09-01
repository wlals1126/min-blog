/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/containers/share/Layout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { GlobalStyles } from "@/styles/default";
import rootReducer from "@/reducers";

const App = ({ Component, pageProps }: AppProps) => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Head>
        <title>Jimin`s Tech Blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <meta
          name="description"
          content="다양한 경험에 도전하는 개발자 유지민입니다."
        />
        <meta property="og:type" content="blog" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V9KPRJCZ8R"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-V9KPRJCZ8R');`,
          }}
        />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
