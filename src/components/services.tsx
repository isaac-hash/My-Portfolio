
import { motion } from "framer-motion"
import { Code2, Image, Smartphone, MonitorSmartphone } from "lucide-react"
import Section from "./ui/section"


// ————————————————————————————————
// Services
// ————————————————————————————————
const services = [
  {
    title: "Website Development",
    desc: "High‑performance, accessible, SEO‑friendly websites and apps.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, conversion‑focused interfaces with tasteful motion.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile App Development",
    desc: "Memorable brand systems that scale across touchpoints.",
    icon: Smartphone,
  },
  {
    title: "Graphics",
    desc: "Visual strategy, art direction and product imagery.",
    icon: Image,
  },
]


const Services = () => (
  <Section id="services" title="What I Do" kicker="Services">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md dark:border-gray-800"
        >
          <s.icon className="mb-3 h-6 w-6" />
          <h3 className="mb-2 font-semibold">{s.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
)

export default Services;