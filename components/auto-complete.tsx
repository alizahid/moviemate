import axios from 'axios'
import React, { FunctionComponent, useEffect, useState } from 'react'

import { useDebounce } from '../hooks'
import { Person } from '../types'
import { Spinner } from './spinner'

interface Props {
  className?: string
  placeholder?: string
  selected?: Person
  zIndex: number

  onSelect: (person: Person) => void
}

export const AutoComplete: FunctionComponent<Props> = ({
  className,
  onSelect,
  placeholder,
  selected,
  zIndex
}) => {
  const [value, setValue] = useState('')
  const name = useDebounce(value, 300)

  const [loading, setLoading] = useState(false)
  const [people, setPeople] = useState<Person[]>([])

  useEffect(() => {
    const search = async () => {
      setLoading(true)

      try {
        const {
          data: { people }
        } = await axios.post('/api/search', {
          name
        })

        setPeople(people)
      } finally {
        setLoading(false)
      }
    }

    if (name && value !== selected?.name) {
      search()
    }
  }, [name, selected])

  return (
    <div
      className="relative"
      style={{
        zIndex
      }}>
      <input
        className={className}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {name && value !== selected?.name && (
        <div className="results absolute gradient w-full rounded-lg mt-4">
          {loading && <Spinner className="my-4" light />}
          {people.length > 0 && (
            <div className="max-h-autocomplete overflow-auto">
              {people.map((person) => (
                <div
                  className="text-white p-4 flex items-center cursor-pointer hover:bg-highlight"
                  key={person.id}
                  onClick={() => {
                    onSelect(person)
                    setValue(person.name)
                  }}>
                  <figure
                    className="h-16 w-12 rounded-lg bg-highlight bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${person.image})`
                    }}
                  />
                  <h3 className="text-xl ml-4 font-medium">{person.name}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <style jsx>{`
        .results:before {
          border-color: transparent transparent #f7692c transparent;
          border-style: solid;
          border-width: 0.5em;
          content: '';
          height: 0;
          left: calc(50% - 0.5em);
          position: absolute;
          top: -1rem;
          width: 0;
        }
      `}</style>
    </div>
  )
}
