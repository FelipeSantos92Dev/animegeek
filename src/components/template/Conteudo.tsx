interface ConteudoProps {
  children?: any
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
        mt-7 flex flex-col overflow-y-auto
        dark:text-gray-300
      `}
    >
      {props.children}
    </div>
  )
}
