import React, { FunctionComponent } from 'react'

import { Person } from '../types'

interface Props {
  className?: string
  person: Person
}

export const Actor: FunctionComponent<Props> = ({ className, person }) => (
  <article className={className}>
    <figure
      className="bg-primary h-64 w-48 rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${person.image})`
      }}
    />
    <h2 className="font-medium text-primary text-xl mt-2">{person.name}</h2>
  </article>
)
