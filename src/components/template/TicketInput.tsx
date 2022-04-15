interface TicketInputProps {
  label: string
  valor: any
  valorMudou: (novoValor: any) => void
}

export default function TicketInput(props: TicketInputProps) {
  return (
    <div className={`mt-4 flex flex-col`}>
      <label>{props.label}</label>
      <input
        className={`
          mt-2 rounded-lg border bg-gray-200 px-4 py-3
          focus:border-blue-500 focus:bg-white focus:outline-none
        `}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}
