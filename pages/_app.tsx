import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, NormalizedCacheObject } from "@apollo/client"

import withApollo from "../hook/withApollo"

export interface Theme {
  niceBlack: string
}

export interface ThemeWrapper {
  theme: Theme
}

export const theme: Theme = {
  niceBlack: "#001f3f"
}

const GlobalStyle = createGlobalStyle<ThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${props => props.theme.niceBlack}
  }
`

interface Props {
  apollo: ApolloClient<NormalizedCacheObject>
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale-1" />
        </Head>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </React.Fragment>
    )
  }
}

export default withApollo(MyApp)