import { useState } from "react"

type Certificate = {
  title: string
  subtitle: string
  image: string
  tags: string[]
}

const certificates: Certificate[] = [
  {
    title: "Frontend Track Certificate",
    subtitle: "React, TypeScript, Tailwindcss",
    image: "/assets/certificate-1.svg",
    tags: ["Landing Page", "Frontend", "TypeScript"],
  },
  {
    title: "Full Stack Track Certificate",
    subtitle: "I successfully completed a 6-month Full Stack Developer training program. During the training, I developed projects using React, Redux, Java, Spring Boot, and PostgreSQL. I am now eager to apply this knowledge in the professional world and continue learning new technologies.",
    image: "/assets/certificate-2.svg",
    tags: ["Frontend", "Backend", "Java", "Spring Boot", "PostgreSQL", "React", "Redux", "TypeScript", "Full Stack", "OOP"],
  },
  {
    title: "Product Design Bootcamp",
    subtitle: "UX research & prototyping",
    image: "/assets/certificate-3.svg",
    tags: ["Product Design", "UX"],
  },
  {
    title: "Glasmorphism Interface",
    subtitle: "Modern visual language",
    image: "/assets/certificate-4.svg",
    tags: ["Glasmorphism", "Visual"],
  },
  {
    title: "Card UI Collection",
    subtitle: "Reusable component library",
    image: "/assets/certificate-5.svg",
    tags: ["Cards", "Components"],
  },
  {
    title: "Codemasters Challenge",
    subtitle: "Full-stack project showcase",
    image: "/assets/Codemasters 1.svg",
    tags: ["Codemaster", "Programming"],
  }
]

export default function MyProjects() {
  const [current, setCurrent] = useState(0)
  const total = certificates.length
  const active = certificates[current]

  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
              Lets have a look at
              <br />
              my <span className="text-[#ff8a00]">Portfolio</span>
            </p>
          </div>
          <button
            onClick={next}
            className="px-6 py-3 bg-[#ff8a00] text-white font-semibold rounded-full shadow-md hover:-translate-y-0.5 transition"
          >
            See All
          </button>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <button
            onClick={prev}
            className="hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-slate-200 bg-white shadow hover:-translate-y-[55%] transition items-center justify-center text-slate-600"
            aria-label="Previous certificate"
          >
            &#8592;
          </button>

          <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-50">
            <div className="flex items-center">
              {certificates.map((item, idx) => {
                const isActive = idx === current
                const isPrev = (current - 1 + total) % total === idx
                const isNext = (current + 1) % total === idx

                if (!isActive && !isPrev && !isNext) return null

                return (
                  <div
                    key={item.image}
                    className="w-full md:w-1/3 shrink-0 px-2 md:px-3 py-4 transition-all duration-500"
                    style={{
                      opacity: isActive ? 1 : 0.55,
                      transform: isActive ? "scale(1)" : "scale(0.94)",
                    }}
                  >
                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-md">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={next}
            className="hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-slate-200 bg-white shadow hover:-translate-y-[55%] transition items-center justify-center text-slate-600"
            aria-label="Next certificate"
          >
            &#8594;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {certificates.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "w-6 bg-[#ff8a00]" : "w-2 bg-slate-300"
              }`}
            ></span>
          ))}
        </div>

        {/* Tags for the active certificate */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {active.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-gray-100 text-slate-600 text-sm shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detail card */}
        <div className="mt-10 text-center">
          <h3 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
            {active.title}{" "}
            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-slate-200 text-[#ff8a00]">
              &#10132;
            </span>
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-slate-500">
            {active.subtitle} • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  )
}
