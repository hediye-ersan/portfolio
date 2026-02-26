import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'px-4 py-2 rounded-full bg-orange-500 text-white font-medium'
      : 'px-4 py-2 text-white/90 hover:text-white'

  return (
    <header className="w-full flex justify-center mt-6">
      <nav className="w-[90%] max-w-5xl bg-black text-white rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="#services" className="px-4 py-2 text-white/90 hover:text-white">
              Service
            </NavLink>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold">
              JC
            </div>
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="#resume" className="px-4 py-2 text-white/90 hover:text-white">
              Resume
            </NavLink>
            <NavLink to="#projects" className="px-4 py-2 text-white/90 hover:text-white">
              Project
            </NavLink>
            <NavLink to="#contact" className="px-4 py-2 text-white/90 hover:text-white">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
