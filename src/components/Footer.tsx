import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { currentLang } = useLanguage();
  const links = currentLang.footer.navigation.links;
  const contact = [
    { label: currentLang.footer.contact.github, href: "https://github.com/hediye-ersan", Icon: FiGithub },
    { label: currentLang.footer.contact.linkedin, href: "https://www.linkedin.com/in/hediye-ersan-b2799325a/", Icon: FiLinkedin },
    { label: currentLang.footer.contact.email, href: "mailto:hediyesnl9@gmail.com", Icon: FiMail },
  ]

  return (
    <footer className="bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-14 rounded-t-3xl">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 sm:pb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">{currentLang.footer.connect}</h2>
          <a
            href="mailto:hediyesnl9@gmail.com?subject=Let%27s%20work%20together"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange text-white font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition w-full sm:w-auto"
          >
            {currentLang.footer.hireMe}
          </a>
        </div>

        <hr className="border-[#3a3a3a]" />

        {/* Middle grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 py-8 sm:py-10">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-orange text-white text-lg font-bold">
                HE
              </span>
              <span className="text-lg font-semibold tracking-wide">{currentLang.footer.brand.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {currentLang.footer.brand.description}
            </p>
            
          </div>

          {/* Navigation / Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-200">
            <div>
              <h4 className="text-orange font-semibold mb-3">{currentLang.footer.navigation.title}</h4>
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item} className="hover:text-white cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-orange font-semibold mb-3">{currentLang.footer.contact.title}</h4>
              <ul className="space-y-2">
                {contact.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors flex items-center gap-2"
                    >
                      {item.Icon && <item.Icon className="w-4 h-4 text-white" />}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h4 className="text-orange font-semibold">{currentLang.footer.subscribe.title}</h4>
            <div className="flex flex-col sm:flex-row items-stretch rounded-md overflow-hidden bg-white/5 border border-[#3a3a3a]">
              <input
                type="email"
                value="hediyesnl9@gmail.com"
                readOnly
                className="flex-1 px-4 py-3 bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => window.location.href = 'mailto:hediyesnl9@gmail.com?subject=Let\'s%20work%20together'}
                className="px-4 py-3 sm:py-0 bg-orange text-white text-sm font-semibold flex items-center justify-center hover:bg-orange/90 transition-colors"
                aria-label="Send"
              >
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-[#3a3a3a]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 text-xs md:text-sm text-gray-300">
          <div>{currentLang.footer.copyright}</div>
          <div className="flex items-center gap-3">
            <a className="hover:text-white cursor-default">{currentLang.footer.terms}</a>
            <span className="opacity-50">|</span>
            <a className="hover:text-white cursor-default">{currentLang.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
