import { useState } from "react"
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi"
import { motion } from "framer-motion"

type Certificate = {
  title: string
  subtitle: string
  image: string
  tags: string[]
}

const certificates: Certificate[] = [
  {
    title: "Full Stack Track Certificate",
    subtitle: "I successfully completed a 6-month Full Stack Developer training program. During the training, I developed projects using React, Redux, Java, Spring Boot, and PostgreSQL. I am now eager to apply this knowledge in the professional world and continue learning new technologies.",
    image: "/assets/certificate-2.svg",
    tags: ["Frontend", "Backend", "Java", "Spring Boot", "PostgreSQL", "React", "Redux", "TypeScript", "Full Stack", "OOP"],
  },
  {
    title: "Frontend Development Certificate",
    subtitle: "I successfully completed my intensive Frontend Development journey, which I dedicated the last 3 months to, and earned my certification! 🚀During this process, I not only gained theoretical knowledge, but also developed user-friendly interfaces using React and JavaScript and designed projects based on real-world scenarios. Creating solutions with modern web technologies and applying clean code principles was an incredible experience for me.",
    image: "/assets/certificate-4.svg",
    tags: ["HTML", "CSS", "JavaScript", "React", "Frontend Development", "UI/UX Design", "Clean Code Principles", "Responsive Design", "Web Accessibility", "Git / GitHub"],
  },
  {
    title: "Project Management Certificate",
    subtitle: "🚀 I successfully completed a month-long intensive and productive project management internship. During this process, I took courses in IT Law, Management and Organization, Artificial Intelligence and Data Science, and Project Management, gaining theoretical knowledge and having the opportunity to put what I learned into practice by delivering projects.",
    image: "/assets/certificate-3.svg",
    tags: ["Information Technology Law", "Management and Organization", "Artificial Intelligence and Data Science", "Project Management"],
  },
  {
    title: "Codemasters Challenge Certificate",
    subtitle: "I successfully completed the CodeMasters event, featuring experts from leading technology companies in the industry, and received my participation certificate! 🚀Listening to the processes behind the scenes at giants like Microsoft, Trendyol, Hepsiburada, and Havelsan, as well as current technology trends and expert opinions, was a tremendous source of inspiration for me. I continue to keep myself updated by closely following technological developments. 💻✨",
    image: "/assets/Codemasters 1.svg",
    tags: ["Codemaster", "Programming", "Technology Trends", "Microsoft", "Trendyol", "Hepsiburada", "Havelsan"],
  },
  {
    title: "International Business Analysis Methodology and Techniques Certificate",
    subtitle: "I successfully completed my International Business Analysis Methodologies and Techniques training and received my certificate! 🚀 I am delighted to have taken my skills in business process optimization, requirements analysis, and modern methodologies to the next level.",
    image: "/assets/certificate-1.svg",
    tags: ["Business Analysis Methodologies", "Business Analysis Techniques", "Business Process Optimization", "Requirements Analysis", "Agile Methodologies", "Scrum", "Kanban"],
  },
  {
    title: "Database Querying with SQL Certificate",
    subtitle: "I successfully completed my 104-hour SQL Database Querying training and received my certificate! 🚀 I believe it has taken my SQL querying, database design, and data analysis skills to the next level.",
    image: "/assets/certificate-5.svg",
    tags: ["SQL", "Database Querying", "Data Analysis", "MySQL"],
  },

]

export default function MyProjects() {
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
              Lets have a look at
              <br />
              my <span className="text-[#ff8a00]">Certificates</span>
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
            {active.subtitle} • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  )
}
