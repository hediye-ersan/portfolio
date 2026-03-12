import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface Project {
  title: string;
  image: string;
  desc: string;
  github?: string;
  website?: string;
}

export default function MyServices() {
  const [currentPage, setCurrentPage] = useState(0);
  const { currentLang } = useLanguage();
  
  // Project images mapping
  const projectImages = [
    "/assets/project-3.svg",
    "/assets/project-1.svg", 
    "/assets/project-5.svg",
    "/assets/project-2.svg",
    "/assets/project-4.svg",
    "/assets/project-6.svg"
  ];
  
  const services = currentLang.projects.projects.map((project, index) => ({
    ...project,
    image: projectImages[index] || "/assets/project-1.svg"
  }));

  // Projeleri 3'erli gruplara ayırıyoruz
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const currentItems = services.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="relative w-full py-24 overflow-hidden rounded-[3rem] border border-white/5"
      style={{ backgroundImage: "url('/assets/image-bg.svg')", backgroundSize: "cover", backgroundPosition: "center" }}>

      {/* HAREKETLİ TURUNCU BLOBLAR */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Sol Üst Blob */}
        <motion.img
          src="/assets/blob-left.svg"
          animate={{ x: [0, 20, 0], y: [0, -40, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-20 opacity-40"
        />
        {/* Orta Üst Blob - Sadece Sağa Sola */}
        <motion.img
          src="/assets/blob-center.svg"
          animate={{ x: [0, 150, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-10 opacity-30"
        />
        {/* Sağ Alt Blob */}
        <motion.img
          src="/assets/blob-right.svg"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 bottom-10 opacity-40"
        />
      </div>

      <div className="relative z-10 container mx-auto px-8">
        {/* BAŞLIK KISMI */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              {currentLang.projects.title}
            </h2>
            <div className="h-1.5 w-32 bg-orange rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
            {currentLang.projects.subtitle}
          </p>
        </div>

        {/* PROJE KARTLARI - ANIMASYONLU GEÇİŞ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            {currentItems.map((service, idx) => (
              <ProjectCard key={service.title} service={service} idx={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* DINAMIK DOTS (NOKTALAR) */}
        <div className="flex justify-center gap-3 mt-20">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`transition-all duration-500 rounded-full ${currentPage === index
                  ? "w-12 h-3 bg-orange shadow-[0_0_15px_rgba(255,138,0,0.5)]"
                  : "w-3 h-3 bg-white/10 hover:bg-white/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  service: Project;
  idx: number;
}

function ProjectCard({ service, idx }: ProjectCardProps) {
  const [hoveredButton, setHoveredButton] = useState<"github" | "website">("github");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ y: -15 }}
      className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 flex flex-col h-full group transition-all duration-500 hover:border-orange"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-orange transition-colors">
          {service.title}
        </h3>
      </div>

      <div className="relative flex-grow bg-black/20 mb-6 aspect-[4/3] overflow-hidden rounded-[1.4rem]">
        <img src={service.image} alt={service.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center overflow-y-auto"
        >
          <p className="text-gray-200 text-[13px] leading-relaxed line-clamp-20">
            {service.desc}
          </p>
        </motion.div>
      </div>

      {/* GitHub ve Website Butonları - Profile.tsx tarzı */}
      <div 
        onMouseLeave={() => setHoveredButton("github")}
        className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 p-1.5 rounded-full shadow-lg w-full"
      >
        {/* KAYAN TURUNCU ARKA PLAN (INDICATOR) */}
        <div 
          className={`absolute h-[calc(100%-12px)] transition-all duration-500 ease-in-out bg-orange rounded-full shadow-lg ${
            hoveredButton === "github" 
              ? "left-1.5 w-[52%]" 
              : "left-[47%] w-[53%]"
          }`}
        />

        {/* GitHub Butonu */}
        <a 
          href={service.github}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton("github")}
          className={`relative z-10 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors duration-300 flex-1 ${
            hoveredButton === "github" ? "text-white" : "text-white/60"
          }`}
        >
          GitHub
          <svg 
            width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
            className={`transition-transform duration-300 ${hoveredButton === "github" ? "translate-x-1 -translate-y-1" : ""}`}
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        {/* Website Butonu */}
        <a 
          href={service.website}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton("website")}
          className={`relative z-10 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors duration-300 flex-1 ${
            hoveredButton === "website" ? "text-white" : "text-white/60"
          }`}
        >
          Website
          <svg 
            width="16" height="16" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-all duration-300 ${hoveredButton === "website" ? "translate-x-1 -translate-y-1 opacity-100" : "opacity-0 w-0"}`}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
