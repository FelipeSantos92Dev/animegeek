import { MoonIcon, SunIcon } from '../icons'

interface BotaoTemaProps {
  tema: any
  alternarTema: any
}

export default function BotaoTema(props: BotaoTemaProps) {
  return props.tema === 'dark' ? (
    <div
      onClick={props.alternarTema}
      className={`
        hidden h-8 w-14 cursor-pointer items-center rounded-full
        bg-gradient-to-r from-yellow-300 to-yellow-600 p-1
        sm:flex
    `}
    >
      <div
        className={`
          flex h-6 w-6 items-center
          justify-center rounded-full
          bg-white text-yellow-600
      `}
      >
        {SunIcon}
      </div>
      <div
        className={`
          ml-4 hidden items-center text-white
          lg:flex
      `}
      >
        {/* <span>Claro</span> */}
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`
      hidden h-8 w-14 cursor-pointer items-center justify-end
      rounded-full bg-gradient-to-r from-gray-500 to-gray-900
      p-1 sm:flex
  `}
    >
      <div
        className={`
          mr-2 hidden items-center text-gray-300
          lg:flex
      `}
      >
        {/* <span>Escuro</span> */}
      </div>
      <div
        className={`
        flex h-6 w-6 items-center
        justify-center rounded-full
        bg-black text-yellow-300
    `}
      >
        {MoonIcon}
      </div>
    </div>
  )
}
