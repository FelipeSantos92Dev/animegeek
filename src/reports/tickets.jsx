import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import JsBarcode from 'jsbarcode'
import {createCanvas} from 'canvas'

const canvas = createCanvas(0, 0)

export default function ticketsPDF(qrId, barCode) {
  JsBarcode(canvas, barCode)

  pdfMake.vfs = pdfFonts.pdfMake.vfs

  const reportTitle = []

  const details = [
    {
      text: 'ANIMEGEEK',
      fontSize: 20,
      bold: true,
      alignment: 'center',
      margin: [0, 10, 0, 10]
    },

    {
      text: 'Sábado - 05 de Abril',
      fontSize: 15,
      bold: true,
      alignment: 'center',
      margin: [0, 0, 0, 0]
    },

    {
      text: 'Local:',
      fontSize: 12,
      italics: true,
      alignment: 'left',
      margin: [20, 20, 0, 0]
    },

    {
      text: 'Hora:',
      fontSize: 12,
      italics: true,
      alignment: 'left',
      margin: [20, 0, 0, 30]
    },

    {
      alignment: 'center',
      qr: qrId,
      margin: [0, 0, 0, 40]
    },

    {
      text: ' _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _',
      alignment: 'center',
    },

    {
      image: canvas.toDataURL(), width: 160, height: 60,
      alignment: 'center',
      margin: [0, 10, 0, 0]
    }
  ]

  const footer = []

  const docDefinitions = {
    pageSize: 'A6',
    pageMargins: [0, 0, 0, 0],

    header: [reportTitle],
    content: [details],
    footer: [footer]
  }

  pdfMake.createPdf(docDefinitions).print()

}