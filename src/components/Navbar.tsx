import { useEffect, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const SECTION_IDS = ["home", "projects", "experience", "skills", "certificate", "contact"] as const
const NAV_OFFSET = 120

export default function Navbar() {
  const [active, setActive] = useState(0)
  const { currentLang, setLanguage, language } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    let ticking = false

    const getNavOffset = () => (window.innerWidth < 1024 ? 88 : NAV_OFFSET)

    const updateActiveSection = () => {
      const navOffset = getNavOffset()
      const probe = Math.min(navOffset + 1, window.innerHeight * 0.45)
      let currentIndex = 0

      for (let i = 0; i < sections.length; i += 1) {
        const rect = sections[i].getBoundingClientRect()
        if (rect.top <= probe && rect.bottom > probe) {
          currentIndex = i
          break
        }
        if (rect.top <= probe) currentIndex = i
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) currentIndex = sections.length - 1

      setActive(currentIndex)
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    updateActiveSection()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const scrollToSection = (index: number) => {
    setActive(index)
    setIsMobileMenuOpen(false)

    const targetId = SECTION_IDS[index]

    if (index === 0) {
      // Home - scroll to very top of page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Other sections - scroll to element with offset for fixed navbar
      const element = document.getElementById(targetId)
      if (element) {
        const navOffset = window.innerWidth < 1024 ? 88 : NAV_OFFSET
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      {/* DESKTOP NAVBAR - Exactly as original */}
      <nav className="fixed top-0 left-0 right-0 w-full justify-center mt-9 items-center max-w-7xl z-50 mx-auto hidden lg:flex">
        <div className="bg-black/95 backdrop-blur-sm rounded-full p-[10px] flex items-center justify-between w-full">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {currentLang.nav.links.slice(0, 3).map((item, index) => (
              <NavItemButton
                key={item}
                label={item}
                isActive={active === index}
                onClick={() => scrollToSection(index)}
                className="px-8 py-5 text-xl"
              />
            ))}
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
            {currentLang.nav.links.slice(3).map((item, index) => (
              <NavItemButton
                key={item}
                label={item}
                isActive={active === index + 3}
                onClick={() => scrollToSection(index + 3)}
                className="px-8 py-5 text-xl"
              />
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="fixed top-4 left-4 right-4 z-[60] lg:hidden">
        <div className="bg-black/70 border border-white/10 backdrop-blur-md rounded-full px-4 py-3 flex items-center justify-between w-full shadow-2xl transition-all duration-300">
          {/* LEFT - Logo Only */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="logo-circle w-9 h-9 flex-shrink-0 bg-gradient-to-br from-orange to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange/20">
              HE
            </div>
            <div className="relative overflow-hidden flex items-center min-w-0">
              <span className="text-sm tracking-wide text-white font-semibold truncate block">
                {currentLang.nav.logo.name}
              </span>
            </div>
          </div>

          {/* RIGHT - Hamburger Menu + Language */}
          <div className="flex items-center justify-end gap-3 flex-shrink-0 ml-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(language === "TR" ? "EN" : "TR")}
              className="w-10 text-xs font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg transition-colors border border-white/5 active:scale-95 flex items-center justify-center"
            >
              {language === "TR" ? "EN" : "TR"}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-end justify-center gap-[5px] p-1 relative w-6 h-6"
              aria-label="Toggle menu"
            >
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-out origin-right ${isMobileMenuOpen ? 'w-6 -rotate-[42deg] -translate-y-[1px]' : 'w-6'}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-out origin-right ${isMobileMenuOpen ? 'w-6 rotate-[42deg] translate-y-[1px]' : 'w-4'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col items-center justify-start pt-24 pb-10 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-2 w-full px-6">
          {currentLang.nav.links.map((item, index) => (
            <div
              key={item}
              className={`transform transition-all duration-500 w-full flex justify-center ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${isMobileMenuOpen ? index * 100 + 100 : 0}ms` }}
            >
              <NavItemButton
                label={item}
                isActive={active === index}
                onClick={() => scrollToSection(index)}
                className="w-full max-w-[280px] py-3 text-base tracking-wide text-center"
                activeClassName="shadow-orange/20 shadow-xl border border-orange/50"
              />
            </div>
          ))}
        </div>
        
        {/* Footer/Contact in Menu */}
        <div 
          className={`absolute bottom-8 transform transition-all duration-700 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: `${isMobileMenuOpen ? currentLang.nav.links.length * 100 + 200 : 0}ms` }}
        >
           <p className="text-white/30 text-xs tracking-widest uppercase">{currentLang.nav.logo.title}</p>
        </div>
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

type NavItemButtonProps = NavButtonProps & {
  isActive: boolean
  className?: string
  activeClassName?: string
}

function NavItemButton({ label, onClick, isActive, className = "", activeClassName = "" }: NavItemButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full font-semibold transition-all duration-300 ease-out whitespace-nowrap ${
        isActive
          ? `bg-orange text-white shadow-lg shadow-orange/30 ${activeClassName}`
          : "text-white/70 hover:text-white hover:bg-white/10"
      } ${className}`}
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
