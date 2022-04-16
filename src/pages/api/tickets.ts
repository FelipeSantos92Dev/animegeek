// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { randomInt } from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prismaClient } from '../../database/prismaClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const code = '202204' + randomInt(100000)
    const price = 25
    const status = 'Vendido'

    await prismaClient.ticket.create({
      data: {
        code,
        price,
        status,
      },
    })
    return res.status(201).send(null)
  } else if (req.method === 'PUT') {
    const { id } = req.body

    if (id) {
      const ticket = await prismaClient.ticket.findFirst({
        where: { id },
      })

      if (ticket?.status === 'Vendido') {
        try {
          const ticket = await prismaClient.ticket.update({
            where: { id },
            data: {
              status: 'Autenticado',
            },
          })
          return res
            .status(200)
            .json({ message: 'Ingresso autenticado com sucesso!' })
        } catch (error) {
          return res
            .status(200)
            .json({ message: 'Erro ao validar! Tente novamente!' })
        }
      } else if (ticket?.status === 'Autenticado') {
        return res.status(200).json({ message: 'Ingresso já autenticado!' })
      } else {
        return res.status(200).json({ message: 'Ingresso não encontrado!' })
      }
    }
  }
}
