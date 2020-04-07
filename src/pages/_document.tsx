import Document, { Head, Main, NextScript } from "next/document"
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document<any> {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <meta name="theme-color" content="#EFEFEF"></meta>
          {/* TODO : add favicons */}
          {/* <link rel="shortcut icon" href="./somewhere" /> */}
          {/* <link rel="apple-touch-icon" href="./somewhere" /> */}
          <link rel="manifest" href="/manifest.json" />
          {/* TODO : update meta description */}
          <meta name="description" content=""></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
