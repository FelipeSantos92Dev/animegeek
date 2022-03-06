interface BotaoAddProps {
  cor?: 'red' | 'blue' | 'gray'
  className?: string
  children: any
}

export default function BotaoAdd(props: BotaoAddProps) {
  const cor = props.cor ?? 'red'
  return (
    <button className={`
      bg-gradient-to-r from-red-400 to-red-800
      text-white px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}