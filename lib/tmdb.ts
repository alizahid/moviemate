import axios from 'axios'
import { intersectionBy, orderBy } from 'lodash'

import { Movie, Person, TMovie, TPerson } from '../types'

class TMDB {
  async search(name: string): Promise<Person[]> {
    const {
      data: { results }
    } = await axios.request<{
      results: TPerson[]
    }>({
      url: `https://api.themoviedb.org/3/search/person?query=${encodeURIComponent(
        name
      )}&api_key=${process.env.TMDB_API_KEY}`
    })

    const people: Person[] = orderBy(
      results.slice(0, 5),
      'popularity',
      'desc'
    ).map(({ id, name, profile_path }) => ({
      id,
      image: profile_path
        ? `https://image.tmdb.org/t/p/h632${profile_path}`
        : null,
      name
    }))

    return people
  }

  async match(
    one: number,
    two: number
  ): Promise<{
    one: Person
    two: Person
    movies: Movie[]
  }> {
    const first = await this.getDetails(one)
    const second = await this.getDetails(two)

    const movies = orderBy(
      intersectionBy(
        await this.getMovies(one),
        await this.getMovies(two),
        'id'
      ),
      'year',
      'desc'
    )

    return {
      movies,
      one: first,
      two: second
    }
  }

  private async getDetails(id: number): Promise<Person> {
    const { data } = await axios.request<TPerson>({
      url: `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_API_KEY}`
    })

    return {
      id: data.id,
      image: data.profile_path
        ? `https://image.tmdb.org/t/p/h632${data.profile_path}`
        : null,
      name: data.name
    }
  }

  private async getMovies(id: number): Promise<Movie[]> {
    const {
      data: { cast }
    } = await axios.request<{
      cast: TMovie[]
    }>({
      url: `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_API_KEY}`
    })

    const movies = cast.map(
      ({ id, original_title, poster_path, release_date }) => ({
        id,
        image: poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : null,
        name: original_title,
        year: release_date ? Number(release_date.split('-')[0]) : null
      })
    )

    return movies
  }
}

export const tmdb = new TMDB()
