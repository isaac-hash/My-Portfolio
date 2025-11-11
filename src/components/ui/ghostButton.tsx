import type { ReactNode, MouseEventHandler } from "react"

interface GhostButtonProps {
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement  | HTMLButtonElement>
  className?: string
  children: ReactNode
}


const GhostButton = ({ href, children, onClick, className = "" }: GhostButtonProps) => {
  const Cmp = href ? "a" : "button"
  return (
    <Cmp
      {...(href ? { href } : {})}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 ${className}`}
    >
      {children}
    </Cmp>
  )
}

export default GhostButton