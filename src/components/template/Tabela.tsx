import Ticket from "../../core/Ticket"

interface TabelaProps {
  tickets: Ticket[]
}

export default function tabela(props: TabelaProps) {

  function rendCabecalho() {
    return (
      <tr>
        <th className="text-left p-2">Código</th>
        <th className="text-left p-2">Categoria</th>
        <th className="text-left p-2">Status</th>
      </tr>
    )
  }

  function rendDados() {
    return props.tickets?.map((ticket, i) => {
      return (
        <tr key={ticket.id} className={`${i % 2 ===0 ? 'bg-red-200' : 'bg-red-100'}`}>
          <td className="text-left p-2">{ticket.codigo}</td>
          <td className="text-left p-2">{ticket.categoria}</td>
          <td className="text-left p-2">{ticket.status}</td>
        </tr>
      )
    })
  }

  return (
    <table className={`
      m-4 rounded-xl overflow-hidden
    `}>
      <thead className={`
        bg-gradient-to-r from-red-400 to-red-700 text-gray-100
      `}>
        {rendCabecalho()}
      </thead>

      <tbody>
        {rendDados()}
      </tbody>
    </table>
  )
}