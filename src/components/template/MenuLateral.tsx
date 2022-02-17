import { HomeIcon, ConfigIcon, SunIcon, MoonIcon, DashIcon, TicketIcon, ShieldIcon, LogoutIcon } from "../icons"
import MenuItem from "./MenuItem"
export default function MenuLateral() {
  return (
    <aside>
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