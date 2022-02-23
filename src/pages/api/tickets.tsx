import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/database'

interface ErrorResponseType {
  error: string
}

interface SuccessResponseType {
  codigo: string
  qrcode: string
  validade: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  if (req.method === 'POST') {
    const { validade } = req.body

    if (validade === 'sabado') {
      const { db } = await connect()

      const response = await db.collection('tickets').insertOne({
        codigo: '2022' + (Math.floor(Math.random() * 10000) + 1),
        validade,
        autenticacao: 1,
        leitura: 0,
        //qrcode,
      })
      res.status(201).json(response.ops[0])
    } else if (validade === 'domingo') {
      const { db } = await connect()

      const response = await db.collection('tickets').insertOne({
        codigo: '2022' + (Math.floor(Math.random() * 10000) + 1),
        validade,
        autenticacao: 1,
        leitura: 0,
        //qrcode,
      })
      res.status(201).json(response.ops[0])
    } else if (validade === 'combo') {
      const { db } = await connect()

      const response = await db.collection('tickets').insertOne({
        codigo: '2022' + (Math.floor(Math.random() * 10000) + 1),
        validade,
        autenticacao: 2,
        leitura: 0,
        //qrcode,
      })
      res.status(201).json(response.ops[0])
    }

    if (!validade) {
      res.status(400).json({ error: 'Parâmetros inválidos!' })
      return
    }
    // const { db } = await connect()

    // const response = await db.collection('tickets').insertOne({
    //   codigo: '2022' + (Math.floor(Math.random() * 10000) + 1),
    //   qrcode,
    //   validade,
    //   // autenticacao: 0,
    //   // leitura: 1,
    // })
    // res.status(201).json(response.ops[0])
  } else {
    res.status(400).json({ error: 'Método de envio errado' })
  }
}
