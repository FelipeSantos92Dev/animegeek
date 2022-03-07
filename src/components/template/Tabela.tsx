import Ticket from "../../core/Ticket"
import { EditIcon, TrashIcon } from "../icons"

interface TabelaProps {
  tickets: Ticket[]
  ticketSelecionado?: (ticket: Ticket) => void
  ticketExcluido?: (ticket: Ticket) => void
}

export default function tabela(props: TabelaProps) {

  const exibirAcoes = props.ticketSelecionado || props.ticketExcluido

  function rendCabecalho() {
    return (
      <tr>
        <th className="text-left p-2">Código</th>
        <th className="text-left p-2">Categoria</th>
        <th className="text-left p-2">Preço</th>
        <th className="text-left p-2">Status</th>
        {exibirAcoes ? <th className="p-2">Ações</th> : false}
      </tr>
    )
  }

  function rendDados() {
    return props.tickets?.map((ticket, i) => {
      return (
        <tr key={ticket.id} className={`${i % 2 ===0 ? 'bg-red-200' : 'bg-red-100'}`}>
          <td className="text-left p-2">{ticket.codigo}</td>
          <td className="text-left p-2">{ticket.categoria}</td>
          <td className="text-left p-2">R$ {ticket.preco}</td>
          <td className="text-left p-2">{ticket.status}</td>
          {exibirAcoes ? rendAcoes(ticket) : false}
        </tr>
      )
    })
  }

  function rendAcoes(ticket: Ticket) {
    return (
      <td className="flex items-center justify-center">
        {props.ticketSelecionado ? (
          <button onClick={() => props.ticketSelecionado?.(ticket)} className={`
            flex justify-center items-center text-green-600 p-2 m-1
            rounded-full hover:bg-red-50
          `}>
            {EditIcon}
          </button>
        ) : false}

        {props.ticketExcluido ? (
          <button onClick={() => props.ticketExcluido?.(ticket)} className={`
            flex justify-center items-center text-red-600 p-2 m-1
            rounded-full hover:bg-red-50
          `}>
          {TrashIcon}
          </button>
        ) : false}
      </td>
    )
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