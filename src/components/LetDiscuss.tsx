import { useEffect, useState } from "react"
import type { JSX } from "react"
import { motion } from "framer-motion"
import { FiArrowUpRight, FiAward, FiCode, FiStar, FiMousePointer } from "react-icons/fi"

const accent = "#ff8a00"

export default function LetDiscuss() {
  const email = "hediyesnl9@gmail.com"
  const [typed, setTyped] = useState("")
  const [phase, setPhase] = useState<"typing" | "button" | "press" | "idle">("typing")
  const [loopId, setLoopId] = useState(0)

  useEffect(() => {
    setTyped("")
    setPhase("typing")
    let idx = 0
    const typeTimer = setInterval(() => {
      setTyped(email.slice(0, idx + 1))
      idx += 1
      if (idx === email.length) {
        clearInterval(typeTimer)
        setTimeout(() => setPhase("button"), 600)
        setTimeout(() => setPhase("press"), 1050)
        setTimeout(() => setPhase("idle"), 1400)
        setTimeout(() => setLoopId((v) => v + 1), 2300)
      }
    }, 70)

    return () => clearInterval(typeTimer)
  }, [loopId])

  const cursorVariants = {
    typing: { opacity: 1, left: "10%", top: "50%", scale: 1, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" },
    button: { opacity: 1, left: "90%", top: "50%", scale: 1, filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" },
    press: { opacity: 1, left: "90%", top: "50%", scale: 0.9, filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.18))" },
    idle: { opacity: 0, left: "90%", top: "50%", scale: 1 },
  }

  return (
    <section
      id="discuss"
      className="py-20 px-4 bg-white flex items-center justify-center"
      style={{ fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif" }}
    >
      <div className="w-full max-w-5xl text-center space-y-8">
        <div className="space-y-3 md:space-y-4">
          <p className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Have an awesome project idea?
          </p>
          <p className="text-5xl font-extrabold" style={{ color: accent }}>
            Let&apos;s Discuss
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="flex items-center gap-4 md:gap-6 px-4 md:px-5 py-3 md:py-3.5 rounded-full border shadow-sm">
            <span className="flex items-center justify-center rounded-full shrink-0">
              <img src="/assets/email.svg" alt="Email icon" className="w-full" />
            </span>

            <div className="flex-1 relative">
              <div className="text-base md:text-lg text-gray-700">{typed || "Enter Email Address"}</div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-base md:text-lg text-gray-700 opacity-0 select-none">
                {email}
              </div>
            </div>

            <motion.button
              type="button"
              aria-label="Send email"
              className={`relative inline-flex items-center justify-center px-8 md:px-10 py-5 md:py-3.5 rounded-full text-white font-semibold text-lg leading-none transition-colors ${
                phase === "press" ? " bg-[#ff8a00]" : "bg-orange"
              }`}
              animate={phase === "press" ? { scale: 0.95 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              onClick={() => (window.location.href = `mailto:${email}?subject=Merhaba%20Hediye`)}
              style={{ boxShadow: "0 10px 25px -18px rgba(0,0,0,0.4)" }}
            >
              Send
            </motion.button>
          </div>

          <motion.div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 z-10"
            variants={cursorVariants}
            animate={phase}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border border-slate-600 shadow-[0_4px_10px_-4px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <FiMousePointer className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-700 text-base md:text-lg">
          <SocialStat icon={() => <FiAward className="w-5 h-5 text-orange-500" />} label="Sakarya Univ. Mathematics Graduate" />
          <Divider />
          <SocialStat icon={() => <FiCode className="w-5 h-5 text-orange-500" />} label="Full-Stack Web Developer" />
          <Divider />
          <SocialStat icon={() => <FiStar className="w-5 h-5 text-orange-500" />} label="UI/UX & Modern Design" />
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
