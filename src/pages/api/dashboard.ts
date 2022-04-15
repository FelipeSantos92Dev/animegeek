import type { NextApiRequest, NextApiResponse } from 'next'
import { prismaClient } from '../../database/prismaClient'

type ResponseData = {
  sold: number
  validated: number
  cash: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const sold = await prismaClient.ticket.count()
  const validated = await prismaClient.ticket.count({
    where: {
      status: 'Autenticado',
    },
  })
  const cash = sold * 25

  res.send({ sold, validated, cash })
}
