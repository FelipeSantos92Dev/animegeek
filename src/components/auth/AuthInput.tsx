interface AuthInputProps {
  label: string
  valor: any
  requerido?: boolean
  tipo?: 'text' | 'email' | 'password'
  valorMudou: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className={`mt-4 flex flex-col`}>
      <label>{props.label}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.requerido}
        className={`
          mt-2 rounded-lg border bg-gray-200 px-4 py-3
          focus:border-blue-500 focus:bg-white focus:outline-none
        `}
      />
    </div>
  )
}
