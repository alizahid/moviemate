import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => (
  <header className="mx-12 my-20">
    <Link href="/">
      <img className="h-24 cursor-pointer" src="/moviemate.svg" />
    </Link>
  </header>
)
