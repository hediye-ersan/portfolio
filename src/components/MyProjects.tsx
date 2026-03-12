import { useState } from "react"
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"



export default function MyProjects() {
  const { currentLang } = useLanguage();
  const certificates = currentLang.certificates.certificates;
  const [current, setCurrent] = useState(0)
  const total = certificates.length
  const active = certificates[current]
  const prevIndex = (current - 1 + total) % total
  const nextIndex = (current + 1) % total
  const visibleIndexes = [prevIndex, current, nextIndex]

  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  const slideVariants = {
    active: { opacity: 1, scale: 1, y: 0, x: 0, filter: "blur(0px)" },
    sideLeft: { opacity: 0.72, scale: 0.92, y: 18, x: -28, filter: "blur(1px)" },
    sideRight: { opacity: 0.72, scale: 0.92, y: 18, x: 28, filter: "blur(1px)" },
  }

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
              {currentLang.certificates.subtitle.split(' ').slice(0, -1).join(' ')}
              <br />
              my <span className="text-[#ff8a00]">{currentLang.certificates.subtitle.split(' ').pop()}</span>
            </p>
          </div>
         
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <button
            onClick={prev}
            className="hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-orange text-white shadow hover:-translate-y-[55%] transition items-center justify-center"
            aria-label="Previous certificate"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>

          <div className="overflow-visible">
            <div className="flex items-center justify-center gap-3 md:gap-6 -mx-3">
              {visibleIndexes.map((idx, position) => {
                const item = certificates[idx]
                const role = position === 1 ? "active" : position === 0 ? "left" : "right"
                const isActive = role === "active"
                const variant = role === "active" ? "active" : role === "left" ? "sideLeft" : "sideRight"

                return (
                  <motion.div
                    key={`${item.image}-${idx}`}
                    className={`shrink-0 px-2 md:px-4 py-4 rounded-[32px] ${
                      role === "active" ? "basis-full md:basis-2/5 bg-orange" : "basis-5/12 md:basis-1/4"
                    } ${role !== "active" ? "hidden sm:block" : ""}`}
                    layout
                    initial={false}
                    variants={slideVariants}
                    animate={variant}
                    transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[32px] shadow-[0_28px_65px_-26px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                        isActive ? "" : "bg-white border border-slate-100/80"
                      }`}
                    >
                      <div className="overflow-hidden rounded-[28px] bg-white">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <button
            onClick={next}
            className="hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-orange text-white shadow hover:-translate-y-[55%] transition items-center justify-center"
            aria-label="Next certificate"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {certificates.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === current ? "w-6 bg-[#ff8a00]" : "w-2 bg-slate-300"
                }`}
            ></span>
          ))}
        </div>

        {/* Tags for the active certificate */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {active.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-gray-100 text-black text-sm shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detail card */}
        <div className="mt-10 text-center">
          <h3 className="text-4xl font-bold text-gray-700 flex items-center justify-center gap-3">
            {active.title}{" "}
            <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange text-white shadow-md">
              <FiArrowUpRight className="w-4 h-4" />
            </span>
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-gray-700">
            {active.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
