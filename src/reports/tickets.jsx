import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

export default function ticketsPDF(ticket) {
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
      margin: [20, 0, 0, 50]
    },

    {
      alignment: 'center',
      qr: ticket,
      margin: [0, 0, 0, 60]
    },

    {
      text: ' _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _'
    },

    {
      alignment: 'left',
      qr: ticket,
      fit: 50,
      layout: 'headerLineOnly',
      margin: [20, 10, 0, 0]
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