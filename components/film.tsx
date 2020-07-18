import React, { FunctionComponent } from 'react'

import { Movie } from '../types'

interface Props {
  index: number
  movie: Movie
}

export const Film: FunctionComponent<Props> = ({ index, movie }) => (
  <article className="w-1/2 mt-8">
    <figure
      className={`bg-primary h-64 w-48 rounded-lg bg-cover bg-center ${
        index % 2 === 0 ? 'mr-auto' : 'ml-auto'
      }`}
      style={{
        backgroundImage: `url(${movie.image})`
      }}
    />
    <h2
      className={`font-medium text-secondary text-2xl mt-2 ${
        index % 2 === 0 ? 'text-left' : 'text-right'
      }`}>
      {movie.name}
    </h2>
    {movie.year && (
      <h3 className={index % 2 === 0 ? 'text-left' : 'text-right'}>
        {movie.year}
      </h3>
    )}
  </article>
)
