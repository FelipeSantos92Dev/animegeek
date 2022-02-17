import { HomeIcon, ConfigIcon, SunIcon, MoonIcon, DashIcon, TicketIcon, ShieldIcon, LogoutIcon } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
export default function MenuLateral() {
  return (
    <aside className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-red-500 to-red-800
        h-16 w-20
      `}>
        <Logo />

      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Dashboard" icone={DashIcon} />
        <MenuItem url="/ingressos" texto="Ingressos" icone={TicketIcon} />
        <MenuItem url="/validacao" texto="Validação" icone={ShieldIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={ConfigIcon} />
      </ul>

      <ul>
        <MenuItem texto="Sair" icone={LogoutIcon}
          onClick={() => console.log('Logout')}
          className={`
            text-red-600 dark:text-red-500
            hover:bg-red-400 hover:text-white
            dark:hover:text-white
          `}  
        />
      </ul>
    </aside>
  )
}