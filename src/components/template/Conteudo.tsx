interface ConteudoProps {
  children?: any
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
        mt-7 flex flex-col
        dark:text-gray-300
      `}
    >
      {props.children}
    </div>
  )
}
