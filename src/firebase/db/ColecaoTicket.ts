import firebase from "../config";
import Ticket from "../../core/Ticket";
import TicketRepository from "../../core/TicketRepository";

export default class ColecaoTicket implements TicketRepository {

  #conversor = {
    toFirestore(ticket: Ticket) {
      return {
        codigo: ticket.codigo,
        categoria: ticket.categoria,
        preco: ticket.preco,
        validade: ticket.validade,
        auth: ticket.auth,
        status: ticket.status,
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions): Ticket {
        const dados = snapshot?.data(options)
        return new Ticket(dados.codigo, dados.categoria, dados.preco,
          dados.validade, dados.auth, dados.status, snapshot.id)
    }
  }

  async save(ticket: Ticket): Promise<Ticket> {
    if(ticket?.id) {
      await this.colecao().doc(ticket.id).set(ticket)
      return ticket
    } else {
      const docRef = await this.colecao().add(ticket)
      const doc = await docRef.get()
      return doc.data()
    }
  }

  async delete(ticket: Ticket): Promise<void> {
      return this.colecao().doc(ticket.id).delete()
  }

  async getAll(): Promise<Ticket[]> {
      const query = await this.colecao().get()
      return query.docs.map(doc => doc.data()) ?? []
  }

  private colecao() {
    return firebase.firestore().collection('tickets').withConverter(this.#conversor)
  }
}