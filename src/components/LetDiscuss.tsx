import type { JSX } from "react"

const accent = "#ff8a00"

export default function LetDiscuss() {

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

        <a
          href="mailto:hediye@example.com?subject=Proje%20Teklifi%20%2F%20İletişim"
          className="group mx-auto w-full max-w-4xl rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 hover:border-[#ff8a00]"
        >
          <div className="flex items-center justify-center gap-4 px-4 md:px-6 py-3 md:py-4">
            <span
              className="flex items-center justify-center rounded-full w-14 h-14 shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: "rgba(255,138,0,0.14)" }}
            >
              <img src="/assets/email.svg" alt="email" className="w-8 h-8" />
            </span>

            <div className="flex-1 text-left">
              <p className="text-lg md:text-xl text-gray-700 font-semibold">Click to Start a Discussion</p>
              <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-500 transition-colors">
                Send me an Email
              </p>
            </div>
          </div>
        </a>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-700 text-base md:text-lg">
          <SocialStat icon={() => <span className="text-lg">🎓</span>} label="Sakarya Üni. Matematik Mezunu" />
          <Divider />
          <SocialStat icon={() => <span className="text-lg">💻</span>} label="Full-Stack Web Developer" />
          <Divider />
          <SocialStat icon={() => <span className="text-lg">✨</span>} label="UI/UX & Modern Design" />
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
