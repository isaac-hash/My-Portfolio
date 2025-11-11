import { motion } from "framer-motion"
import Section from "./ui/section"
import { useMemo, useState } from "react"



// ————————————————————————————————
// Portfolio
// ————————————————————————————————
const allWorks = [
  { id: 1, title: "Automobile Company Ecommerce", tag: "Web", img: "src/assets/images/Screenshot 2025-11-11 180121.png" },
  { id: 2, title: "SaaS Dashboard", tag: "Web", img: "src/assets/images/Screenshot 2025-11-11 180220.png" },
  { id: 3, title: "Fashion Lookbook", tag: "Mobile", img: "src/assets/images/Screenshot 2025-11-11 125109.png" },
  { id: 4, title: "Crypto Landing", tag: "Web", img: "src/assets/images/Screenshot 2025-11-11 181715.png" },
  { id: 5, title: "Product Shots", tag: "Graphics", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop" },
  { id: 6, title: "Mobile Banking", tag: "UI/UX", img: "https://images.unsplash.com/photo-1520974735194-6cde52d6ab6c?q=80&w=1600&auto=format&fit=crop" },
  { id: 7, title: "Community Platform Rebrand", tag: "Web", img: "src/assets/images/Screenshot 2025-11-11 125021.png" },
  { id: 8, title: "NGO Landing Page", tag: "Web", img: "src/assets/images/Screenshot 2025-11-11 125119.png" },
  { id: 9, title: "Real Estate Platform", tag: "Web", img: "src/assets/images/Screenshot 2025-11-11 125127.png" },
  { id: 10, title: "Health Management WebApp", tag: "Web", img: "src/assets/images/Screenshot 2025-11-11 125138.png" },
  { id: 11, title: "SaaS Dashboard", tag: "Web", img: "https://images.unsplash.com/photo-1551281044-8a5b6735f4b8?q=80&w=1600&auto=format&fit=crop" },
  { id: 11, title: "Academic CRM", tag: "Web", img: "src/assets/images/image.png" },
]

const Portfolio = () => {
  const [filter, setFilter] = useState("All")
  const tags = useMemo(() => ["All", ...Array.from(new Set(allWorks.map((w) => w.tag)))], [])
  const works = useMemo(() => (filter === "All" ? allWorks : allWorks.filter((w) => w.tag === filter)), [filter])

  return (
    <Section id="portfolio" title="Selected Work" kicker="Portfolio">
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full border px-4 py-2 text-sm ${
              filter === t
                ? "border-indigo-600 bg-indigo-50 text-indigo-700 dark:border-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-300"
                : "border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <motion.a
            key={w.id}
            href="#"
            onClick={(e)=>e.preventDefault()}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 shadow-sm transition hover:shadow-lg dark:border-gray-800"
          >
            <img src={w.img} alt={w.title} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition group-hover:opacity-100">
              <p className="text-sm text-white/80">{w.tag}</p>
              <h3 className="text-lg font-semibold text-white">{w.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

export default Portfolio;