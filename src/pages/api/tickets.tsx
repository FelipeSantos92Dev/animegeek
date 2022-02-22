import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/database'

interface ErrorResponseType {
  error: string
}

interface SuccessResponseType {
  codigo: number
  qrcode: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  if (req.method === 'POST') {
    const { codigo, qrcode } = req.body

    if (!codigo || !qrcode) {
      res.status(400).json({ error: 'Parâmetros inválidos!' })
      return
    }
    const { db } = await connect()

    const response = await db.collection('tickets').insertOne({
      codigo,
      qrcode,
      // validade: 'sabado',
      // autenticacao: 0,
      // leitura: 1,
    })
    res.status(200).json(response.ops[0])
  } else {
    res.status(400).json({ error: 'Método de envio errado' })
  }
}
