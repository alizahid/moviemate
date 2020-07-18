import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Search } from '../components'

const Home: NextPage = () => (
  <>
    <Head>
      <title>MovieMate / Find which actors have worked together</title>
    </Head>

    <main className="m-12">
      <Search />
    </main>
  </>
)

export default Home
