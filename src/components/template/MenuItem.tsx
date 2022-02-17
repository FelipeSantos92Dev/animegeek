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
      <a className={`
          flex flex-col justify-center items-center
          h-16 w-20 text-gray-600
          ${props.className}
        `}>
          {props.icone}
          <span className={`
            text-xs 
          `}>
            {props.texto}
          </span>
        </a>
    )
  }

  return(
    <li onClick={props.onClick} className={`
      hover:bg-gray-100
      cursor-pointer
      `}>
      {props.url ? (
        <Link href={props.url}>
          {rendLink()}
        </Link>
      ) : (
        rendLink()
      )}
    </li>
  )
}