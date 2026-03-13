import { useState } from "react"
import OrangeButton from "./ui/OrangeButton"
import { useLanguage } from "../contexts/LanguageContext"

export default function Navbar() {
  const [active, setActive] = useState(0)
  const { currentLang, setLanguage, language } = useLanguage()

  const scrollToSection = (index: number) => {
    setActive(index)

    const sectionIds = ['home', 'projects', 'experience', 'skills', 'certificate', 'contact']
    const targetId = sectionIds[index]

    if (index === 0) {
      // Home - scroll to very top of page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Other sections - scroll to element with offset for fixed navbar
      const element = document.getElementById(targetId)
      if (element) {
        const navbarHeight = 120 // Navbar height + margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full flex justify-center mt-9 items-center max-w-7xl z-50 mx-auto">
        <div className="bg-black/95 backdrop-blur-sm rounded-full p-[10px] flex items-center justify-between w-full">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {currentLang.nav.links.slice(0, 3).map((item, index) =>
              active === index ? (
                <OrangeButton key={item} onClick={() => scrollToSection(index)} className="px-8 py-5 text-xl whitespace-nowrap">
                  {item}
                </OrangeButton>
              ) : (
                <NavButton key={item} label={item} onClick={() => scrollToSection(index)} />
              )
            )}
          </div>

          {/* CENTER LOGO */}
          <div className="flex flex-col items-center justify-center relative flex-none">
            {/* Container for logo, name and language - fixed width for alignment */}
            <div className="flex flex-col items-center">
              {/* Logo and name - horizontal row */}
              <div className="group flex items-center justify-center">
                <div className="transition-transform duration-300 group-hover:-translate-x-2">
                  <div className="logo-circle w-[46px] h-[46px] bg-orange rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                    HE
                  </div>
                </div>
                <div className="relative overflow-hidden h-[44px] w-[140px] flex items-center justify-center">
                  <span className="text-xl text-white font-semibold transition-opacity duration-300 group-hover:opacity-0 text-center">
                    {currentLang.nav.logo.name}
                  </span>
                  <div className="absolute inset-0 flex flex-col justify-center items-center leading-tight opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs text-gray-200 text-center">{currentLang.nav.logo.title}</span>
                    <span className="text-lg text-white font-semibold text-center">{currentLang.nav.logo.subtitle}</span>
                  </div>
                </div>
              </div>
              {/* LANGUAGE TOGGLE - Below logo, same width as text */}
              <div className="text-center">
                <LanguageToggleButton language={language} setLanguage={setLanguage} />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {currentLang.nav.links.slice(3).map((item, index) =>
              active === index + 3 ? (
                <OrangeButton key={item} onClick={() => scrollToSection(index + 3)} className="px-8 py-5 text-xl whitespace-nowrap">
                  {item}
                </OrangeButton>
              ) : (
                <NavButton key={item} label={item} onClick={() => scrollToSection(index + 3)} />
              )
            )}
          </div>
        </div>
      </nav>

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
      className="px-8 py-5 text-xl font-semibold rounded-full text-white hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
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
      className="text-xs font-medium hover:font-bold transition-all duration-300"
    >
      {language === "TR" ? (
        <span className="text-white">
          Switch to <span className="text-orange">English</span>
        </span>
      ) : (
        <span className="text-white">
          Türkçe'ye <span className="text-orange">Geç</span>
        </span>
      )}
    </button>
  )
}
