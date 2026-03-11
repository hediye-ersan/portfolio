import { useState } from "react"
import OrangeButton from "./ui/OrangeButton"

const links = ["Home", "Project", "Experience", "Skills", "Certificate", "Contact"]

export default function Navbar() {
  const [active, setActive] = useState("Home")
  const [language, setLanguage] = useState<"TR" | "EN">("TR")

  return (
    <>
      <nav className="w-full flex justify-center mt-9 max-w-7xl mx-auto">
      <div className="h-[80px] bg-black rounded-full p-[10px] flex items-center justify-between">
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
        <div className="group flex items-center gap-3 px-14 relative flex-none">
          <div className="transition-transform duration-300 group-hover:-translate-x-2">
            <div className="logo-circle w-[46px] h-[46px] bg-orange rounded-full flex items-center justify-center text-white font-semibold text-2xl">
              HE
            </div>
          </div>
        <div className="relative overflow-hidden h-[44px] w-[140px] flex items-center">
            <span className="text-xl text-white font-semibold transition-opacity duration-300 group-hover:opacity-0">
              Hediye
            </span>
            <div className="absolute inset-0 flex flex-col justify-center leading-tight opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs text-gray-200">Junior</span>
              <span className="text-lg text-white font-semibold">Web Developer</span>
            </div>
          </div>
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
      {/* LANGUAGE TOGGLE - Below navbar */}
      <div className="flex justify-center pb-9 pt-2">
        <LanguageToggleButton language={language} setLanguage={setLanguage} />
      </div>
    </>
  )
}

type NavButtonProps = {
  label: string
  onClick: () => void
}

type LanguageToggleButtonProps = {
  language: "TR" | "EN"
  setLanguage: (language: "TR" | "EN") => void
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

function LanguageToggleButton({ language, setLanguage }: LanguageToggleButtonProps) {
  const toggleLanguage = () => {
    setLanguage(language === "TR" ? "EN" : "TR")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-lg font-medium hover:text-orange transition-colors duration-300"
    >
      {language === "TR" ? (
        <>
          <span className="text-orange">Türkçe</span>ye Geç
        </>
      ) : (
        <>
          Switch to <span className="text-orange">English</span>
        </>
      )}
    </button>
  )
}
