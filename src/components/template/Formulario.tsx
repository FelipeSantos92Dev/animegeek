import { useState } from "react";
import Ticket from "../../core/Ticket";
import BotaoAdd from "./BotaoAdd";
import Entrada from "./Entrada";

interface FormularioProps {
  ticket: Ticket
  ticketMudou?: (ticket: Ticket) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.ticket?.id
  const [codigo, setCodigo] = useState(props.ticket?.codigo ?? '')
  const [categoria, setCategoria] = useState(props.ticket?.categoria ?? '')
  const [validade, setValidade] = useState(props.ticket?.validade ?? 0)
  const [auth, setAuth] = useState(props.ticket?.auth ?? 0)
  const [status, setStatus] = useState(props.ticket?.status ?? '')

  return (
    <div>
      <div className="">
        {id ? (
          <Entrada texto="Código" valor={codigo} somenteLeitura className="m-2" />
        ) : false}
        <Entrada texto="Categoria" valor={categoria} valorMudou={setCategoria} className="m-2" />
        <Entrada texto="Validade" tipo="number" valor={validade} valorMudou={setValidade} className="m-2" />
        <Entrada texto="Autenticações" tipo="number" valor={auth} valorMudou={setAuth} className="m-2" />
        <Entrada texto="Status" valor={status} valorMudou={setStatus} className="m-2" />

      </div>
        <div className="flex justify-end mt-7">
          <BotaoAdd className="bg-gradient-to-r from-green-400 to-green-800
          text-white px-4 py-2 rounded-md mr-2"
            onClick={() => props.ticketMudou?.(new Ticket(codigo, categoria, +validade, +auth, status, id))} >
            {id ? 'Alterar' : 'Salvar'}
          </BotaoAdd>

          <BotaoAdd className="bg-gradient-to-r from-red-400 to-red-600
          text-white px-4 py-2 rounded-md" onClick={props.cancelado} >
            Cancelar
          </BotaoAdd>
        </div>
    </div>
  )
}