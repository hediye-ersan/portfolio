import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MyServices() {
  const [currentPage, setCurrentPage] = useState(0);
  const services = [
    {
      title: "JobCraft Cv Builder",
      image: "/assets/project-3.svg",
      desc: "Ekipçe geliştirdiğimiz cv hazırlama web uygulamasında ilk kez TypeScript yazarak temelimi oluşturdum ve takım çalışması deneyimi kazandım. Çok sayfalı akışları yönetmek için Redux Toolkit kullandık; CV adımlarını form yapısıyla kurup kullanıcı verisini Redux’ta tutarak canlı önizleme sağladım. İçerik yüksekliğini ölçen özel bir hook ile ikinci sayfaya otomatik geçişi çözdüm. Backend API’lerini Insomnia ile doğrulayıp entegre ettim. Yayına hazırlanan projede frontend geliştirici olarak aktif rol alıyorum."
    },
    {
      title: "TrendKod",
      image: "/assets/project-1.svg",
      desc: "Geliştirme sürecine Postman ile API testlerini yaparak başladım; veri yapılarını önceden doğrulayıp hatasız bir entegrasyon sağladım.Projede Redux Store kullanarak; alışveriş sepeti, kullanıcı oturumu ve ürün filtreleme gibi karmaşık süreçleri tek bir noktadan yönettim.Redux Thunk ile asenkron API süreçlerini yönettim. Hazırladığım dinamik filtreleme sistemi sayesinde kullanıcıların kategorilere ve ürün özelliklerine göre gerçek zamanlı sonuçlar almasını sağlayan hızlı bir altyapı oluşturdum."
    },
    {
      title: "Technical Analysis",
      image: "/assets/project-2.svg",
      desc: "Matematiksel altyapı ile karmaşık problemler için optimize edilmiş teknik çözümler."
    },
    {
      title: "New Project 4",
      image: "/assets/project-4.svg",
      desc: "4. proje eklendiğinde otomatik olarak ikinci sayfaya geçer."
    },
  ];

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
              My <span className="text-orange">Projects</span>
            </h2>
            <div className="h-1.5 w-32 bg-orange rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
            Matematiksel kesinlik ve modern teknolojileri birleştirerek uçtan uca dijital çözümler üretiyorum.
          </p>
        </div>

        {/* PROJE KARTLARI - ANIMASYONLU GEÇİŞ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[500px]">
          <AnimatePresence mode="wait">
            {currentItems.map((service, idx) => (
              <motion.div
                key={service.title} // Sayfa değiştiğinde tetiklenmesi için benzersiz key
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -15 }}
                className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 flex flex-col h-full group transition-all duration-500 hover:border-orange/50"
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
                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-12">
                      {service.desc}
                    </p>
                  </motion.div>
                </div>

                <div className="flex justify-end mt-auto">
                  <button className="relative bg-[#1a1c24] p-5 rounded-full border border-white/10 text-orange hover:bg-orange hover:text-white transition-all duration-300 shadow-xl">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </button>
                </div>
              </motion.div>
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
