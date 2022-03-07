import { useEffect, useState } from "react"
import Ticket from "../../core/Ticket"
import TicketRepository from "../../core/TicketRepository"
import ColecaoTicket from "../../firebase/db/ColecaoTicket"
import useTabelaForm from "./useTabelaForm"

export default function useTickets() {
  const repo: TicketRepository = new ColecaoTicket()

  const { tabelaVisivel, exibirForm, exibirTabela } = useTabelaForm()

  const [ticket, setTicket] = useState<Ticket>(Ticket.vazio())
  const [tickets, setTickets] = useState<Ticket[]>([])
  
  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(tickets => {
      setTickets(tickets)
      exibirTabela()
    })
    
  }

  function selecionarTicket(ticket: Ticket) {
    setTicket(ticket)
    exibirForm()
  }

  async function excluirTicket(ticket: Ticket) {
    await repo.delete(ticket)
    getAll()   
  }
  
  async function novoTicket() {
    await repo.save(Ticket.novo1())
    getAll()
  }

  async function novoTicket2() {
    await repo.save(Ticket.novo2())
    getAll()
  }

  async function novoTicket3() {
    await repo.save(Ticket.novo3())
    getAll()
  }

  async function salvarTicket(ticket: Ticket) {
    await repo.save(Ticket.novo1())
    getAll()
  }


  return {
    ticket,
    tickets,
    novoTicket,
    novoTicket2,
    novoTicket3,
    salvarTicket,
    excluirTicket,
    selecionarTicket,
    getAll,
    tabelaVisivel,
    exibirTabela
  }
}