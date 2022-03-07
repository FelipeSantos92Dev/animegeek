import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

export default function ticketsPDF(ticket) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs

  

  const reportTitle = [ticket]

  const details = [
    {
      qr: ticket
    }
  ]

  const footer = []

  const docDefinitions = {
    pageSize: 'A6',
    // pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: [footer]
  }

  pdfMake.createPdf(docDefinitions).open()

}