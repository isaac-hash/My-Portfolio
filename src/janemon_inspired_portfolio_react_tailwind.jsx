import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, Instagram, Menu, X, Sparkles, Download, Briefcase, Code2, Monitor, Image, PenTool, Youtube } from "lucide-react"

// ————————————————————————————————
// Utility components
// ————————————————————————————————
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
    <Container>
      <div className="mb-10">
        {kicker && (
          <p className="mb-2 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium tracking-wide text-gray-600 dark:bg-gray-800/60 dark:text-gray-300">
            <Sparkles className="mr-1 h-3.5 w-3.5" /> {kicker}
          </p>
        )}
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{title}</h2>
      </div>
      {children}
    </Container>
  </section>
)

const PrimaryButton = ({ href, children, onClick, className = "" }) => {
  const Cmp = href ? "a" : "button"
  return (
    <Cmp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:translate-y-[-1px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    >
      {children}
    </Cmp>
  )
}

const GhostButton = ({ href, children, onClick, className = "" }) => {
  const Cmp = href ? "a" : "button"
  return (
    <Cmp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 ${className}`}
    >
      {children}
    </Cmp>
  )
}

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

function useScrollSpy(ids, offset = 100) {
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

  const handleClick = (id) => {
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
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">J</div>
          <span>Janemon<span className="text-indigo-600">*</span></span>
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

// ————————————————————————————————
// Hero
// ————————————————————————————————
const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      <Container>
        <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-800">
              <Sparkles className="mr-1 h-3.5 w-3.5" /> Hello, I'm
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Jane <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Monroe</span>
            </h1>
            <p className="mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
              Creative Developer & UI/UX Designer crafting smooth digital experiences with tasteful motion and clean code.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <PrimaryButton href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}}>
                <Mail className="h-4 w-4" /> Hire Me
              </PrimaryButton>
              <GhostButton href="#portfolio" onClick={(e)=>{e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"})}}>
                <ArrowUpRight className="h-4 w-4" /> View Work
              </GhostButton>
              <GhostButton href="#" onClick={(e)=>e.preventDefault()}>
                <Download className="h-4 w-4" /> Download CV
              </GhostButton>
            </div>
            <div className="mt-8 flex items-center gap-5 text-gray-500">
              <a href="#" aria-label="GitHub" className="transition hover:text-gray-900 dark:hover:text-white"><Github /></a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-gray-900 dark:hover:text-white"><Linkedin /></a>
              <a href="#" aria-label="Instagram" className="transition hover:text-gray-900 dark:hover:text-white"><Instagram /></a>
              <a href="#" aria-label="YouTube" className="transition hover:text-gray-900 dark:hover:text-white"><Youtube /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop"
                alt="Portrait"
              />
            </div>
            <div className="absolute -right-8 -top-8 hidden h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/20 blur-2xl md:block" />
            <div className="absolute -bottom-10 -left-8 hidden h-40 w-40 rounded-full bg-gradient-to-tr from-violet-500/30 to-sky-500/20 blur-2xl md:block" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

// ————————————————————————————————
// About
// ————————————————————————————————
const About = () => (
  <Section id="about" title="About Me" kicker="Who I Am">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          I'm a multidisciplinary developer & designer with 7+ years crafting delightful web apps and brands. I blend solid engineering with visual polish and interaction design to ship products people love.
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">From</p>
            <p className="font-medium">Lagos, Nigeria</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">Experience</p>
            <p className="font-medium">7+ Years</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">Freelance</p>
            <p className="font-medium">Available</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-gray-500">Email</p>
            <p className="font-medium">hello@janemon.dev</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Web Dev", icon: Code2 },
          { label: "Branding", icon: PenTool },
          { label: "UI/UX", icon: Monitor },
          { label: "Graphics", icon: Image },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
)

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
    icon: Monitor,
  },
  {
    title: "Brand Identity",
    desc: "Memorable brand systems that scale across touchpoints.",
    icon: PenTool,
  },
  {
    title: "Creative Direction",
    desc: "Visual strategy, art direction and product storytelling.",
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

// ————————————————————————————————
// Portfolio
// ————————————————————————————————
const allWorks = [
  { id: 1, title: "SaaS Dashboard", tag: "Web", img: "https://images.unsplash.com/photo-1551281044-8a5b6735f4b8?q=80&w=1600&auto=format&fit=crop" },
  { id: 2, title: "Fashion Lookbook", tag: "Branding", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop" },
  { id: 3, title: "Crypto Landing", tag: "Web", img: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop" },
  { id: 4, title: "Product Shots", tag: "Graphics", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop" },
  { id: 5, title: "Mobile Banking", tag: "UI/UX", img: "https://images.unsplash.com/photo-1520974735194-6cde52d6ab6c?q=80&w=1600&auto=format&fit=crop" },
  { id: 6, title: "Studio Rebrand", tag: "Branding", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop" },
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

// ————————————————————————————————
// Resume
// ————————————————————————————————
const experience = [
  { role: "Senior Product Designer", company: "Nebula Labs", period: "2022 — Present", desc: "Leading design for a multi‑platform fintech suite." },
  { role: "Frontend Engineer", company: "Cirrus", period: "2020 — 2022", desc: "Built component libraries and design systems." },
  { role: "UI/UX Designer", company: "PixelPoint", period: "2018 — 2020", desc: "Shipped client sites and e‑commerce redesigns." },
]

const education = [
  { role: "B.Sc. Computer Science", company: "UNILAG", period: "2013 — 2017", desc: "Software engineering & HCI focus." },
]

const Resume = () => (
  <Section id="resume" title="Resume" kicker="Experience & Education">
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Experience</h3>
        <ol className="relative border-l border-gray-200 dark:border-gray-800">
          {experience.map((e, i) => (
            <li key={i} className="mb-8 ml-6">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-indigo-600 dark:border-gray-900" />
              <h4 className="font-medium">{e.role} · <span className="text-gray-500">{e.company}</span></h4>
              <p className="text-sm text-gray-500">{e.period}</p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{e.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Education</h3>
        <ol className="relative border-l border-gray-200 dark:border-gray-800">
          {education.map((e, i) => (
            <li key={i} className="mb-8 ml-6">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-violet-600 dark:border-gray-900" />
              <h4 className="font-medium">{e.role} · <span className="text-gray-500">{e.company}</span></h4>
              <p className="text-sm text-gray-500">{e.period}</p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{e.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Section>
)

// ————————————————————————————————
// Testimonials
// ————————————————————————————————
const testimonials = [
  {
    quote:
      "Jane elevated our product with a rare blend of design taste and engineering rigor. The outcome exceeded expectations.",
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

// ————————————————————————————————
// Blog
// ————————————————————————————————
const posts = [
  {
    title: "Designing for Delight",
    excerpt: "Micro‑interactions that make users smile without slowing them down.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Accessible by Default",
    excerpt: "Why a11y isn’t optional—and practical steps to ship it.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Motion as Meaning",
    excerpt: "Using animation to communicate hierarchy and intent.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop",
  },
]

const Blog = () => (
  <Section id="blog" title="From the Journal" kicker="Blog">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <a key={p.title} href="#" onClick={(e)=>e.preventDefault()} className="group rounded-3xl border border-gray-200 shadow-sm transition hover:shadow-md dark:border-gray-800">
          <div className="overflow-hidden rounded-t-3xl">
            <img src={p.img} alt={p.title} className="h-44 w-full object-cover transition duration-300 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <h3 className="mb-1 font-semibold group-hover:text-indigo-600">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.excerpt}</p>
          </div>
        </a>
      ))}
    </div>
  </Section>
)

// ————————————————————————————————
// Contact
// ————————————————————————————————
const Contact = () => (
  <Section id="contact" title="Let’s Work Together" kicker="Contact">
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 lg:col-span-2">
        <h3 className="mb-3 text-lg font-semibold">Contact Info</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@janemon.dev</li>
          <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +234 (000) 000 0000</li>
          <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Lagos, Nigeria</li>
        </ul>
        <div className="mt-5 flex gap-3">
          <a href="#" aria-label="GitHub" className="rounded-xl border px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"><Github className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="rounded-xl border px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"><Linkedin className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="rounded-xl border px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-gray-200 p-6 dark:border-gray-800 lg:col-span-3">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Name</label>
            <input required className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input type="email" required className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Subject</label>
            <input className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-gray-600 dark:text-gray-300">Message</label>
            <textarea rows={5} className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-gray-700 dark:bg-gray-900" />
          </div>
        </div>
        <div className="mt-4">
          <PrimaryButton>
            <Mail className="h-4 w-4" /> Send Message
          </PrimaryButton>
        </div>
      </form>
    </div>
  </Section>
)

// ————————————————————————————————
// Footer
// ————————————————————————————————
const Footer = () => (
  <footer className="border-t border-gray-200 py-10 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
    <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p>© {new Date().getFullYear()} Janemon. All rights reserved.</p>
      <div className="flex flex-wrap items-center gap-5">
        <a href="#home" onClick={(e)=>{e.preventDefault(); document.getElementById("home")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">Home</a>
        <a href="#about" onClick={(e)=>{e.preventDefault(); document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">About</a>
        <a href="#portfolio" onClick={(e)=>{e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">Portfolio</a>
        <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}} className="hover:text-gray-900 dark:hover:text-white">Contact</a>
      </div>
    </Container>
  </footer>
)

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

// ————————————————————————————————
// App
// ————————————————————————————————
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
