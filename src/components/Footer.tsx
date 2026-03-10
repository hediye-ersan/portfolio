import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export default function Footer() {
  const links = ["Home", "About us", "Service", "Resume", "Project"]
  const contact = [
    { label: "GitHub", href: "https://github.com/hediye-ersan", Icon: FiGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hediye-ersan-b2799325a/", Icon: FiLinkedin },
    { label: "Email", href: "mailto:hediyesnl9@gmail.com", Icon: FiMail },
  ]

  return (
    <footer className="bg-[#272727] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-14 rounded-t-3xl">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
          <h2 className="text-4xl md:text-5xl font-semibold">Lets Connect there</h2>
          <a
            href="mailto:hediyesnl9@gmail.com?subject=Let%27s%20work%20together"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-white font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            Hire me
          </a>
        </div>

        <hr className="border-[#3a3a3a]" />

        {/* Middle grid */}
        <div className="grid md:grid-cols-3 gap-10 py-10">
          {/* Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-orange text-white text-lg font-bold">
                HE
              </span>
              <span className="text-lg font-semibold tracking-wide">HEDİYE ERSAN</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum eget.
            </p>
            
          </div>

          {/* Navigation / Contact */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-200">
            <div>
              <h4 className="text-orange font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item} className="hover:text-white cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-orange font-semibold mb-3">Contact</h4>
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
            <h4 className="text-orange font-semibold">Get the latest information</h4>
            <div className="flex items-stretch rounded-md overflow-hidden bg-white/5 border border-[#3a3a3a]">
              <input
                type="email"
                value="hediyesnl9@gmail.com"
                readOnly
                className="flex-1 px-4 py-3 bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="button"
                className="px-4 bg-orange text-white text-sm font-semibold flex items-center justify-center"
                aria-label="Send"
              >
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-[#3a3a3a]" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-xs md:text-sm text-gray-300">
          <div>Copyright© {new Date().getFullYear()} Hediye Ersan. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:text-white cursor-default">User Terms &amp; Conditions</a>
            <span className="opacity-50">|</span>
            <a className="hover:text-white cursor-default">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
