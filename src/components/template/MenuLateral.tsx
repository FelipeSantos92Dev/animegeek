import {
  HomeIcon,
  ConfigIcon,
  SunIcon,
  MoonIcon,
  DashIcon,
  TicketIcon,
  ShieldIcon,
  LogoutIcon,
  UserIcon,
} from '../icons'
import MenuItem from './MenuItem'
import Logo from './Logo'
import useAuth from '../../data/hook/useAuth'

export default function MenuLateral() {
  const { logout } = useAuth()
  return (
    <aside
      className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}
    >
      <div
        className={`
        flex h-16 w-20 flex-col
        items-center justify-center bg-gradient-to-r
        from-red-500 to-red-800
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow h-full">
        <MenuItem url="/" texto="Dashboard" icone={DashIcon} />
        <MenuItem url="/ingressos" texto="Ingressos" icone={TicketIcon} />
        <MenuItem url="/validacao" texto="Validação" icone={ShieldIcon} />
        {/* <MenuItem url="/perfil" texto="Perfil" icone={UserIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={ConfigIcon} /> */}
      </ul>

      <ul>
        <MenuItem
          texto="Sair"
          icone={LogoutIcon}
          onClick={logout}
          className={`
            text-red-600 hover:bg-red-400
            hover:text-white dark:text-red-500
            dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}
