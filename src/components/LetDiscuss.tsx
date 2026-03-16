import { useEffect, useState } from "react"
import type { JSX } from "react"
import { motion } from "framer-motion"
import { FiAward, FiCode, FiStar, FiMousePointer } from "react-icons/fi"
import { useLanguage } from "../contexts/LanguageContext"

const accent = "#ff8a00"

export default function LetDiscuss() {
  const { currentLang } = useLanguage();
  const email = "hediyesnl9@gmail.com"
  const [typed, setTyped] = useState("")
  const [phase, setPhase] = useState<"typing" | "button" | "press" | "idle">("button")
  const [loopId, setLoopId] = useState(0)

  useEffect(() => {
    setTyped("")
    setPhase("button")
    let idx = 0
    const typeTimer = setInterval(() => {
      setTyped(email.slice(0, idx + 1))
      idx += 1
      if (idx === email.length) {
        clearInterval(typeTimer)
        setTimeout(() => setPhase("press"), 200)
        setTimeout(() => setPhase("idle"), 500)
        setTimeout(() => setLoopId((v) => v + 1), 1200)
      }
    }, 70)

    return () => clearInterval(typeTimer)
  }, [loopId])

  const cursorVariants = {
    typing: { opacity: 1, left: "10%", top: "50%", scale: 1, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" },
    button: { opacity: 1, left: "92%", top: "50%", scale: 1, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" },
    press: { opacity: 1, left: "92%", top: "50%", scale: 0.9, filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.18))" },
    idle: { opacity: 0, left: "90%", top: "50%", scale: 1 },
  }

  return (
    <section
      id="discuss"
      className="py-14 sm:py-20 px-4 bg-white flex items-center justify-center"
      style={{ fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif" }}
    >
      <div className="w-full max-w-7xl text-center space-y-7 sm:space-y-8">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            {currentLang.letsDiscuss.title}
          </p>
          <p className="text-4xl sm:text-5xl font-extrabold" style={{ color: accent }}>
            {currentLang.letsDiscuss.subtitle}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 px-4 md:px-5 py-3 md:py-3.5 rounded-2xl sm:rounded-full border shadow-sm">
            <span className="flex items-center justify-center rounded-full shrink-0 w-12 h-12 sm:w-10 sm:h-10 self-center sm:self-auto">
              <img src="/assets/email.svg" alt="Email icon" className="w-8 h-8 sm:w-7 sm:h-7" />
            </span>

            <div className="flex-1 relative text-center sm:text-left">
              <div className="text-sm sm:text-base md:text-lg text-gray-700">{typed || currentLang.letsDiscuss.emailPlaceholder}</div>
              <div className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg text-gray-700 opacity-0 select-none">
                {email}
              </div>
            </div>

            <motion.button
              type="button"
              aria-label="Send email"
              className={`relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-3.5 rounded-full text-white font-semibold text-base sm:text-lg leading-none transition-colors ${
                phase === "press" ? " bg-[#ff8a00]" : "bg-orange"
              }`}
              animate={phase === "press" ? { scale: 0.95 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              onClick={() => (window.location.href = `mailto:${email}?subject=Merhaba%20Hediye`)}
              style={{ boxShadow: "0 10px 25px -18px rgba(0,0,0,0.4)" }}
            >
              {currentLang.letsDiscuss.sendButton}
            </motion.button>
          </div>

          <motion.div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block"
            variants={cursorVariants}
            animate={phase}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border border-slate-600 shadow-[0_4px_10px_-4px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <FiMousePointer className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-700 text-sm sm:text-base md:text-lg">
          <SocialStat icon={() => <FiAward className="w-5 h-5 text-orange-500" />} label={currentLang.letsDiscuss.stats.education} />
          <Divider />
          <SocialStat icon={() => <FiCode className="w-5 h-5 text-orange-500" />} label={currentLang.letsDiscuss.stats.role} />
          <Divider />
          <SocialStat icon={() => <FiStar className="w-5 h-5 text-orange-500" />} label={currentLang.letsDiscuss.stats.design} />
        </div>
      </div>
    </section>
  )
}

type SocialStatProps = {
  icon: () => JSX.Element
  label: string
}

function SocialStat({ icon: Icon, label }: SocialStatProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon />
      <span className="font-semibold text-slate-800">{label}</span>
    </div>
  )
}

function Divider() {
  return <span className="hidden md:block w-px h-5 bg-slate-300" />
}
