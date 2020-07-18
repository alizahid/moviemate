export type TPerson = {
  id: number
  name: string
  profile_path?: string
}

export type TMovie = {
  id: number
  original_title: string
  poster_path?: string
  release_date?: string
}

export type Person = {
  id: number
  image: string | null
  name: string
}

export type Movie = {
  id: number
  image: string | null
  name: string
  year: number | null
}
