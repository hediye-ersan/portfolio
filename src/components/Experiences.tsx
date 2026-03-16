import { useLanguage } from "../contexts/LanguageContext";


export default function Experiences() {
  const { currentLang } = useLanguage();
  const experiences = currentLang.experience.experiences;

  return (
    <section className="w-full py-14 sm:py-20 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* BAŞLIK: My (Lacivert/Antrasit) Work Experince (Turuncu) */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold mb-14 sm:mb-24 md:mb-32">
          {currentLang.experience.title}
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* MERKEZİ KESİKLİ ÇİZGİ */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px border-l-2 border-dashed border-[#2D3E50]/30 z-0"></div>

          <div className="space-y-14 sm:space-y-20 md:space-y-24">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start justify-between w-full pl-12 md:pl-0">
                
                {/* SOL TARAF: Şirket ve Tarih */}
                <div className="w-full md:w-[42%] text-left pt-1 mb-4 md:mb-0">
                  <h3 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-gray-700 leading-tight mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium">
                    {exp.date}
                  </p>
                </div>

                {/* MERKEZ: Kesikli Halkalı Nokta */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-10 mt-2">
                  <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                    {/* Dıştaki Kesikli Çizgi Halkası */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2D3E50]"></div>
                    {/* İçteki Renkli Nokta */}
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${idx === 0 || idx === 2 ? 'bg-[#FF8A00]' : 'bg-[#2D3E50]'}`}></div>
                  </div>
                </div>

                {/* SAĞ TARAF: Rol ve Açıklama */}
                <div className="w-full md:w-[42%] pl-0 md:pl-12 pt-1">
                  <h4 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-gray-700 leading-tight mb-3 md:mb-4">
                    {exp.role}
                  </h4>
                  {exp.desc && (
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-md">
                      {exp.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
