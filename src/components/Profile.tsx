import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Profile() {
  // Başlangıçta ve mouse alandan çekildiğinde "Portfolio" aktif kalacak
  const [hoveredButton, setHoveredButton] = useState<"portfolio" | "hireme">("portfolio");
  const { currentLang } = useLanguage();

  return (
    <section className="relative w-full max-w-7xl mx-auto my-auto  flex flex-col items-center justify-start overflow-hidden pt-48 font-sans">
      
      {/* ANA KAPSAYICI */}
      <div className="group relative w-full h-[850px] flex flex-col items-center justify-center">
        
        {/* 1. KATMAN: Mor Çizimler */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none flex justify-center items-center">
          <img 
            src="/assets/purple-doodles.svg" 
            alt="Doodles" 
            className="w-full max-w-5xl h-auto scale-105 object-contain translate-y-10 group-hover:translate-y-0 transition-transform duration-700" 
          />
        </div>

        {/* 2. KATMAN: Orta Metin Bloğu */}
        <div className="relative z-20 text-center mb-20 transition-all duration-500 group-hover:opacity-0 group-hover:pointer-events-none">
          <div className="relative inline-block mb-4">
            <div className="px-6 py-1.5  rounded-full border-2 border-black text-xl font-medium">
              {currentLang.profile.hello}
            </div>
            <img src="/assets/hello-spark.svg" className="absolute -top-3 -right-4 w-6" alt="spark" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: currentLang.profile.intro }} />
          
          <img src="/assets/left-spark.svg" className="absolute -left-12 bottom w-12 hidden md:block" alt="spark-left" />
        </div>

        {/* 3. VE 4. KATMAN: FOTOĞRAF, HALKA VE BUTONLAR */}
        <div className="relative z-30 mt-[-60px] md:mt-100px] flex justify-center w-full">
          
          <img 
            src="/assets/orange-circle.svg" 
            alt="Circle" 
            className="absolute bottom-0 w-[500px] md:w-[650px] z-10 pointer-events-none" 
          />
          
          <img 
            src="/assets/hediye-photo.png" 
            alt="Hediye Ersan" 
            className="relative z-20 w-72 md:w-[480px] object-contain transition-transform duration-500 origin-bottom group-hover:scale-105" 
          />

          {/* GLASS BUTON KAPSAYICISI */}
          <div 
            onMouseLeave={() => setHoveredButton("portfolio")}
            className="absolute bottom-12 md:bottom-20 z-50 flex items-center bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full shadow-2xl w-[320px] md:w-[450px]"
          >
            
            {/* KAYAN TURUNCU ARKA PLAN (INDICATOR) */}
            <div 
              className={`absolute h-[calc(100%-16px)] transition-all duration-500 ease-in-out bg-orange rounded-full shadow-lg ${
                hoveredButton === "portfolio" 
                  ? "left-2 w-[52%]" 
                  : "left-[46%] w-[52%]"
              }`}
            />

            {/* PORTFOLIO BUTONU */}
            <button 
              onMouseEnter={() => setHoveredButton("portfolio")}
              className={`relative z-10 flex items-center justify-center gap-3 py-4 md:py-6 text-xl md:text-2xl font-medium transition-colors duration-300 w-1/2 ${
                hoveredButton === "portfolio" ? "text-white" : "text-white/60"
              }`}
            >
              {currentLang.profile.portfolio}
              <svg 
                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-300 ${hoveredButton === "portfolio" ? "translate-x-1 -translate-y-1" : ""}`}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>

            {/* HIRE ME BUTONU */}
            <button 
              onMouseEnter={() => setHoveredButton("hireme")}
              onClick={() => window.open('https://www.linkedin.com/in/hediye-ersan-b2799325a/', '_blank')}
              className={`relative z-10 flex items-center justify-center gap-3 py-4 md:py-6 text-xl md:text-2xl font-medium transition-colors duration-300 w-1/2 ${
                hoveredButton === "hireme" ? "text-white" : "text-white/60"
              }`}
            >
              {currentLang.profile.hireMe}
              <svg 
                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-all duration-300 ${hoveredButton === "hireme" ? "translate-x-1 -translate-y-1 opacity-100" : "opacity-0 w-0"}`}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* YAN METİNLER */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-[300px] z-40 transition-all duration-700 ease-in-out group-hover:-translate-y-[280px] hidden xl:block">
           <span className="text-7xl text-gray-700 font-serif block mb-2">“</span>
           <p className="text-gray-700 font-medium text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: currentLang.profile.quote }} />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/3 z-40 transition-all duration-700 ease-in-out group-hover:-translate-y-[250px] hidden xl:block">
           <div className="flex text-orange text-4xl mb-2">★★★★★</div>
           <p className="text-6xl font-bold text-gray-900 leading-none">{currentLang.profile.stats.hours}</p>
           <p className="text-xl text-gray-500 tracking-[0.2em] uppercase mt-2">{currentLang.profile.stats.hoursLabel}</p>
        </div>

      </div>
    </section>
  );
}