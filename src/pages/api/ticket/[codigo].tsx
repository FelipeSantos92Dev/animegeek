import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../../utils/database'

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
  if (req.method === 'GET') {
    const { codigo } = req.query

    if (!codigo) {
      res.status(400).json({ error: 'Código não enviado!' })
    }

    const { db } = await connect()

    const response = await db.collection('tickets').findOne({ codigo })

    if (!response) {
      res.status(400).json({ error: 'Ingresso não encontrado!' })
      return
    }
    res.status(200).json(response)
  } else {
    res.status(400).json({ error: 'Método de envio errado' })
  }
}
