import { HomeIcon, ConfigIcon, SunIcon, MoonIcon, DashIcon, TicketIcon, ShieldIcon, LogoutIcon } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
export default function MenuLateral() {
  return (
    <aside>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-red-500 to-red-800
        h-16 w-20
      `}>
        <Logo />

      </div>
      <ul>
        <MenuItem url="/" texto="Dashboard" icone={DashIcon} />
        <MenuItem url="/ingressos" texto="Ingressos" icone={TicketIcon} />
        <MenuItem url="/validacao" texto="Validação" icone={ShieldIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={ConfigIcon} />
        <MenuItem url="/" texto="Sair" icone={LogoutIcon} />
      </ul>
    </aside>
  )
}