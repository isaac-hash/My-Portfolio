import { motion } from "framer-motion"
import Section from "./ui/section"

// ————————————————————————————————
// Testimonials
// ————————————————————————————————
const testimonials = [
  {
    quote:
      "Isaac elevated our product with a rare blend of design taste and engineering rigor. The outcome exceeded expectations.",
    name: "Amina Yusuf",
    title: "Founder, Nebula Labs",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote:
      "Our conversion rates jumped 28% after her redesign. Communication and delivery were flawless.",
    name: "David Chen",
    title: "CEO, Cirrus",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
]

const Testimonials = () => (
  <Section id="testimonials" title="Client Love" kicker="Testimonials">
    <div className="grid gap-6 lg:grid-cols-2">
      {testimonials.map((t, i) => (
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-gray-200 p-6 shadow-sm dark:border-gray-800"
        >
          <p className="text-gray-700 dark:text-gray-300">“{t.quote}”</p>
          <div className="mt-4 flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-gray-500">{t.title}</p>
            </div>
          </div>
        </motion.blockquote>
      ))}
    </div>
  </Section>
)

export default Testimonials