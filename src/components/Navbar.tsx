import { useState } from "react"
import OrangeButton from "./ui/OrangeButton"

const links = ["Home", "About", "Service", "Resume", "Project", "Contact"]

export default function Navbar() {
  const [active, setActive] = useState("Home")

  return (
    <nav className="w-full flex justify-center mt-9 pb-9 max-w-7xl mx-auto">
      <div className="w-full h-[80px] bg-black rounded-full p-[10px] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {links.slice(0, 3).map((item) =>
            active === item ? (
              <OrangeButton key={item} onClick={() => setActive(item)} className="px-10 py-5 text-xl">
                {item}
              </OrangeButton>
            ) : (
              <NavButton key={item} label={item} onClick={() => setActive(item)} />
            )
          )}
        </div>

        {/* CENTER LOGO */}
        <div className="flex items-center gap-3 px-20">
          <div className="w-[46px] h-[46px] bg-orange rounded-full flex items-center justify-center text-white font-semibold text-2xl">
            HE
          </div>
          <span className="text-2xl text-white font-semibold">Hediye</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {links.slice(3).map((item) =>
            active === item ? (
              <OrangeButton key={item} onClick={() => setActive(item)} className="px-10 py-5 text-xl">
                {item}
              </OrangeButton>
            ) : (
              <NavButton key={item} label={item} onClick={() => setActive(item)} />
            )
          )}
        </div>
      </div>
    </nav>
  )
}

type NavButtonProps = {
  label: string
  onClick: () => void
}

function NavButton({ label, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-10 py-5 text-xl font-semibold rounded-full text-white hover:text-white hover:bg-white/10 transition-all duration-300"
    >
      {label}
    </button>
  )
}
