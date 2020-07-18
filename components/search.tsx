import { kebabCase } from 'lodash'
import Router from 'next/router'
import React, { FunctionComponent, useState } from 'react'

import { Person } from '../types'
import { AutoComplete } from './auto-complete'

export const Search: FunctionComponent = () => {
  const [one, setOne] = useState<Person>()
  const [two, setTwo] = useState<Person>()

  return (
    <form
      className="flex flex-col"
      onSubmit={(event) => {
        event.preventDefault()

        if (one && two) {
          Router.push(
            `/${one.id}-${kebabCase(one.name)}/${two.id}-${kebabCase(two.name)}`
          )
        }
      }}>
      <AutoComplete
        onSelect={(person) => setOne(person)}
        placeholder="Brad Pitt"
        selected={one}
        zIndex={20}
      />
      <AutoComplete
        className="mt-4"
        onSelect={(person) => setTwo(person)}
        placeholder="George Clooney"
        selected={two}
        zIndex={10}
      />
      <button className="mt-4">Find</button>
    </form>
  )
}
