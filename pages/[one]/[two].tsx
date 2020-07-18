import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Actor, Film } from '../../components'
import { tmdb } from '../../lib'
import { Movie, Person } from '../../types'

interface Props {
  one: Person
  two: Person
  movies: Movie[]
}

const Match: NextPage<Props> = ({ movies, one, two }) => (
  <>
    <Head>
      <title>MovieMate / Find which actors have worked together</title>
    </Head>

    <main className="m-12">
      <section className="flex justify-between">
        <Actor person={one} />
        <Actor className="text-right" person={two} />
      </section>
      <section className="flex flex-wrap justify-between w-movies mt-8">
        {movies.map((movie, index) => (
          <Film index={index} key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const one = Number(String(params?.one).replace(/\D+/, ''))
  const two = Number(String(params?.two).replace(/\D+/, ''))

  const data = await tmdb.match(one, two)

  return {
    props: {
      ...data
    }
  }
}

export default Match
