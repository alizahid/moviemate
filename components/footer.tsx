import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="mx-12 my-20 flex items-center whitespace-no-wrap text-sm opacity-25">
    Made with
    <img className="mx-1 h-6 w-6" src="/heart.svg" />
    by
    <a className="ml-1 text-primary" href="https://alizahid.dev">
      Ali Zahid
    </a>
  </footer>
)
