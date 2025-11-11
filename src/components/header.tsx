import { useState, useEffect } from "react"
import Container from "./ui/container"
import { Menu, X } from "lucide-react"





// ————————————————————————————————
// Nav / Header
// ————————————————————————————————
const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "resume", label: "Resume" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
]

function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState("home")

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset + 1
      let current = "home"
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollY) current = id
      }
      setActiveId(current)
    }
    handler()
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [ids, offset])

  return activeId
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(navItems.map((n) => n.id), 120)

  useEffect(() => {
    const closeOnResize = () => setOpen(false)
    window.addEventListener("resize", closeOnResize)
    return () => window.removeEventListener("resize", closeOnResize)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/70">
      <Container className="flex items-center justify-between py-4">
        <a href="#home" onClick={(e)=>{e.preventDefault(); handleClick("home")}} className="flex items-center gap-2 text-lg font-semibold">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">Z</div>
          <span>Zeec the designer<span className="text-indigo-600">*</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                active === item.id
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>
      {open && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <Container className="flex flex-col py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                  active === item.id ? "text-indigo-600" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </Container>
        </div>
      )}
    </header>
  )
}

export default Header;