import type { ReactNode, MouseEventHandler } from "react"

interface PrimaryButtonProps {
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement  | HTMLButtonElement>
  className?: string
  children: ReactNode
}

const PrimaryButton = ({ href, children, onClick, className = "" }: PrimaryButtonProps) => {
  const Cmp = href ? "a" : "button"
  return (
    <Cmp
      {...(href ? { href } : {})}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:translate-y-[-1px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </Cmp>
  )
}

export default PrimaryButton