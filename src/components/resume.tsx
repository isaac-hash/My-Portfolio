import Section from "./ui/section"

// ————————————————————————————————
// Resume
// ————————————————————————————————
const experience = [
  { role: "Fullstack Engineer", company: "Makara Social Hub", period: "2025", desc: "Developed A social media markiting platform to boost client social media presence." },
  { role: "Frontend Engineer", company: "Bernode Hub", period: "2024 — 2025", desc: "Built component libraries and design systems." },
  { role: "Fullstack Engineer", company: "Starnet Limited", period: "2023 — 2024", desc: "Developed responsive web applications for clients." },
  { role: "Senior Product Designer", company: "Nebula Labs", period: "2022 — 2023", desc: "Leading design for a multi‑platform fintech suite." },
  { role: "UI/UX Designer", company: "PixelPoint", period: "2018 — 2020", desc: "Shipped client sites and e‑commerce redesigns." },
]

const education = [
  { role: "M.Eng. Electrical Electronics Engineering", company: "Afe Babalola University", period: "2023 — 2025", desc: "Power engineering, Smart Grid, Machine learning and Automation focus." },
  { role: "B.Eng. Electrical Electronics Engineering", company: "Afe Babalola University", period: "2017 — 2022", desc: "Power engineering & Automation focus." },
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

export default Resume;