import { NextApiRequest, NextApiResponse } from 'next'

import { tmdb } from '../../lib'

export default async (
  { body: { name } }: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (!name) {
    throw new Error('Need a name to search')
  }

  const people = await tmdb.search(name)

  res.status(200).json({
    people
  })
}
