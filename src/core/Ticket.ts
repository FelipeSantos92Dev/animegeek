import ticketsPDF from '../reports/tickets'

export default class Ticket {
  #id: string
  #codigo: string
  #categoria: string
  #preco: number
  #validade: number
  #auth: number
  #status: string

  constructor(codigo: string, categoria: string, preco: number, validade: number, auth: number, status: string, id: string = null) {
    this.#codigo = codigo
    this.#categoria = categoria
    this.#preco = preco
    this.#validade = validade
    this.#auth = auth
    this.#status = status
    this.#id = id
  }

  static vazio() {
    return new Ticket('', '', 0, 0, 0, '', '')
  }

  static novo1() {
    const randomCode = "2022"+(Math.floor(Math.random() * (10000 + 1)).toString());    
    ticketsPDF(randomCode)

    return new Ticket(
      randomCode,
      'Sábado',
      35,
      1,
      0,
      'Emitido',
      ''
    )
  }

  static novo2() {
    const randomCode = "2022"+(Math.floor(Math.random() * (10000 + 1)).toString());
    ticketsPDF(randomCode)

    return new Ticket(
      randomCode,
      'Domingo',
      35,
      1,
      0,
      'Emitido',
      ''
    )
  }

  static novo3() {
    const randomCode = "2022"+(Math.floor(Math.random() * (10000 + 1)).toString());
    ticketsPDF(randomCode)
    
    return new Ticket(
      randomCode,
      'Combo',
      50,
      2,
      0,
      'Emitido',
      ''
    )
  }

  get id() {
    return this.#id
  }
  get codigo() {
    return this.#codigo
  }
  get categoria() {
    return this.#categoria
  }
  get preco() {
    return this.#preco
  }
  get validade() {
    return this.#validade
  }
  get auth() {
    return this.#auth
  }
  get status() {
    return this.#status
  }
}