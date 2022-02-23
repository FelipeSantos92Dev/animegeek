import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()
  return (
    <Link href="/perfil">
      <img
        src={usuario?.imagemURL ?? '/images/avatar.svg'}
        // src="/images/avatar.svg"
        alt="Avatar do usuário"
        className={`
        h-9 w-9 cursor-pointer rounded-full
        ${props.className}
        `}
      />
    </Link>
  )
}
