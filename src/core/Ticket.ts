export default class Ticket {
  #id: string
  #codigo: string
  #categoria: string
  #validade: number
  #auth: number
  #status: string

  constructor(codigo: string, categoria: string, validade: number, auth: number, status: string, id: string = null) {
    this.#codigo = codigo
    this.#categoria = categoria
    this.#validade = validade
    this.#auth = auth
    this.#status = status
    this.#id = id
  }

  static vazio() {
    return new Ticket('', '', 0, 0, '', '')
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