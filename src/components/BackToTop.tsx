import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"


// ————————————————————————————————
// Back to top button
// ————————————————————————————————
const BackToTop = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUpRight className="h-5 w-5 rotate-[-45deg]" />
    </button>
  )
}

export default BackToTop;