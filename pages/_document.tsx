import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class MovieMate extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head />

        <body className="cursor-default">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MovieMate
