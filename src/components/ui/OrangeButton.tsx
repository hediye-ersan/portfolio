import type { ButtonHTMLAttributes, ReactNode } from "react"

type OrangeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  fullWidth?: boolean
}

export default function OrangeButton({ children, className = "", fullWidth = false, ...rest }: OrangeButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full bg-orange text-white font-semibold shadow-[0_12px_28px_-14px_rgba(255,138,0,0.85)] transition-all duration-300"
  const size = fullWidth ? "w-full h-[52px] px-6" : "px-10 py-5 text-xl"

  return (
    <button {...rest} className={`${base} ${size} ${className}`.trim()}>
      {children}
    </button>
  )
}
