import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from "../layout/MainLayout";
import {Provider} from "react-redux";
import {Component} from "react";
import {store} from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps}/>
      </MainLayout>
    </Provider>
)
}

export default MyApp
