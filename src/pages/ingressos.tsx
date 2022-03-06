import Layout from '../components/template/Layout'
import { TicketIconSell } from '../components/icons'
import Tabela from "../components/template/Tabela"
import Ticket from '../core/Ticket'
import BotaoAdd from '../components/template/BotaoAdd'
import Formulario from '../components/template/Formulario'
import { useState } from 'react'

export default function Ingressos() {

  const [ticket, setTicket] = useState<Ticket>(Ticket.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const tickets = [
    new Ticket('2022123', 'Combo', 2, 0, 'Não Validado', '123'),
    new Ticket('2022789', 'Sábado', 1, 0, 'Não Validado', '789'),
    new Ticket('2022032', 'Domingo', 1, 0, 'Não Validado', '032'),
    new Ticket('2022123', 'Combo', 2, 0, 'Não Validado', '123'),
    new Ticket('2022789', 'Sábado', 1, 0, 'Não Validado', '789'),
    new Ticket('2022032', 'Domingo', 1, 0, 'Não Validado', '032'),
    new Ticket('2022123', 'Combo', 2, 0, 'Não Validado', '123'),
    new Ticket('2022789', 'Sábado', 1, 0, 'Não Validado', '789'),
    new Ticket('2022032', 'Domingo', 1, 0, 'Não Validado', '032'),
    new Ticket('2022741', 'Combo', 2, 0, 'Não Validado', '741')
  ]

  function ticketSelecionado(ticket: Ticket) {
    setTicket(ticket)
    setVisivel('form')
  }

  function ticketExluido(ticket: Ticket) {
    console.log(`Excluir ${ticket.codigo}`);    
  }

  function novoTicket() {
    setTicket(Ticket.vazio)
    setVisivel('form')  
  }

  function salvarTicket(ticket: Ticket) {
    console.log(ticket);  
    setVisivel('tabela')  
  }


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

      {visivel === 'tabela' ? (
        <>
          <div className='flex justify-end'>
            <BotaoAdd cor='red' className='mt-2 mr-4' onClick={novoTicket}>
              Novo Ingresso
            </BotaoAdd>
          </div>
          <Tabela tickets={tickets}
            ticketSelecionado={ticketSelecionado}
            ticketExcluido={ticketExluido}
          />
        </>
      ) : (
        <Formulario
          ticket={ticket}
          ticketMudou={salvarTicket}
          cancelado={() => setVisivel('tabela')}
        />
      )}
    </Layout>
  )
}
