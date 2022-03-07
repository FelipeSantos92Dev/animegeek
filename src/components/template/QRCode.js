import { useState } from "react"
import QRCodeCanvas from "../../reports/QRCodeCanvas"

export default function QRCode(ticket) {

  return (
    <div className="QRCode">
      <input hidden type="text" value={ticket} />
      <QRCodeCanvas text={ticket}></QRCodeCanvas>
    </div>
  )
}
