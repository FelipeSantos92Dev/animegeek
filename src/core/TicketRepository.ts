import Ticket from "./Ticket";

export default interface TicketRepository {
  save(ticket: Ticket): Promise<Ticket>
  delete(ticket: Ticket): Promise<void>
  getAll(): Promise<Ticket[]>
}