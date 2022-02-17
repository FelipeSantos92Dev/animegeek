import Link from 'next/link'

interface MenuItemProps {
  texto: string
  icone: any
  url?: string
  className?: string
  onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
  function rendLink() {
    return (
      <a
        className={`
          flex h-16 w-20 flex-col
          items-center justify-center
          dark:text-gray-400
          ${props.className}
        `}
      >
        {props.icone}
        <span className={`text-xs`}>{props.texto}</span>
      </a>
    )
  }

  return (
    <li
      onClick={props.onClick}
      className={`
      cursor-pointer hover:bg-gray-100
      dark:hover:bg-gray-800
      `}
    >
      {props.url ? <Link href={props.url}>{rendLink()}</Link> : rendLink()}
    </li>
  )
}
