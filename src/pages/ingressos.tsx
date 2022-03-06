import Layout from '../components/template/Layout'
import { TicketIconSell } from '../components/icons'
import Tabela from "../components/template/Tabela"
import BotaoAdd from '../components/template/BotaoAdd'
import Formulario from '../components/template/Formulario'

import useTickets from '../data/hook/useTickets'

export default function Ingressos() {

  const {
    ticket,
    tickets,
    selecionarTicket,
    novoTicket,
    salvarTicket,
    excluirTicket,
    tabelaVisivel,
    exibirTabela
  } = useTickets()

  return (
    <Layout
      titulo="Gerenciamento de Ingressos"
      subtitulo="Tipo e emissão de ingressos"
    >
      {/* <h3>Ingressos AnimeGeek</h3> */}
      <div className="md:flex">
        <div className="m-2 flex cursor-pointer items-center justify-around rounded-xl bg-red-200 p-2 shadow-lg lg:w-1/3">
          {TicketIconSell}
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              R$ 30
            </h1>
            <span className="text-gray-500">1º Dia</span>
          </div>
        </div>

        <div className="m-2 flex cursor-pointer items-center justify-around rounded-xl bg-blue-200 p-4 shadow-lg lg:w-1/3">
          {TicketIconSell}
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              R$ 30
            </h1>
            <span className="text-gray-500">2º Dia</span>
          </div>
        </div>

        <div className="m-2 flex cursor-pointer items-center justify-around rounded-xl bg-green-200 p-4 shadow-lg lg:w-1/3">
          {TicketIconSell}
          <div className="text-center">
            <h1 className=" font-bold text-gray-800 sm:text-xl lg:text-2xl">
              R$ 50
            </h1>
            <span className="text-gray-500">Combo</span>
          </div>
        </div>
      </div>

      {tabelaVisivel ? (
        <>
          <div className='flex justify-end'>
            <BotaoAdd cor='red' className='mt-2 mr-4' onClick={novoTicket}>
              Novo Ingresso
            </BotaoAdd>
          </div>
          <Tabela tickets={tickets}
            ticketSelecionado={selecionarTicket}
            ticketExcluido={excluirTicket}
          />
        </>
      ) : (
        <Formulario
          ticket={ticket}
          ticketMudou={salvarTicket}
          cancelado={exibirTabela}
        />
      )}
    </Layout>
  )
}
