import { NextApiRequest, NextApiResponse } from 'next'

import { tmdb } from '../../lib'

export default async (
  { body: { one, two } }: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (!one || !two) {
    throw new Error('Need people to match')
  }

  const data = await tmdb.match(one, two)

  res.status(200).json(data)
}
