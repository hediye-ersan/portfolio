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
      // Other sections - scroll to element
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full flex justify-center mt-9 max-w-full px-4 z-50">
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
        <div className="group flex items-center justify-center px-4 relative flex-none">
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
      className="px-8 py-5 text-xl font-semibold rounded-full text-white hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
    >
      {label}
    </button>
  )
}

function LanguageToggleButton({ language, setLanguage }: LanguageToggleButtonProps) {
  const { currentLang } = useLanguage()
  const toggleLanguage = () => {
    setLanguage(language === "TR" ? "EN" : "TR")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-lg font-medium hover:text-orange transition-colors duration-300"
    >
      {language === "TR" ? (
        <span dangerouslySetInnerHTML={{ __html: currentLang.nav.languageToggle.switchToEnglish }} />
      ) : (
        <span dangerouslySetInnerHTML={{ __html: currentLang.nav.languageToggle.switchToTurkish }} />
      )}
    </button>
  )
}
